'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { CloudUploadIcon, Loader2Icon, WandSparkles, X } from 'lucide-react'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '@/configs/firebaseConfig'
import axios from 'axios'
import { v4 as uuid4 } from 'uuid'
import { useAuthContext } from '@/app/provider'
import { useRouter } from 'next/navigation'
import Constants from '@/data/Constants'

function ImageUpload() {

    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [file, setFile] = useState<any>();
    const [model, setModel] = useState<string>();
    const [description, setDescription] = useState<string>();
    const { user } = useAuthContext();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const OnImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            console.log(files[0])
            const imageUrl = URL.createObjectURL(files[0])
            setFile(files[0]);
            setPreviewUrl(imageUrl)
        }
    }

    const OnConvertToCodeButtonClick = async () => {
        if (!file || !model || !description) {
            console.log('Please fill all the fields');
            return;
        }
        setLoading(true);

        const fileName = Date.now() + '.png';
        const imageRef = ref(storage, "Wireframe_To_Code_Project/" + fileName);
        await uploadBytes(imageRef, file).then(resp => {
            console.log('Image Uploaded Successfully')
        });
        const imageUrl = await getDownloadURL(imageRef);
        console.log(imageUrl);

        const uid = uuid4();

        const result = await axios.post('/api/wireframe-to-code', {
            uid: uid,
            description: description,
            imageUrl: imageUrl,
            model: model,
            email: user?.email
        });
        console.log(result.data);
        setLoading(false);
        router.push('/view-code/' + uid);
    }

    return (
        <div className='mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {!previewUrl ? (
                    <div className='p-7 border border-dashed rounded-md shadow-md flex flex-col items-center justify-center'>
                        <CloudUploadIcon className='h-10 w-10' />
                        <h2 className='font-bold text-lg '>Upload Image</h2>
                        <p className='text-gray-400 mt-3'>Select Wireframe Image</p>
                        <div className='p-5 border border-dashed w-full flex mt-7 justify-center'>
                            <label htmlFor='imageSelect'>
                                <h2 className='p-2 text-white rounded-md px-3 cursor-pointer bg-blue-600 hover:bg-blue-700'>
                                    Select Image
                                </h2>
                            </label>
                        </div>
                        <input 
                            type="file" 
                            id='imageSelect' 
                            className='hidden'
                            multiple={false}
                            onChange={OnImageSelect} 
                        />
                    </div>
                ) : (
                    <div className='p-5 border border-dashed'>
                        <Image src={previewUrl} alt='preview' width={500} height={500}
                            className='w-full h-[300px] object-contain' />
                        <X className='flex justify-end w-full cursor-pointer'
                            onClick={() => setPreviewUrl(null)} />
                    </div>
                )}
                
                <div className='p-7 border shadow-md rounded-lg'>
                    <h2 className='font-bold text-lg'>Select AI Model</h2>
                    <Select onValueChange={(value) => setModel(value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select AI Model" />
                        </SelectTrigger>
                        <SelectContent>
                            {Constants.AiModelList.map((model, index) => (
                                <SelectItem 
                                    key={model.name || index} 
                                    value={model.name} 
                                    disabled={model.name === "llama By Meta" || model.name === "Deepseek"}
                                    className={model.name === "llama By Meta" || model.name === "Deepseek" ? "text-gray-400 cursor-not-allowed" : ""}
                                >
                                    <div className="flex items-center gap-2">
                                        <Image src={model.icon} alt={model.name} width={25} height={25} />
                                        <h2 className={model.name === "llama By Meta" || model.name === "Deepseek" ? "text-gray-400" : ""}>
                                            {model.name}
                                        </h2>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <h2 className='font-bold text-lg mt-7'>Enter Description about your web page</h2>
                    <Textarea
                        onChange={(event) => setDescription(event?.target.value)}
                        className='mt-3 h-[200px]' 
                        placeholder='Write about your web page' 
                    />
                </div>
            </div>

            <div className='mt-10 flex items-center justify-center font-bold '>
                <Button 
                    className='bg-blue-600 hover:bg-blue-700 text-white' 
                    onClick={OnConvertToCodeButtonClick} 
                    disabled={loading}
                >
                    {loading ? <Loader2Icon className='animate-spin' /> : <WandSparkles />}
                    Convert to Code
                </Button>
            </div>
        </div>
    )
}

export default ImageUpload

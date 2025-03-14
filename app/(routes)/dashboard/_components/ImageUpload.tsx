'use client'

import { Button } from '@/components/ui/button'
import { CloudUploadIcon, X } from 'lucide-react'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'

function ImageUpload() {

    const [previewUrl, setPreviewUrl]=useState<string|null>(null)

    const OnImageSelect=(event:ChangeEvent<HTMLInputElement>)=>{
        const files=event.target.files;
        if(files)
        {
            console.log(files[0])
            const imageUrl=URL.createObjectURL(files[0])
            setPreviewUrl(imageUrl)
        }
    }
  return (
    <div className='mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {!previewUrl? <div className='p-7 border border-dashed rounded-md shadow-md flex flex-col items-center justify-center'>
                <CloudUploadIcon className='h-10 w-10' />
                <h2 className='font-bold text-lg'>Upload Image</h2>

                <p className='text-gray-400 mt-3'>Select Wireframe Image</p>
                <div className='p-5 border border-dashed w-full flex mt-7 justify-center'>
                    <label htmlFor='imageSelect'>
                        <h2 className='p-2 bg-primary text-white rounded-md px-3 cursor-pointer'>
                            Select Image
                        </h2>
                    </label>
                    
                </div>
                <input type="file" id='imageSelect' className='hidden' 
                multiple={false}
                onChange={OnImageSelect} />
            </div>:
            <div className='p-5 border border-dashed'>
                <Image src={previewUrl} alt='preview' width={500} height={500} 
                className='w-full h-[300px] object-contain' />
                
                <X className='flex justify-end w-full cursor-pointer' 
                onClick={()=>setPreviewUrl(null)} />

            </div>
}
            <div>
                User Input Text Area
            </div>
        </div>
    </div>
  )
}

export default ImageUpload
import { Button } from '@/components/ui/button'
import { CloudUploadIcon } from 'lucide-react'
import React from 'react'

function ImageUpload() {
  return (
    <div className='mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='p-7 border border-dashed rounded-md shadow-md flex flex-col items-center justify-center'>
                <CloudUploadIcon className='h-10 w-10' />
                <h2 className='font-bold text-lg'>Upload Image</h2>

                <p className='text-gray-400 mt-3'>Select Wireframe Image</p>
                <div className='p-5 border border-dashed w-full flex mt-7 justify-center'>
                    <Button>
                        Select Image
                    </Button>
                </div>
            </div>
            <div>
                User Input Text Area
            </div>
        </div>
    </div>
  )
}

export default ImageUpload
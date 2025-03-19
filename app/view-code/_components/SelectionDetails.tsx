import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import React from 'react'
// import { RECORD } from '../[uid]/page'

function SelectionDetails({record}: any) {
  return record && (
    <div className='p-5 bg-gray-100 h-[80vh] rounded-lg'>
        <h2 className='font-bold my-2'>Wireframe</h2>
        <Image src={record?.imageUrl} alt='Wireframe' width={300} height={400}
        className='rounded-lg object-contain h-[200px] w-full border border-dashed p-2 bg-white'
        
        />

        <h2 className='font-bold mt-4 mb-2'>AI Model</h2>
        <Input defaultValue={record?.model} disabled={true} className='bg-whte' />

        <h2 className='font-bold mt-4 mb-2'>Description</h2>
        <Textarea defaultValue={record?.description} disabled={true} className='bg-whte h-[180px]'  />
    </div>
  )
}

export default SelectionDetails
"use client"

import axios from 'axios'
import { LoaderCircle } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface RECOARD{
    id:number;
    description:string;
    code:any;
    imageUrl:string;
    model:string;
    createdBy:string;
}

function ViewCode() {

    const {uid}=useParams();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        uid && GetRecordInfo();
    }, [uid])

    const GetRecordInfo=async()=>{
        setLoading(true);
        const result=await axios.get('/api/wireframe-to-code?uid='+uid);
        console.log(result.data);
        const resp=result?.data;
        if(resp?.code==null){
            GenerateCode(resp);
        }
        if(resp?.error)
        {
            console.log("No Record Found");
        }
        setLoading(false);
    }
    
    const GenerateCode=async(record:RECOARD)=>{
        setLoading(true);
        const res=await fetch('/api/ai-model', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: record?.model,
                description: record?.description,
                imageUrl: record?.imageUrl
            }),
        });

        if(!res.body){
            console.log('No Response');
            return;
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        while(true)
        {
            const { done, value } = await reader.read();
            if(done){
                break;
            }
            
            const text = (decoder.decode(value));
            console.log(text);
        }
        setLoading(false);

    }

  return (
    <div>ViewCode
        {loading && <LoaderCircle className='animate-spin' />}
    </div>
  )
}

export default ViewCode
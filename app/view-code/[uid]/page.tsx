"use client"

import axios from 'axios'
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

function ViewCode() {

    const {uid}=useParams();

    useEffect(()=>{
        uid && GetRecordInfo();
    }, [uid])

    const GetRecordInfo=async()=>{
        const result=await axios.get('/api/wireframe-to-code?uid='+uid);
        console.log(result.data);
        const resp=result?.data;
        if(resp?.code==null){
            GenerateCode();
        }
        if(resp?.error)
        {
            console.log("No Record Found");
        }
    }
    
    const GenerateCode=()=>{

    }

  return (
    <div>ViewCode</div>
  )
}

export default ViewCode
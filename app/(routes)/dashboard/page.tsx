import React from 'react'
import ImageUpload from './_components/ImageUpload'
import ProtectedRoute from '@/components/ProtectedRoute' // Import ProtectedRoute

function Dashboard() {
    return (
        <ProtectedRoute> {/* Wrap content inside ProtectedRoute */}
            <div className='xl:px-20'>
                <h2 className='font-bold text-3xl'>Convert Wireframe to Code</h2>
                <ImageUpload />
            </div>
        </ProtectedRoute>
    )
}

export default Dashboard

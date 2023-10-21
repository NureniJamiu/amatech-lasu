import React from 'react'

import { columns } from "./columns"
import { DataTable } from "./data-table"
import { posts } from '../../_mock-db'
import { Button } from '@/components/ui/button'



const Posts = () => {
    return (
        <div className="">
            <div className='flex items-center justify-between'>
                <p className='text-green-600 my-5 text-xl md:text-2xl font-semibold pl-2'>Posts</p>
                <Button className='btn-gradient rounded'>Add Post</Button>
            </div>
            <DataTable columns={columns} data={posts} />
        </div>
    )
}

export default Posts
import React from 'react'

import { columns } from "../members/columns"
import { DataTable } from "./data-table"
import { members } from '../../_mock-db'
import { Button } from '@/components/ui/button'



const Members = () => {
    return (
        <div className="">
            <div className='flex items-center justify-between'>
                <p className='text-green-600 my-5 text-2xl font-semibold pl-2'>Members</p>
                <Button className='btn-gradient rounded'>Add Member</Button>
            </div>
            <DataTable columns={columns} data={members} />
        </div>
    )
}

export default Members
import React from 'react'

import { columns } from "../members/columns"
import { DataTable } from "./data-table"
import { members } from '../../_mock-db'
import { Button } from '@/components/ui/button'



const Members = () => {
    return (
        <div className="">
            <div className='flex items-center justify-between px-3'>
                <p className='text-green-600 my-5 text-lg md:text-2xl font-semibold md:pl-2'>Members</p>
                <Button className='btn-gradient rounded'>Add Member</Button>

            </div>
            <DataTable columns={columns} data={members} />
        </div>
    )
}

export default Members
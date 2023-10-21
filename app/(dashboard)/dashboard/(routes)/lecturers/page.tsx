import React from 'react'

import { columns } from "../lecturers/columns"
import { DataTable } from "./data-table"
import { lecturers } from '../../_mock-db'
import { Button } from '@/components/ui/button'



const Lecturers = () => {
    return (
        <div className="">
            <div className='flex items-center justify-between'>
                <p className='text-green-600 my-5 text-2xl font-semibold pl-2'>Lecturers</p>
                <Button className='btn-gradient rounded'>Add Lecturer</Button>
            </div>
            <DataTable columns={columns} data={lecturers} />
        </div>
    )
}

export default Lecturers
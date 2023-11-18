"use client"

import React, { useEffect, useState } from 'react'

import { columns } from "../lecturers/columns"
import { DataTable } from "./data-table"
// import { lecturers } from '../../_mock-db'
import { Button } from '@/components/ui/button'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import AddLecturer from '../../_components/AddLecturer'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'


const Lecturers = () => {
    const [lecturers, setLecturers] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("/api/lecturer");
            if (response?.data?.status === 200) {
                setLecturers(response?.data?.lecturers);
            } else {
                setLecturers([])
            }
        }
        fetchData();
    }, [lecturers]);

    return (
        <div className="">
            <div className='flex items-center justify-between'>
                <p className='text-green-600 my-5 text-xl md:text-2xl font-semibold pl-2'>Lecturers</p>
                <div>
                    <Dialog>
                        <DialogTrigger className="w-full">
                            <Button className='btn-gradient rounded py-5'>Add Lecturer</Button>
                        </DialogTrigger>

                        <DialogContent className="bg-white rounded-xl">
                            <DialogHeader>
                                <DialogTitle>Add Lecturer</DialogTitle>
                                <DialogDescription>
                                    Click the submit button when done.
                                </DialogDescription>
                            </DialogHeader>

                            <AddLecturer />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <DataTable columns={columns} data={lecturers} />
            <Toaster />
        </div>
    )
}

export default Lecturers
import React from 'react'

import { columns } from "../members/columns"
import { DataTable } from "./data-table"
import { executiveMembers, legislativeMembers } from '../../_mock-db'
import { Button } from '@/components/ui/button'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import AddMember from '../../_components/AddMember'


const tabStyle = `'bg-gray-400 px-2 text-sm md:text-base py-3 leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-green-500 data-[state=active]:text-green-600 data-[state=active]:border-b data-[state=active]:border-b-green-600 cursor-pointer`

const Members = () => {
    return (
        <div className="">
            <div className='flex items-center justify-between px-3'>
                <p className='text-green-600 my-5 text-xl md:text-2xl font-semibold md:pl-2'>Members</p>
                <div>
                    <Dialog>
                        <DialogTrigger className="w-full">
                            <Button className='btn-gradient rounded'>Add Member</Button>
                        </DialogTrigger>

                        <DialogContent className="bg-white rounded-xl">
                            <DialogHeader>
                                <DialogTitle>Add Member</DialogTitle>
                                <DialogDescription>
                                    Click the submit button when done.
                                </DialogDescription>
                            </DialogHeader>

                            <AddMember />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <Tabs defaultValue="account" className="">
                <TabsList className='space-x-2 w-full'>
                    <TabsTrigger value="executive" className={`${tabStyle}`}>Executive Members</TabsTrigger>
                    <TabsTrigger value="legislative" className={`${tabStyle}`}>Legislative Members</TabsTrigger>
                </TabsList>
                <TabsContent value="executive">
                    <DataTable columns={columns} data={executiveMembers} />
                </TabsContent>
                <TabsContent value="legislative">
                    <DataTable columns={columns} data={legislativeMembers} />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Members
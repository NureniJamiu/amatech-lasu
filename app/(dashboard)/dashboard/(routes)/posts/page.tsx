"use client"

import React, { useEffect, useState } from 'react'

import { columns } from "./columns"
import { DataTable } from "./data-table"
// import { posts } from '../../_mock-db'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'

import AddPost from '../../_components/AddPost'
import axios from 'axios'



const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("/api/posts");
            console.log(response)
            if (response?.data?.status === 200) {
                setPosts(response?.data?.posts);
            } else {
                setPosts([])
            }
        }
        fetchData();
    }, [posts]);

    return (
        <div className="">
            <div className='flex items-center justify-between'>
                <p className='text-green-600 my-5 text-xl md:text-2xl font-semibold pl-2'>Posts</p>
                <div>
                    <Dialog>
                        <DialogTrigger className="w-full">
                            <Button className='btn-gradient rounded'>Add Post</Button>
                        </DialogTrigger>

                        <DialogContent className="bg-white rounded-xl">
                            <DialogHeader>
                                <DialogTitle>Add Post</DialogTitle>
                                <DialogDescription>
                                    Click the submit button when done.
                                </DialogDescription>
                            </DialogHeader>

                            <AddPost />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <DataTable columns={columns} data={posts || []} />
        </div>
    )
}

export default Posts
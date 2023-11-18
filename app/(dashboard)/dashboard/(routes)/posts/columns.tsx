"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Delete, Edit, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import toast, { Toaster } from "react-hot-toast"


import EditPost from "../../_components/EditPost"
import Image from "next/image"
import axios from "axios"

type Post = {
    _id: string
    title: string
    category: string
    content: string
    image: string
}

const iconStyle = `text-sm flex items-center gap-2 w-full p-1 rounded cursor-pointer`


const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting post, please wait...")
    try {
        const { data } = await axios.delete(`/api/posts/delete/${id}`);
        toast.dismiss(toastId)
        if (data.status !== 200) {
            toast.error(data.message)
        } else {
            toast.success(data.message)
        }
    } catch (error) {
        // console.log(error)
        toast.dismiss(toastId)
        toast.error("Something went wrong.")
    }
};

export const columns: ColumnDef<Post>[] = [
    {
        accessorKey: "image",
        header: "Image",
        cell: ({ row }) => {
            const { original } = row
            return (
                <div className="relative w-10 h-10 bg-green-500 rounded-full">
                    <Image src={original.image} alt="post image" fill className="rounded-full absolute shadow" />
                </div>
            )
        }
    },
    {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => {
            const { original } = row
            return <p className="line-clamp-2">{original.title}</p>
        }
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "content",
        header: "Post",
        cell: ({ row }) => {
            const { original } = row
            return <p className="line-clamp-2" dangerouslySetInnerHTML={{ __html: original.content }}></p>
        }
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const post = row.original

            return (
                <Dialog >
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="bg-white rounded">
                            <DialogTrigger className="w-full">
                                <DropdownMenuItem
                                >
                                    <p className={`${iconStyle} hover:bg-green-200 hover:text-green-700`}><Edit size={15} />Edit</p>
                                </DropdownMenuItem>
                            </DialogTrigger>

                            <DropdownMenuItem>
                                <p className={`${iconStyle} hover:bg-red-100 hover:text-red-600`} onClick={() => handleDelete(post?._id)}><Delete size={15} /> Delete </p>
                            </DropdownMenuItem>
                        </DropdownMenuContent>

                        <DialogContent className="bg-white rounded-xl">
                            <DialogHeader>
                                <DialogTitle>Edit Lecturer</DialogTitle>
                                <DialogDescription>
                                    Click the submit button when done.
                                </DialogDescription>
                            </DialogHeader>

                            <EditPost post={post} />
                        </DialogContent>
                    </DropdownMenu>
                </Dialog>
            )
        },
    },
]

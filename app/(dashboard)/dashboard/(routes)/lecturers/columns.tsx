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
import EditLecturer from "../../_components/EditLecturer"
import Image from "next/image"

type Lecturer = {
    id: string
    title: string
    firstname: string
    lastname: string
    email: string
    phone: number
    image: string
}

const iconStyle = `text-sm flex items-center gap-2 w-full p-1 rounded cursor-pointer`

export const columns: ColumnDef<Lecturer>[] = [
    {
        accessorKey: "image",
        header: "Image",
        cell: ({ row }) => {
            const { original } = row
            return <Image src={original.image} alt="post image" width={30} height={30} className="rounded-full shadow" />
        }
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "firstname",
        header: "Firstname",
    },
    {
        accessorKey: "lastname",
        header: "Lastname",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const lecturer = row.original

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
                                <p className={`${iconStyle} hover:bg-red-100 hover:text-red-600`}><Delete size={15} /> Delete </p>
                            </DropdownMenuItem>
                        </DropdownMenuContent>

                        <DialogContent className="bg-white rounded-xl">
                            <DialogHeader>
                                <DialogTitle>Edit Lecturer</DialogTitle>
                                <DialogDescription>
                                    Click the submit button when done.
                                </DialogDescription>
                            </DialogHeader>

                            <EditLecturer lecturer={lecturer} />
                        </DialogContent>
                    </DropdownMenu>
                </Dialog>
            )
        },
    },
]

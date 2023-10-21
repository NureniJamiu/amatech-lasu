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
import EditMember from "../../_components/EditMember"

type Member = {
    id: string
    firstname: string
    lastname: string
    membership: string
    role: string
    email: string
    phone: number
    level: string
    linkedin: string
    twitter: string
    bio: string
    image: string
}

const iconStyle = `text-sm flex items-center gap-2 w-full p-1 rounded cursor-pointer`

export const columns: ColumnDef<Member>[] = [
    {
        accessorKey: "image",
        header: "Image",
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
        accessorKey: "role",
        header: "Role",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "level",
        header: "Level",
    },

    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const member = row.original

            return (
                <Dialog >
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menuu</span>
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

                            <EditMember member={member} />
                        </DialogContent>
                    </DropdownMenu>
                </Dialog>
            )
        },
    },
]

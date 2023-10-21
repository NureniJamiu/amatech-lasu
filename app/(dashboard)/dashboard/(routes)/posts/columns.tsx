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

type Post = {
    id: string
    title: string
    category: string
    content: string
    image?: string
}

const iconStyle = `text-sm flex items-center gap-2 w-full p-1 rounded cursor-pointer`

export const columns: ColumnDef<Post>[] = [
    {
        accessorKey: "image",
        header: "Image",
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
            return <p className="line-clamp-2">{original.content}</p>
        }
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const post = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white">
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(post.id)}
                        >
                            <p className={`${iconStyle} hover:bg-green-200 hover:text-green-700`}><Edit size={15} />Edit</p>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <p className={`${iconStyle} hover:bg-red-100 hover:text-red-600`}><Delete size={15} /> Delete </p></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

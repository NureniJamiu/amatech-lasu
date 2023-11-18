import Blog from "@/models/postModel"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function DELETE(
    req: Request, {params}: {params: {postId: string}}
) {
    try {
        const {userId} = auth()
        const {postId} = params

        if (!userId) {
            return NextResponse.json({
                message: "Unauthorized",
                status: 401
            })
        }

        const post = await Blog.findByIdAndDelete(postId)

        return NextResponse.json({
            message: "Post deleted successfully!",
            status: 200
        })
        
    } catch (error) {
        // console.log(error)
        return NextResponse.json({
            message: "Something went wrong",
            status: 500
        })
    }
}
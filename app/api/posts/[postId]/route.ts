import Blog from "@/models/postModel"
import { NextResponse } from "next/server"

export async function GET(
    req: Request, {params}: {params: {postId: string}}
) {
    try {
        const {postId} = params
    // console.log("POSTID", postId);


        const post = await Blog.findById(postId)

    // console.log("POST", post);
        

        return NextResponse.json({
            post,
            status: 200,
        })
        
    } catch (error) {
        // console.log(error)
        return NextResponse.json({
            message: "Something went wrong",
            status: 500
        })
    }
}
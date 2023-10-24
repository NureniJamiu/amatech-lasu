import mongoose from "mongoose";
// import Blog from "@/models/postModel";
import { NextRequest, NextResponse } from "next/server";
import { clerkClient } from '@clerk/nextjs';
import { connect } from "@/db";
import { auth } from "@clerk/nextjs";
import { generateImageUrl } from "@/helpers";
import Blog from "@/models/postModel";
// import { connect } from "@/db/config";

connect();

export async function POST(req: NextRequest) {
    try {
        const {userId}= auth()
        // const { title, slug, category, content } = request;
        const {title, category, content, image, author} = await req.json();

        if ( !userId ) {
            return new NextResponse("Unauthorized", {status: 401});
        }

        console.log("REQUEST DATA", title, category, content, image, author)


        const post = new Blog({
        title,
        category,
        content,
        image,
        author
        });
        
        // console.log("POST", post)
        const response = await post.save();


        return NextResponse.json({
        message: "Post created successfully!",
        status: 201,
    });
  } catch (err) {
    console.log(err)
    return NextResponse.json({
        message: "Something went wrong", status: 500
    })
  }
}

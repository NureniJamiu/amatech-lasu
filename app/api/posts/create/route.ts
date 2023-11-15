import mongoose from "mongoose";

import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

import { connect } from "@/db";

import Blog from "@/models/postModel";

connect();

export async function POST(req: NextRequest) {
    try {
        const {userId}= auth()
        const {title, category, content, image, author} = await req.json();

        if ( !userId ) {
            return new NextResponse("Unauthorized", {status: 401});
        }

        const post = new Blog({
        title,
        category,
        content,
        image,
        author
        });
        
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

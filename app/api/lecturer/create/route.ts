import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/db";
import { auth } from "@clerk/nextjs";
// import { generateImageUrl } from "@/helpers";
import Lecturer from "@/models/lecturerModel";

connect();

export async function POST(req: NextRequest) {
  console.log("REQUEST", req)
    try {
        const {userId}= auth()
        const {title, firstname, lastname, email, phone, image, bio, createdBy} = await req.json();

        if ( !userId ) {
            return new NextResponse("Unauthorized", {status: 401});
        }

        const lecturer = new Lecturer({
        title,
        firstname,
        lastname,
        email,
        phone,
        image,
        bio,
        createdBy
        });
        
        // console.log("POST", post)
        const response = await lecturer.save();


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

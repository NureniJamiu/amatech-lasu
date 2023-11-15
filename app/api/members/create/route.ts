import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/db";
import { auth } from "@clerk/nextjs";
// import { generateImageUrl } from "@/helpers";
import ExecutiveMember from "@/models/executiveMemberModel";
import LegislativeMember from "@/models/legislativeMemberModel";

connect();

export async function POST(req: NextRequest) {
    try {
        const {userId}= auth()
        const data = await req.json();
        
        if ( !userId ) {
            return NextResponse.json({
                message: "Unauthorized",
                status: 401,
            });
        }

        let member

        if (data.membership === "executive") {
            member = new ExecutiveMember(data)
        }else if(data.membership === "legislative") {
            member = new LegislativeMember(data)
        }

        const response = await member.save();

        return NextResponse.json({
        message: "Member created successfully!",
        status: 201,
        response,
    });
  } catch (err) {
    console.log(err)
    return NextResponse.json({
        message: "Something went wrong creating new member", status: 500
    })
  }
}

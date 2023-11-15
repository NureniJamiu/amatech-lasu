import mongoose from "mongoose";

import Blog from "@/models/postModel";

import { connect } from "@/db";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest) {
    try {
        const posts = await Blog.find().sort({ createdAt: -1 });

        return NextResponse.json({
            posts,
            status: 200,
        });
      } catch (error) {
        return NextResponse.json({
            message: "Something went wrong", status: 500
        })
    }
}
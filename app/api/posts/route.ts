import mongoose from "mongoose";

import Blog from "@/models/postModel";

import { connect } from "@/db";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest) {
    try {

        // let limit = parseInt(req.nextUrl.searchParams.get("limit") || "0", 10)

        // const postsQuery = limit && limit > 0 ? Blog.find().sort({ createdAt: -1 }).limit(limit) : Blog.find().sort({ createdAt: -1 });


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
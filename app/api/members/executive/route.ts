import mongoose from "mongoose";

import { connect } from "@/db";
import { NextRequest, NextResponse } from "next/server";

import ExecutiveMember from "@/models/executiveMemberModel";

connect();

export async function GET(req: NextRequest) {
    try {
        const executives = await ExecutiveMember.find().sort({ createdAt: -1 });

        return NextResponse.json({
            executives,
            status: 200,
        });
      } catch (error) {
        return NextResponse.json({
            message: "Something went wrong", status: 500
        })
    }
}
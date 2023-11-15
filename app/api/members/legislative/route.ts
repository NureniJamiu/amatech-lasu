import mongoose from "mongoose";

import { connect } from "@/db";
import { NextRequest, NextResponse } from "next/server";

import LegislativeMember from "@/models/legislativeMemberModel";

connect();

export async function GET(req: NextRequest) {
    try {
        const legislatives = await LegislativeMember.find().sort({ createdAt: -1 });

        return NextResponse.json({
            legislatives,
            status: 200,
        });
      } catch (error) {
        return NextResponse.json({
            message: "Something went wrong", status: 500
        })
    }
}
import mongoose from "mongoose";

import { connect } from "@/db";
import { NextRequest, NextResponse } from "next/server";

import Lecturer from "@/models/lecturerModel";

connect();

export async function GET(req: NextRequest) {
  try {
    const lecturers = await Lecturer.find();

    return NextResponse.json({
      lecturers,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong",
      status: 500,
    });
  }
}

import { NextRequest, NextResponse } from "next/server";

import { connect } from "@/db";

import Blog from "@/models/postModel";
import Lecturer from "@/models/lecturerModel";
import ExecutiveMember from "@/models/executiveMemberModel";
import LegislativeMember from "@/models/legislativeMemberModel";

connect();

export async function GET(req: NextRequest) {
    try {
        const posts = await Blog.countDocuments();
        const lecturers = await Lecturer.countDocuments()
        const executiveMembers = await ExecutiveMember.countDocuments()
        const legislativeMembers = await LegislativeMember.countDocuments()

        const count = {posts, lecturers,executiveMembers, legislativeMembers}

        return NextResponse.json({
            count,
            status: 200,
        });
    } catch (error) {
        return NextResponse.json({
            message: "Something went wrong",
            status: 500,
        });
    }
}

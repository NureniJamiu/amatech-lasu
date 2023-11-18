import Lecturer from "@/models/lecturerModel"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function DELETE(
    req: Request, {params}: {params: {lecturerId: string}}
) {
    try {
        const {userId} = auth()
        const {lecturerId} = params

        if (!userId) {
            return NextResponse.json({
                message: "Unauthorized",
                status: 401
            })
        }

        const lecturer = await Lecturer.findByIdAndDelete(lecturerId)

        return NextResponse.json({
            message: "Lecturer deleted successfully!",
            status: 200
        })
        
    } catch (error) {
        // console.log(error)
        return NextResponse.json({
            message: "Something went wrong",
            status: 500
        })
    }
}
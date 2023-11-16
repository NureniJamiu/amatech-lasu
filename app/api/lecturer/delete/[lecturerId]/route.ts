import Lecturer from "@/models/lecturerModel"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function PATCH(
    req: Request, {params}: {params: {lecturerId: string}}
) {
    try {
        const {userId} = auth()
        const {lecturerId} = params
        const values = await req.json()

        if (!userId) {
            return NextResponse.json({
                message: "Unauthorized",
                status: 401
            })
        }

        const lecturer = await Lecturer.findByIdAndDelete(lecturerId, values)

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
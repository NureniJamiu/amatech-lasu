import ExecutiveMember from "@/models/executiveMemberModel"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function DELETE(
    req: Request, {params}: {params: {memberId: string}}
) {
    try {
        const {userId} = auth()
        const {memberId} = params

        if (!userId) {
            return NextResponse.json({
                message: "Unauthorized",
                status: 401
            })
        }

        const member = await ExecutiveMember.findByIdAndDelete(memberId)

        return NextResponse.json({
            message: "Member deleted successfully!",
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
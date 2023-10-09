import { getAllSm } from "@/db/sm";
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    try {
        return NextResponse.json({ sm: getAllSm() }, {status: 200});
    } catch (err) {
        return NextResponse.json({message: "Error", err}, {status: 500})
    }
}
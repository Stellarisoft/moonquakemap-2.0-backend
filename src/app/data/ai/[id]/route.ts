import { getAiById } from "@/db/ai"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    try {
        const id = req.url.split("ai/")[1]
        return NextResponse.json({ ai: getAiById(id) }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Error", err }, { status: 500 })
    }
}
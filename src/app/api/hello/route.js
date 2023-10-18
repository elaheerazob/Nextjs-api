import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(){
    const data = user;
    return NextResponse.json(data,{status:200})
}

export async function POST(request){
    const payload = await request.json();

    if(!payload.name|| !payload.age){
        return NextResponse.json({result:"Data Not found",success:false},{status:400})
    }
    return NextResponse.json({result:"New data show",success:true},{status:200})
}
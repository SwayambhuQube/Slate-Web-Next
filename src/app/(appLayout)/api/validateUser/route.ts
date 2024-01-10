import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const data = await request.json();
    console.log(data);
  } catch (error) {}
  return NextResponse.json({ data: "Hiteam" });
}

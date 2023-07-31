import { NextRequest, NextResponse } from "next/server";
import { customers, db } from "@/lib/drizzle";
import { getCookies, getCookie, setCookie } from "cookies-next";
import { cookies } from "next/headers";

export const GET = async (request: NextRequest) => {
  try {
    const res = await db.select().from(customers);
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  
  const cookiesList = cookies()
   const hasCookie = cookiesList.get('authToken')?.value
  console.log(hasCookie)
  try {
    const response = await db
      .insert(customers)
      .values({
        name: req.name,
        email: req.email,
        password: req.password,
        id:hasCookie as string,
      })
      .returning();
console.log(response)

    return NextResponse.json({ response });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};


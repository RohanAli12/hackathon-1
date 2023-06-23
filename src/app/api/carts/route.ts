import { NextRequest, NextResponse } from "next/server";
import { carts, db } from "@/lib/drizzle";
import { getCookies, getCookie, setCookie } from "cookies-next";
import { cookies } from "next/headers";

export const GET = async (request: NextRequest) => {
  try {
    const res = await db.select().from(carts);
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
      .insert(carts)
      .values({
        quantity:req.quantity,
        product_id:req.product_id,
        customer_id:hasCookie as string,
      })
      .returning();

    return NextResponse.json({ response });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};


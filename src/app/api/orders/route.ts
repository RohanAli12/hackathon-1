import { NextRequest, NextResponse } from "next/server";
import { orders, db } from "@/lib/drizzle";
import { getCookies, getCookie, setCookie } from "cookies-next";
import { cookies } from "next/headers";

export const GET = async (request: NextRequest) => {
  try {
    const res = await db.select().from(orders);
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
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
    const response = await db
      .insert(orders)
      .values({
        customer_name: req.name,
        customer_email: req.email,
        customer_id:hasCookie as string,
        order_date: formattedDate,
        total_amount :req.totalAmount,
        address:req.address,
        city:req.city,
        state:req.state       
      })
      .returning();


    return NextResponse.json({ response });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};


import { NextRequest, NextResponse } from "next/server";
import { orderitems, db, orders } from "@/lib/drizzle";
import {
  getCookies,
  getCookie,
  setCookie,
} from "cookies-next";
import { cookies } from "next/headers";
import { sql } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
  try {
    const res = await db.select().from(orderitems);
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Something Went Wrong",
    });
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();

  const cookiesList = cookies();
  const hasCookie = cookiesList.get("authToken")?.value;
  console.log(hasCookie);

  try {
    // Get the latest order number from the order table
    const result = await db
      .select({ max: sql<number>`max(order_id)` })
      .from(orders);
    const rlt = result[0].max;
  
    const response = await db
      .insert(orderitems)
      .values({
        quantity: req.quantity,
        product_id: req.product_id,
        customer_id: hasCookie as string,
        order_id: rlt,
      })
      .returning();
    console.log(response);
    return NextResponse.json({ response });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Something Went Wrong",
    });
  }
};

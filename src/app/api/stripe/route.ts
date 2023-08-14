import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  try {
    if (body.length > 0) {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          {
            shipping_rate: "shr_1Neub3HHkWvutCj4PYPg3IF3",
          },
          {
            shipping_rate: "shr_1NeuZlHHkWvutCj4Tjk2x1YU",
          },
        ],
        line_items: body.map((item: any) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          };
        }),
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get("origin")}/Cart`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ Message: "No ProductsFound" });
    }
  } catch (err: any) {
    return NextResponse.json(err.message);
  }
}

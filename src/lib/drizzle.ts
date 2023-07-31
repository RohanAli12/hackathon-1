import {pgTable,varchar,text,serial,integer,date} from 'drizzle-orm/pg-core'
import {drizzle} from "drizzle-orm/vercel-postgres"
import {sql} from "@vercel/postgres"

export const customers = pgTable("customers",{
    id: varchar("customer_id").primaryKey(),
    name: varchar("name",{
        length:255 
    }).notNull(),
    email: varchar("email",{
        length:255
    }).notNull(),
    password: varchar("password",{
        length:8
    }).notNull(),
     
})
export const orders = pgTable('orders', {
    order_id: serial("order_id").primaryKey(),
    customer_name: varchar("customer_name",{
      length: 255,
    }).notNull(),
    customer_email: varchar("customer_email",{
      length: 255,
    }).notNull(),
    customer_id: varchar("customer_id",{
      length: 255,
    }).notNull(),
    total_amount: integer("total_amount"),
    order_date: date("order_date"),
    address: text("address").notNull(),
    city: varchar("city",{
      length: 255,
    }).notNull(),
    state: varchar("state",{
      length: 255,
    }),
  });
export const carts = pgTable('carts', {
    cart_id: serial("cart_id").primaryKey(),
    customer_id: varchar("customer_id",{
      length: 255,
    }).notNull(),
    quantity: integer("quantity"),
    product_id: varchar("product_id",{
      length: 255,
    }),
  });
export const orderitems = pgTable('orderitems', {
    orderItem_id: serial("orderitem_id").primaryKey(),
    customer_id: varchar("customer_id",{
      length: 255,
    }).notNull(),
    order_id: integer("order_id"),
    quantity: integer("quantity"),
    product_id: varchar("product_id",{
      length: 255,
    }),
  });

export const  db = drizzle(sql);


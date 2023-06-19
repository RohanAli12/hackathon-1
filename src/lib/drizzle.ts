import {pgTable,varchar,text,serial} from 'drizzle-orm/pg-core'
import {drizzle} from "drizzle-orm/vercel-postgres"
import {sql} from "@vercel/postgres"

export const customers = pgTable("customers",{
    id: serial("customer_id").primaryKey(),
    name: varchar("name",{
        length:255
    }).notNull(),
    email: varchar("email",{
        length:255
    }).notNull(),
    password: varchar("password",{
        length:8
    }).notNull(),
    address: text("address").notNull()    
})

export const  db = drizzle(sql);
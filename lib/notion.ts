import { Client } from "@notionhq/client"

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const revalidate = 60 // ISR every 60 seconds

import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const folderPath = path.join(process.cwd(), "public/placements")

    const files = fs.readdirSync(folderPath)

    const placements = files.map((file, index) => {
      const clean = file.replace(".svg", "")
      const [name, role] = clean.split(" - ")

      return {
        id: index + 1,
        name: name || "Student",
        role: role || "Developer",
        img: `/placements/${file}`,
      }
    })

    return NextResponse.json(placements)
  } catch (err) {
    console.error(err)
    return NextResponse.json([])
  }
}

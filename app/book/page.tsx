"use client"

import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

export default function BookPage() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi()
            cal("ui", {
                theme: "dark",
                styles: { branding: { brandColor: "#ffffff" } },
                hideEventTypeDetails: false,
                layout: "month_view",
            })
        })()
    }, [])

    return (
        <section className="min-h-screen bg-[#070707] text-white py-24 px-6">
            <div className="max-w-5xl mx-auto">

                <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
                    Book a Call
                </h1>

                <p className="text-gray-400 mb-12 max-w-2xl">
                    Schedule a mentorship call, workshop discussion, or collaboration meeting.
                </p>

                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <Cal
                        calLink="pratik-sabale-hoklak/30min"
                        style={{ width: "100%", height: "780px" }}
                        config={{
                            layout: "month_view",
                            theme: "dark",
                        }}
                    />

                </div>

            </div>
        </section>
    )
}

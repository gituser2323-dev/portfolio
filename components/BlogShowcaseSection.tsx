import Link from "next/link"
import { getAllPosts } from "@/lib/blog/blog"

export default async function BlogShowcaseSection() {
  const posts = getAllPosts()

  return (
    <section className="relative bg-[#0b0b0f] text-white py-24 sm:py-32 lg:py-40 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-red-600/20 blur-[220px] rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[200px] rounded-full bottom-[-200px] right-[-200px]" />
      </div>

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.04] -z-10 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Header */}
        <div className="mb-16 sm:mb-20 lg:mb-28 text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.6em] uppercase text-red-500 mb-4 sm:mb-6">
            SYSTEM ARCHIVES
          </p>

          <h2 className="text-[clamp(32px,8vw,64px)] md:text-7xl font-bold leading-[1.1] lg:leading-[1.05] tracking-tight">
            Ideas That Power
            <br className="hidden sm:block" />
            Intelligent Systems
          </h2>

          <p className="text-zinc-400 mt-6 sm:mt-8 text-base sm:text-lg max-w-xl sm:max-w-3xl mx-auto">
            Deep architectural thinking, automation frameworks,
            and AI-driven system design explorations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">

          {posts.map((post, index) => {
            const slug = post.slug
            const title = post.title
            const description = post.description
            const cover = post.heroImage || null

            const isFeatured = index === 0

            return (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className={`${isFeatured ? "lg:col-span-2" : ""} group`}
              >
                <article
                  className={`
                    relative rounded-3xl
                    bg-gradient-to-br from-[#14141a] via-[#0f0f14] to-[#0b0b10]
                    border border-white/10
                    overflow-hidden
                    transition-all duration-700
                    hover:border-red-500/60
                    hover:shadow-[0_0_100px_rgba(239,68,68,0.25)]
                    hover:-translate-y-2
                    ${isFeatured 
                      ? "h-auto sm:h-[500px] lg:h-[600px]" 
                      : "h-auto sm:h-[420px] lg:h-[450px]"}
                    flex flex-col
                  `}
                >

                  {/* Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-transparent pointer-events-none" />

                  {/* Ghost Typography */}
                  {isFeatured && (
                    <div className="hidden sm:block absolute right-10 bottom-10 text-[160px] lg:text-[220px] font-bold text-white/[0.04] pointer-events-none select-none leading-none">
                      AI
                    </div>
                  )}

                  {/* Cover Image */}
                  {cover && !isFeatured && (
                    <div className="relative w-full h-52 sm:h-56 overflow-hidden border-b border-white/5">
                      <img
                        src={cover}
                        alt={title}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] via-black/40 to-transparent" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-between flex-1 p-6 sm:p-8 lg:p-10">

                    <div>

                      {/* Meta Row */}
                      <div className="flex flex-wrap gap-3 mb-6 sm:mb-8 text-[10px] sm:text-xs">

                        {isFeatured && (
                          <span className="tracking-[0.3em] sm:tracking-[0.4em] uppercase text-red-500">
                            Featured Research
                          </span>
                        )}

                        <span className="px-3 py-1 border border-red-500/30 text-red-400">
                          {post.readTime}
                        </span>

                        <span className="px-3 py-1 border border-white/15 text-zinc-400">
                          {post.category}
                        </span>
                      </div>

                      <h3
                        className={`
                          font-semibold tracking-tight leading-[1.15]
                          ${isFeatured 
                            ? "text-3xl sm:text-4xl lg:text-5xl md:text-6xl" 
                            : "text-xl sm:text-2xl"}
                        `}
                      >
                        {title}
                      </h3>

                      {isFeatured ? (
                        <p className="text-zinc-400 mt-4 sm:mt-6 text-base sm:text-lg max-w-xl lg:max-w-2xl leading-relaxed">
                          {description}
                        </p>
                      ) : (
                        <p className="text-zinc-400 mt-4 sm:mt-6 text-sm leading-relaxed line-clamp-3">
                          {description}
                        </p>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/15 flex items-center justify-between">

                      <span className="text-red-500 font-medium tracking-wide text-sm sm:text-base">
                        Explore →
                      </span>

                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-600/10 flex items-center justify-center group-hover:bg-red-600/20 transition">
                        →
                      </div>

                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
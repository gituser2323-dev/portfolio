import ApplyForm from "@/components/ApplyPage"

export default async function ApplyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const role = slug.replace(/-/g, " ")

  return (
    <section className="min-h-screen bg-black text-white py-32">
      <div className="max-w-4xl mx-auto px-6">

        <p className="text-xs tracking-widest uppercase text-red-500">
          Open Position
        </p>

        <h1 className="mt-6 text-5xl font-semibold capitalize">
          {role}
        </h1>

        <ApplyForm role={role} />

      </div>
    </section>
  )
}

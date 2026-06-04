export default function RichTextRenderer({ blocks }: any) {
  if (!blocks) return null

  return (
    <div className="space-y-8 text-zinc-300 text-lg leading-8">

      {blocks.map((block: any) => {
        const { type } = block

        const getText = (richText: any) =>
          richText.map((t: any) => t.plain_text).join("")

        if (type === "paragraph") {
          return (
            <p key={block.id}>
              {getText(block.paragraph.rich_text)}
            </p>
          )
        }

        if (type === "heading_1") {
          return (
            <h1 key={block.id} className="text-4xl font-bold mt-16 text-white">
              {getText(block.heading_1.rich_text)}
            </h1>
          )
        }

        if (type === "heading_2") {
          return (
            <h2 key={block.id} className="text-3xl font-semibold mt-14 text-white">
              {getText(block.heading_2.rich_text)}
            </h2>
          )
        }

        if (type === "heading_3") {
          return (
            <h3 key={block.id} className="text-2xl font-semibold mt-10 text-white">
              {getText(block.heading_3.rich_text)}
            </h3>
          )
        }

        if (type === "bulleted_list_item") {
          return (
            <ul key={block.id} className="list-disc ml-6">
              <li>{getText(block.bulleted_list_item.rich_text)}</li>
            </ul>
          )
        }

        if (type === "numbered_list_item") {
          return (
            <ol key={block.id} className="list-decimal ml-6">
              <li>{getText(block.numbered_list_item.rich_text)}</li>
            </ol>
          )
        }

        if (type === "code") {
          return (
            <pre
              key={block.id}
              className="bg-zinc-900 p-6 rounded-2xl overflow-x-auto text-sm border border-white/10"
            >
              <code>{getText(block.code.rich_text)}</code>
            </pre>
          )
        }

        if (type === "image") {
          const imageUrl =
            block.image?.external?.url ||
            block.image?.file?.url

          return (
            <div key={block.id} className="my-14">
              <img
                src={imageUrl}
                alt="Blog image"
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          )
        }

        return null
      })}

    </div>
  )
}

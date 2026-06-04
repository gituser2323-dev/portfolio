import { codeToHtml } from "shiki"

export default async function CodeBlock({
  code,
  language,
}: any) {
  const html = await codeToHtml(code, {
    lang: language || "javascript",
    theme: "github-dark",
  })

  return (
    <div
      className="rounded-xl overflow-hidden"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

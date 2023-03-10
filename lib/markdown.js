import fs from "fs"
import matter from "gray-matter"

export async function readMarkdown(path) {
  const fileContents = fs.readFileSync(path).toString()
  const {data, content} = matter(fileContents)
  return { data, content }
}
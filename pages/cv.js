import path from "path"

import Head from "next/head"
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {readMarkdown} from "../lib/markdown"

export async function getStaticProps() {
    const cv_path = path.join(process.cwd(), "data", "cv.md")
    const cv = await readMarkdown(cv_path)
    return {
        props: {
            cv
        },
    }
}

export default function CV({ cv }) {
    return (
        <div>
            <Head>
                <title>{cv.data.title}</title>
            </Head>

            <article className="prose dark:prose-invert prose-stone prose-pre:p-0 prose-pre:bg-custom-dark-blue">
                <h1>{cv.data.title}</h1>
                <ReactMarkdown
                    className="markdown-body"
                    children={cv.content}
                    remarkPlugins={[remarkGfm]}
                />
            </article>
        </div>
    );
}
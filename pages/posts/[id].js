import Head from "next/head"
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Highlighter from "../../components/code-highlighter"
import { getAllPostIds, getPost } from "../../lib/posts"
import utilStyles from "../../styles/utils.module.css"


export async function getStaticProps({ params }) {
  const post = await getPost(params.id)
  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Post({ post }) {
  return (
    <div>
      <Head>
        <title>{post.data.title}</title>
      </Head>
      
      <article className="prose dark:prose-invert prose-stone prose-pre:p-0 prose-pre:bg-custom-dark-blue">
        <h1 className={utilStyles.headingXl}>{post.data.title}</h1>
        <ReactMarkdown
          className="markdown-body"
          children={post.content}
          remarkPlugins={[remarkGfm]}
          components={{ 
            code: Highlighter,
          }}
        />
      </article>
    </div>
  );
}
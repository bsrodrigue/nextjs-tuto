import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"

export const getStaticProps: GetStaticProps = async () => {
  const feed = [
    {
      id: "1",
      title: "What is the mystery behind the Shadow Realm in the Elden Ring DLC",
      content: "[BRODRIGUE](https://b-rodrigue.com) Check my personal website",
      published: false,
      author: {
        name: "BADINI Rachid Rodrigue",
        email: "brodrigue@gmail.com",
      },
    },
    {
      id: "2",
      title: "How do you become a good engineer?",
      content: "Here lies the great mysteries of Laugh Tale",
      published: true,
    },
  ]
  return {
    props: { feed },
    revalidate: 10
  }
}

type Props = {
  feed: PostProps[]
}

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Blog

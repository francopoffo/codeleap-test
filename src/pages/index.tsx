import Head from "next/head";
import { Roboto } from "next/font/google";
import SignUpModal from "@/components/signup/signupmodal";
import Layout from "@/components/main-page/layout";
import NewPostForm from "@/components/main-page/new-post/new-post-form";
import PostList from "@/components/main-page/posts/post-list";
import { getPosts } from "@/helpers/api-util";
import { useAppSelector } from "@/store/updateSlice";
import { Posts } from "@/types/posts";
import { useEffect, useState } from "react";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Home: React.FC<{ posts: Posts }> = (props) => {
  const posts = props.posts;
  const [updatedPosts, setUpdatedPosts] = useState(posts);

  const counter = useAppSelector((state) => state.counter.counter);

  useEffect(() => {
    async function updatePosts() {
      const newlyUpdatedPosts = await getPosts();
      setUpdatedPosts(newlyUpdatedPosts);
    }

    updatePosts();
  }, [counter]);

  return (
    <>
      <Head>
        <title>CodeLeap - Test</title>
        <meta name="description" content="Posts page for the CodeLeap test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={roboto.className}
        style={{ background: "#DDDDDD", height: "fit-content" }}
      >
        <SignUpModal />
        <Layout>
          <NewPostForm />
          {posts && <PostList posts={updatedPosts} />}
        </Layout>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts: posts,
    },
    revalidate: 3,
  };
}

export default Home;

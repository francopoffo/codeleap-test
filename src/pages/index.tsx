import Head from "next/head";
import { Roboto } from "next/font/google";
import SignUpModal from "@/components/signup/signupmodal";
import Layout from "@/components/main-page/layout";
import NewPostForm from "@/components/main-page/new-post/new-post-form";
import PostList from "@/components/main-page/posts/post-list";
import { getPosts } from "@/helpers/api-util";
import { Posts } from "@/types/posts";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Home: React.FC<{ posts: Posts }> = (props) => {
  const posts = props.posts;

  console.log(posts);

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
          {posts && <PostList posts={posts} />}
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
    revalidate: 100,
  };
}

export default Home;

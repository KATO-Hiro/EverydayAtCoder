import Link from "next/link";
import Layout from "../components/MyLayout";

const indexPageContent = <h1>My Blog</h1>;

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Index() {
  return (
    <div>
      <Layout content={indexPageContent} />
      <ul>
        <PostLink id="hello-next.js" as="" />
        <PostLink id="learn-next.js" as="" />
        <PostLink id="deploy-nextjs" as="" />
      </ul>
    </div>
  );
}

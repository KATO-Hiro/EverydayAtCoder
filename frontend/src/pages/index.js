import Link from "next/link";
import Layout from "../components/MyLayout";

const indexPageContent = <h1>My Blog</h1>;

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Index() {
  return (
    <div>
      <Layout content={indexPageContent} />
      <ul>
        <PostLink title="Hello Next.js"/>
        <PostLink title="Learn Next.js is awesome"/>
        <PostLink title="Deploy apps with Zeit"/>
      </ul>
    </div>
  );
}

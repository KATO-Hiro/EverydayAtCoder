import Link from "next/link";
import Layout from "../components/MyLayout";
import RatingChart from "../components/RatingChart";

const indexPageContent = <h1>My Blog</h1>;

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Index() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    <div>
      <Layout content={indexPageContent} />
      <ul>
        <PostLink id="hello-next.js" as="" />
        <PostLink id="learn-next.js" as="" />
        <PostLink id="deploy-nextjs" as="" />
      </ul>

      <div className="last-update" align="center">
        {/* Note: dummy values. */}
        Last update: {year}/{month}/{day} {hour}:{minute}:{second}
      </div>

      <div align="center">
        {RatingChart}
      </div>
    </div>
  );
}

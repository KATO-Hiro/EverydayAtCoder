import { useRouter } from "next/router";
import Layout from "../../components/MyLayout";

export default function Post() {
  const router = useRouter();
  const postPageId = <h1>{router.query.id}</h1>

  return (
    <div>
      <Layout content={postPageId} />
      <p>This is the blog post content</p>
    </div>
  );
}

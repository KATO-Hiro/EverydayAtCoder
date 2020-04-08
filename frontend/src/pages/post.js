import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';

const Page = () => {
  const router = useRouter();
  const pageContent = <h1>{router.query.title}</h1>;

  return (
    <div>
      <Layout content={pageContent} />
      <p>This is the blog post content.</p>
    </div>
  );
};

export default Page;

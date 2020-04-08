import Layout from "../components/MyLayout";

const aboutPageContent = <p>This is the about page.</p>;

export default function About() {
  return (
    <div>
      <Layout content={aboutPageContent} />
    </div>
  );
}

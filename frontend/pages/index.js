import Head from 'next/head'
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <p>Hello, Next.js</p>

      <Link href="/about">
        <a title="About Page">About Page</a>
      </Link>
    </div>
  );
}

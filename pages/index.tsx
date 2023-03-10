import type { NextPage } from "next";
import Head from "next/head";
import CustomLink from "../components/CustomLink";
import { FaGithub } from "react-icons/fa";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NPS Todo app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center h-screen tracking-widest">
        <h1 className="text-2xl font-bold animate-pulse">Let's build. 🚀</h1>
        <CustomLink
          href="https://github.com/terrytjw/t2-template"
          className="flex gap-4 p-8"
        >
          <FaGithub />
          Github repo
        </CustomLink>
      </main>
    </div>
  );
};

export default HomePage;

import Head from "next/head";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sylvia Assistant</title>
        <meta
          name="description"
          content="Hi, I'm Sylvia — your dedicated virtual assistant for admin support, calendar management, and more. Let's simplify your workload!"
        />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      <header>
        <Nav />
      </header>

      <main>
        <Hero />
        <Services />
        <About />
        <Skills />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

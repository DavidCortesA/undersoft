import Head from "next/head";
import Navbar from "../components/navbar";
import Container from "../components/container";
import Footer from "../components/footer";

const Terms = () => {
  return(
    <>
      <Head>
        <title>UNDERSOFT | Terminos y condiciones</title>
        <meta
          name="undersoft"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/undersoft.svg" />
      </Head>
      <Navbar />
      <Container>
        <h1 className="font-bold dark:text-white text-3xl text-center">
          Terminos y condiciones
        </h1>
      </Container>
      <Footer />
    </>
  )
};

export default Terms;
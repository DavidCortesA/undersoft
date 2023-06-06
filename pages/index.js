import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { nosotros, proyectos } from "../components/data";
import Footer from "../components/footer";
import Servicios from "../components/Servicios";
import NosotrosSection from "../components/NosotrosSection";
import CardFilter from "../components/Projects";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
      <Head>
        <title>UNDERSOFT</title>
        <meta
          name="undersoft"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <NosotrosSection data={nosotros} />
      <SectionTitle
        pretitle="Servicios"
        title="¿Que ofrecemos?">
      </SectionTitle>
      <Servicios/>
      <CardFilter data={proyectos}/>
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
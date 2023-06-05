import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { nosotros } from "../components/data";
import Benefits from "../components/NosotrosSection";
import Footer from "../components/footer";
import Testimonials from "../components/Servicios";
import Cta from "../components/cta";
import PopupWidget from "../components/popupWidget";
import NosotrosSection from "../components/NosotrosSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>UNDERSOFT</title>
        <meta
          name="undersoft"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/undersoft.svg" />
      </Head>

      <Navbar />
      <Hero />
      <NosotrosSection data={nosotros} />
      <SectionTitle
        pretitle="Servicios"
        title="¿Que ofrecemos?">
      </SectionTitle>
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
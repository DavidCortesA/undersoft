import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/tech company-bro.svg";
import USAID from "../public/img/brands/usaid.svg";
import miyamoto from "../public/img/brands/miyamoto.svg"

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              ¡Bienvenido!
            </p>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              ¿Listo para llevar tu empresa al siguiente nivel?
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Nuestro equipo está compuesto por expertos en diseño y desarrollo de aplicaciones web y móviles, listo para darle un impulso a tu empresa
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/#contactForm"
                rel="noopener"
                className="px-8 py-4 text-lg font-bold text-center text-black bg-under rounded-md hover:text-white ">
                CONTACTANOS
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"

            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Ellos confían <span className="text-indigo-600">en nosotros</span>
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-center items-center">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <Image 
                src={USAID}
                width={150}
                height={33}
              />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image 
                src={miyamoto}
                width={150}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero;
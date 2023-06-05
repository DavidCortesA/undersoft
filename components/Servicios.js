import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/palette-amico.svg";
import userTwoImg from "../public/img/Code typing-amico.svg";
import userThreeImg from "../public/img/Software code testing-pana.svg";

const Servicios  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto border-4 border-l-under">
          <div className="flex flex-col gap-4 justify-between items-center w-full h-full bg-gray-100 p-14 dark:bg-trueGray-800">
            <div className="flex items-center gap-6">
              <Image
                src={userOneImg}
                width={120}
              />
              <div className="text-xl font-bold">Diseño UI/UX</div>
            </div>
            <p className="text-xl leading-normal text-justify">
              Nuestro equipo de diseñadores se encarga de crear interfaces atractivas y funcionales para tus aplicaciones. Nos enfocamos en diseñar experiencias de usuario intuitivas y agradables, teniendo en cuenta los principios de usabilidad y accesibilidad.
            </p>

          </div>
        </div>
        <div className="border-4 border-l-under">
          <div className="flex flex-col gap-4 justify-between items-center w-full h-full bg-gray-100 p-14 dark:bg-trueGray-800">
            <div className="flex items-center gap-6">
              <Image
                src={userTwoImg}
                width={120}
              />
              <h3 className="text-xl font-bold">Aplicaciones web</h3>
            </div>
            <p className="text-xl leading-normal text-justify">
              Utilizamos las mejores prácticas de desarrollo web para crear aplicaciones seguras, escalables y de alto rendimiento. Ya sea que necesites una aplicación web simple o una plataforma compleja, nos aseguramos de que tu producto final sea de alta calidad y cumpla con tus requerimientos.
            </p>

          </div>
        </div>
        <div className="border-4 border-l-under">
          <div className="flex flex-col justify-between gap-4 items-center w-full h-full bg-gray-100 p-14 dark:bg-trueGray-800">
            <div className="flex items-center gap-6">
              <Image
                src={userThreeImg}
                width={120}
              />
              <h3 className="text-xl font-bold">Aplicaciones moviles</h3>
            </div>
            <p className="text-xl leading-normal text-justify">
              Nuestro equipo de desarrolladores móviles se especializa en la creación de aplicaciones nativas para iOS y Android. Desde la concepción de la idea hasta la publicación en las tiendas de aplicaciones, nos encargamos de todo el ciclo de desarrollo para que puedas llevar tu aplicación móvil con confianza.
            </p>

          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Servicios;
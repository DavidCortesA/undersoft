import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Footer() {
  const navigation = [
    {name: "INICIOS", path: "/" },
    {name: "NOSOTROS", path: "/#nosotros" },
    {name: "SERVICIOS", path: "/#servicios" },
    {name: "PROYECTOS", path: "/#proyectos" },
    {name: "TÉRMINOS", path: "/terminos" },
  ];

  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link href="/" className="flex items-center space-x-2 text-2xl font-bold tracking-wider text-dark dark:text-white">
                    <Image
                      src="/img/undersoft.svg"
                      alt="N"
                      width="32"
                      height="32"
                      className="w-8"
                    />
                  <span>UNDERSOFT</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              La seguridad y mejora de nuestros clientes son nuestra mayor preocupación.
            </div>

          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link key={index} href={item.path} className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-under focus:text-white focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">                 
                    {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made by{" "} UNDERSOFT
        </div>
      </Container>
    </div>
  );
}

import React, { useState } from 'react';
import Container from './container';
import Image from 'next/image';

import aplicacionWeb from "../public/img/aplicacionweb.jpg"

const CardFilter = (props) => {
  const {data} = props;
  const [filter, setFilter] = useState('todos');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const cards = [
    { title: 'Miyamoto', category: ['Aplicación Web','Aplicación Movil'], image: aplicacionWeb, desc: "Nuestro proyecto consiste en el desarrollo de una aplicación web y móvil para mejorar la eficiencia y la experiencia del usuario en el entorno empresarial. La aplicación se diseñará específicamente para satisfacer las necesidades de nuestra empresa, brindando soluciones y herramientas que optimicen los procesos internos y promuevan la colaboración entre los miembros del equipo."  },
  ];

  const filteredCards = filter === 'todos' ? cards : cards.filter(card => card.category.includes(filter));

  return (
    <div id='proyectos'>
      <Container className="flex flex-col gap-5">
        <h3 className='w-full mt-3 text-3xl text-center font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white'>{data.title}</h3>
        <div className='w-full flex justify-center'>
          <label htmlFor="filter">Filtrar por: </label>
          <select id="filter" value={filter} onChange={handleFilterChange} className='bg-under rounded-md ml-2 dark:text-black'>
            <option value="todos">Todos</option>
            <option value="Aplicación Web">Aplicación Web</option>
            <option value="Aplicación Movil">Aplicación Movil</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4 py-5">
          {filteredCards.map((card, index) => (
            <div key={index} className="bg-white border col-span-1 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image src={card.image} className="rounded-t-lg" alt=''/>
              <div className='p-5'>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.category.map((cat, index) => <span key={index}>{cat} </span>)}</p>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CardFilter;
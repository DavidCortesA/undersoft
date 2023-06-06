import React, { useState } from 'react';
import Container from './container';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí va la lógica para enviar los datos del formulario
    console.log(formData);
    // Luego de enviar los datos, se limpia el formulario
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    });
  };

  return (
    <div id='contactForm'>
      <Container className="w-screen max-h-screen">
        <h3 className='w-full mt-3 text-3xl text-center font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white'>Contáctanos</h3>
        <form onSubmit={handleSubmit} className='w-full flex flex-col justify-center px-5 md:px-72 mt-10'>
          <div className='flex flex-col'>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='border-4 border-l-under h-16 pl-4'
              placeholder='Nombre'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='border-4 border-l-under h-16 pl-4'
              placeholder='Email'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="company">Empresa:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className='border-4 border-l-under h-16 pl-4'
              placeholder='Empresa'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className='border-4 border-l-under h-32 p-4 resize-none'
              placeholder='Mensaje'
            ></textarea>
          </div>
          <button type="submit" className='bg-under text-black hover:text-white h-10 font-bold mt-5'>Enviar</button>
        </form>
      </Container>
    </div>

  );
};

export default ContactForm;


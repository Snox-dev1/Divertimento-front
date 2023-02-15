'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Texte from './Texte';

const SliderText = [
  {
    id: 1,
    title: "C'est nôtre",
    title2: 'Histoire',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Sed euismod, nunc vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Choisi ton',
    title2: 'Costume',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Sed euismod, nunc vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus.',
    image: 'https://via.placeholder.com/155',
  },
  {
    id: 3,
    title: 'Maintenant',
    title2: 'Réserves',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Sed euismod, nunc vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus.',
    image: 'https://via.placeholder.com/160',
  },
  {
    id: 4,
    title: "C'est prêt ... direction la",
    title2: 'Boutique',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Sed euismod, nunc vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus.',
    image: 'https://via.placeholder.com/165',
  },
];

const Slider = () => {
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlider((slider) => (slider === SliderText.length - 1 ? 0 : slider + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full relative">
      <div className="absolute inset-0 left-10 top-10">
        <h1 className="text-3xl font-semibold">Divertimento</h1>
        <h2 className="text-lg">A chaque moment son déguisement</h2>
      </div>
      <div className="flex  items-center justify-center w-full h-screen  px-24">
        <div className="w-full h-full  flex flex-col gap-6 justify-center pt-12">
          <Texte textes={SliderText[slider]} />

          <div className="flex justify-start items-start mt-10 relative">
            {SliderText.map((item, index) => (
              <div
                key={item.id}
                className={`w-4 h-4 rounded-full border-2 border-white mx-2 cursor-pointer flex  ${
                  slider === index ? 'bg-white' : ''
                }`}
                onClick={() => setSlider(index)}
              />
            ))}
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <img src={SliderText[slider].image} alt="" className="w-[80%] object-cover p-12" />
        </div>
      </div>

      <div
        className={`
            ${
              slider <= 0 ? '-translate-x-full opacity-0' : 'translate-x-0'
            } transition-all duration-500 absolute inset-0 w-full h-full
                  `}
      >
        <div className="top-10 right-10 absolute text-lg">
          Réserves au{' '}
          <span>
            <a href="tel:+33 6 95 95 95 95" className="text-white font-bold">
              06 95 95 95 95
            </a>
          </span>
        </div>
        <div className="bottom-10 right-10 absolute text-2xl">
          <Link href="/Index">
            <div className="text-white font-bold">Accédes directement à la boutique</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;

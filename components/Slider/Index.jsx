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
        <img src="/Logo_blanc.png" className="sm:h-10 w-[60%] md:w-auto" alt="Logo" />
        {/* <h1 className="text-lg">A chaque moment son déguisement</h1> */}
      </div>
      <div className="flex flex-col-reverse xl:flex-row xl:items-center items-start justify-center w-full h-screen  sm:px-24 px-6">
        <div className="xl:w-full sm:w-[70%] w-full h-full  flex flex-col gap-6 xl:justify-center justify-start items-start xl:pt-12 pt-3">
          <Texte textes={SliderText[slider]} />

          <div className="flex sm:justify-start sm:items-start w-full items-center justify-center md:mt-10 mt-2 relative">
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
        <div className="w-full h-full flex xl:justify-center xl:items-center items-center sm:justify-end justify-center sm:mt-12 sm:-mb-32 mt-24 xl:-mb-0 xl:mt-0 ">
          <img
            src={SliderText[slider].image}
            alt=""
            className="xl:w-[80%] sm:w-[40%] min-[480px]:w-[80%] w-full object-cover p-0 xl:pt-12"
          />
        </div>
      </div>

      <div
        className={`
            ${
              slider <= 0 ? '-translate-x-full opacity-0' : 'translate-x-0'
            } transition-all duration-500 absolute inset-0 w-full h-full
                  `}
      >
        <div className="top-10 right-10 absolute text-lg hidden lg:block">
          Réserves au{' '}
          <span>
            <a href="tel:+33 6 95 95 95 95" className="text-white font-bold">
              06 95 95 95 95
            </a>
          </span>
        </div>
        <div className="top-10 right-10 md:top-[95%] md:right-10  absolute text-2xl ">
          <Link href="/Index">
            <div className="text-white font-bold xl:block hidden">Accédes directement à la boutique</div>
            <div className="text-white font-bold block xl:hidden">Passer</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;

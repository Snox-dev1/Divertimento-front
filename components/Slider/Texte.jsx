import React from 'react';

const Texte = ({ textes }) => {
  return (
    <>
      <div className="flex flex-col gap-4  items-start justify-center ">
        <div className="text-5xl font-semibold">{textes.title}</div>
        <div className="text-8xl font-bold">{textes.title2}</div>
        <div className="text-xl">{textes.description}</div>
      </div>
    </>
  );
};

export default Texte;

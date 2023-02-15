import React from 'react';

const Card = ({
  Categorie = 'Categorie',
  Title = 'Title',
  src = 'https://static.posters.cz/image/750/assassins-creed-valhalla-eivor-i96965.jpg',
  className,
}) => {
  return (
    <div className={` relative ${className} shadow-md shadow-slate-800`}>
      <div className="bg-gradient-to-tr from-yellow-400 to-red-400 flex justify-center items-center h-full w-full p-1 rounded-lg relative">
        <img src={src} alt="" className=" h-full w-full object-cover rounded-lg " />
        <div className="bg-gradient-to-t from-black to-transparent absolute inset-0 rounded-lg m-1"></div>
      </div>
      <div className="absolute bottom-3 left-2">
        <h1>{Categorie}</h1>
        <h2 className="font-bold">{Title}</h2>
      </div>
    </div>
  );
};

export default Card;

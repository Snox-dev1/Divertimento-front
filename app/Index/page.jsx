'use client';
import { useState } from 'react';
import Card from '../../components/UI/Card';

export default function IndexPage() {
  const [selected, setSelected] = useState('location');
  return (
    <>
      <header className="m-3 pt-4 pb-2 border-b border-slate-600">
        <img src="/Logo_blanc.png" className="h-10" alt="Logo" />
        <p className=" text-lg font-light mt-3">Costumier de vos évenements</p>

        <div className="p-6 bg-gradient-to-t from-pink-600 to-pink-400 rounded-lg shadow shadow-slate-800 mt-3 mb-3">
          <div className="flex items-center justify-between mt-6">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">Illimités</h1>
              <p className="text-sm font-light">Abonnement Ninho</p>
            </div>
            <div>
              <p className="text-6xl font-bold">9€</p>
            </div>
          </div>
          <div>
            <p className=" text-xs mt-6 w-[80%]">
              Par mois et sans engagements <br />
              changer le costume de votre enfants quand bon vous semble
            </p>
          </div>
        </div>

        <div className="mt-4 flex gap-2 text-lg ">
          <button
            className={`${selected === 'location' ? 'font-bold' : ' font-light'}`}
            onClick={() => setSelected(selected === 'location' ? 'vente' : 'location')}
          >
            Locations
          </button>
          <button
            className={`${selected === 'vente' ? 'font-bold' : ' font-light'}`}
            onClick={() => setSelected(selected === 'location' ? 'vente' : 'location')}
          >
            Ventes
          </button>
        </div>
      </header>

      <div className="m-3">
        <div className="rounded-lg ">
          <img src="halloween.jpg" className="h-128 w-128 object-cover shadow-md shadow-slate-800 rounded-lg" />
        </div>
        <div className="mt-3">
          <h1 className="text-xl font-medium">Playoff</h1>
          <h2 className="text-3xl font-bold uppercase">Halloween</h2>
          <p className="font-light mt-1"> 5€ offert en magasin pour toute réservation</p>
        </div>
      </div>

      <div className="mt-9 m-3 flex justify-center items-center gap-2 border-b border-slate-600 pb-6">
        <Card className="h-128 w-1/2" />

        <div className="flex flex-col justify-center items-center h-128 gap-2 w-1/2">
          <Card className="h-[15.75rem]" />

          <Card className="h-[15.75rem]" />
        </div>
      </div>

      <div className="m-3">
        <div>
          <h1 className="text-base font-medium">Titre</h1>
          <h2 className="text-lg font-semibold">Categorie</h2>
        </div>
        <div className="relative">
          <div className="absolute -left-1 h-full w-16  z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
          <div className="absolute -right-1 h-full w-16  z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />
          <div className="flex overflow-x-scroll  flex-nowrap w-full pb-6 mt-6 relative ">
            <div className="flex flex-nowrap gap-3 ">
              <Card className="h-72 w-32" />
              <Card className="h-72 w-32" />
              <Card className="h-72 w-32" />
              <Card className="h-72 w-32" />
              <Card className="h-72 w-32" />
              <Card className="h-72 w-32" />
              <Card className="h-72 w-32" />
            </div>
          </div>
        </div>
        <div className="border-b border-slate-600 mt-3" />
      </div>
      <div className="m-3">
        <div>
          <h1 className="text-base font-medium">Titre</h1>
          <h2 className="text-lg font-semibold">Categorie</h2>
        </div>
        <div className="relative">
          <div className="absolute -left-1 h-full w-16  z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
          <div className="absolute -right-1 h-full w-16  z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />
          <div className="flex overflow-x-scroll  flex-nowrap w-full pb-6 mt-6 relative ">
            <div className="flex flex-nowrap gap-3 ">
              <Card className="h-44 w-32" />
              <Card className="h-44 w-32" />
              <Card className="h-44 w-32" />
              <Card className="h-44 w-32" />
              <Card className="h-44 w-32" />
              <Card className="h-44 w-32" />
              <Card className="h-44 w-32" />
            </div>
          </div>
        </div>
        <div className="border-b border-slate-600 mt-3" />
      </div>
    </>
  );
}

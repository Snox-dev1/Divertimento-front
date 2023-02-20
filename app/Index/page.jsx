'use client';
import { useEffect, useState } from 'react';
import { ApiRequest } from '../../api/ApiRequest';
import BiGift from '../../components/Icons/BiGift';
import IcOutlineDiscount from '../../components/Icons/IcOutlineDiscount';
import MdiCardsHeartOutline from '../../components/Icons/MdiCardsHeartOutline';
import PhMedal from '../../components/Icons/PhMedal';
import Card from '../../components/UI/Card';
import Product from '../../components/UI/Product';

export default function IndexPage() {
  const [selected, setSelected] = useState('location');
  const [categories, setCategories] = useState([]);
  const [topCategories, setTopCategories] = useState([]);

  useEffect(() => {
    // ApiRequest.get('categories/').then((res) => {
    //   console.log(res.data);
    //   setTopCategories(res.data.topCategories);
    //   setCategories(res.data.categories);
    // });
  }, []);

  return (
    <>
      <header className="m-3 pt-4 ">
        <img src="/Logo_blanc.png" className="sm:h-10 w-[60%] md:w-auto" alt="Logo" />
        <p className=" text-lg font-light mt-3">Costumier de vos évenements</p>
        <div className="md:container pb-2 border-b border-slate-600">
          <div className="flex gap-6">
            <div className="p-6 bg-gradient-to-t from-[#e37686] to-[#e2a5af] rounded-lg shadow shadow-slate-800 mt-3 mb-3 md:w-128 w-full">
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
            {/* <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-t from-[#ff1a13] to-[#e7302b] rounded-lg shadow shadow-slate-800 mt-3 mb-3 md:w-128 w-full text-3xl font-bold">
              <div className="flex items-center justify-between mt-6">01j:02h:03m:04s</div>
              <div className="flex items-center justify-between mt-6">Avant Noël !</div>
            </div> */}
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
        </div>
      </header>
      {/* <nav>
        <div className="flex gap-6 justify-center items-center">
          <div className="flex flex-col justify-center items-center w-28 text-sm">
            <div className="p-4 rounded-lg bg-red-500 bg-opacity-50 border-2 border-red-500 mb-1 flex justify-center items-center">
              <BiGift className="h-6 w-6 fill-white" />
            </div>
            Offres
          </div>
          <div className="flex flex-col justify-center items-center w-28 text-sm">
            <div className="p-4 rounded-lg bg-red-500 bg-opacity-50 border-2 border-red-500 mb-1 flex justify-center items-center">
              <IcOutlineDiscount className="h-6 w-6 fill-white" />
            </div>
            Petits prix
          </div>
          <div className="flex flex-col justify-center items-center w-28 text-sm">
            <div className="p-4 rounded-lg bg-red-500 bg-opacity-50 border-2 border-red-500 mb-1 flex justify-center items-center">
              <PhMedal className="h-6 w-6 fill-white" />
            </div>
            Top ventes
          </div>
          <div className="flex flex-col justify-center items-center w-28 text-sm">
            <div className="p-4 rounded-lg bg-red-500 bg-opacity-50 border-2 border-red-500 mb-1 flex justify-center items-center">
              <MdiCardsHeartOutline className="h-6 w-6 fill-white" />
            </div>
            Coups de coeur
          </div>
        </div>
      </nav>
      <Product /> */}
      <div className="md:container ">
        <div className="flex lg:flex-row flex-col justify-center lg:items-start items-center gap-3  md:m-0 m-3 pb-2 border-b border-slate-600">
          <div className="m-3 flex xl:flex-row flex-col xl:justify-start lg:gap-3 gap-0 xl:w-[60%] lg:w-[80%] w-full xl:items-end justify-start sm:items-start">
            <img
              src="Fetes/halloween.jpg"
              alt="Image de présentation pour Halloween"
              className="h-128 w-auto xl:w-128  object-cover shadow-md shadow-slate-800 rounded-lg flex justify-center items-center"
            />
            <div className="mt-3 text-left">
              <h1 className="text-xl font-medium">Playoff</h1>
              <h2 className="text-3xl font-bold uppercase">Halloween</h2>
              <p className="font-light mt-1"> 5€ offert en magasin pour toute réservation</p>
            </div>
          </div>
          {/* TODO : Add skeleton on load */}
          {topCategories && (
            <div className="mt-9 lg:mt-3 m-3 lg:w-[40%] w-full flex justify-start   lg:items-end items-center gap-2 lg:border-b-0 md:border-b md:border-slate-600 lg:pb-0 pb-6">
              <Card
                className="h-128 w-1/2"
                src={topCategories[0]?.image || 'http://via.placeholder.com/150'}
                Title={topCategories[0]?.name}
                Categorie={topCategories[0]?.category || 'Genre'}
              />

              <div className="flex flex-col justify-center items-center h-128 gap-2 w-1/2">
                <Card
                  className="h-[15.75rem] w-full"
                  src={topCategories[1]?.image || 'http://via.placeholder.com/150'}
                  Title={topCategories[1]?.name}
                  Categorie={topCategories[1]?.type || 'Genre'}
                />

                <Card
                  className="h-[15.75rem] w-full"
                  src={topCategories[2]?.image || 'http://via.placeholder.com/150'}
                  Title={topCategories[2]?.name}
                  Categorie={topCategories[2]?.type || 'Genre'}
                />
              </div>
            </div>
          )}
        </div>
        {categories &&
          categories.map((categorie, index) => (
            <div key={index} className="m-3">
              <div>
                <h1 className="text-base font-medium">{categorie?.type || 'Genre'}</h1>
                <h2 className="text-lg font-semibold">{categorie?.name || 'Nom'}</h2>
              </div>

              <div className="relative">
                {/*  TODO : ! fix the gradient */}

                {/* <div className="absolute -left-1 h-full w-16  z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" /> */}
                {/* <div className="absolute -right-1 h-full w-16  z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" /> */}
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
          ))}

        <div className="m-3">
          <div>
            <h1 className="text-base font-medium">Titre</h1>
            <h2 className="text-lg font-semibold">Categorie</h2>
          </div>
          <div className="relative">
            {/*  TODO : ! fix the gradient */}
            {/* <div className="absolute -left-1 h-full w-16  z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" /> */}
            {/* <div className="absolute -right-1 h-full w-16  z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" /> */}
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
      </div>
    </>
  );
}

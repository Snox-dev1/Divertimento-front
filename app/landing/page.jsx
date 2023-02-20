'use client';
import { useEffect, useState } from 'react';
import { ApiRequest } from '../../api/ApiRequest';
import BiGift from '../../components/Icons/BiGift';
import HeroiconsBars3CenterLeft from '../../components/Icons/HeroiconsBars3CenterLeft';
import IcOutlineDiscount from '../../components/Icons/IcOutlineDiscount';
import MaterialSymbolsSearch from '../../components/Icons/MaterialSymbolsSearch';
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
      <header className=" inset-0  h-28 fixed  flex justify-between items-center">
        <div className="w-[30%]  h-full flex items-center justify-center">
          <div>
            <HeroiconsBars3CenterLeft className="h-8 w-8" />
          </div>
        </div>

        <div>
          <img src="/Logo_blanc.png" className="sm:h-10 w-[60%] md:w-auto" alt="Logo" />
        </div>

        <div className="w-[30%]  h-full flex items-center justify-center">
          <MaterialSymbolsSearch className="h-8 w-8" />
        </div>
      </header>

      <main className="mt-28 overflow-y-hidden">
        <div className="h-[calc(100%-7rem)] w-full   flex justify-center items-center">
          <div>
            <h1 className="text-6xl uppercase font-bold">
              <span className="text-[#74edff]">Divertimento</span> <br />{' '}
              <span className="text-[#ffbeee]">Costumier</span> de <br />
              vos <span className="text-[#f0e5a9]">évenements</span>
            </h1>
            <div className="mt-6">
              <button className=" bg-[#7494ee] bg-opacity-50 border-2 border-[#7494ee] p-4 py-2 rounded-lg font-bold mr-3">
                Voir les costumes
              </button>
              <button className=" bg-[#ffbeee] bg-opacity-50 border-2 border-[#ffbeee] p-4 py-2 rounded-lg font-bold ml-3">
                Contactez-nous
              </button>
            </div>

            <div className="mt-12 flex gap-12 bg-slate-500 bg-opacity-20 h-32 rounded-lg">
              <div className="p-6 bg-black rounded-lg flex justify-start items-center">
                <div className="w-1/2 text-xl uppercase font-semibold">Derniers costumes</div>
              </div>
              <div className=" bg-gradient-to-tr from-[#7494ee] to-[#74edff] rounded-lg w-32 h-32 relative ">
                <img src="costumes/costume_1.jpg" alt="costume" className="rounded-lg mix-blend-multiply" />
                <div>
                  <span className="text-[#ff7388] font-bold rotate-90 absolute top-1/2  -right-6 -translate-y-1/2 ">
                    Costume 1
                  </span>
                </div>
              </div>
              <div className=" bg-gradient-to-tr from-[#7494ee] to-[#74edff] rounded-lg w-32 h-32 relative ">
                {/* <img src="costumes/costume_1.jpg" alt="costume" /> */}
                <div>
                  <span className="text-[#ff7388] font-bold rotate-90 absolute top-1/2 -right-6  -translate-y-1/2 ">
                    Costume 2
                  </span>
                </div>
              </div>{' '}
              <div className=" bg-gradient-to-tr from-[#7494ee] to-[#74edff] rounded-lg w-32 h-32 relative ">
                {/* <img src="costumes/costume_1.jpg" alt="costume" /> */}
                <div>
                  <span className="text-[#ff7388] font-bold rotate-90 absolute top-1/2  -right-6 -translate-y-1/2 ">
                    Costume 3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

// rouge : ff7388;
// bleu : 7494ee;
// bleu ciel : 74edff;
// jaune : f0e5a9;
// rose : ffbeee;

import React from 'react';

const Product = () => {
  return (
    <div className="bg-slate-600 bg-opacity-50 border-2 border-slate-600 rounded-lg overflow-hidden h-104 w-48 relative p-2">
      <div className="rounded-full h-128 w-128 bg-blue-800 absolute left-1/2 top-12 -translate-y-1/2 -translate-x-1/2 "></div>
      <div className="relative flex justify-center flex-col items-center gap-6 mt-3 text-xl">
        <img src="test.png" alt="test" className=" w-36 object-cover z-10" />
        Animateur
      </div>
      <div className="flex justify-between mt-10 text-xl">
        <div className="uppercase">s/m/l/xl</div>
        <div>10€</div>
      </div>
    </div>
  );
};

export default Product;

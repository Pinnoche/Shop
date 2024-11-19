import React from 'react';

function Category({ deals }) {
  return (
    <div className="bg-black p-6">
      <h2 className="text-white text-2xl font-semibold mb-6 text-center">Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="w-[220px] h-[240px] relative bg-white shadow-md hover:shadow-gray-400 overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className=''>
              <img
                src={deal.image}
                alt={deal.title}
                className="h-[240px] w-full object-fill"
              />
            </div>
            <div className="h-10 absolute mt-[200px] inset-0 w-full bg-black bg-opacity-70 ">
              <p className="text-center font-medium text-lg text-white">
                {deal.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;

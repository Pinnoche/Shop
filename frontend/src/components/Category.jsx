import deals from "../deals.json";

function Category() {
  return (
    <div className="bg-white mt-20 rounded-md overflow-hidden">
      <div className="p-4 bg-red-500">
        <h2 className="text-white text-2xl font-semibold mb-6 text-start">
          Category
        </h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="w-full relative bg-white shadow-md hover:shadow-gray-400 overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={deal.src}
              alt={deal.alt}
              className="h-full w-full object-fill"
            />

            <div className="h-10 absolute truncate top-[80%] xl:top-[85%] inset-0 w-full bg-black bg-opacity-70 ">
              <p className="text-center sm:font-medium font-normal sm:text-sm lg:text-lg text-xs text-white">
                {deal.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;

const NavBar = () => {
  return (
    <header className="w-full bg-white px-10 fixed top-0 z-40 ">
      <nav className="flex justify-between items-center h-[74px]">
        <div className="text-[20px] font-semibold text-gray-800">Shopping Mall</div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 text-[16px]">Home</a>
          <a href="#products" className="text-gray-800 text-[16px]">Categories
            <span className="material-icons text-gray-800 align-middle mb-1">arrow_drop_down</span>
          </a>
          <a href="#products" className="text-gray-800 text-[16px]">Products</a>
          <a href="#contact" className="text-gray-800 text-[16px]">Contact Us</a>
        </div>
        <div className="flex items-center">
          <span className="material-icons text-gray-800 ml-5">search</span>
          <span className="material-icons text-gray-800 ml-5">person</span>
          <span className="material-icons text-gray-800 ml-5">shopping_cart</span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

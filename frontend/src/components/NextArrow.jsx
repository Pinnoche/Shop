import PropTypes from "prop-types";
function NextArrow({ onClick, slideCount, currentSlide, slidesToShow, showArrow }) {
  return (
    <button
      onClick={onClick}
      className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center text-black z-50 hover:bg-gray-500 ${
        currentSlide === slideCount - slidesToShow ? "hidden" : "block"
      } ${showArrow ? "block" : "hidden"}`}
    >
      →
    </button>
  );
}

NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  slideCount: PropTypes.number.isRequired,
  currentSlide: PropTypes.number.isRequired,
  slidesToShow: PropTypes.number.isRequired,
  showArrow: PropTypes.bool.isRequired,
};

export default NextArrow;

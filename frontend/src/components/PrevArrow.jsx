import PropTypes from "prop-types";
function PrevArrow({ onClick, currentSlide, showArrow }) {
  return (
    <button
      onClick={onClick}
      className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center text-black z-50 hover:bg-black hover:text-white ${
        currentSlide === 0 ? "hidden" : "block"
      } ${showArrow ? "block" : "hidden"}`}
    >
      ←
    </button>
  );
}

PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  currentSlide: PropTypes.number.isRequired,
  showArrow: PropTypes.bool.isRequired,
};

export default PrevArrow;

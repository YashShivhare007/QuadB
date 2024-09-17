const AddToHomeScreenButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="fixed bottom-2 left-1/2 transform -translate-x-1/2 px-8 py-3 rounded-md bg-transparent border-2 border-teal-800 text-teal-400 hover:bg-teal-400 hover:text-white font-robotoCondensed font-medium focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300 ease-in-out"
      onClick={handleClick}
    >
      Add hodlinfo to home screen
    </button>
  );
};

export default AddToHomeScreenButton;

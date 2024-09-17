const Hero = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div className={`p-4 h-[70vh] md:h-[80vh] ${isDarkMode ? 'text-white' : 'text-black'}`}> 
      <h1 className="text-3xl font-bold mb-4">Welcome to HODLINFO</h1>
      <p className="text-lg">Your Source for Crypto Information.</p>
    </div>
  );
};

export default Hero;
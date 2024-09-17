import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const [timer, setTimer] = useState(60);
  const [selectedCrypto, setSelectedCrypto] = useState("BTC"); // Initial cryptocurrency
  const [selectedCurrency, setSelectedCurrency] = useState("INR"); // Initial normal currency
  const [showCryptoDropdown, setShowCryptoDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  const cryptoCurrencies = [
    "BTC",
    "ETH",
    "USDT",
    "XRP",
    "TRX",
    "DASH",
    "ZEC",
    "XEM",
    "IOST",
    "WIN",
    "BTT",
    "WRX",
  ];
  const normalCurrencies = ["INR", "USD", "AUD", "EUR", "GBP", "JPY", "CAD"]; // Add more normal currencies as needed

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => (prevTimer <= 0 ? 60 : prevTimer - 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCryptoChange = (crypto: string) => {
    setSelectedCrypto(crypto);
    setShowCryptoDropdown(false);
  };

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
    setShowCurrencyDropdown(false);
  };

  return (
    <div
      className={`bg-transparent flex flex-col h-[30vh] md:h-[20vh] file:
md:flex-row items-center justify-between w-full m-0 p-2 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      {/* Logo Section */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-2 md:mb-0">
        <a href="/">
          <img src={logo} alt="Logo" className="h-8 md:h-10" />
        </a>
      </div>

      {/* Middle Section */}
      <div className="w-full md:w-1/3 flex flex-row items-center justify-center md:justify-center">
        {/* Normal Currency Dropdown */}
        <div
          className={`m-2 px-4 pt-2 pb-2 bg-gray-600/30 rounded-lg font-robotoCondensed flex items-center relative 
          hover:bg-gray-700 hover:border-gray-400 hover:scale-105 transition-transform duration-300 ease-in-out`}
          onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
        >
          {selectedCurrency}{" "}
          <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
          {showCurrencyDropdown && (
            <div className="absolute top-full left-0 bg-white rounded-md shadow-md z-10 text-black">
              {normalCurrencies.map((currency) => (
                <div
                  key={currency}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCurrencyChange(currency)}
                >
                  {currency}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Cryptocurrency Dropdown */}
        <div
          className={`m-2 px-4 pt-2 pb-2 bg-gray-600/30 rounded-lg font-robotoCondensed flex items-center relative 
          hover:bg-gray-700 hover:border-gray-400 hover:scale-105 transition-transform duration-300 ease-in-out`}
          onClick={() => setShowCryptoDropdown(!showCryptoDropdown)}
        >
          {selectedCrypto}{" "}
          <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
          {showCryptoDropdown && (
            <div className="absolute top-full left-0 bg-white rounded-md shadow-md z-10 text-black">
              {cryptoCurrencies.map((crypto) => (
                <div
                  key={crypto}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCryptoChange(crypto)}
                >
                  {crypto}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Buy BTC Button */}
        <div className="m-2 px-4 pt-2 pb-2 bg-gray-600/30 rounded-lg font-robotoCondensed hover:bg-gray-600 hover:scale-105">
          <a
            href="https://wazirx.com/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY BTC
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3 flex flex-row items-center justify-center md:justify-end">
        {/* Timer */}
        <div className="m-1 p-3 px-4 rounded-full border-2 border-teal-400 font-serif text-sm md:text-base">
          {timer}
        </div>

        {/* Connect Telegram Button */}
        <button className="m-2 px-3 py-1 rounded-lg bg-teal-400 hover:bg-teal-500 text-white font-robotoCondensed font-semibold text-md md:text-base">
          <a href="https://web.telegram.org/" target="_blank">
            {" "}
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2 md:mr-4" />
            Connect Telegram
          </a>
        </button>

        {/* Dark/Light Mode Toggle Switch */}
        <label className="relative inline-flex items-center cursor-pointer m-2">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className="sr-only peer"
          />
          <div className="w-10 h-6 bg-gray-300 rounded-full peer-focus:outline-none peer-checked:bg-teal-400 relative">
            <div
              className={`absolute top-0.5 left-0.5 bg-white h-5 w-5 rounded-full transition-transform duration-300 ${
                isDarkMode ? "transform translate-x-4" : ""
              }`}
            ></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;

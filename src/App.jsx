import { useState, useEffect } from "react";
import axios from "axios";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [selectedButton, setSelectedButton] = useState("all");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  useEffect(() => {
    // Realiza una solicitud GET a la API
    axios
      .get(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      )
      .then((response) => {
        // Actualiza el estado con los datos recibidos de la API
        setCoffeeData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
      });
  }, []);

  const handleShowAvailable = () => {
    setShowAvailableOnly(true);
    setSelectedButton("available");
  };

  const handleShowAll = () => {
    setShowAvailableOnly(false);
    setSelectedButton("all");
  };

  return (
    <main className="flex flex-col justify-center items-center relative">
      <img
        src="./bg-cafe.jpg"
        alt="coffee shop"
        className="h-[14rem] lg:h-full"
      />
      <section className="bg-[#1B1D1F] mx-3 sm:mx-10 lg:mx-28 relative -top-[6rem] lg:-top-[10rem] p-5 lg:p-20 z-30 rounded-xl flex flex-col items-center gap-6 lg:gap-4 shadow-md mb-10">
        <img
          src="./vector.svg"
          alt="vector"
          className="ml-28 sm:ml-80 lg:ml-64 mt-0 lg:-mt-12 absolute"
        />

        <div className="relative flex flex-col items-center z-30 pt-20 lg:pt-0">
          <h1 className="text-[2rem] font-bold">Our Collection</h1>
          <p className="text-[#6F757C] text-base font-semibold sm:w-[500px] md:w-[500px] text-center">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
        </div>

        <div className="flex gap-5">
          <button
            className={`${
              selectedButton === "all"
                ? "bg-[#6F757C] py-1 px-4 rounded-lg"
                : ""
            }`}
            onClick={handleShowAll}
          >
            All Products
          </button>
          <button
            className={`${
              selectedButton === "available"
                ? "bg-[#6F757C] py-1 px-4 rounded-lg"
                : ""
            }`}
            onClick={handleShowAvailable}
          >
            Available Now
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-7 mb-10 md:mb-0">
          {coffeeData.map(
            (coffeeShop) =>
              (showAvailableOnly ? coffeeShop.available : true) && (
                <CoffeeCard key={coffeeShop.id} coffeeShop={coffeeShop} />
              )
          )}
        </div>
      </section>
    </main>
  );
}

export default App;

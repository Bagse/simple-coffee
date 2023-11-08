function CoffeeCard({ coffeeShop }) {
  const formattedRating =
    coffeeShop.rating !== null
      ? Number.isInteger(coffeeShop.rating)
        ? coffeeShop.rating.toFixed(1)
        : coffeeShop.rating
      : null;

  return (
    <div key={coffeeShop.id} className="pb-4 flex flex-col gap-3 relative">
      <div>
        <picture>
          <img
            src={coffeeShop.image}
            alt={`image of ${coffeeShop.name}`}
            className="rounded-2xl w-96"
          />
        </picture>

        {coffeeShop.popular === true && (
          <p className="absolute top-2 left-2 bg-[#F6C768] text-[#111315] text-xs rounded-full px-2 py-1 font-bold w-[80px] text-center">
            Popular
          </p>
        )}
      </div>

      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{coffeeShop.name}</h3>
        <span className="text-xs bg-[#BEE3CC] rounded-md text-[#111315] font-bold py-[6px] px-2">
          {coffeeShop.price}
        </span>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          {formattedRating !== null ? (
            <>
              <img
                src={formattedRating ? "./Star_fill.svg" : "./Star.svg"}
                alt="icon star"
                className="w-7"
              />
              <div className="flex gap-1">
                {formattedRating !== null && (
                  <p className="font-semibold">{formattedRating}</p>
                )}
                {coffeeShop.votes > 0 && (
                  <p className="text-[#6F757C] font-bold">
                    ({coffeeShop.votes} votes)
                  </p>
                )}
              </div>
            </>
          ) : (
            <div className="flex gap-1 items-center">
              <img src="./Star.svg" alt="icon star" className="w-7" />
              <p className="text-[#6F757C] font-bold">No ratings</p>
            </div>
          )}
        </div>
        {coffeeShop.available === false && (
          <p className="text-[#ED735D] font-semibold">Sold out</p>
        )}
      </div>
    </div>
  );
}

export default CoffeeCard;

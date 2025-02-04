import { useState } from "react";
import CityInputForm from "@/components/CityInputForm/CityInputForm";
import Questions from "@/components/Questions/Questions";
import SelectModel from "@/components/SelectModel/SelectModel";

const Homepage = () => {
    const prevCity = localStorage.getItem("user-city");
    const [city, setCity] = useState(prevCity || "");


    const handleCitySubmit = (newCity) => {
        setCity(newCity);
    };


    return city === "" ? (
        <div className="flex flex-col items-center justify-center gap-5">
            <CityInputForm
                onSubmit={handleCitySubmit}
                initialCity={city}
                promptText="Which city would you like to check the air quality for? We're here to provide you with the latest updates."
                className="bg-background border border-solid flex-col"
            />
            <SelectModel />
        </div>
    ) : (
        <>
            <header className="mb-8 text-center max-w-[600px]">
                <h1 className="text-2xl font-bold mb-2">
                    Air Quality Information for {city}
                </h1>
                <p className="">{`Ready to make a difference? Choose a task below and let’s improve air quality together. Your journey to cleaner air starts now!`}</p>
            </header>
            <Questions />

            <CityInputForm
                onSubmit={handleCitySubmit}
                initialCity={city}
                promptText="Want to check the air quality in another city?"
                className="my-5 bg-accent"
            />
        </>
    );
};

export default Homepage;
``;

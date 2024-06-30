import { useState } from 'react';
import CityInputForm from "@/components/CityInputForm/CityInputForm";
import Questions from "@/components/Questions/Questions";

const Homepage = () => {
    const [city, setCity] = useState('');

    const handleCitySubmit = (newCity) => {
        setCity(newCity);
        console.log(newCity);
    };

    return (
        city === "" ?
            <CityInputForm
                onSubmit={handleCitySubmit}
                initialCity={city}
                promptText="Which city would you like to check the air quality for? We're here to provide you with the latest updates."
                className="bg-background border border-solid flex-col"
            />
            :
            <>
                <header className="mb-8 text-center max-w-[600px]">
                    <h1 className="text-2xl font-bold mb-2">Air Quality Information for {city}</h1>
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
``

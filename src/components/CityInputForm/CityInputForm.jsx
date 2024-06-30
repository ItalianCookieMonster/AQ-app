/* eslint-disable react/prop-types */
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useState } from 'react';


function CityInputForm({ onSubmit, initialCity, promptText, className}){

    const [localCity, setLocalCity] = useState(initialCity);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!localCity.trim()) {  
            setError('Please enter a city name.');  
        } else {
            setError('');  
            onSubmit(localCity);
        }
    };

    return (
        <div className={`flex justify-center items-center p-5 rounded md:w-[70vw] ${className}`}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="cityInput" className="block mb-4 leading-[1.5em]">
                    {promptText}
                </label>
                <Input
                    type="text"
                    id="cityInput"
                    value={localCity}
                    onChange={(e) => setLocalCity(e.target.value)}
                    placeholder="Enter your city here"
                    className="block mb-4"
                />
                {error && <div className="mb-4 text-red-500">{error}</div>} 
                <Button type="submit" className="block w-full">Check Air Quality</Button>
            </form>
        </div>
    );
}

export default CityInputForm;

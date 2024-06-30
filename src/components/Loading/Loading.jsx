/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";


const phrases = [
    {
        id: 0,
        phrase: 'Approximately 30,000 people in Spain died from air pollution-related causes in 2019 (WHO).'
    },
    {
        id: 1,
        phrase: "94% of Spain's population breathes air with pollution levels exceeding WHO recommendations, affecting around 44 million people."

    },
    {
        id: 2,
        phrase: 'Road traffic, especially diesel vehicles, is the primary source of urban air pollution, contributing significantly to NO2 and PM2.5 levels.'

    },
    {
        id: 3,
        phrase: 'Air pollution in Spain is linked to increased respiratory and cardiovascular diseases, including asthma, strokes, and heart attacks.'

    },
    {
        id: 4,
        phrase: 'During COVID-19 lockdowns, reduced traffic led to unprecedented improvements in air quality in Spanish cities, highlighting the potential benefits of permanent traffic reduction measures.'
    }

]

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};



const Loading = ({ loading }) => {
    const [currentPhrase, setCurrentPhrase] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPhrase(prevPhrase => (prevPhrase + 1) % phrases.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center gap-4">

            <div className="text-center px-10">
                <p className="animate[fade-in-out] text-xl">{phrases[currentPhrase].phrase}</p>
            </div>

            <PacmanLoader
                cssOverride={override}
                loading={loading}
                color={'hsl(142.1 76.2% 36.3%)'}
            />


        </div>
    );
}
export default Loading
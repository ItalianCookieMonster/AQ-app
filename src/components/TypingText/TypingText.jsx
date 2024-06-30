import { useState, useEffect } from 'react';
import './TypingText.css';

const TypingEffect = () => {
    const [displayText, setDisplayText] = useState('');
    const stringToTest = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxim mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum`;

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < stringToTest.length) {
                setDisplayText(prev => prev + stringToTest.charAt(index));
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 50); 

        return () => clearInterval(intervalId);
    }, []); 

    return (
        <div className="typing-effect">
            {displayText}
        </div>
    );
};

export default TypingEffect;


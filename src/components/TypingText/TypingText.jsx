import { useState, useEffect } from 'react';



const TypingEffect = () => {
    const [text, setText] = useState('');
    const [displayText, setDisplayText] = useState('');
    let stringToTest = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxim mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis haru`;

    setText(stringToTest);

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < text.length) {
                setDisplayText((prev) => prev + text.charAt(index));
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 50); 

        return () => clearInterval(intervalId);
    }, [text]);

    return (
        <div className="typing-effect">
            {stringToTest}
        </div>
    );
};

export default TypingEffect;

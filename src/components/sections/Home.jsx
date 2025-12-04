import React, { useState, useEffect } from 'react';

export const Home = () => {
    const fullText = "Hi, I'm Nate Cargile";
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    
    // 1. New state to control the fade-in of the second line
    const [isTypingComplete, setIsTypingComplete] = useState(false); 

    // useEffect to handle the typing animation
    useEffect(() => {
        if (index < fullText.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText(prevText => prevText + fullText[index]);
                setIndex(prevIndex => prevIndex + 1);
            }, 80); 

            return () => clearTimeout(timeoutId);
        } else {
            // 2. Set the flag to true once the typing is finished
            setIsTypingComplete(true);
        }
    }, [index, fullText]); 

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-loose">
                    {displayedText}
                </h1>

                {/* 3. Apply fade-in classes based on the state */}
                <p 
                    className={`
                        text-gray-400 text-lg mb-8 max-w-lg mx-auto 
                        transition-opacity duration-1000 ease-in 
                        ${isTypingComplete ? 'opacity-100' : 'opacity-0'}
                    `}
                >
                    Full-stack developer
                </p>
                <div 
                    className={`
                        flex justify-center space-x-4
                        transition-opacity duration-1000 ease-in 
                        ${isTypingComplete ? 'opacity-100' : 'opacity-0'}
                    `}
                >
                    <a
                        href="#projects"
                        className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                    >
                        View projects
                    </a>
                    <a
                        href="#contact"
                        className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/10"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};
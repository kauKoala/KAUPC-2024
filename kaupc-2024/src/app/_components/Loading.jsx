"use client";

import React, { useState, useEffect } from 'react';

const Loading = () => {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true); // After 1 second, show the button
        }, 1000); // Set timeout for 1 second

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);
    return (
        <div className="loading-wrapper">
            <img src="/images/loading.png" alt="Loading" className="loading-image"/>
            {!showButton &&
                <div>
                <div className="circles">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <p>Loading...</p>
                </div>
            }

            {showButton && (
                <div className="load-btn">
                <a href="https://kaupc2024.netlify.app/" className="btn btn-primary">START!</a>
            </div>)}
        </div>
    );
};

export default Loading;
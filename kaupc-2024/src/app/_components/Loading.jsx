"use client";

import React from 'react';

const Loading = () => {
    return (
        <div className="loading-wrapper">
            <img src="/images/loading.png" alt="Loading" className="loading-image"/>
            <p>Loading...</p>
        </div>
    );
};

export default Loading;
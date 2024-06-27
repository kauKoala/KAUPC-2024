"use client";

import React from 'react';

const Back = () => {
    return (
        <div className="video-background">
            <video autoplay muted loop id="background-video">
                <source src="/images/back1.mp4" type="video/mp4">
                </source>
            </video>
        </div>
    );
};

export default Back;
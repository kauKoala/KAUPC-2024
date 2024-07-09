"use client";

import React, { forwardRef } from 'react';

const Back = forwardRef((props, ref) => {
    return (
        <div className="video-background" ref={ref}>
            <video autoPlay muted loop id="background-video">
                <source src="/images/back1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
});

Back.displayName = 'Back';

export default Back;
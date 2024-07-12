"use client";

import React, { forwardRef } from 'react';

const Back = forwardRef((props, ref) => {
    return (
        <div className="video-background" ref={ref}>
            <img src="/images/back1.webp" alt="Background" id="background-image" />
        </div>
    );
});

Back.displayName = 'Back';

export default Back;

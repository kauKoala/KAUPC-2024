"use client";

import React from 'react';

const Side = ({ visibleSection, onSectionClick }) => {
    const sections = [
        { id: 'SUM', label: '요약' },
        { id: 'INFO', label: '정보' },
        { id: 'APPLY', label: '신청' },
        { id: 'LINK', label: '기출 문제' }
    ];

    return (
        <div className="side-container">
            <ul>
                {sections.map(section => (
                    <li
                        key={section.id}
                        className={visibleSection === section.id ? 'active' : ''}
                        onClick={() => onSectionClick(section.id)}
                    >
                        {section.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Side;
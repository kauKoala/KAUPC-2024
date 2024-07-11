"use client";

import React from 'react';

const Summary = () => {
    return (
        <div className="sum-section-container">
            <div className="sum-info-list">
                <li className="info-header">한국항공대학교<br>
                </br>제 4회 프로그래밍 경진 대회</li>
                <li><strong>접수 기간:</strong> 2024.07.19 ~ 2024.07.26 </li>
                <li><strong>대회 기간:</strong> 2024.08.03</li>
                <li><strong>대회 장소:</strong> 한국항공대학교 전산실</li>
                <li><strong>참가 자격:</strong> AI 융합대학 소속 학부 재학생</li>
                <li><strong>지원 언어:</strong> C C++14 C++17 Python3 Java Swift JavaScript Kotlin Go Rust</li>
            </div>
        </div>
    );
};

export default Summary;

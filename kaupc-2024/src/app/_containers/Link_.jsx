"use client";

import React from 'react';

const Link_ = () => {
    return (
        <div className="btn-section-container">
            <div className="btn-section-content">
                <div>프로그래밍 대회가 처음이라면, 2024 KAUPC 기출문제 미리 경험해보세요.</div>
                <div className="buttons">
                    <a href="https://www.acmicpc.net/category/607" className="btn btn-primary">기출문제 풀어보기</a>
                    <a href="https://drive.google.com/file/d/1f8DSR4S6Q-PraI0tGUkgxdXRALGFVzXF/view?usp=sharing"
                       className="btn btn-secondary">기출문제 해설 보기</a>
                </div>
            </div>
        </div>
    );
};

export default Link_;

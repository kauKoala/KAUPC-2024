"use client";

import React from 'react';

const Link_ = () => {
    return (
        <div className="btn-section-container">
            <div className="btn-section-content">
                <div className="info-subheader">프로그래밍 대회가 처음이라면, 2024 KAUPC 기출문제 미리 경험해보세요.</div>
                <div className="info-detail">단, 2022 KAUPC의 경우 기출문제의 해답이 제공되지 않습니다.</div>
                <div className="buttons">
                    <a href="https://www.acmicpc.net/category/607" className="btn btn-primary">기출문제 풀어보기</a>
                    <a href="https://drive.google.com/file/d/1TzTc7u5QfvwAoFk8CoJA7p2W95JxOLHN/view?usp=sharing"
                       className="btn btn-secondary">기출문제 해설 보기</a>
                </div>
            </div>
        </div>
    );
};

export default Link_;

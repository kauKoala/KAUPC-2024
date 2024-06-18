"use client";

import React from 'react';

const Summary= () => {
    return (
        <div className="sum-section-container">
            <h2>대회 요약 정보</h2>
            <ul className="sum-info-list">
                <li><strong>일시:</strong> 2024년 8월 3일</li>
                <li><strong>장소:</strong> 한국항공대학교 컴퓨터실</li>
                <li><strong>참가 자격:</strong> 학부 재학생 및 휴학생 (대학원생 제외)</li>
                <li><strong>주요 규정:</strong> 온라인 접속 방법 및 제출 규칙</li>
                <li><strong>유의사항:</strong> 부정 행위 시 실격 처리</li>
            </ul>
        </div>
    );
};

export default Summary;

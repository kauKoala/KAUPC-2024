"use client";

import React from 'react';

const Info = () => {
    return (
        <div className="info-section-container">
            <h2>대회 정보</h2>
            <div className="info-detail">
                <h3>일정</h3>
                <p>2024년 8월 3일</p>
            </div>
            <div className="info-detail">
                <h3>자격 조건</h3>
                <p>대회 참가 자격은 한국항공대학교 학부 재학생 및 휴학생에 한함. 대학원생은 참여할 수 없습니다.</p>
            </div>
            <div className="info-detail">
                <h3>경품</h3>
                <p>1등: 상금 100만원, 2등: 상금 50만원, 3등: 상금 30만원. 참가자 전원에게 기념품 제공.</p>
            </div>
            <div className="info-detail">
                <h3>규정</h3>
                <p>대회 규정에는 온라인 접속 방법, 문제 해결 기간, 제출 규칙 등이 포함됩니다.</p>
            </div>
            <div className="info-detail">
                <h3>유의사항</h3>
                <p>대회 중 부정 행위가 적발될 경우 실격 처리되며, 상금은 회수됩니다.</p>
            </div>
        </div>
    );
};

export default Info;

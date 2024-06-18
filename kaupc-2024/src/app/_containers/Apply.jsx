"use client";

import React, { useState } from 'react';

const Apply = () => {
    const [isStudent, setIsStudent] = useState(false);
    const [isConfirmedDate, setIsConfirmedDate] = useState(false);
    const [isAgreedTerms, setIsAgreedTerms] = useState(false);

    const allChecked = isStudent && isConfirmedDate && isAgreedTerms;

    return (
        <div className="apply-section-container">
            <p className="info-text">모든 준비가 끝났다면, 이제 마지막 단계에요!</p>
            <label>
                <input
                    type="checkbox"
                    checked={isStudent}
                    onChange={(e) => setIsStudent(e.target.checked)}
                />
                현재 한국항공대학교 학부 재학 / 휴학생으로, 대학원에 재학중이지 않습니다.
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={isConfirmedDate}
                    onChange={(e) => setIsConfirmedDate(e.target.checked)}
                />
                본 대회 일정이 대면으로 진행될 예정을 확인했습니다.
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={isAgreedTerms}
                    onChange={(e) => setIsAgreedTerms(e.target.checked)}
                />
                대회 진행과 유의사항을 모두 확인했습니다.
            </label>
            <button className="apply-button" disabled={!allChecked}>
                지금 참여하기
            </button>
        </div>
    );
};

export default Apply;

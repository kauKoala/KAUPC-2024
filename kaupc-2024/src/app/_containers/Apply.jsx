import React, { useState } from 'react';

const Apply = () => {
    const [isKauStudent, setIsKauStudent] = useState(false);
    const [isAISWStudent, setIsAISWStudent] = useState(false);
    const [isConfirmedDate, setIsConfirmedDate] = useState(false);
    const [isAgreedTerms, setIsAgreedTerms] = useState(false);
    const [isNotebook, setIsNotebook] = useState(false);

    const allChecked = isKauStudent && isAISWStudent && isConfirmedDate && isAgreedTerms&&isNotebook;

    const handleClick = () => {
        if (typeof window !== 'undefined') {
            window.location.href = 'https://scm.kau.ac.kr/ko/program/all/view/1445';
        }
    };

    return (
        <div className="apply-section-container">
            <p className="info-subheader">지원 자격을 충족하는지 확인해보아요!</p>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={isKauStudent}
                    onChange={(e) => setIsKauStudent(e.target.checked)}
                />
                현재 한국항공대학교 학부 재학 / 휴학생으로, 대학원에 재학중이지 않습니다.
            </label>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={isAISWStudent}
                    onChange={(e) => setIsAISWStudent(e.target.checked)}
                />
                AI융합대학 소속 학부생이거나 SW중심대학 참여 학부과 학생, 혹은 마이크로 디그리 이수자입니다.
            </label>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={isConfirmedDate}
                    onChange={(e) => setIsConfirmedDate(e.target.checked)}
                />
                본 대회 일정이 대면으로 진행될 예정을 확인했습니다.
            </label>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={isNotebook}
                    onChange={(e) => setIsNotebook(e.target.checked)}
                />
                노트북 지참이 필요함을 확인하였습니다.
            </label>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={isAgreedTerms}
                    onChange={(e) => setIsAgreedTerms(e.target.checked)}
                />
                대회 규정 사항을 모두 확인했습니다.
            </label>
            <button className="apply-button" disabled={!allChecked} onClick={handleClick}>
                지금 참여하기
            </button>
        </div>
    );
};

export default Apply;
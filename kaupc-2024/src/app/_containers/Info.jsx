"use client";

import React from 'react';

const Info = () => {
    return (
        <div className="info-section-container">
            <div className="info-header">■ 참가 자격</div>
            <div className="info-detail">
                <div className="info-subheader">○ AI융합대학 소속 학부생 (복수전공, 부전공 포함)</div>
                <div className="info-list-item">소프트웨어학과, 스마트드론공학과, AI자율주행시스템공학과, AI융합전공, 마이크로디그리</div>
            </div>
            <div className="info-detail">
                <div className="info-subheader">○ SW중심대학 참여학부과</div>
                <div className="info-list-item">항공교통물류학부, 경영학부, 신소재학과</div>
            </div>
            <div className="info-header">■ 참가 신청 기간</div>
            <div className="info-detail">
                <div>7월 19일부터 7월 26일까지</div>
            </div>
            <div className="info-header">■ 시상 계획</div>
            <div className="info-detail">
                <div className="info-table">
                    <div className="info-table-row">
                        <div className="info-table-header">등수</div>
                        <div className="info-table-header">수상자 수</div>
                        <div className="info-table-header">상금</div>
                        <div className="info-table-header">상장명</div>
                    </div>
                    <div className="info-table-row">
                        <div className="info-table-cell">1위</div>
                        <div className="info-table-cell">1명</div>
                        <div className="info-table-cell">100만원</div>
                        <div className="info-table-cell">대상</div>
                    </div>
                    <div className="info-table-row">
                        <div className="info-table-cell">2위</div>
                        <div className="info-table-cell">1명</div>
                        <div className="info-table-cell">70만원</div>
                        <div className="info-table-cell">최우수상</div>
                    </div>
                    <div className="info-table-row">
                        <div className="info-table-cell">3위</div>
                        <div className="info-table-cell">1명</div>
                        <div className="info-table-cell">50만원</div>
                        <div className="info-table-cell">우수상</div>
                    </div>
                    <div className="info-table-row">
                        <div className="info-table-cell">4위</div>
                        <div className="info-table-cell">2명</div>
                        <div className="info-table-cell">30만원</div>
                        <div className="info-table-cell">장려상</div>
                    </div>
                </div>
            </div>
            <div className="info-header">■ 대회 목적</div>
            <div className="info-detail">
                <div>교내 학생들의 SW개발 역량 강화</div>
            </div>
            <div className="info-header">■ 대회 진행</div>
            <div className="info-detail">
                <div>접수 : 각 부문 구분하여 온라인 접수</div>
                <div>문제 출제 및 검수 : 교내 프로그래밍 동아리 및 업체 공동 출제</div>
                <div>대회 시행 : 온라인 플렛폼을 통하여 답안 제출 및 자동 채점</div>
            </div>
            <div className="info-header">■ 응시 혜택</div>
            <div className="info-detail">
                <div>식대&간식 제공</div>
                <div>마일리지 5점 지급</div>
            </div>
        </div>
    );
};

export default Info;

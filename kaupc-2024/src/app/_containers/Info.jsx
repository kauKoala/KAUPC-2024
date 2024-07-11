"use client";

import React from 'react';

const Info = () => {
    return (
        <div className="info-section-container">
            <div className="info-header">참가 자격</div>
            <div className="info-detail">
                <div className="info-subheader">AI융합대학 소속 학부생 (복수전공, 부전공 포함)</div>
                <div className="info-list-item">소프트웨어학과, 스마트드론공학과, AI자율주행시스템공학과, AI융합전공, 마이크로디그리 신청자</div>
            </div>
            <div className="info-detail">
                <div className="info-subheader">SW중심대학 참여학부과</div>
                <div className="info-list-item">항공교통물류학부, 경영학부, 신소재학과</div>
            </div>
            <div className="info-header">참가 신청 기간</div>
            <div className="info-detail">
                <div>7월 19일부터 7월 26일까지</div>
            </div>
            <div className="info-header">대회 진행</div>
            <div className="info-detail">
                <div>
                    <li>교내 역량 관리 시스템을 통한 온라인 접수</li></div>
                <div><li>교내 프로그래밍 동아리 및 업체 공동 출제</li></div>
                <div><li>코드 트리 플랫폼을 통하여 답안 제출 및 자동 채점</li></div>
                <div>Python3, C, C++14, C++17, JAVA, Swift, JavaScript, Kotlin, Go, Rust 채점 지원</div>
            </div>
            <div className="info-header">시상 계획</div>
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
                    <div className="info-table-row">
                        <div className="info-table-cell">5위</div>
                        <div className="info-table-cell">4명</div>
                        <div className="info-table-cell">치킨 기프트콘</div>
                        <div className="info-table-cell">-</div>
                    </div>
                    <div className="info-table-row">
                        <div className="info-table-cell">6위</div>
                        <div className="info-table-cell">7명</div>
                        <div className="info-table-cell">커피 기프트콘</div>
                        <div className="info-table-cell">-</div>
                    </div>
                </div>
            </div>
            <div className="info-detail">
                <div>
                    <li>1위부터 10위에게는 차후 SHAKE! 대회에 출전할 기회가 부여됩니다.</li>
                </div>
                <div>
                    <li>
                        이 외에도 이벤트(ex. 1번을 가장 빨리 푼 사람)성 시상이 준비되어 있습니다.
                    </li>
                </div>
            </div>
        </div>
    );
};

export default Info;

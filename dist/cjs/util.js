"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupByType = groupByType;
// 이미지 배열 객체화
function groupByType(arrays) {
    // 타입 정의
    if (!arrays || !Array.isArray(arrays) || arrays.length === 0)
        return {};
    const combinedArray = arrays.flat();
    // 결과 객체 타입 지정: 문자열 키에 배열 값
    const result = {};
    // 그룹화하여 객체로 변환
    return combinedArray.reduce((result, item) => {
        const { type, ...rest } = item; // type을 키로 사용하고 나머지를 저장
        if (!result[type]) {
            result[type] = []; // 해당 타입이 없으면 배열 초기화
        }
        result[type].push(rest); // 나머지 데이터를 추가
        return result;
    }, result);
}

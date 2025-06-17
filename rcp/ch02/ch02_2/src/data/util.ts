/**
 * 지정된 길이만큼 null 로 채워진 새 배열을 만듭니다.
    -> 원래 배열 생성은 undefined로 배열을 채워줌
    -> 해당 배열로는 map 메서드 사용불가 null 로 배열을 채워서 보내줌
 *
 * @param length 배열의 길이
 * @returns      길이만큼 null 이 들어 있는 배열
 */
export const makeArray = (length: number) => new Array(length).fill(null);



/**
 * min 이상, max 미만 범위의 정수를 순차적으로 담은 배열을 만듭니다.
 *
 * @param min  구간의 시작값(포함)
 * @param max  구간의 끝값(제외)
 * @returns    [min, min+1, …, max-1] 형태의 숫자 배열
 */
export const range = (min: number, max: number): number[] =>
  // ① (max - min) 길이의 배열을 만든 뒤
  // ② 각 요소의 index 값을 이용해 최종 숫자를 계산
  makeArray(max - min).map((notUsed, index) => index + min);



/**
 * min 이상 max 미만의 정수 시퀀스를 반환합니다.
 *
 * @example
 *   range(3, 7)  // [3, 4, 5, 6]
 */
export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;



import { DateTime } from 'luxon';

/******************************************************************************
 *  랜덤 날짜 관련 유틸                                                          *
 *  - makeRandomPastDate  : 현재 시각 기준 0 ~ 약 116일 사이의 과거 Date 생성   *
 *  - makeRelativeDate    : 'x 일 전' 같은 상대적 문자열 반환                  *
 *  - randomRelativeDate  : 위 두 함수를 합친 헬퍼                              *
 *  - makeDayMonthYear    : 'YYYY년 M월 D일 (요일)' 형식 문자열 반환            *
 *  - randomDayMonthYear  : 무작위 과거 날짜를 위 포맷으로 반환                 *
 ******************************************************************************/


/**
 * 현재 시각(now)에서 0 ~ 100 000² ms(≈ 115.7일) 사이 과거로 랜덤 오프셋을 가집니다.
 * @returns {Date} 과거 Date 객체
 */
export const makeRandomPastDate = (): Date => {
  const nowMs = Date.now();           // 현재 시각(밀리초)
  const span = 100_000;               // 난수 범위를 결정할 상수
  const offsetMs = Math.floor(Math.random() * span * span);
  return new Date(nowMs - offsetMs);  // 과거로 이동
};


/**
 * 전달받은 Date를 'x 시간 전 / x 일 전' 등 상대적 문구로 변환
 * @param  date 변환할 Date
 * @return      상대적 날짜 문자열 (예: '2 days ago')
 */
export const makeRelativeDate = (date: Date): string =>
  DateTime.fromJSDate(date).startOf('day').toRelative() ?? '';


/** 무작위 과거 날짜를 상대적 문자열로 반환 */
export const randomRelativeDate = (): string =>
  makeRelativeDate(makeRandomPastDate());


/**
 * Date → '2025년 6월 17일 화요일' 같은 풀 날짜 포맷
 * @param  date 변환할 Date
 */
export const makeDayMonthYear = (date: Date): string =>
  DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL);


/** 무작위 과거 날짜를 풀 날짜 포맷으로 반환 */
export const randomDayMonthYear = (): string =>
  makeDayMonthYear(makeRandomPastDate());

/******************************************************************************
 *  chance.ts ─────────────────────────────────────────────────────────────────
 *  Chance 라이브러리를 이용해 테스트용 랜덤 문자열·식별자를 손쉽게 생성한다.
 *  - 설치:  npm i chance
 *  - 특징:  시드(seed) 지정 가능 → 동일 시드 = 동일 결과 재현
 ******************************************************************************/

import Chance from 'chance';

const chance = new Chance();          // 필요 시 new Chance(seed) 로 고정 시드

/* ────────────────────────────────
 *  식별자(ID) 관련
 * ──────────────────────────────── */


/**
 * RFC 4122 버전 4 규격 UUID
 * @example "24f9c8b3-26ea-491a-bd87-bd0f7b1aa3f1"
 */
export const randomUUID = (): string => chance.guid();


/**
 * Facebook 스타일 15자리 ID
 * @example "123456789012345"
 */
export const randomId = (): string => chance.fbid();   // fb: 15-digit string


/* ────────────────────────────────
 *  인적 정보
 * ──────────────────────────────── */

/** 무작위 풀네임 (내·외국인 혼합) */
export const randomName = (): string => chance.name();


/** 무작위 이메일 주소 (도메인은 chance 내부 로직) */
export const randomEmail = (): string => chance.email();


/** 직함(예: "Software Engineer", "Marketing Manager") */
export const randomJobTitle = (): string => chance.profession();


/** 회사·기관 이름 */
export const randomCompanyName = (): string => chance.company();

/* ────────────────────────────────
 *  문장·문단
 * ──────────────────────────────── */

/**
 * 지정한 단어 수 만큼의 짧은 문장
 * @param  words 기본 5개
 * @example randomSentence(4) → "Fierce tiger jumps swiftly."
 */
export const randomSentence = (words: number = 5): string =>
  chance.sentence({ words });


/**
 * 제목(Title) 용도로 쓰기 좋은 짧은 문장
 * 내부적으로 randomSentence 와 동일하지만 의미 분리
 */
export const randomTitleText = (words: number = 3): string =>
  chance.sentence({ words });


/**
 * 지정한 문장 수 만큼의 문단
 * @param sentences 기본 3개
 */
export const randomParagraphs = (sentences: number = 3): string =>
  chance.paragraph({ sentences });

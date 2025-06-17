/******************************************************************************
 *  랜덤 테스트 이미지를 빠르게 가져오기 위한 작은 유틸리티 모음                 *
 *  - picsum.photos 서비스 활용                                                *
 *  - util.ts 안에 있는 `random(min, max)` 함수와 결합                         *
 ******************************************************************************/

import * as U from './util'   // ⬅️ 0 ≤ 값 < max 범위의 정수 난수 생성기를 담은 모듈


/**
 * picsum.photos 기본 URL 생성기
 *
 * @param  width  1 px 이상 원하는 이미지 가로 길이
 * @param  height 1 px 이상 원하는 이미지 세로 길이
 * @return        예) https://picsum.photos/400/300
 */
export const picsumUrl = (width: number, height: number): string =>
  `https://picsum.photos/${width}/${height}`


/**
 * “비슷하지만 매번 다른 크기”의 랜덤 이미지 URL을 만듭니다.
 *
 * @param  w     기본 가로 길이(포함)       – 기본값 1000
 * @param  h     기본 세로 길이(포함)       – 기본값  800
 * @param  delta 가·세로 길이 변동 폭       – 기본값  200
 *              실제 길이 범위 = [w, w+delta) , [h, h+delta)
 * @return       예) https://picsum.photos/1063/958
 */
export const randomImage = (
  w: number = 1000,
  h: number = 800,
  delta: number = 200,
): string => {
  // ① w ≤ randomWidth  < w+delta
  // ② h ≤ randomHeight < h+delta
  const randomWidth = U.random(w, w + delta)
  const randomHeight = U.random(h, h + delta)

  return picsumUrl(randomWidth, randomHeight)
}


/**
 * 정사각형 랜덤 아바타(프로필 사진) URL을 만듭니다.
 *
 * @return 예) https://picsum.photos/237/237  // 200 ≤ 한 변 < 400
 */
export const randomAvatar = (): string => {
  const size = U.random(200, 400)   // 200 ~ 399 px 중 하나
  return picsumUrl(size, size)
}

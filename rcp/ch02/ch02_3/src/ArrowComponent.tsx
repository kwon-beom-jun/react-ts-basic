/**********************************************************************
 * ArrowComponent.tsx ────────────────────────────────────────────────
 *  • **함수(화살표) 컴포넌트** 예제
 *  • 특징
 *      ① React가 제공하는 `FC<Props>` 제네릭 타입으로
 *         props 타입을 한 줄에 지정
 *      ② 클래스 컴포넌트처럼 `render()` 필요 없이
 *         함수 본문에서 곧바로 JSX를 **return**
 *      ③ `this` 개념이 없으므로 코드가 간단
 *********************************************************************/

import type { FC } from 'react'          // ① Function Component 타입 가져오기

/* ② Props 타입 정의
 *    부모 컴포넌트가 넘겨줄 데이터의 형태를 명시 */
export type ArrowComponentProps = {
  href: string   // 링크 URL
  text: string   // 앵커 안에 표시할 텍스트
};

/* ③ 화살표 함수 컴포넌트 선언
 *    FC<ArrowComponentProps> 를 명시해 props 타입 안전 확보
 *    (자동으로 children?: ReactNode 도 포함됨)                    */
const ArrowComponent: FC<ArrowComponentProps> = props => {
  // ④ 구조 분해 → 편하게 사용
  const { href, text } = props;

  /* ⑤ JSX 반환: <li> → <a> → <p> 구조
   *    이어서 다른 리스트 항목과 함께 <ul> 등에 끼워 넣기 좋다 */
  return (
    <li>
      <a href={href}>
        <p>{text}</p>
      </a>
    </li>
  );
};

export default ArrowComponent;           // ⑥ 기본(default) 내보내기

/***********************************************************************
 * ClassComponent.tsx ─────────────────────────────────────────────────
 *  • **클래스 컴포넌트** 예제
 *  • 특징
 *      ① React 패키지가 제공하는 `Component` 클래스를 **상속**해야 함
 *         └─ 제네릭 인수로 <Props, State> 타입 제공 (State 없으면 생략)
 *      ② `render()` 메서드를 **반드시** 구현하여 JSX를 반환
 *      ③ `this.props`, `this.state` 사용 → 함수 컴포넌트와 달리 `this`
 *  • 함수 컴포넌트 + Hook 이 권장이지만, _Error Boundary_ 등
 *    특수 용도에 아직 클래스 컴포넌트가 쓰이기도 함
 **********************************************************************/

import { Component } from 'react'      /* ① React Component 기본 클래스 */

/* ② Props 타입 선언 ─ 부모가 넘겨줄 데이터 구조를 명시 */
export type ClassComponentProps = {
  href: string   // 링크 URL
  text: string   // 앵커 안에 표시할 텍스트
}

/* ③ 클래스 컴포넌트 정의
 *    - Component<Props, State> 를 상속
 *    - State 가 없으면 제네릭 두 번째 인수 생략 가능
 */
export default class ClassComponent extends Component<ClassComponentProps> {

  /* ④ render() ─ 화면에 그릴 JSX 를 반환 (필수 메서드) */
  render() {

    // const isLoading = true
    // if (isLoading) return <p>loading...</p>
    // for (let index = 0; index < 10; index++) {}

    /* ⑤ this.props 로 전달받은 값 구조 분해 */
    const { href, text } = this.props

    /* ⑥ JSX 반환: <li> 안에 <a> → <p> 구조 */
    return (
      <li>
        <a href={href}>
          <p>{text}</p>
        </a>
      </li>
    )
  }
}

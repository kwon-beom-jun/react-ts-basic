
/**
  함수 컴포넌트 vs 클래스 컴포넌트 ─ 핵심 비교표
  -----------------------------------------------------------------------------------------
  | 구분                   | 함수 컴포넌트          | 클래스 컴포넌트                          |
  |------------------------|----------------------|---------------------------------------|
  | 생긴 모양               | 그냥 함수 하나         | class … extends React.Component       |
  | 상태(state) 넣기        | useState(…)          | this.state + this.setState()          |
  | 화면 처음·변경 시 할 일   | useEffect(…)         | componentDidMount, componentDidUpdate |
  | 코드 길이               | 짧고 간단              | 길고 this 바인딩까지 신경                |
  | 새 프로젝트 권장         | O (추천)              | X (특수한 경우만)                       |
  -----------------------------------------------------------------------------------------

  1. 함수 컴포넌트 — “UI를 돌려주는 함수”
    function Hello({ name }) {
      return <h1>안녕, {name}!</h1>;
    }
    - 그냥 함수 → 읽기·쓰기 쉽다.
    - useState, useEffect 같은 훅(Hook) 을 넣어 기능을 확장할 수 있다.


  2. 클래스 컴포넌트 — “옛날 방식”
    class Hello extends React.Component {
      render() {
        return <h1>안녕, {this.props.name}!</h1>;
      }
    }
    - 옛날(React 16 이전) 코드에서 많이 보임.
    - 함수형으로는 아직 못 하는 에러 바운더리(전체 앱 보호) 같은 특수 상황에 가끔 사용.
    
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

/**
 * < react의 createElement 함수 >
 * React 18 기준 @types/react 중 핵심 부분만 발췌 + 단순화
 *
 * @typeParam P  - 컴포넌트가 받을 props Shape
 *                 (아래에서 extends {} 제약을 둡니다)
 * @returns      - ReactElement<P>
 */
// declare function createElement<
//     P extends {},                  // ① ‘props는 반드시 객체여야’ 한다는 타입 제약
//     T extends string | JSXElementConstructor<P>
// >(
//     type: T,                       // ② 태그 이름('div') 또는 함수/클래스 컴포넌트
//     props?: Attributes & P | null, // ③ 두 번째 매개변수 = props 객체
//     ...children: ReactNode[]       // ④ 나머지 매개변수는 children 전개
// ): ReactElement<P>;


reportWebVitals()



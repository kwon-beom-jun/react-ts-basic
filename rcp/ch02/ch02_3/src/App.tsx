import ClassComponent from './ClassComponent';
import ArrowComponent from './ArrowComponent';

export default function App() {
  return (

    // 리엑트 컴포넌트 관점에서 속성
    // 객체지향 프로그래밍의 속성 + 재렌더링
    // ──────────────────────────────────────────────────────────
    // 💡 JSX 속성(Props) 기초
    //   · 문자열: "..." → 따옴표만 써도 전달
    //   · 숫자/불리언/객체/배열/함수: { ... } 로 감싸서 전달
    //   · 불리언 true: 속성 이름만 쓰면 = {true}
    //   · 값이 바뀌면 해당 컴포넌트만 리렌더링
    // ──────────────────────────────────────────────────────────
    <ul>
      {/* 문자열 props 예시 */}
      <ClassComponent href="http://www.google.com" text="go to Google" />

      {/* 문자열 props 예시 */}
      <ArrowComponent href="https://twitter.com" text="go to Twitter" />

      {/*
        예시
          // 숫자 전달 예시
          // <ArrowComponent count={5} />

          // 불리언 true 예시
          // <ArrowComponent highlight />

          // 객체 전달 예시
          //    바깥 { … }	JSX 안에서 “여기부터는 자바스크립트 표현식이야”라고 알려 주는 JSX 중괄호
          //    안쪽 { … }	실제로 넘겨 주는 자바스크립트 객체(object) 리터럴
          // <ArrowComponent style={{ color: 'red' }} />

          // 배열 전달 예시
          // <ArrowComponent tags={['react', 'jsx']} />

          // 함수(이벤트 핸들러) 전달 예시
          // <ArrowComponent onClick={() => console.log('clicked')} />
      */}
    </ul>
  );
}

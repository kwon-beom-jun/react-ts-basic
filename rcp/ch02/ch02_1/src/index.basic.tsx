/******************************************************************************
 *  index.tsx ─ React 애플리케이션의 진입점                                     *
 *  ────────────────────────────────────────────────────────────────────────── *
 *  ① <div id="root"> DOM 요소를 찾아 React Root 컨테이너를 생성               *
 *  ② <App /> 트리를 React 18 새 렌더러(createRoot)로 그린다                   *
 *  ③ (선택) reportWebVitals()로 Web Vitals 지표를 수집                        *
 ******************************************************************************/

import React from 'react';
import ReactDOM from 'react-dom/client';

// 전역(Reset·공통) CSS
import './index.css';

// 최상위 컴포넌트 – 모든 페이지가 이곳에서 시작됨
import App from './App';

// 성능 측정 유틸 – 사용 안 할 땐 호출 부분을 삭제해도 무방
import reportWebVitals from './reportWebVitals';

// ---------------------------------------------------------------------------
// ① 실제 브라우저 DOM 안의 <div id="root"></div> 를 가져온 뒤
//    React 18+ 전용 createRoot() API로 “Root 컨테이너”를 만든다.
//    as HTMLElement 캐스팅은 TypeScript에게 “null 아님”을 보장.
// ---------------------------------------------------------------------------
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// ---------------------------------------------------------------------------
// ② 컴포넌트 트리를 Root 컨테이너에 렌더링.
//    <React.StrictMode>는 개발 환경에서만 작동해
//    • 부작용(dangerous side-effects) 두 번 실행
//    • Deprecated API 경고 등 추가 검증
//    → 실제 프로덕션 빌드에는 자동으로 빠져 성능 비용이 없다.
// ---------------------------------------------------------------------------
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// ---------------------------------------------------------------------------
// ③ (선택) Web Vitals 측정.
//    reportWebVitals에 콜백을 넘기면 CLS‧LCP‧FID 값을
//    콘솔 로그·Analytics·Sentry 등으로 전송할 수 있다.
//    미사용 시 호출을 지워도 애플리케이션 동작에는 영향 없음.
// ---------------------------------------------------------------------------
reportWebVitals();


/******************************************************************************
 *  예제: 전통 DOM 조작 vs. React 가상 DOM 렌더링                               *
 *  - 위쪽(주석) : 브라우저 API로 ‘물리 DOM(Physical DOM)’ 직접 생성            *
 *  - 아래쪽     : React 가상 DOM(Virtual DOM) → 브라우저에 그리기             *
 ******************************************************************************/



/* --------------------------------------------------------------------------
 * 1) 물리 DOM: 순수 JavaScript
 * -------------------------------------------------------------------------- */

/*
// import React from 'react'   // 필요 없음 (전통 방식)

// <p>Hello physical DOM world!</p> 노드를 직접 만든다.
let pPhysicalDOM = document.createElement('p');   // 태그 생성
pPhysicalDOM.innerText = 'Hello physical DOM world!';  // 텍스트 삽입

// body 아래에 붙이면 렌더링 끝
document.body.appendChild(pPhysicalDOM);
*/



/* --------------------------------------------------------------------------
 * 2) 가상 DOM: React
 * -------------------------------------------------------------------------- */

import React from 'react';
import ReactDOM from 'react-dom/client';

// (1) 가상 DOM 노드 정의
//     - 첫 번째 인수: 태그 이름  'p'
//     - 두 번째 인수: props     null → 특별 속성 없음
//     - 세 번째 인수: children  'Hello virtual DOM world!'
const pVirtualDOM = React.createElement('p', null, 'Hello virtual DOM world!');

// (2) 실제 DOM 루트 컨테이너 선택
//     HTML 파일의 <div id="root"></div> 를 가져온다.
const rootElement = document.getElementById('root') as HTMLElement;

// (3) React 18 방식으로 “루트 생성” 후 렌더링
//     - createRoot() : 동시성(Concurrent) + Hydration 대응
//     - render()     : 가상 DOM → 실제 DOM diff 후 삽입
const root = ReactDOM.createRoot(rootElement);
root.render(pVirtualDOM);

import React, { useEffect, useState, useRef } from 'react';

const useClick = (onClick) => {
  if (typeof onClick !== 'function') {
    return;
  }
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick);
    } // mount 될 때, element에 값이 있을 면 click 이벤트를 심어준다
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      } // unmount 될 때, element에 값이 있으 면 click 이벤트를 지워준다
      // useEffect를 return 받은 함수는 componentWillUnMount 때 호출 된다.
    };
  }, []); // 빈칸으로 둔 이유는 update되었을 때 고려하지 않아도 됌.
  return element;
};

const App = () => {
  const sayHello = () => console.log('say Hello');
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
};

export default App;

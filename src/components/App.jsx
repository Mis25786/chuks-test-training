// import { useState, useEffect } from 'react';

// const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${value} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {value} times</p>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//     </div>
//   );
// };

//===========================================

// const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log('Mouting phase: same when componentDidMount runs');
//   }, []);

//   return <button onClick={() => setValue(value + 1)}>{value}</button>;
// };

//=================================

// const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log(value);
//     console.log('Updating phase: same when componentDidUpdate runs');
//   }, [value]);

//   return <button onClick={() => setValue(value + 1)}>{value}</button>;
// };

//==========================

// const App = () => {
//   useEffect(() => {
//     console.log('Mounting phase: same when componentDidMount runs');

//     return () => {
//       console.log('Unmounting phase: same when componentWillUnmount runs');
//     };
//   }, []);

//   return null;
// };

//==========================

// const App = () => {
//   const useToggle = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const open = () => setIsOpen(true);
//     const close = () => setIsOpen(false);
//     const toggle = () => setIsOpen(isOpen => !isOpen);

//     return { isOpen, open, close, toggle };
//   };
// };

//===================

// import { useState, useRef, useEffect } from 'react';

// const App = () => {
//   const [value, setValue] = useState(0);
//   const btnRef = useRef();

//   // Буде null на першому рендері
//   // і посиланням на DOM-елемент всі наступні
//   console.log(btnRef.current);

//   useEffect(() => {
//     // Ефект виконується після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log(btnRef.current);
//   });

//   const handleClick = () => {
//     // Кліки будуть після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log(btnRef.current);
//   };

//   return (
//     <>
//       <button onClick={() => setValue(value + 1)}>
//         Update value to trigger re-render
//       </button>
//       <button ref={btnRef} onClick={handleClick}>
//         Button with ref
//       </button>
//     </>
//   );
// };

//=========================================

import { useRef } from 'react';

const Player = ({ source }) => {
  const playerRef = useRef();
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();

  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  );
};

const App = () => {
  return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
};

//!================
export default App;
//!================

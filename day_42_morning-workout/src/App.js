import logo from './logo.svg';
import './App.css';
import { Box } from './Box';
import { useState } from 'react';

function App() {
  const [marginTop, setMarginTop] = useState(100);
  const [marginLeft, setMarginLeft] = useState(100);

  return (
    <div className="App">
      <div className='buttons'>
        <button onClick={() => setMarginTop(marginTop + 10)} >DOWN</button>
        <button onClick={() => setMarginTop(marginTop - 10)} >UP</button>
        <button onClick={() => setMarginLeft(marginLeft + 10)} >-{">"}</button>
        <button onClick={() => setMarginLeft(marginLeft - 10)} >{"<"}-</button>

      </div>
      <Box marginTop={marginTop} marginLeft={marginLeft} />

    </div>
  );
}

export default App;

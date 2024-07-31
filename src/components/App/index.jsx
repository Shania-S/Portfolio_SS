import { useState } from 'react';
import { Banner } from '../Banner';
import { Introduction } from '../Introduction';
import { Skills } from '../Skills';
import { Work } from '../Work';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Banner></Banner>
      <Introduction></Introduction>
      <span>------------------------------#------------------------------</span>
      <Skills></Skills>
      <span>------------------------------#------------------------------</span>
      <Work></Work>
      <div></div>
    </>
  );
}

export default App;

import { useState } from 'react';
import { Banner } from '../Banner';
import { Introduction } from '../Introduction';
import { Skills } from '../Skills';
import { Work } from '../Work';
import { Contact } from '../Contact';
import { Conclusion } from '../Conclusion';
import { Footer } from '../Footer';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className='app-container'>
        <Banner></Banner>
        <div className='main-content'>
          <Introduction></Introduction>
          <span>
            ------------------------------#------------------------------
          </span>
          <Skills></Skills>
          <span>
            ------------------------------#------------------------------
          </span>
          <Work></Work>
          <span>
            ------------------------------#------------------------------
          </span>
          <Contact></Contact>
          <span>
            ------------------------------#------------------------------
          </span>
          <Conclusion></Conclusion>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

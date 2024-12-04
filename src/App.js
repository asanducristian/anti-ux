import React from 'react';
import { MathCaptcha } from 'react-intuitive-components';
import './App.css';
import Hero from './components/Hero';
import { Box } from '@mui/material';
import GetToKnow from './components/GetToKnow';
import FormThank from './components/FormThank';
import Content from './components/Content';

const App = () => {
  const [captchaOpened, setCaptchaOpened] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <div
      className="inline-flex max-h-[100vh]"  // Enable horizontal scroll for the Box
    >
      <div style={{ width: '100vw' }}>
        <Hero style={{ width: '100vw' }} className="w-[100vh]" />
      </div>
      <div style={{ width: '100vw' }}>
        <GetToKnow onSubmit={() => { setSubmitted((prev)=>{return !prev}) }} />
      </div>
      <div style={{ width: '100vw' }}>
        <FormThank submitted={submitted} />
      </div>
      <div style={{ width: '100vw' }}>
        <Content submitted={submitted} />
      </div>

      {/* MathCaptcha popup */}
      {captchaOpened && (
        <MathCaptcha
          onAverage={() => { console.log("YOU AVERAGE"); setCaptchaOpened(false); }}
          onStupid={() => { console.log("YOU STUPID"); setCaptchaOpened(false); }}
          onGenius={() => { console.log("YOU GENIUS"); setCaptchaOpened(false); }}
          onMonkey={() => { console.log("YOU MONKEY"); setCaptchaOpened(false); }}
        />
      )}
    </div>
  );
}

export default App;

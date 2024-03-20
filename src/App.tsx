
import { useState } from 'react';
import './App.css'
import Switch from './comps/switch';
import Header from './comps/header';
import Footer from './comps/footer';

function App() {

  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  const stop = () => {
    setSwitch1(false)
    setSwitch2(false)
    setSwitch3(false)
  }

  return (
    <div className='app-cont0'>
      <Header stop={stop}/>
      <div className='app-cont1'>
        <div className='app-cont2'>
          <Switch bool={switch1} setBool={setSwitch1}/>
          <Switch bool={switch2} setBool={setSwitch2}/>
          <Switch bool={switch3} setBool={setSwitch3}/>
        </div>
        <button>Ready</button>
      </div>
      <Footer name={'Ving'}/>
    </div>
  )
}

export default App

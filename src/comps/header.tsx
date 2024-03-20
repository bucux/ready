
import './css/header.css'

export default function Header({stop} : {stop: ()=>void}) {
  return (
    <div className='header-cont0'>
      <div className='header-cont1'>
        <img src='imgFusee2.png' alt='fusée' style={{width: '100px', height: '100px'}}/>
        <p>Ready To Go</p>
      </div>
      <button className='stop' onClick={stop}>STOP</button>
    </div>
  )
}

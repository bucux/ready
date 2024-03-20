
import './css/header.css'

export default function Header({stop} : {stop: ()=>void}) {
  return (
    <div className='header-cont0'>
      <p>Ready To Go</p>
      <button className='stop' onClick={stop}>STOP</button>
    </div>
  )
}

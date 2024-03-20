

import './css/bouton.css'

export default function Bouton({name, bool, setBool} : {name: string, bool : boolean, setBool: React.Dispatch<React.SetStateAction<boolean>>}) {
  
  const bool2 = name === 'ON' ? bool : !bool // le comportement du bouton OFF est l'inverse de celui du bouton ON

  return (
    <button 
      className='bouton' 
      onClick={()=>{
        if(name === 'ON' && !bool){setBool(!bool)}
        if(name === 'OFF' && bool){ setBool(!bool)}
      }}
      style={{
        color: bool2 ? "white" : "blue",
        backgroundColor: bool2 ? "blue" : "white"
      }}
    >{name}</button>
  )
}
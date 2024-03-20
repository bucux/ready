

import Bouton from './bouton'
import './css/switch.css'

export default function Switch({bool, setBool} : {bool : boolean, setBool: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div className='switch-cont0'>
      <Bouton
        name='ON'
        bool={bool}
        setBool={setBool}
      />
      <Bouton
        name='OFF'
        bool={bool}
        setBool={setBool}
      />
    </div>
  )
}

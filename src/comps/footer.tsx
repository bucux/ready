

import './css/footer.css'

export default function Footer({name} : {name: string}) {
  return (
    <div className='footer-cont0'>Made at <strong>React</strong> at the <strong>Reacteur</strong> by <strong>{name}</strong></div>
  )
}

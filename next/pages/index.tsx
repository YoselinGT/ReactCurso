import Link from 'next/link'
import Image from 'next/image'
import Coffe from '../public/coffe.jpg'

//<Image src='/coffe.jpg' width={400} height={400} alt='coffe'/>
export default function Home() {
  return (
      <div>
        <Link href='/chanchitos'>Ir a chanchitos</Link>
        <p>Hola mundo</p>
        <Image src={Coffe} width={400} height={400} alt='coffe'/>
      </div>

  )
}

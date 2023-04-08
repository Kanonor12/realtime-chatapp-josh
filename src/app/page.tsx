import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
   weight: ['100', '300', '500', '700'],
   subsets: ['latin'] 
  })

export default function Home() {
  return (
    <h1 className='text-rose-700 text-2xl'>Hello World</h1>
  )
}

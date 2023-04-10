'use client'

import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { FC } from 'react'
import { buttonVariants } from '../ui/Button'
import SignInButton from '../SignInButton'
import Container from '../Container'
import Logo from './Logo'
import Policy from '../Policy'


const Navbar =  () => {
    //const session = await getServerSession
  return(
     <div className='fixed backdrop-blur-sm bg-purple-300 dark:bg-purple-900 z-50 top-0 left-0 right-0 h-20 border-b border-purple-300 dark:border-purple-700 shadow-sm flex items-center justify-between'>
        <Container >
            <div>
              <Policy />
              <div>
                
              </div>
            </div>
            <div className='flex p-6 flex-row items-center justify-between gap-3 md-gap-0'>
              <Link href='/' className={`py-6 ${buttonVariants({variant: 'link'})}`}>
                <Logo/>
              </Link>
            <div className='text-white text-xl'>Menu</div>
            <SignInButton/>  
            </div>
            
        </Container>
      
     </div>
  ) 
 
}

export default Navbar
'use client'

import { FC, useState } from 'react'
import Button from './ui/Button'
import { toast } from 'react-hot-toast'

interface SignInButtonProps {
  
}

const SignInButton: FC<SignInButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleClick = () => {
      setIsLoading(true)
      console.log("handleClick")
      toast.success('You have successfully signed in')
    }
  return (

    <Button className='text-white text-lg' onClick={handleClick} isLoading={isLoading} variant='ghost'>
        Sign in
    </Button>
  )
}

export default SignInButton
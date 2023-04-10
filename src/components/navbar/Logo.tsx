'use client';

import Image from "next/image";
import { useRouter } from "next/router";

import logo from '../../../public/images/logo.png'

const Logo = () => {
  return (
  <Image
   alt="Logo"
   className="hidden md:block cursor-pointer"
   height="200"
   width="200"
   src={logo}
  />
  )
}

export default Logo
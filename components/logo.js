import Image from "next/image"
import React from "react"

const Logo = () => {
  return (

    <div class="flex items-center space-x-2">
      <div class="">
          {/* <Image
            priority
            src="/images/profile.jpg"
            height={40}
            width={40}
          /> */}
      </div>
      <h1 class="font-bold text-gl">Carsten Böhm</h1>
    </div>
  )
}

export default Logo

'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import React from 'react'

const EventInfo = () => {
    const router = usePathname()
    console.log(router)
    return (<p>Post: {1}</p>)
}

export default EventInfo;
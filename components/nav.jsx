'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Nav() {
  const router = useRouter()

  return (
    <div className="nav-container">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/rsvp">RSVP</Link>
        <Link href="/how-to-get-there">How To Get There</Link>
        <Link href="/where-to-stay">Where To Stay</Link>
      </nav>
    </div>
  )
}
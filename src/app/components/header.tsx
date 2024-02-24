import React from "react"
import Link from "next/link"

function Header() {
  return (
    <header className="flex">
      <div className="grow"></div>
      <ul className="flex">
        <li className="px-5 py-4 text-lg">
          <Link href="/">Home</Link>
        </li>
        <li className="px-5 py-4 text-lg">
          <Link href="/performance">Performance</Link>
        </li>
        <li className="px-5 py-4 text-lg">
          <Link href="/reliability">Reliability</Link>
        </li>
        <li className="px-5 py-4 text-lg">
          <Link href="/scale">Scale</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header

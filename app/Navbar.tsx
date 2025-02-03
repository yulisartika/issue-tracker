// cause navbar component here is not reuseable (only used once, then just put this component on the app folder)
"use client" // used when the component has something that's processed on the client side 

import React from 'react'
import Link from 'next/link'
import { FaBug } from 'react-icons/fa'
import { usePathname } from 'next/navigation' // this hook depends on browser APIs, so use client component
import classnames from 'classnames'

const Navbar = () => {
    const currentPath = usePathname()

    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' },
    ]
    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href="/"><FaBug /></Link>
            <ul className='flex space-x-6'>
                {links.map(link =>
                    <Link
                        key={link.href}
                        className={classnames({
                            'text-zinc-900': link.href === currentPath,
                            'text-zinc-500': link.href !== currentPath,
                            'hover:text-zinc-800 transition-colors': true,
                        })} //`${link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500'} hover:text-zinc-800 transition-colors`
                        href={link.href}
                    >
                        {link.label}
                    </Link>)
                }
            </ul>
        </nav>
    )
}

export default Navbar
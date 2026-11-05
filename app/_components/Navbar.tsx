"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Navbar() {
    const baseClass="block rounded-full px-3 py-1.5 text-sm text-stone-600 transition hover:bg-orange-50 hover:text-orange-900"
    const activeClass="block rounded-full bg-orange-800 px-3 py-1.5 text-sm text-white"
    const path = usePathname();
    return (
        <nav className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/85 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
                <Link href="/" className="text-xl font-semibold tracking-tight text-stone-900">
                    Meals
                </Link>
                <ul className="flex flex-wrap items-center justify-end gap-1">
                    <li>
                        <Link href="/" className={path==="/"?activeClass:baseClass}>Home</Link>
                    </li>
                    <li>
                        <Link href="/Category" className={path==="/Category"?activeClass:baseClass}>Category</Link>
                    </li>
                    <li>
                        <Link href="/Search" className={path==="/Search"?activeClass:baseClass}>Search</Link>
                    </li>
                    <li>
                        <Link href="/Filter" className={path==="/Filter"?activeClass:baseClass}>Filter</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

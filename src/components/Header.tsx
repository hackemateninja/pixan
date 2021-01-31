import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import Menu from './Menu'
import { MENU } from '@/const/index'
import { Bag, Love, Hamburger, Search } from './Icons'
import { useState } from 'react'

export default function Header() {
	const [toggleMenu, setToggleMenu] = useState(false)

	return (
		<header className="">
			<div className="w-full h-2 main-gradient" />
			<nav className="md:px-20 px-5 bg-backStrong-50 dark:bg-backDark-700 h-20">
				<div className="w-full h-full flex items-center justify-between">
					<div className="lg:w-1/3 flex items-center justify-start">
						<Link href="/">
							<a className="lg:w-1/12">
								<Image
									src="/header-logo.png"
									alt="Pixan ghost template"
									height={55}
									width={40}
									className="pointer-scale"
								/>
							</a>
						</Link>
						<ul className="lg:flex hidden w-2/3 justify-evenly">
							{MENU.TOP_MENU.map((route) => (
								<Menu route={route} key={route.path} />
							))}
						</ul>
					</div>
					<div className="hidden w-2/3 lg:w-1/3 md:flex items-center justify-center border border-primary-400">
						<Search className="icon-svg ml-2"/>
						<input
							type="search"
							placeholder="search"
							className="w-full text-color-700 dark:text-color-200 placeholder-color-400 border-0 focus:ring-0 bg-transparent text-color-200"
						/>
					</div>
					<div className="lg:w-1/3 md:w-1/12 w-2/3 flex items-center justify-end">
						<Search className="icon-svg block md:hidden mx-2" />
						<Bag className="icon-svg hidden lg:block" />
						<Love className="icon-svg mx-1 hidden lg:block" />
						<div className="hidden lg:flex">
							<Button route="/login" title="Sign in" />
						</div>
						<div className="main-gradient p-1 flex lg:hidden">
							<button className="button" onClick={() => setToggleMenu((prevState) => !prevState)}>
								<Hamburger className="icon-svg" />
							</button>
						</div>
						{toggleMenu ? (
							<div className="flex flex-col items-center justify-between bg-back lg:hidden dark:bg-backDark-700 top-20 absolute z-10">
								<div className="w-full h-2 main-gradient" />
								<ul className="text-center mx-10">
									{MENU.TOP_MENU.map((route) => (
										<Menu route={route} key={route.path} />
									))}
								</ul>
							</div>
						) : null}
					</div>
				</div>
			</nav>
		</header>
	)
}

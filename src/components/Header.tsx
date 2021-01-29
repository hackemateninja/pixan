import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import Menu from './Menu'
import { MENU } from '@/const/index'
import {Bag, Love, Hamburger} from "./Icons";

export default function Header() {
	return (
		<header>
			<div className="w-full h-2 main-gradient" />
			<nav className="w-full md:px-20 px-5 bg-backStrong-50 dark:bg-backDark-700 h-20">
				<div className="w-full h-full flex items-center justify-between">
					<Link href="/">
						<a>
							<Image
								src="/header-logo.png"
								alt="Pixan ghost template"
								height={55}
								width={40}
								className="pointer-scale"
							/>
						</a>
					</Link>
					<ul className="h-full md:flex flex-row items-center xl:w-1/3 md:w-2/3 hidden justify-evenly">
						{MENU.TOP_MENU.map((route) => (
							<Menu route={route} key={route.path} />
						))}
					</ul>
					<div className="h-full flex items-center justify-between">
						<Bag className="icon-svg" />
						<Love className="icon-svg" />
						<div className="hidden md:flex">
							<Button route="/login" title="Sign in" />
						</div>
						<div className="main-gradient p-1 flex md:hidden">
							<button className="button">
								<Hamburger className="icon-svg" />
							</button>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}

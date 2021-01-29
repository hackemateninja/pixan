import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'
import { useRouter } from 'next/router'
import { TOP_MENU } from '@/const/index'
import IconButton from '@/components/IconButton'

export default function Header() {
	const router = useRouter()

	return (
		<header>
			<div className="w-full h-2 main-gradient" />
			<nav className="w-full md:px-20 px-5 bg-backStrong-50 dark:bg-backDark-700 h-20 shadow">
				<div className="w-full h-full flex items-center justify-between">
					<Link href="/">
						<Image
							src="/header-logo.png"
							alt="Pixan ghost template"
							height={65}
							width={55}
							className="cursor-pointer transform hover:scale-110 transition duration-200"
						/>
					</Link>
					<ul className="h-full md:flex flex-row items-center xl:w-1/3 md:w-2/3 hidden justify-evenly">
						{TOP_MENU.map((route) => {
							const active = router.pathname === route.path
							return (
								<li key={route.path}>
									<Link href={route.path}>
										<a
											className={`text-sm hover:text-green-400 ${
												active ? 'text-green-400' : 'dark:text-gray-200'
											}`}
										>
											{route.name}
										</a>
									</Link>
								</li>
							)
						})}
					</ul>
					<div className="h-full flex items-center justify-between">
						<IconButton route="/cart" icon="bag" />
						<IconButton route="/wish-list" icon="love" />
						<Button route="/login" title="Sign in" />
						<div className="main-gradient p-1 flex md:hidden">
							<button className="button">
								<svg
									className="w-6 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}

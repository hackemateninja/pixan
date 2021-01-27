import Link from 'next/link';
import {useRouter} from "next/router";
import {TOP_MENU} from "@/const/index";

export default function Header() {

	const router = useRouter();

	return (
		<header>
			<div className="w-full h-2 bg-gradient-to-r from-green-200 via-green-300 to-green-500"/>
			<nav className="w-full md:px-20 px-5 bg-white dark:bg-gray-700 h-20 shadow">
				<div className="w-full h-full flex items-center justify-between">
					<Link href="/">
						<img
							src="/header-logo.png"
							alt="pixan ghost templates"
							className="cursor-pointer h-3/4 transform hover:scale-110 motion-reduce:transform-none"
						/>
					</Link>
					<ul className="h-full md:flex flex-row items-center xl:w-1/3 md:w-2/3 hidden justify-evenly">
						{TOP_MENU.map(route => {
							const active = router.pathname === route.path;
							return(
								<li key={route.path}>
									<Link href={route.path}>
										<a className={`text-sm hover:text-green-400 ${active ? 'text-green-400': 'text-gray-500 dark:text-gray-100' }`}>
											{route.name}
										</a>
									</Link>
								</li>
							)
						})}
					</ul>
					<div className="h-full flex items-center justify-between">
						<svg
							className="w-6 h-6 cursor-pointer"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-gray-500 dark:text-green-400 hover:text-green-400"
								strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
							/>
						</svg>
						<svg
							className="w-6 h-6 mx-2 cursor-pointer"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-gray-500 dark:text-green-400 hover:text-green-400"
								strokeWidth={2}
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
						<Link href="/login">
							<div className="bg-gradient-to-r from-green-200 via-green-300 to-green-500 p-1 hidden md:flex">
								<button className="text-gray-500 bg-white hover:bg-transparent dark:bg-gray-600 dark:text-white text-xs md:text-sm px-5 py-1">
									Sign In
								</button>
							</div>
						</Link>
						<div className="bg-gradient-to-r from-green-200 via-green-300 to-green-500 p-1 flex md:hidden">
							<button className="text-gray-500 bg-white hover:bg-transparent dark:bg-gray-600 dark:text-white text-sm px-5 py-1">
								<svg
									className="w-6 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										className="dark:text-white text-gray-500"
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
	);
};


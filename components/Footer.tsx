import {TOP_MENU} from "@/const/index";
import Link from "next/link";
import Image from "next/image";
import {useIsDark} from "@/hooks/index";

export default function Footer(){

	const isDark = useIsDark();

	return(
		<footer className="dark:bg-backDark-700 bg-backStrong-50 text-sm w-full bottom-0 absolute md:px-20 px-5 py-3">
			<nav className="flex flex-col items-center justify-evenly w-full">
				<Link href="/">
					{isDark ?
						(
							<Image
								src="/white_logo.png"
								alt="Pixan ghost template"
								height={100}
								width={200}
								className="cursor-pointer transform hover:scale-110 transition duration-200"
							/>
						):
						(
							<Image
								src="/dark_logo.png"
								alt="Pixan ghost template"
								height={100}
								width={200}
								className="cursor-pointer transform hover:scale-110 transition duration-200"
							/>
						)
					}
				</Link>
				<ul className="flex flex-col md:flex-row items-center w-full justify-evenly">
					{TOP_MENU.map(route => {
						return(
							<li key={route.path} className="sm:my-1">
								<Link href={route.path}>
									<a className="text-sm hover:text-green-400 dark:text-gray-300 text-gray-500">
										{route.name}
									</a>
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</footer>
	)
}

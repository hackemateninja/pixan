import Link from 'next/link'
import Image from 'next/image'
import Menu from './Menu'
import { MENU } from '@/const/index'
import { useIsDark } from '../hooks'
import { GitHub, Instagram, LinkedIn, Twitter, YouTube } from './Icons'

export default function Footer() {
	const isDark = useIsDark()


	return (
		<footer className="dark:bg-backDark-700 bg-backStrong-50 text-sm w-full bottom-0">
			<div className="w-full h-2 main-gradient" />
			<div className="flex flex-col items-center justify-around w-full md:px-20 px-5 py-8">
				<Link href="/">
					<a>
						<Image
							src={`${isDark ? '/white_logo.png' : '/dark_logo.png'}`}
							alt="Bushido Labs"
							height={100}
							width={200}
							className="pointer-scale"
						/>
					</a>
				</Link>
				<ul className="flex flex-col md:flex-row items-center md:w-3/5 lg:w-3/6 justify-evenly py-5">
					{MENU.BOTTOM_MENU.map((route) => (
						<Menu route={route} key={route.path} />
					))}
				</ul>
				<div className="flex flex-row items-center w-full md:w-3/12 justify-evenly py-3">
					<a href="" target="_blank">
						<Instagram className="icon-svg" />
					</a>
					<a href="" target="_blank">
						<GitHub className="icon-svg" />
					</a>
					<a href="" target="_blank">
						<LinkedIn className="icon-svg" />
					</a>
					<a href="" target="_blank">
						<Twitter className="icon-svg" />
					</a>
					<a href="" target="_blank">
						<YouTube className="icon-svg" />
					</a>
				</div>
				<a href="https://bushidolabs.io" target="_blank" className="mt-2">
					<Image
						src={`${isDark ? '/white_bushido.png' : '/dark_bushido.png'}`}
						alt="Bushido Labs"
						height={50}
						width={100}
						className="pointer-scale"
					/>
				</a>
			</div>
		</footer>
	)
}

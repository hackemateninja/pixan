import Link from 'next/link';

interface IconButton{
	route: string,
	icon: string,
}

export default function IconButton({route, icon}: IconButton){
	switch (icon){
		case 'bag':
			return(
				<Link href={route}>
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
							className="dark:text-green-400 hover:text-green-400 dark:hover:text-white"
							strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
						/>
					</svg>
				</Link>
			);
		case 'love':
			return(
				<Link href={route}>
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
							className="dark:text-green-400 hover:text-green-400 dark:hover:text-white"
							strokeWidth={2}
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						/>
					</svg>
				</Link>
			);
		default:
			return null;
	}
}

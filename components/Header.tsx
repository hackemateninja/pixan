import Link from 'next/link';


export default function Header() {

	return (
		<header>
			<div className="w-full h-3 bg-gradient-to-r from-green-200 via-green-300 to-green-500"/>
			<nav className="w-full px-20 bg-white h-20 shadow">
				<div className="w-full h-full flex items-center justify-between">
					<Link href="/">
						<img src="/header-logo.png" alt="pixan ghost templates" className="cursor-pointer h-full" />
					</Link>
					<ul className="h-full flex flex-row items-center w-1/3 justify-evenly">
						<li className="">
							<Link href="/about">
								<a>About</a>
							</Link>
						</li>
						<li>
							<Link href="/pricing" >
								<a>Pricing</a>
							</Link>
						</li>
						<li>
							<Link href="/templates">
								<a>Templates</a>
							</Link>
						</li>
						<li>
							<Link href="/use-cases">
								<a>Use cases</a>
							</Link>
						</li>
					</ul>
					<div className="h-full flex items-center justify-between">
						<Link href="login">
							<button className="">
								Sign In
							</button>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};


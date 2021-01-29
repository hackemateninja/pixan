import Link from "next/link";
import { useRouter } from 'next/router'

export default function Menu({route}){
	const router = useRouter();
	const active = router.pathname === route.path
	return (
		<li key={route.path} className="py-2 md:py-0">
			<Link href={route.path}>
				<a className={`text-sm hover:text-primary-400 ${active ? 'text-primary-400' : 'dark:text-color-300'}`}>
					{route.name}
				</a>
			</Link>
		</li>
	)
}

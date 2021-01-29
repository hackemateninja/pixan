import Link from "next/link";

interface Button{
	route:string,
	title: string
}

export default function Button({route, title}:Button){
	return(
		<Link href={route}>
			<a>
				<div className="main-gradient p-1">
					<button className="button text-color">
						{title}
					</button>
				</div>
			</a>
		</Link>
	);
}

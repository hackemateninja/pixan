import Image from 'next/image';
import Link from 'next/link';
import {Default} from "../layouts/index";
import {META} from "@/const/index";


export default function Notfound(){
	return(
		<Default meta={META.ERROR_META}>
			<main className="flex flex-col items-center justify-evenly h-full w-full py-8">
				<Image
					src="/404.png"
					alt="404 page not found"
					width={800}
					height={600}
					layout="intrinsic"
				/>
				<Link href="/">
					<div className="main-gradient p-1">
						<button className="button">
							Go Home
						</button>
					</div>
				</Link>
			</main>
		</Default>
	)
}

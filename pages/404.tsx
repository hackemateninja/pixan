import Image from 'next/image';
import Link from 'next/link';
import {Default} from "@/layouts/index";
import {META} from "@/const/index";


export default function Notfound(){
	return(
		<Default meta={META.ERROR_META}>
			<main className="flex flex-col items-center justify-start h-full w-full">
				<Image
					src="/404.png"
					alt="404 page not found"
					width={800}
					height={600}
					layout="intrinsic"
				/>
				<Link href="/">
					<div className="bg-gradient-to-r from-green-200 via-green-300 to-green-500 p-1">
						<button className="text-gray-500 bg-white hover:bg-transparent dark:bg-gray-600 dark:text-white text-base px-10 py-2">
							Go Home
						</button>
					</div>
				</Link>
			</main>
		</Default>
	)
}

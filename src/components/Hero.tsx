import Image from 'next/image'
import heroStyle from '@/styles/hero.module.css'
import { useIsDark } from '@/hooks/index'
import Button from "@/components/Button";

export default function Hero() {
	const isDark = useIsDark()

	return (
		<div className={heroStyle.Hero}>
			<Image src="/header-logo.png" width={125} height={155} layout="intrinsic" className="animate-pulse"/>
			<Image
				src={isDark ? '/white_logo_title.png' : '/dark_logo_title.png'}
				layout="intrinsic"
				width={400}
				height={200}
				className="animate-pulse"
			/>
			<h1 className="font-medium text-4xl md:text-6xl">Ghost Power</h1>
			<h2 className="text-l md:text-xl text-center font-mono my-5">Taking ghost engagement to the next level</h2>
			<Button route="/pricing" title="Get Starter"/>
		</div>
	)
}

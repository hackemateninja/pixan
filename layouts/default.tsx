
import Head from 'next/head';
import { useRouter } from 'next/router';
import {Header, Footer} from "@/components/index";

export default function Default({ children, meta: pageMeta }) {
	const router = useRouter();
	const meta = {
		title: 'Pixan',
		description: 'Comments and templates for ghost',
		cardImage: '/og.jpg',
		...pageMeta
	};

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta charSet="utf-8" />
				<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<meta name="robots" content="follow, index" />
				<link rel="shortcut icon" href="/favicon.ico"/>
				<meta content={meta.description} name="description" />
				<meta
					property="og:url"
					content={`https://pixan.pro${router.asPath}`}
				/>
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content={meta.title} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.cardImage} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@pixan" />
				<meta name="twitter:title" content={meta.title} />
				<meta name="twitter:description" content={meta.description} />
				<meta name="twitter:image" content={meta.cardImage} />
			</Head>
			<Header />
			<div>{children}</div>
			<Footer />
		</>
	);
}

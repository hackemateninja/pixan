import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en">
				<Head />
				<body className="bg-back dark:bg-backDark-600 text-color-500 dark:text-color-200">
				<Main />
				<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument

import Head from 'next/head'
import {Default} from "@/layouts/index";
import {Hero} from "@/components/index";


const meta = {
  title: "Ghost power",
  description: "ghost power index"
}

export default function Home() {
  return (
    <Default meta={meta}>
      <Hero />
      hello world pixan
    </Default>
  )
}

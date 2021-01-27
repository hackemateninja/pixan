import Head from 'next/head'
import {Default} from "@/layouts/index";


const meta = {
  title: "Ghost power",
  description: "ghost power index"
}

export default function Home() {


  return (
    <Default meta={meta}>
      hello world pixan
    </Default>
  )
}

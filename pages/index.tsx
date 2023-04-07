import Head from 'next/head'
import { Inter } from '@next/font/google'
import Button from '@/components/atoms/Button'
import { ComponentType } from "@/Enums/componentType"
import Title from '@/components/atoms/Title'
import Tag from '@/components/atoms/Tag'
import Category from '@/components/atoms/Category'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Lars</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button model={{text:"test 1", link:"/", type: ComponentType.Primary }} />
      <Button model={{text:"test 2", link:"/", type: ComponentType.Secondary }} />
      <Title text="Hello World" size="small" />
      <Title text="Hello World" />
      <Title text="Hello World" size="large" />
      <Tag text="Primary Tag" />
      <Tag text="Secondary Tag" variant="secondary" />
      <Tag text="Tag with Icon" />
      <Category text='Test' />
      <Category text='Test 2' variant='secondary'/>
      </main>
    </>
  )
}

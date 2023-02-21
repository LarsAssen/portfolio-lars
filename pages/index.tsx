import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useQuery } from '@apollo/client';
import QUERY_COUNTRIES from '../src/graphql/CountriesQuery.graphql';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data, loading, error } = useQuery(QUERY_COUNTRIES);
  console.log("data:", data)
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
      {loading && <p>loading...</p>}
      {!loading && data.countries.map((country:any) => (
          <div key={country.code}>{country.name}</div>
        ))}
      </main>
    </>
  )
}

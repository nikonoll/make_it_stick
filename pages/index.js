import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header';

const Home = props => {
  return (
    <div>
      <Header></Header>
      <div className="">
        <Head className="flex">
          <title >Make it stick</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="p-4 l:p-16 content-center flex-wrap">
          <h1 className="text-xl font-bold text-gray-700">
            Welcome to <span className="text-blue-500">MakeItStick!</span>
          </h1>
          <p className="text-base">
            Learn connected, learn better! Start by choosing a subject:
        </p>

          <div className="">
            {props.decks.map(deck => (
              <Link href="/deck/[id]" as={`/deck/${deck.id}`}>
                <div className="l:w-1/3 max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 l:p-16 l:m-16 cursor-pointer">
                  <h3 className="font-bold text-xl mb-2">{deck.title} &rarr;</h3>
                  <p className="text-base text-gray-700">{deck.description}</p>
                  <div class="px-6 py-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#food</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#general</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#fancy</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>

      </div>
      <footer></footer>
    </div>
  )
}
export default Home

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/decks')
  const decks = await res.json();
  return { props: { decks } }
}
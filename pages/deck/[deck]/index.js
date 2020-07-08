import { useRouter } from 'next/router';
import useSWR from 'swr';
import Header from '../../../components/header';
import Link from 'next/link';
import fetcher from '../../../helper/swr_fetcher'

function DeckWrapper() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.deck && `/api/deck/${query.deck}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <Header></Header>
      <h1 className="text-2xl text-gray-700 p-4">{data.title} </h1>
      <p className="text-l p-4">{data.description}</p>
      <p className="p-4">Includes {data.cardCount} cards. | Author: Alfred Admin </p>
      <Link href="/deck/[id]/study" as={`/deck/${data.id}/study`}>
        <button className="m-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Learning</button>
      </Link>
      <style jsx>{`

      `}</style>
    </div>
  )
}

export default DeckWrapper
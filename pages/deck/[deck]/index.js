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
    <div className="container">
      <Header></Header>
      <h1>{data.title} </h1>
      <p>{data.description}</p>
      <p>Includes {data.cardCount} cards.</p>
      <p>Author:</p>
      <Link href="/deck/[id]/study" as={`/deck/${data.id}/study`}>
      <a>
        <button>Start Learning</button>
      </a>
      </Link>
      <style jsx>{`

      `}</style>
    </div>
  )
}

export default DeckWrapper
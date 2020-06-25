import { useRouter } from 'next/router'
import useSWR from 'swr'
import Header from '../../../components/header'
import fetcher from '../../../helper/swr_fetcher'

export default function StudyDeck(){
    const { query } = useRouter()
    const { data, error } = useSWR(
        () => query.deck && `/api/deck/${query.deck}/next_card`,
        fetcher
    )

    if(error) return <div>{error.message}</div>
    if(!data) return <div>Loading ...</div>

    return (
        <div>
        <Header/>
            <div>Study mode</div>
            <p>We are in deck xyz with id {data.deckId}</p>
            <p>Question is {data.question}</p>
            <p>Answer is {data.answer}</p>
            <p>How was that?</p>
            <p>easy  |  ok  |  hard</p>
        </div>
    )
}
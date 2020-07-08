import { useRouter } from 'next/router'
import useSWR from 'swr'
import fetcher from '../../../helper/swr_fetcher'
import LoadingCircle from '../../../components/loading_circle'
import CardWrapper from '../../../components/study/card_wrapper'


export default function StudyDeck(props){
    const { query } = useRouter()
    const { data, error } = useSWR(
        () => query.deck && `/api/deck/${query.deck}/next_card`,
        fetcher
    )

    if(error) return <div>{error.message}</div>
    if(!data) return <div><LoadingCircle/></div>

    return (
        <div className="">
            <CardWrapper deckId={data.deckId} question={data.question} answer={data.answer} />
        </div>
    )
}

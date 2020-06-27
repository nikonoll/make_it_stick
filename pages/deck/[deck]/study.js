import { useRouter } from 'next/router'
import useSWR from 'swr'
import fetcher from '../../../helper/swr_fetcher'
import LoadingCircle from '../../../components/loading_circle'
import StudyWrapper from '../../../components/study/study_wrapper'


export default function StudyDeck(props){
    const { query } = useRouter()
    const { data, error } = useSWR(
        () => query.deck && `/api/deck/${query.deck}/next_card`,
        fetcher
    )

    if(error) return <div>{error.message}</div>
    if(!data) return <div><LoadingCircle/></div>

    return (
        <StudyWrapper deckId={data.deckId} question={data.question} answer={data.answer}/>
    )
}

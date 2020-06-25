import { useRouter } from 'next/router'
import useSWR from 'swr'
import Header from '../../../components/header'
import Card from '../../../components/study/card'
import ActionBar from '../../../components/study/action_bar'
import fetcher from '../../../helper/swr_fetcher'
import LoadingCircle from '../../../components/loading_circle'


export default function StudyDeck(props){
    const { query } = useRouter()
    const { data, error } = useSWR(
        () => query.deck && `/api/deck/${query.deck}/next_card`,
        fetcher
    )

    if(error) return <div>{error.message}</div>
    if(!data) return <div><LoadingCircle/></div>

    return (
        <div>
        <Header deckId={data.deckId}/>
        <Card question={data.question} answer={data.answer} flipped={props.flipped}/>
        <ActionBar flipped={props.lipped} learned={props.learned}/>
        </div>
    )
}

StudyDeck.defaultProps = {
    flipped: false,
    learned: false,
};
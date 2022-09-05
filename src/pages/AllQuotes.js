import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'Charanvir',
        text: 'Opportunities dont happen, you create them'
    },
    {
        id: 'q2',
        author: 'Simrin',
        text: 'It is never too late to be what you might have been'
    },
]

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
    )
}

export default AllQuotes;
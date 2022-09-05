import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

    if (!quote) {
        return <p>No quote found!</p>
    }

    return (
        <Fragment>
            <h1>Viewing a Quote by: {quote.author}</h1>
            <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>

            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments></Comments>
            </Route>

        </Fragment>
    )
}

export default QuoteDetail;
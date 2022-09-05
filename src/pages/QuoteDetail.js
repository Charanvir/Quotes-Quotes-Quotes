import { useParams } from "react-router-dom";

const QuoteDetail = () => {
    const params = useParams();
    console.log(params)

    return (
        <h1>{params.quoteId}</h1>
    )
}

export default QuoteDetail;
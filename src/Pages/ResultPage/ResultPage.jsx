import { Link, useParams } from "react-router-dom";

function ResultPage(){

    const {score} = useParams();
    return (
        <div>
            <h1>Your Current Score: {score}</h1>
            <Link to={'/'}><button>Go Home</button></Link>            
        </div>
    );
}

export default ResultPage;
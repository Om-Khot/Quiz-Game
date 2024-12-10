import { useContext, useEffect, useState } from "react";
import QueContext from "../Context/QueContext";
import axios from 'axios';
import { Link } from "react-router-dom";
import addArrayEle from "../Helpers/addArrayEle";
import shuffleOptions from "../Helpers/shuffleArray";
function QuestionCompo(){

    const {list} = useContext(QueContext);

    const [isLoading,setIsLoading] = useState(true);
    async function fetchQuestion() {
        const response = await axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
        const responseData = response.data.results;
        const responsePromise = await axios.all(responseData);
        let idx = 1;
        const res = responsePromise.map((que)=>{

            let rightAns = que.correct_answer;
            let wrongAns = que.incorrect_answers;
            let arr = addArrayEle(rightAns,wrongAns);
            arr = shuffleOptions(arr);

            list.push({
                id : idx++,
                question : que.question,
                rightAns : que.correct_answer,
                options : arr,
                isAnswered: false,
            })
        })
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchQuestion();
    },[]);
    
    return(
        <div>
            <h1>Welcome to Quiz </h1>
            {isLoading ? "Loading....." : <h3>Your context is ready </h3>}
            {isLoading ? "" : <Link to={'/play'}><button>Play Game</button></Link>}           
        </div>
    );
}

export default QuestionCompo;
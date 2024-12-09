import { useContext, useEffect } from "react";
import QueContext from "../Context/QueContext";
import axios from 'axios';
import { Link } from "react-router-dom";
function QuestionCompo(){

    const {list} = useContext(QueContext);

    async function fetchQuestion() {
        const response = await axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
        const responseData = response.data.results;
        // console.log(responseData);
        const responsePromise = await axios.all(responseData);
        let idx = 1;
        const res = responsePromise.map((que)=>{
            list.push({
                id : idx++,
                question : que.question,
                rightAns : que.correct_answer,
                wrongAns : que.incorrect_answers
            })
        })

        console.log(list);
    }

    useEffect(()=>{
        fetchQuestion();
    },[]);
    
    return(
        <div>
            <h1>Welcome to Quiz </h1>
            <h3>Your context is ready </h3>
            <Link to={'/play'}><button>Play Game</button></Link>
            
        </div>
    );
}

export default QuestionCompo;
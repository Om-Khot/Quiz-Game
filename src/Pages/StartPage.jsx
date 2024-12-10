import { useContext, useEffect, useReducer, useState } from "react";
import QueContext from "../Context/QueContext";
import DisplayQue from "../Components/DisplayQue";
import './StartPage.css';
import { useNavigate } from "react-router-dom";
import ScoreContext from "../Context/scoreContext";
import DispatchContext from "../Context/dispatchContext";
import setScoreReducer from "../Reducer/setScoreReducer";
import QueStatusReducer from "../Reducer/QueStatusReducer";
import QueStatusContext from "../Context/QueStatusContext";
import ChangeStatusContext from "../Context/changeStatusContext";
function StartPage(){

    const {list} = useContext(QueContext);

    console.log(list);
    const [queId,setqueId] = useState(1);  
    const [score,dispatch] = useReducer(setScoreReducer,0);  
    const [status,changeStatus] = useReducer(QueStatusReducer,new Array(11).fill(false));
    const navigate = useNavigate();

    useEffect(()=>{
        
    },[queId]);


    const onSubmitHandler = ()=>{
        const userConfirmed = window.confirm("Are you sure you want to submit the quiz?");
        if (userConfirmed) {
            navigate(`scoreCard/${score}`);
        }
    }

    return (
        <ScoreContext.Provider value={{score}}>
            <DispatchContext.Provider value={{dispatch}}>
                <QueStatusContext.Provider value={{status}}>
                        <ChangeStatusContext.Provider value={{changeStatus}}>
                        <div className="playPage">
                            <div className="queNo">
                                <div>Question No. {queId}</div>
                            <div>
                                <span> Score:  {score}   </span>
                                <button onClick={onSubmitHandler}>
                                    Submit
                                </button>                            
                            </div> 
                    
                        </div>
                        <div>
                            {list.map((q)=>{                   
                                if(q.id == queId){
                                    return(
                                        <DisplayQue key={q.id} queText={q.question} options={q.options} rtAns={q.rightAns} iD={q.id} isAnswer={q.isAnswered}/>
                                    );                       
                                }
                            })}                
                        </div>
                        <div className="playBtns">
                            <button disabled={queId == 1} onClick={()=>{
                                setqueId(queId-1);
                            }}>Prev</button>

                            <button disabled={queId == 10} onClick={()=>{
                                setqueId(queId+1);
                            }}>Next</button>               
                    
                        </div>
                    </div>
                        </ChangeStatusContext.Provider>
                </QueStatusContext.Provider>                
            </DispatchContext.Provider>            
        </ScoreContext.Provider>
        
    );
}

export default StartPage;
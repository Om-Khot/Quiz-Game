import { useContext, useEffect, useState } from "react";
import QueContext from "../Context/QueContext";
import DisplayQue from "../Components/DisplayQue";
import './StartPage.css';
function StartPage(){

    const {list} = useContext(QueContext);
    const [queId,setqueId] = useState(1);    

    useEffect(()=>{
        
    },[queId]);


    return (
        <div className="playPage">
            <div className="queNo">Question No. {queId}</div>
            <div>
                {list.map((q)=>{                   
                    if(q.id == queId){
                        return(
                            <DisplayQue key={q.id} queText={q.question} rtAns={q.rightAns} wrAns={q.wrongAns} keyprop={q.id}/>
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
    );
}

export default StartPage;
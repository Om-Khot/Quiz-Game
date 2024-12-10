import './DisplayQue.css';
import { useContext, useEffect, useState } from 'react';
import scoreContext from '../Context/scoreContext';
import dispatchContext from '../Context/dispatchContext';
import QueStatusContext from '../Context/QueStatusContext';
import changeStatusContext from '../Context/changeStatusContext';
function DisplayQue({queText,options,rtAns,iD,isAnswer}){
    
    const {score} = useContext(scoreContext);
    const {dispatch} = useContext(dispatchContext);

    const {status} = useContext(QueStatusContext);
    const {changeStatus} = useContext(changeStatusContext);

    const checkOption = (e)=>{
        const userConfirmed = window.confirm("Are you sure you want to submit the "+e+" ?");
        if (userConfirmed) {
            changeStatus({type: 'changeQueStatus', payload: {ID:iD}});
            console.log(status);
            if(e == rtAns){                
                dispatch({type: 'add_score'});
                alert("Correct Answer "+ (score+10));   
                console.log("correct ans");                              
            }
            else{
                alert("Wrong Answer Chosen "+score);
            }           
        }        
    }

    
    return(
        <div className="queBlock">
            <div className="questionText">
                {queText}
            </div>
            <div className="optionsBlock">
                {options.map((ans)=>{
                    return <button disabled={status[iD]} onClick={()=>checkOption(ans)}>{ans}</button>
                })}
            </div>
        </div>
    );
}

export default DisplayQue;
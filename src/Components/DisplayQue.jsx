import './DisplayQue.css';
import shuffleOptions from '../Helpers/shuffleArray';
import addArrayEle from '../Helpers/addArrayEle';
function DisplayQue({queText,rtAns,wrAns,keyprop}){
    let arr = addArrayEle(rtAns,wrAns);
    arr = shuffleOptions(arr);
    return(
        <div className="queBlock">
            <div className="questionText">
                {queText}
            </div>
            <div className="optionsBlock">
                {arr.map((ans)=>{
                    return <button>{ans}</button>
                })}
            </div>
        </div>
    );
}

export default DisplayQue;
function DisplayQue({queText,rtAns,wrAns}){
    return(
        <div>
            <div>
                {queText}
            </div>
            <div>
                {rtAns}
                {wrAns.map((ans)=>{
                    return ans;
                })}
            </div>
        </div>
    );
}

export default DisplayQue;
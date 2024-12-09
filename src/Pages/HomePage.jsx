import { Link } from "react-router-dom";

function HomePage(){
    return (
        <div>
            <div>
                <h1>Quizzy Quest</h1>
            </div>
            <div>
                <h2>Welcome To Amazing Quiz Game!<br/> Let's Test Your Brain Here...</h2>
            </div>
            <div>
                <Link to={'/start'}><button>Start Game</button></Link>                
            </div>
        </div>
    );
}

export default HomePage;
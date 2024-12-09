import { Link } from "react-router-dom";
import './HomePage.css';
function HomePage(){
    return (
        <div className="home">
            <div>
                <h1>Quizzy Quest</h1>
            </div>
            <div>
                <h2>"Dare to take the ultimate quiz challenge?"</h2>
            </div>
            <div>
                <Link to={'/start'}><button>Start Game</button></Link>                
            </div>
        </div>
    );
}

export default HomePage;
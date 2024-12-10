import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import StartPage from './Pages/StartPage';
import QueContext from './Context/QueContext';
import QuestionCompo from './Components/QuestionCompo';
import ResultPage from './Pages/ResultPage/ResultPage';

function App() {  

  const [list,setList] = useState([]);
  
  return (
    <QueContext.Provider value={{list}}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/start' element={<QuestionCompo/>}/>
          <Route path='/play' element={<StartPage/>}/>
          <Route path='/play/scoreCard/:score' element={<ResultPage/>}/>
        </Routes>
    </QueContext.Provider>
      
  )
}

export default App;

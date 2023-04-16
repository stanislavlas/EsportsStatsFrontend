import Leagues from './components/Leagues'
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import Schedule from "./components/Schedule";
import Standings from "./components/Standings";

const API_URL = "http://localhost:8080/api/lol"
const App = () => {
    const [leagueId, setLeagueId] = useState("")

    function handleOnClick(league){
        setLeagueId(league.id)
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <div style={{display:"flex"}}>
                    <Routes>
                        <Route path="/" element={
                            <Schedule url={API_URL} leagueId={leagueId}/>
                        }/>
                        <Route path="/standings" element={
                            <Standings url={API_URL} leagueId={leagueId}/>
                        }/>
                    </Routes>
                    <Leagues url={API_URL} onClick={handleOnClick}/>}
                </div>
            </BrowserRouter>
        </div>
  );
}

export default App;

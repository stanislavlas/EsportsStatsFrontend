import {useEffect, useState} from "react";
import styles from "../styles/leagues.module.css";
import LeagueCard from "./Cards/LeagueCard";

const Leagues = ({url, onClick}) => {
    const[leagues, setLeagues] = useState([])
    const[leagueId, setLeagueId] = useState("")

    useEffect(() => {
        fetch(`${url}/leagues`)
            .then(response => response.json())
            .then(result => setLeagues(result.leagues))
    }, [url])

    function handleOnClick(league){
        setLeagueId(league.id)
        onClick(league)
        console.log(leagueId)
    }

    return (
        <div className={styles.container}>
            {leagues.map(league => (
                <LeagueCard
                    key={league.id}
                    league={league}
                    isClicked={leagueId === league.id}
                    onClick={() => handleOnClick(league)}
                />
            ))}
        </div>
    )
}

export default Leagues;
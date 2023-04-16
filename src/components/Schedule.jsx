import {useEffect, useState} from "react";
import styles from "../styles/schedule.module.css";
import MatchCard from "./Cards/ScheduleCards/MatchCard";

const Schedule = ({url, leagueId}) => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        fetch(`${url}/schedule?leagueId=${leagueId}`)
            .then(response => response.json())
            .then(result => setMatches(result.schedule.matches))
    }, [url, leagueId])

    return (
        <div className={styles.container}>
            {matches.map(match => (
                <div key={match.id}>
                    <MatchCard match={match}/>
                </div>
            ))}

        </div>
    )
}

export default Schedule;
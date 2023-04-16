import {useEffect, useState} from "react";
import styles from "../styles/standings.module.css";
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const Standings = ({url, leagueId}) => {
    const [standings, setStandings] = useState([])
    const [stages, setStages] = useState([])

    useEffect(() => {
        fetch(`${url}/standings?leagueId=${leagueId}`)
            .then(response => response.json())
            .then(result => {
                setStandings(result.standings)
                setStages(result.standings.stages)
            })

        console.log("test")
    }, [url, leagueId])

    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <p className={styles.description}>STAGE:</p>
                {stages.map(stage => (
                    <Button className={styles.link}>
                        <NavLink to={`standings/${standings.slug}/${stage.slug}`}
                                 className={ ({isActive}) => isActive ? styles.activeLink : styles.nonactiveLink}>
                            {stage.name}
                        </NavLink>
                    </Button>
                ))}
            </nav>
        </div>

    )
}

export default Standings
import {Button} from '@material-ui/core';
import styles from '../../styles/leagueCard.module.css'

const LeagueCard = ({league: {name, region, image}, isClicked, onClick}) => {
    const paperStyle = isClicked ? styles.paperSelected : styles.paper
    const nameStyle = isClicked ? styles.selected : styles.name

    return (
        <Button className={styles.button} onClick={onClick}>
            <div className={paperStyle}>
                <div className={styles.info}>
                    <img src={image} alt="Logo"/>
                    <div className={styles.label}>
                        <div className={nameStyle}>{name}</div>
                        <div className={styles.region}>{region}</div>
                    </div>
                </div>
            </div>

        </Button>

    )
}
export default LeagueCard;

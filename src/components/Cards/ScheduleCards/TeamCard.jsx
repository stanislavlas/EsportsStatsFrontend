import styles from '../../../styles/teamCard.module.css'

const TeamCard = ({team: {code, img, record}, reverse}) => {
    return (
        <span className={reverse ? styles.teamCard : styles.reverseTeamCard}>
            <img src={img} alt="Logo"/>
            <div className={styles.code}>
                <div>
                    {code}
                </div>
                <div>
                    {record.wins}:{record.losses}
                </div>
            </div>
        </span>
    )
}

export default TeamCard;
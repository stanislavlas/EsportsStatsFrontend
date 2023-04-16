import {Button, Paper} from "@material-ui/core";
import TeamCard from "./TeamCard";
import DateCard from "./DateCard";
import BlockNameCard from "./BlockNameCard";


const MatchCard = ({match: {startTime, blockName, league, team1, team2, strategy}}) => {
    return(
        <Button style={{width:"100%"}}>
            <Paper style={{display:"flex", backgroundColor:"#0f1519", width:"100%"}}>
                <DateCard startTime={startTime}/>
                <TeamCard team={team1} reverse={false}/>
                <div style={{width:"20%", height:"100%", alignSelf:"center"}}>
                     <h2 style={{color:"#8fa3b0"}}>VS</h2>
                </div>
                <TeamCard team={team2} reverse={true}/>
                <BlockNameCard league={league} blockName={blockName} strategy={strategy}/>
            </Paper>
        </Button>
    )
}

export default MatchCard
const BlockNameCard = ({league, blockName, strategy}) => {
    return(
        <div style={{color:"#8fa3b0", width:"10%", textAlign:"right", padding:"10px", fontSize:"1rem", height:"100%", alignSelf:"center"}}>
            <div style={{fontWeight:"bold"}}>
                {league.name}
            </div>
            <div>
                {blockName}
            </div>
            <div>
                {strategy.type} {strategy.count}
            </div>
        </div>
    )
}

export default BlockNameCard
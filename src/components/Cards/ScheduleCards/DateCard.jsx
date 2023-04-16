import Moment from 'moment';

const DateCard = ({startTime}) => {
    const formatDate = Moment(startTime).format("DD MMM YY");
    const formatTime = Moment(startTime).format("HH");
    const formatMinutes = Moment(startTime).format("MM");
    return (
        <div style={{color:"white", width:"10%", padding:"10px"}}>
                    <span style={{fontSize:"4rem", fontWeight:"bold"}}>
                        {formatTime}
                    </span>
            <span style={{fontSize:"1.5rem"}}>
                        {formatMinutes}
                    </span>
            <div style={{fontSize:"1rem", color:"#8fa3b0"}}>
                {formatDate}
            </div>
        </div>
    )
}

export default DateCard
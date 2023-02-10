import pin from './images/pin.png' 
import './mainContent.css'
export default function MainContent(props){
    return (
        <div>
            <img className='journal--pic' src={require(`./images/${props.info.imageUrl}`)} alt='Tourist spot'></img>
            <div className='info--for--picture'>
                <span>
                    <br></br>
                    <img src={pin} className='pin--icon' alt='pin icon'></img>
                    &nbsp;&nbsp;
                    <big>
                        <span className='location--spec'>{props.info.location} </span>
                    </big>
                    <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <big>
                        <a className='google--search' href={props.info.googleMapsUrl} target='_blank'><small><u>View on google maps</u></small></a>
                    </big>
                </span>
                <h1 className='main--title'><big>{props.info.title}</big></h1>
                <p className='info--dates'><b>{props.info.startDate} - {props.info.endDate}</b></p>
                <p className='info--description'>{props.info.description}</p><br/><br/><br/><br/><br/>
                {props.info.title && <hr/>}
                
            </div>
        </div>
    )
}
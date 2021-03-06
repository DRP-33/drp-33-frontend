import React from 'react'
import { useHistory } from "react-router-dom";
import PhoneMarker from '../assets/phonemarker.png';
import ShopMarker from '../assets/shopmarker.png';
import MiscMarker from '../assets/miscmarker.png';

const box = {
    backgroundColor: "#565be9",
    padding: "2%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    fontFamily: "Saira",
    fontStyle: "normal",
    color: "white",
    marginBottom: "5%"
}

const marker = {
    marginLeft: "5%",
}

const text = {
    marginLeft: "5%",
    width: "80%",
    fontSize: "160%",
    textAlign: "center"
}

function TaskElem(props) {
    const history = useHistory();

    function handleClick() {
        localStorage.setItem('task', props.fields.title);
        history.push('/task/' + props.pk);
    }

    return (
        <div style={box} onClick={() => handleClick()}>
            {props.fields.t_type === 'PC' && <img style={marker} alt='' src={PhoneMarker}/>}
            {props.fields.t_type === 'SP' && <img style={marker} alt='' src={ShopMarker}/>}
            {props.fields.t_type !== 'PC' && props.fields.t_type !== 'SP' && <img style={marker} alt='' src={MiscMarker}/>}
            <span style={text}>{props.fields.title}, {props.fields.acceptor_id == null ? <span>Not accepted</span> : <span>Accepted!</span>}</span>
        </div>
    )
}

export default TaskElem
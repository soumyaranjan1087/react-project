import React from 'react'

export default function Alert(props) {
let showAlertType = (words)=>{
    let lowercase = words.toLowerCase();
    let alertType = lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
    return alertType;
}
  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
    <strong>{showAlertType(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}

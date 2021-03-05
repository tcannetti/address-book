import React, { useState } from 'react';
const User = (props) => {
const [infoReveal, setReveal] = setState(false)
const [btnTxt, setBtnTxt] = setState("More Info")

  const showInfo = () => {
    if (infoReveal) {
      setReveal(false)
      setBtnTxt("More Info")
    } else {
      setReveal(true)
      setBtnTxt("Hide Info")
    }
  }

  // DESTRUCTURE THESE 
  return (
    <div className="address-card">
      <div className="pic">
        <img className="img" src={props.user.picture}/>
      </div>
      <div className="contact-info">
        <h3 className="name">{`${props.user.name.first} ${props.user.name.last}`}</h3>
        {infoReveal ? <ExpandedInfo user={props.user} /> : ''}
      </div>
      <div className="button">
        <button onClick={showInfo}>{btnTxt}</button>
      </div>
    </div>
  )
}

const ExpandInfo = (props) => {

}

export default User
import React, { useState } from 'react';
const User = (props) => {
const [infoReveal, setReveal] = useState(false)
const [btnTxt, setBtnTxt] = useState("More Info")

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
        {infoReveal ? <ExpandInfo user={props.user} /> : ''}
      </div>
      <div className="button">
        <button onClick={showInfo}>{btnTxt}</button>
      </div>
    </div>
  )
}

const ExpandInfo = (props) => {
  return (
    <p>
        Address:{` ${props.user.location.street.number} ${props.user.location.street.name}, ${props.user.location.city}, ${props.user.location.state}, ${props.user.location.street.postcode}`}<br />
        Email:{` ${props.user.email}`}<br />
        Phone:{` ${props.user.phone}`}<br />
        Cell:{` ${props.user.cell}`}
    </p>
  )
}

export default User
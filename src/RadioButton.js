import React, { useState } from 'react'

export default function RadioButton(){
    const [radio, setRadio] = useState(false)

    function checkTheBox(){
        setRadio(prevRadio => !prevRadio)
        console.log(radio)
    }

    return(
        <div>
           <p>Radio</p>
           <div className={radio ? "radio-box checked" : "radio-box"}>
                <input
                    name="isChecked"
                    type="checkbox"
                    id="isChecked"
                    checked={radio}
                    onChange={checkTheBox} 
                />
                {!radio ? <label>Check it!</label> : <label>CHECKED!</label>}
           </div>
            
        </div>
    )

}
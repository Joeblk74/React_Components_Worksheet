import React from 'react'


const DisplayName = (props) => {
    return (
        <div> 
            <h1>Full Name</h1>
            {props.fN} {props.lN}
        </div>       
      );
}
 
export default DisplayName;
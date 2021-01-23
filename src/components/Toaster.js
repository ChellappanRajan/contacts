import React from 'react'

export default function Toaster(props) {
    return (
        <div className="toaster">
               <h1>{props.children}</h1>
       </div>
    )
}

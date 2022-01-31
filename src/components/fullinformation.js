import React from "react"
import Information from "./information"

const FullInf = ({informations, loading}) => { 
    if(loading){
        return <h2>Loading</h2>
    }
    console.log(informations.height)

    return(
        <div className="l">
      
        </div>
        
    )
}
export default FullInf;
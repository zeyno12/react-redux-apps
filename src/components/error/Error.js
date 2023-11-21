import React from "react";
import "./Error.css"
import {error} from "../../utils/images"
const Error=()=>{
return(
    <div className="container py-5">
        <div className="flex flex-center error">
            <img src={error}/>
        </div>
    </div>
    )
}
export default Error;
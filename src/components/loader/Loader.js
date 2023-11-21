import React from "react";
import { spinner } from "../../utils/images";
import "./Loader.scss"
const Loader=()=>{
return(
    <div className="container py-5">
        <div className="flex flex-center loader">
            <img src={spinner}/>
        </div>
    </div>
    )
}
export default Loader;
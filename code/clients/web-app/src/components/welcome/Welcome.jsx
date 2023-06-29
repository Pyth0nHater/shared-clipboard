import React from "react";
import './Welcome.css'


const Welcome = () =>{

    return(
        <div className="welcome_text">
            <div className="text_typing">Welcome to our website!</div>
            <div className="line_center"></div>
            <div className="bottom_rectangle">
                <div className="rectangle_download">
                    <div className="gray_rectangle_download"></div>
                </div>
                <div className="rectangle_download2">
                    <div className="gray_rectangle_download2"></div>
                    <div>Download last version for macOS</div>
                </div>
                

            </div>
        </div>
    )

}

export default Welcome;
import React from 'react';
import aga from "../img/aga.jpg";

const AboutSection = () => {
    return (
        <div >
            <div className="decription">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>
                            your <span>dreams</span>come
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact me if you are looking for self-motivated, well-organized and committed junior front-end with a positive attitude to challenges and opportunities.</p>
                <button>Contact me</button>
            </div>
            <div className="image">
                <img src={aga} alt="main picture"/>
            </div>
        </div>
    );
}

export default AboutSection;
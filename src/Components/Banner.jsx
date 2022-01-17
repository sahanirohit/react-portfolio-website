import React from "react";
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaBehance, FaPlay } from "react-icons/fa";

const Banner = () => {
    const [state] = React.useState({
        title: 'I am Jonathan Doe',
        text: 'I,m Jonathan, professional web developer with long time experience in this field​',
        image: '/images/man-01.png'
    });
    return <header className='header'>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="header__content">
                        <div className="header__section">
                            <ul className="header__ul">
                                <li><FaFacebookF /></li>
                                <li><FaTwitter /></li>
                                <li><FaPinterest /></li>
                                <li><FaInstagram /></li>
                                <li><FaBehance /></li>
                            </ul>
                            <h1>{ state.title }</h1>
                            <p>{state.text}</p>
                            <div className="header__buttons">
                                <a href="http://localhost:3000/" className="btn btn-outline">My Portfolio</a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="http://localhost:3000/" className="btn btn-smart"><FaPlay className="play" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="banner__img">
                        <img src={state.image} alt="meno1" />
                    </div>
                </div>
            </div>
        </div>
    </header>;
};

export default Banner;

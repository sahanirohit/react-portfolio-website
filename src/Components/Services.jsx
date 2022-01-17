import React from 'react'
import { FaGithub, FaCamera, FaCodepen, FaApple, FaFileVideo, FaSearchPlus } from "react-icons/fa";

function Services() {
    return (
        <div className="services">
            <div className="container">
                <div className="services__header">
                    
                    <div className="common">
                        <h3 className="heading">SERVICES</h3>
                        <h1 className="mainHeader">My Services</h1>
                        <p className="mainContent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="row bgMain">
                        <div className="col-4">
                            <div className="services__box">
                                <FaGithub className='commonIcons'/>
                                <div className="services__box-header">
                                    Web Development
                                </div>
                                <div className="services__box-p">
                                Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="services__box">
                                <FaCamera className='commonIcons'/>
                                <div className="services__box-header">
                                Photography
                                </div>
                                <div className="services__box-p">
                                Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="services__box">
                                <FaCodepen className='commonIcons'/>
                                <div className="services__box-header">
                                    Web Design
                                </div>
                                <div className="services__box-p">
                                Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row bgMain">
                        <div className="col-4">
                            <div className="services__box">
                                <FaApple className='commonIcons'/>
                                <div className="services__box-header">
                                App Development
                                </div>
                                <div className="services__box-p">
                                Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="services__box">
                                <FaFileVideo className='commonIcons'/>
                                <div className="services__box-header">
                                    Video Editing
                                </div>
                                <div className="services__box-p">
                                Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="services__box">
                                <FaSearchPlus className='commonIcons'/>
                                <div className="services__box-header">
                                    SEO Expart
                                </div>
                                <div className="services__box-p">
                                Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;

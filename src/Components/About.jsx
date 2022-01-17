import React from 'react';


function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        {/* <h3 className="heading">About Me</h3> */}
                        <h1 className="mainHeader">About Me</h1>
                        <p className="mainContent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="aboutRow">
                        <div className="about-col-4">
                            <div className="about__img">
                                <img src="/images/me-02.png" alt="me-02" />
                            </div>
                        </div>
                        <div className="about-col-8">
                            <div className="container">
                                <div className="about__content">
                                    <h1 className="about__heading">Hi There</h1>
                                    <p className="about_paragraph">In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis</p>
                                    <p className="about_paragraph">nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit</p>
                                    
                                    <div className="contact_details">
                                        <div className="">
                                            <h3 className='contact_heading'>Name:</h3>
                                            <p className='contact_paragraph'>Jonathan Doe</p>
                                        </div>
                                        <div className="">
                                            <h3 className='aboutRight contact_heading'>Email:</h3>
                                            <p className='aboutRight contact_paragraph'>example@domain.com</p>
                                        </div>
                                    </div>
                                    <div className="contact_details">
                                        <div className="">
                                            <h3 className='contact_heading'>Phone:</h3>
                                            <p className='contact_paragraph'>+1 023 454 345</p>
                                        </div>
                                        <div className="">
                                            <h3 className='aboutRight contact_heading'>LinkedIn:</h3>
                                            <p className='aboutRight contact_paragraph'>Jonathan_123</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default About;

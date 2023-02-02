import { useEffect, useState } from 'react';
import aboutImg from '../assets/images/ab.jpg';
import avtImg from '../assets/images/avatar.jpg'
function About() {

    const getWindowSize = () => {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const renderDetail = () => {
        return <ul className="address">
            <li>
                <ul className="agileits-address-text ">
                    <li><b>D.O.B</b></li>
                    <li>31-12-1995</li>
                </ul>
            </li>
            <li>
                <ul className="agileits-address-text">
                    <li><b>WhatsApp </b></li>
                    <li><a href="https://chatwith.io/s/thao-nguyen" target='_blank'> (60)11-2344-8795</a></li>
                </ul>
            </li>
            <li>
                <ul className="agileits-address-text">
                    <li><b>Address </b></li>
                    <li>Kuala Lumpur, Malaysia.</li>
                </ul>
            </li>
            <li>
                <ul className="agileits-address-text">
                    <li><b>E-mail </b></li>
                    <li><a href="mailto:nguyendangthaoit@gmail.com"> nguyendangthaoit@gmail.com</a></li>
                </ul>
            </li>
            <li>
                <ul className="agileits-address-text">
                    <li><b>Website </b></li>
                    <li><a href="https://www.linkedin.com/in/thao-nguyen-a98a901b4/" target='_blank'>
                        https://www.linkedin.com
                    </a></li>
                </ul>
            </li>
        </ul>
    }
    return (
        <>

            <div className="about" id="about">
                <div className="container">
                    <h3 className="w3l-heading">About me</h3>
                    <div className="col-md-4 w3-about-top" data-aos="fade-up">
                        <img src={aboutImg} className="img-responsive" alt="about-img" />
                    </div>
                    <div className="col-md-8 w3l-about" data-aos="fade-down">
                        <div className="w3ls-heading">
                            <h2>I'm a senior front end developer based in Vietnam.</h2>
                        </div>
                        <div className="w3ls-about-info">
                            <p>I am a qualified and professional frontend developer with over six years of
                                experience in web and mobile application. Responsible and smart-working personality. I am a quick learner and able to work under
                                pressure.
                            </p>
                        </div>
                        <div className="w3l-button detail">
                            <a href="#" data-toggle="modal" data-target="#myModal">details</a>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>

            </div>
            <div className="modal about-modal fade" id="myModal" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">NDT</h4>
                        </div>
                        <div className="modal-body">
                            <div className="about">
                                <div className="col-md-4 col-sm-4  col-xs-4 about-left ">
                                    <img src={avtImg} className="img-responsive" alt={avtImg} />
                                </div>
                                {
                                    (windowSize.innerWidth > 600) ?
                                        <>
                                            <div className="col-md-8 col-sm-8 col-xs-8 about-right wthree">
                                                <h3>Hi, I'm <span>Thao Nguyen</span></h3>
                                                <h4>Web & Mobile Developer </h4>
                                                {renderDetail()}
                                            </div>
                                            <div className="clearfix"> </div>
                                        </> :
                                        <>
                                            <div className="col-md-8 col-sm-8 col-xs-8 about-right wthree">
                                                <h3>Hi, I'm <span>Thao Nguyen</span></h3>
                                                <h4>Web & Mobile Developer </h4>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-xs-12 about-right wthree">
                                                {renderDetail()}
                                            </div>
                                            <div className="clearfix"> </div>
                                        </>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About
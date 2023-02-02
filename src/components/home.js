import MyPDF from '../assets/files/ThaoNguyen_Resume.pdf';
function Home() {
    return (
        <>
            <div className="header-w3layouts">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header page-scroll">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-ex1-collapse">
                                <span className="sr-only">NDT</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <h1><a className="navbar-brand" href="/">NDT</a></h1>
                        </div>
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav navbar-right">

                                <li className="hidden"><a className="page-scroll" href="#page-top"></a></li>
                                <li><a className="page-scroll scroll active" href="#home">Home</a></li>
                                <li><a className="page-scroll scroll" href="#about">About</a></li>
                                <li><a className="page-scroll scroll" href="#exp">Experience</a></li>
                                <li><a className="page-scroll scroll" href="#pro">Project</a></li>
                                <li><a className="page-scroll scroll" href="#edu">Education</a></li>
                                <li><a className="page-scroll scroll" href="#skill">Skill</a></li>
                                <li><a className="page-scroll scroll" href="#overall">Overall</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="header jarallax" id="home">
                <div className="container">
                    <div className="banner-text text-center">
                        <h2 data-aos="fade-right">I am  Thao Nguyen</h2>
                        <h3 data-aos="fade-left"> - senior front-end developer - </h3>
                        <p data-aos="flip-left">Let's build something cool together. </p>
                        <div className="w3l-button banner-btn">
                            <a href={MyPDF} target="_blank" download={'ThaoNguyen_Resume'}>My Resume</a>
                        </div>
                        <div className='social'>
                            <a href='https://www.linkedin.com/in/thao-nguyen-a98a901b4/' target="_blank">
                                <button type="button" className="btn btn-outline-primary" data-aos="flip-left"><i className="fab mr-1 fa-linkedin-in"></i></button>
                            </a>
                            <a href='https://github.com/nguyendangthaoit' target="_blank">
                                <button type="button" className="btn btn-outline-secondary" data-aos="flip-left"><i className="fab mr-1 fa-github"></i></button>
                            </a>
                            <a href='https://chatwith.io/s/thao-nguyen' target="_blank">
                                <button type="button" className="btn btn-outline-success" data-aos="flip-left"><i className="fab mr-1 fa-whatsapp"></i></button>
                            </a>
                            <a href='mailto:nguyendangthaoit@gmail.com' target="_blank">
                                <button type="button" className="btn btn-outline-info" data-aos="flip-left"><i className="fab mr-1 fa-google"></i></button>
                            </a>
                        </div>
                    </div>
                    <div className="w3-arrow bounce animated">
                        <a href="#about" className="scroll"><i className="fa fa-angle-down" aria-hidden="true"></i></a>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Home
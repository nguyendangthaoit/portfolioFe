
function Experience() {
    const data = [
        {
            period: '2022 - Now',
            title: 'SENIOR APPLICATION DEVELOPER',
            compony: '(FPT Malaysia)',
            desc: `Communicate with client and PM, estimate and manage task.
            Evaluate frontend technologies.
            Define the architecture, coding convention.
            Refactor and improve performance.
            Develop and maintain production.
            Coach new members.
            Review and support team member's code.
            Use tech: Net core, TypeScript, ReactJS, Jest, SQL, VueJS, Azure.`
        },
        {
            period: '2020 - 2022',
            title: 'SENIOR FRONT END DEVELOPER',
            compony: '(FPT Malaysia)',
            desc: `Communicated with client and implemented user stories.
            Evaluated frontend technologies.
            Defined the architecture, coding convention.
            Implemented unit test.
            Cooperated with backend teams to integrate API to the frontend.
            Developed, maintained web, mobile application.
            Used tech: Angular, ReactJS, React-Native, JavaScript, Jest,
            Jasmine, Karma, Azure.`
        },
        {
            period: '2020 - 2021',
            title: 'SENIOR APPLICATION DEVELOPER',
            compony: 'Freelancer, Outsource',
            desc: `Communicated with client and got documents.
            Wrote documents.
            Evaluated technologies.
            Designed structure database, project.
            Implemented logic API and UI/UX.
            Refactored and improved performance.
            Reviewed and supported team member.
            Deployed and tested application.
            Mentored and guided other projects.
            Used tech NodeJS, MongoDB, ReactJS, React-Native, Git, Shopify
            platform, Jest, Karma, Redux, RxJs.`
        },
        {
            period: '2017 - 2019',
            title: 'FRONT END DEVELOPER',
            compony: '(FPT Software Hanoi)',
            desc: `Implemented logic and created API.
            Wrote script SQL
            Implemented UI/UX and integrated API to frontend.
            Implemented unit test.
            Deployed and maintained application.
            Communicated with tester and user.
            Use tech Net, SQL, Angular, AngularJS, ReactJS, Jira.`
        },
        {
            period: '2015 - 2017',
            title: 'INTERN, CODER',
            compony: '(NACENTECH)',
            desc: `Studied about process working.
            Researched and developed Android mobile.
            Developed desktop, web application.
            Set up and tested application.
            Used tech C#, JavaScript, Html, Css.`
        }
    ];

    return (
        <>
            <div id="exp" className="agile-edu exp">
                <div className="container">
                    <h3 className="w3l-heading">Experience</h3>
                    {
                        data.map((item, i) =>
                            (i % 2 === 0) ?
                                <div className="work-info" key={i}>
                                    <div className="col-md-6 col-sm-6 col-xs-6 work-right work-right2">
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-6 work-left work-left2" data-aos="fade-down-right">
                                        <div className="col-md-6  col-sm-6 col-xs-6 work1 detail">
                                            <h4>{item.title}</h4>
                                            <h5>{item.compony}</h5>
                                            <span>{item.desc}</span>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-6 work2">
                                            <h5 className="node">{item.period}</h5>
                                            <span></span>
                                        </div>
                                    </div>
                                </div> :
                                <div className="work-info" key={i}>
                                    <div className="col-md-6 col-sm-6 col-xs-6 ">
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-6 work-right" data-aos="fade-down-left">
                                        <div className="col-md-6 col-sm-6 col-xs-6 work2">
                                            <span></span>
                                            <h5 className="node">{item.period}</h5>
                                        </div>
                                        <div className="col-md-6  col-sm-6 col-xs-6 work-right1 detail">
                                            <h4>{item.title}</h4>
                                            <h5>{item.compony}</h5>
                                            <span>{item.desc}</span>
                                        </div>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}
export default Experience
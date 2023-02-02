import reactImg from '../assets/images/react.jpg';
import htmlImg from '../assets/images/html.png';
import angImg from '../assets/images/ang.png';
import cShImg from '../assets/images/cSharp.jpg';
import cssImg from '../assets/images/css.jpg';
import jsImg from '../assets/images/js.png';
import tsImg from '../assets/images/ts.png';
import nodeImg from '../assets/images/node.png';
import sqlImg from '../assets/images/sql.jpg';
import scrumImg from '../assets/images/scrum.png';
import dockerImg from '../assets/images/docker.png';
import gitImg from '../assets/images/git.jpg';
function Skill() {
    const data = [
        { name: 'React', avatar: reactImg },
        { name: 'Angular', avatar: angImg },
        { name: 'C#', avatar: cShImg },
        { name: 'HTML', avatar: htmlImg },
        { name: 'CSS', avatar: cssImg },
        { name: 'JavaScript', avatar: jsImg },
        { name: 'TypeScript', avatar: tsImg },
        { name: 'Node', avatar: nodeImg },
        { name: 'SQL', avatar: sqlImg },
        { name: 'SDLC, Scrum', avatar: scrumImg },
        { name: 'Docker', avatar: dockerImg },
        { name: 'Github', avatar: gitImg },
    ]
    return (
        <>
            <div className="skill" id='skill'>
                <div className="container">
                    <h3 className="w3l-heading">What I Can Do</h3>
                    <div className="flex-container">
                        {
                            data.map((item, i) =>
                                <div className="alert" key={i} data-aos="flip-left">
                                    <div className="col-img">
                                        <img src={item.avatar}></img>
                                    </div>
                                    <div className="col-title">
                                        <span>{item.name}</span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default Skill
import weather from '../../assets/weather.png';
import dnd from '../../assets/DnD.png';
import scheduler from '../../assets/scheduler.png';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineRocket } from 'react-icons/ai';
import { AiOutlineCode } from 'react-icons/ai';

export default function Projects() {
    return (
        <div className="project-page">
            <div className="projects">
                <div className="img-thumb">
                    <img alt="weather app" src={weather}></img>
                    <div className="img-caption">
                        <h2>Weather App</h2>
                        {/* <p>Weather Dashboard provides a five day forecast for any city as well as the current weather by using open weather API to retrieve the data.</p> */}
                        <div className="project-links">
                            <a className="site-link" target="_blank" rel="noreferrer" href="https://skrtz.github.io/weather-dashboard/">deployed site</a>
                            <div className="icon-links">
                                <a className="rocket" target="_blank" rel="noreferrer" href="https://skrtz.github.io/weather-dashboard/"> <AiOutlineRocket /> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img-thumb">
                    <img alt="DnD app" src={dnd}></img>
                    <div className="img-caption">
                        <h2>MERN App</h2>
                        {/* <p>D&D Creations provides users with a way to keep track of characters they build as well as view other characters in the group. It uses MongoDB and GraphQL to handle database functionality, and uses React to display the front end UI.</p> */}
                        <div className="project-links">
                            <a className="site-link" target="_blank" rel="noreferrer" href="https://dnd-character-create.herokuapp.com/" >deployed site</a>
                            <div className="icon-links">
                                <a className="rocket" target="_blank" rel="noreferrer" href="https://dnd-character-create.herokuapp.com/" ><AiOutlineRocket /></a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="img-thumb">
                    <img alt="scheduler app" src={scheduler}></img>
                    <div className="img-caption">
                        <h2>Schedule App</h2>
                        {/* <p>Workday Scheduler keeps track of a users daily tasks and uses MomentJS to provide a color coded UI.</p> */}
                        <div className="project-links">
                            <a className="site-link" target="_blank" rel="noreferrer" href="https://skrtz.github.io/workday-scheduler/">deployed site</a>
                            <div className="icon-links">
                                <a className="rocket" target="_blank" rel="noreferrer" href="https://skrtz.github.io/workday-scheduler/"><AiOutlineRocket /></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-container">
                    <div className="code">
                        <a className="github" target="_blank" rel="noreferrer" href="https://github.com/skrtz/weather-dashboard"> <FaGithub size={30} /> </a>
                        <a className="github" target="_blank" rel="noreferrer" href="https://github.com/skrtz/DnD-Character-Builder"> <FaGithub size={30}/> </a>
                        <a className="github" target="_blank" rel="noreferrer" href="https://github.com/skrtz/workday-scheduler"> <FaGithub size={30}/> </a>
                    </div>
                </div>
            </div>
        </div>

    )
}




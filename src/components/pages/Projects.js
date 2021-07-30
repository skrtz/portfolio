import weather from '../../assets/weather.png';
import budget from '../../assets/budget.png';
import meal from '../../assets/meal.png';
import scheduler from '../../assets/scheduler.png';

export default function Projects(){
    return (
        <div className="project-images">
            <div>
                <img alt="weather app" src={weather}></img>
                <p>Weather Dashboard provides a five day forecast for any city as well as the current weather by using open weather API to retrieve the data.</p>
            </div>
            <div>
                <img alt="budget app" src={budget}></img>
                <p>Budget Tracker provides users with an easy way to keep track of their transactions over time. The data is tracked using Mongo DB and Mongoose, and uses IndexedDB to keep track of the users transactions if their network goes offline.</p>
            </div>
            <div>
                <img alt="meal app" src={meal}></img>
                <p>Meal Buddy is a meal planner app that keeps track of a users meals for the week. It uses MySQL and Sequilize technologies to keep track of user accounts. </p>
            </div>
            <div>
                <img alt="scheduler app" src={scheduler}></img>
                <p>Workday Scheduler keeps track of a users daily tasks and uses MomentJS to provide a color coded UI.</p>
            </div>
        </div>
    )
}
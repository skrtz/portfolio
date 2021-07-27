// import weather from '../../../public/assets/weather';
// import budget from '../../../public/assets/budget';
// import meal from '../../../public/assets/meal';
// import scheduler from '../../../public/assets/scheduler';
import weather from '../../assets/weather.png';
import budget from '../../assets/budget.png';
import meal from '../../assets/meal.png';
import scheduler from '../../assets/scheduler.png';

export default function Projects(){
    return (
        <div>
            <div>
                <img alt="weather app" src={weather}></img>
            </div>
            <div>
                <img alt="weather app" src={budget}></img>
            </div>
            <div>
                <img alt="weather app" src={meal}></img>
            </div>
            <div>
                <img alt="weather app" src={scheduler}></img>
            </div>
        </div>
    )
}
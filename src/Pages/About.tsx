import React from 'react';
import vanAboutImage from "../assets/van_about.webp";
import {classnames} from "../utils.ts";
import {Card} from "../Components/Card";

interface IAboutProps extends React.PropsWithChildren, React.AllHTMLAttributes<HTMLElement> {

}

const About: React.FC<IAboutProps> = ({className, ...props}: IAboutProps): React.ReactNode => {
    const allClasses: string = classnames("about", className as string);
    return (
        <main {...props} className={allClasses}>
            <img src={vanAboutImage} alt="Camper guy looking at the sky in his cozy camper" className="about-img"/>
            <div className="about content">
                <h2 className="about heading">Don't squeeze in a sedan when you could relax in a van.</h2>
                <p className="about desc">Our mission is to enliven your road trip with the perfect travel van rental.
                    Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)</p>
                <p className="about desc">
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4
                    wheels.
                </p>
                <Card>
                    <Card.Content>
                        <h2>Your destination is waiting. Your van is ready.</h2>
                    </Card.Content>
                    <Card.Button to={"/vans"} size={"md"} type={"secondary"} expanded={false}>Explore our vans</Card.Button>
                </Card>
            </div>
        </main>
    );
};

export default About;
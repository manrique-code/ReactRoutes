import React from 'react';
import RedirectButton from "../Components/RedirectButton.tsx";

interface IHomeProps extends React.PropsWithChildren, React.AllHTMLAttributes<HTMLElement> {
}

const Home: React.FC<IHomeProps> = ({...props}:IHomeProps): React.ReactNode => {
    return (
        <main {...props} className={"home"}>
            <h2 className="home heading">You got the travel plans, we got the travel vans.</h2>
            <p className="home desc">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <RedirectButton to={"/vans"} type={"primary"} size={"md"} expanded={true}>Find your van</RedirectButton>
        </main>
    );
};

export default Home;
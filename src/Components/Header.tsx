import React from 'react';
import {Link} from "react-router-dom"

interface IHeaderProps extends React.PropsWithChildren, React.AllHTMLAttributes<HTMLElement> {

}

const Header: React.FC<IHeaderProps> = ({children, ...props}:IHeaderProps): React.ReactNode => {
    return (
        <header {...props} className={"header"}>
            <Link className="header-text-logo" to={"/"}>#VANLIFE</Link>
            <nav className="header-nav">
                {children}
            </nav>
        </header>
    );
};

export default Header;
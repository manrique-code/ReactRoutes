import React from 'react';

interface IFooterProps extends React.PropsWithChildren, React.AllHTMLAttributes<HTMLElement> {

}

const Footer: React.FC<IFooterProps> = ({...props}:IFooterProps): React.ReactNode => {
    return (
        <footer {...props} className={"footer"}>
            Ⓒ 2025 #VANLIFE
        </footer>
    );
};

export default Footer;
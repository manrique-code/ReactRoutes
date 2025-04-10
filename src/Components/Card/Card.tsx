import React from 'react';
import {classnames} from "../../utils.ts";

export declare interface ICardProps extends React.PropsWithChildren, React.AllHTMLAttributes<HTMLDivElement> {
}

const Card: React.FC<ICardProps> = ({children, className, ...props}: ICardProps): React.ReactNode => {
    const allClasses: string = classnames("card", className as string);

    return (
        <article {...props} className={allClasses}>{children}</article>
    );
};

export default Card;
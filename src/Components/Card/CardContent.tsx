import React from 'react';
import {classnames} from "../../utils.ts";

export declare interface ICardContentProps extends React.PropsWithChildren, React.AllHTMLAttributes<HTMLElement> {
}

const CardContent: React.FC<ICardContentProps> = ({children, className, ...props}:ICardContentProps): React.ReactNode => {
    const allNames: string = classnames("card-content", className as string);

    return (
        <div {...props} className={allNames}>{children}</div>
    );
};

export default CardContent;
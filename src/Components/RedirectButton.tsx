import React from 'react';
import {classnames} from "../utils.ts";
import {Link, LinkProps} from "react-router-dom";

export declare interface IRedirectButtonProps extends LinkProps {
    type?: ("primary" | "secondary");
    size?: ("sm" | "md" | "lg");
    expanded?: boolean;
    to: string;
}

const RedirectButton: React.FC<IRedirectButtonProps> = (
    {
        children,
        className,
        to,
        expanded = false,
        size = "md",
        type = "primary",
        ...props
    }: IRedirectButtonProps
): React.ReactNode => {
    const allClasses: string = classnames("link-button", type, size, `${expanded ? "twidth" : ""}`, className as string);

    return (
        <Link to={to} title={`Click to `+`${children}`.toLowerCase()} {...props} className={allClasses}>{children}</Link>
    );
};

export default RedirectButton;
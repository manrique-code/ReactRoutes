import React from "react";
import Card, {ICardProps} from "./Card.tsx";
import RedirectButton, {IRedirectButtonProps} from "../RedirectButton.tsx";
import CardContent, {ICardContentProps} from "./CardContent.tsx";

export declare interface ICompoundCard extends React.FC<ICardProps> {
    Content: React.FC<ICardContentProps>;
    Button: React.FC<IRedirectButtonProps>;
}

const CompoundCard = Card as ICompoundCard;
CompoundCard.Button = RedirectButton;
CompoundCard.Content = CardContent;

export {CompoundCard as Card};
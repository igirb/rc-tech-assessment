import {HeroItemProps} from "../interfaces/HeroItemProps";
import React from "react";

export const HeroItem: React.FC<HeroItemProps> = ({ hero, onToggle }) => {
    return (
        <li onClick={() => onToggle(hero.id)}>
            {hero.name} - {hero.available ? 'Available' : 'Unavailable'}
        </li>
    );
};
import React from 'react';
import { useHeroes } from '../hooks/useHeroes';
import { HeroItem} from "./HeroItem";

export const HeroesList: React.FC = () => {
    const heroes = useHeroes();

    return (
        <div>
            <h2>Heroes</h2>
            <ul>
                {heroes.map(hero => (
                    <HeroItem key={hero.id} hero={hero} onToggle={() => console.log('toggled')}/>
                ))}
            </ul>
        </div>
    );
};


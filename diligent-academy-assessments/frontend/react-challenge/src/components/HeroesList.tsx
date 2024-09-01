import React from 'react';
import { useHeroes } from '../hooks/useHeroes';
import {HeroItem} from "./HeroItem";
import Loading from "./Loading";
import Error from "./Error";

export const HeroesList: React.FC = () => {
    const { heroes, loading, error, toggleAvailability } = useHeroes();

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error message={error} />;
    }

    return (
        <div>
            <h2>Heroes</h2>
            <ul>
                {heroes.map(hero => (
                    <HeroItem key={hero.id} hero={hero} onToggle={toggleAvailability}/>
                ))}
            </ul>
        </div>
    );
};


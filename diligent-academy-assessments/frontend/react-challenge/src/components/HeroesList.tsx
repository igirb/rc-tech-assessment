import React from 'react';
import { useHeroes } from '../hooks/useHeroes';
import {HeroItem} from "./HeroItem";
import Loading from "./Loading";
import Error from "./Error";
import '../styles/HeroesList.css';

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
            <ol>
                {heroes.map(hero => (
                    <HeroItem key={hero.id} hero={hero} onToggle={toggleAvailability}/>
                ))}
            </ol>
        </div>
    );
};


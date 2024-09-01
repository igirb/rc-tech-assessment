import {callApi} from "../api/call-api";
import {Hero} from "../interfaces/Hero";
import {useEffect, useState} from "react";

export const useHeroes = () => {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const heroData = await callApi<Hero[]>('heroes');
                setHeroes(heroData);
            } catch (error) {
                setError('Failed to fetch heroes: ' + error);
            } finally {
                setLoading(false);
            }
        };

        fetchHeroes();
    }, []);

    const toggleAvailability = (id: number) => {
        setHeroes(prevHeroes =>
            prevHeroes.map(hero =>
                hero.id === id ? { ...hero, available: !hero.available } : hero
            )
        );
    };

    return { heroes, loading, error, toggleAvailability };
}
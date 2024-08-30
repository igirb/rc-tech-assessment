import {callApi} from "../api/call-api";
import {Hero} from "../interfaces/Hero";
import {useEffect, useState} from "react";

export const useHeroes = () => {
    const [heroes, setHeroes] = useState<Hero[]>([]);

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const heroData = await callApi<Hero[]>('heroes');
                setHeroes(heroData);
            } catch (error) {
                console.error(error);
            }
        }
    }, []);

    return {heroes};
}
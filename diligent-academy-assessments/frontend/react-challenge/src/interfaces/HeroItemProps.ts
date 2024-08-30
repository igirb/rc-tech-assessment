import {Hero} from "./Hero";

export interface HeroItemProps {
    hero: Hero;
    onToggle: (id: number) => void;
}
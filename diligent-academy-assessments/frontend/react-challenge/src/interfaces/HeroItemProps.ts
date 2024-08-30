import {Hero} from "./Hero";

export interface HeroItemProps {
    Hero: Hero;
    onToggle: (id: number) => void;
}
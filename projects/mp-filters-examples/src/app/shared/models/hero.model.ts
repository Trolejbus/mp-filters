import { HeroGender, HeroProfession } from "../enums";

export interface HeroModel {
    name: string;
    profession: HeroProfession;
    gender: HeroGender;
}
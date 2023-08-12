import { useMemo } from "react";
import { Hero, getHeroesByPublisher } from "..";
import { HeroCard } from "./HeroCard";

interface HeroListProps{
    publisher:string;
}


export const HeroList = ({publisher}: HeroListProps) => {
  const heroes: Hero[] = useMemo(() => getHeroesByPublisher(publisher), [publisher]) ;

    return (

        <div className= "row row-cols-1 row-cols-md-3">
            {
                heroes.map(hero=> ( 
                    <HeroCard key={hero.id} {...hero}/>
                ))
            }

        </div>

    // <ul>
        // {
            // heroes.map(hero => (
                // <li key={hero.id}>
                    // {hero.superhero}
                // </li>
            // ))
        // }
    // </ul>
  )
}

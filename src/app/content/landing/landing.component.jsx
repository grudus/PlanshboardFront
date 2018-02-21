import React from "react"
import Item from "./landing-item.component"
import gameIcon from "./res/games.png"
import statsIcon from "./res/stats.png"
import rankingIcon from "./res/ranking.png"
import "./landing.component.css"

const items = [
    {path: "/games", label: "Gry", icon: gameIcon},
    {path: "/stats", label: "Statystyki", icon: statsIcon},
    {path: "/ranking", label: "Ranking", icon: rankingIcon}
];

const itemObjects = items.map(item =>
    <span>
        <Item label={item.label} path={item.path} icon={item.icon}/>
    </span>
);


export default () => (
    <article className="landing-wrapper">
        <section className="landing-items-wrapper">
            {itemObjects}
        </section>
    </article>
)
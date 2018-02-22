import React from "react"
import Item from "./landing-item.component"
import "./landing.component.css"
import items from "../tabs"

const itemObjects = items.map(item =>
    <span key={item.path}>
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
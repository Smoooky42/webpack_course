import React from 'react';
import classes from "./App.module.scss";
import {Link, Outlet} from "react-router-dom";
import butterflyPng from "@/assets/butterfly.png";
import butterflyJpg from "@/assets/b210.jpg";
import ButterFlySvg from '@/assets/1297939.svg'

export const App = () => {

    const [count, setCount] = React.useState(0);

    const increment = () => {setCount(count + 1)}

    return (
        <div data-testid = {'App.DataTestId'}>
            <div>
                <img width={100} height={100} src={butterflyPng} alt="Butterfly Png"/>
                <img width={100} height={100} src={butterflyJpg} alt="Butterfly Png"/>
            </div>
            <div>
                <ButterFlySvg fill = {'red'} width={100} height={100} />
            </div>
            <Link to={'/about'}>About</Link>
            <br/>
            <Link to={'/shop'}>Shop</Link>
            <h1> {count} </h1>
            <button className={classes.button} onClick={() => increment()}>INCREMENT</button>
            <Outlet/>
        </div>
    )
};

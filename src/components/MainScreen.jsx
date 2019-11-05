import React from 'react';
import style from './MainScreen.module.css';
import normilize from './normalize.module.css';


export default function MainScreen() {
    return (
        <div className={style.mainScreen}>
            <div className={style.itemsHolder}>
                <h1 className={style.header}>Lorem ipsum dolor</h1>
                <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum convallis viverra sed sed velit sed faucibus leo curabitur. Purus leo neque, commodo feugiat amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum convallis viverra sed sed velit sed faucibus leo curabitur. Purus leo neque, commodo feugiat amet.</p>
                <div className={style.button}></div>
            </div>
        </div>
    )
}
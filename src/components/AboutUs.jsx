import React from 'react';
import style from './AboutUs.module.css';
import normilize from './normalize.module.css';
import leave from '../svg/leave.svg';
import call from '../svg/call.svg';
import cheff from '../svg/cheff.svg';

export default function AboutUS() {
    return (
        <div className={style.container}>
            <div className={style.item}>
                <div className={style.circle}>
                    <img className={style.svg} src={leave} alt=""/>
                </div>
                <h1 className={style.header}>Найсвіжіші продукти</h1>
                <p className={style.itemText}>Lorem ipsum dolor sit<br/> amet, consectetur<br/> adipiscing elit.</p>
            </div>

            <div className={style.item}>
                <div className={style.circle}>
                    <img className={style.svg} src={cheff} alt=""/>
                </div>
                <h1 className={style.header}>Професійні кухарі</h1>
                <p className={style.itemText}>Lorem ipsum dolor sit<br/> amet, consectetur<br/> adipiscing elit.</p>
            </div>

            <div className={style.item}>
                <div className={style.circle}>
                    <img className={style.svg} src={call} alt=""/>
                </div>
                <h1 className={style.header}>Привітні менеджери </h1>
                <p className={style.itemText}>Lorem ipsum dolor sit<br/> amet, consectetur<br/> adipiscing elit.</p>
            </div>
        </div>
    )
}
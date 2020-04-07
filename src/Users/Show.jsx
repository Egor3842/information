import React from 'react'
import s from './Users.module.scss'
import cat from '../images/cat.svg'
import dog from '../images/dog.svg'
import fox from '../images/fox.svg'
import koala from '../images/koala.svg'
import lion from '../images/lion.svg'
import owl from '../images/owl.svg'
import penguin from '../images/penguin.svg'
import pig from '../images/pig.svg'
import raccoon from '../images/raccoon.svg'
import FullStar from '../images/FullStar.svg'
import sheep from '../images/sheep.svg'
import Star from '../images/star.jpg'
import boy from '../videos/boy.mp4'
import shoe from '../videos/shoe.mp4'

const Show = (props) => {
    return (
        <div className = {s.Container}>

            {props.users.map(u =>
                <div className={!u.video ? s.Small : s.Big}>

                    <div className = {s.content}>
                        <div className = {s.header}>
                            {<span className = {s.img}>
                                {u.image === 'sheep' ? <img alt = '' src = {sheep} /> :
                                    u.image === 'raccoon' ? <img alt = '' src = {raccoon} /> :
                                        u.image === 'owl' ? <img alt = '' src = {owl} /> :
                                            u.image === 'dog' ? <img alt = '' src = {dog} /> :
                                                u.image === 'fox' ? <img alt = '' src = {fox} /> :
                                                    u.image === 'koala' ? <img alt = '' src = {koala} /> :
                                                        u.image === 'penguin' ? <img alt = '' src = {penguin} /> :
                                                            u.image === 'pig' ? <img alt = '' src = {pig} /> :
                                                                u.image === 'cat' ? <img alt = '' src = {cat} /> :
                                                                    <img alt = '' src = {lion} />}
                            </span>}
                            <span className = {s.name}>{u.name}</span>
                            <span className = {s.last}> {u.favourite === true ?
                                <img alt = '' src = {FullStar} className = {s.star} onClick = {() => { props.isFollow(u.id) }} /> :
                                <img alt = '' className = {s.star} src = {Star} onClick={() => { props.isUnfollow(u.id) }} />}
                            </span>
                        </div>
                        {props.islangRus === true ? (u.age % 10 === 2 ||
                            u.age % 10 === 3 ||
                            u.age % 10 === 4 ? <div className = {s.age}>{u.age} года</div> :
                            u.age % 10 === 1 ? <div className = {s.age}>{u.age} год </div> :
                                <div className={s.age}>{u.age} лет </div>) :
                            <div className={s.age}>{u.age} years </div>}
                        <div className={s.phone}>{u.phone}</div>
                        <div className={s.phrase}>{u.phrase}</div>
                    </div>

                    {u.video === undefined ? '' :
                        <div className={s.video}>{u.video === 'boy' ?
                            <video autoPlay className = {s.player} preload='none' controlsList='nodownload' type="video/mp4" controls src={boy}></video>

                            :
                            <video autoPlay className = {s.player} preload='none' controlsList='nodownload' type="video/mp4" controls src={shoe}></video>
                        }</div>}

                </div>)}
        </div>
    )
}

export default Show
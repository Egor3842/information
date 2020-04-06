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

const Table = (props) => {

  return (
    <tbody >
      {props.users.map(u =>

        <tr className={s.MainTable}>
          <td className={s.first}><div className={s.imgcontainer}>{
            u.image === 'sheep' ? <img alt = '' src = {sheep} /> :
              u.image === 'raccoon' ? <img alt = '' src = {raccoon} /> :
                u.image === 'owl' ? <img alt = '' src = {owl} /> :
                  u.image === 'dog' ? <img alt = '' src = {dog} /> :
                    u.image === 'fox' ? <img alt = '' src = {fox} /> :
                      u.image === 'koala' ? <img alt = '' src = {koala} /> :
                        u.image === 'penguin' ? <img alt = '' src = {penguin} /> :
                          u.image === 'pig' ? <img alt = '' src = {pig} /> :
                            u.image === 'cat' ? <img alt = '' src = {cat} /> :
                              <img alt = '' src = {lion} />}</div></td>
          <td className = {s.td}><div className = {s.second}>{u.name}</div></td>
          <td >{props.islangRus === true ? (u.age % 10 === 2 ||
            u.age % 10 === 3 ||
            u.age % 10 === 4 ? <div className={s.third}>{u.age} года</div> :
            u.age % 10 === 1 ? <div className={s.third}>{u.age} год </div> :
              <div className={s.third}>{u.age} лет </div>) : <div className={s.third}>{u.age} years </div>}</td>
          <td><div className={s.last}> {u.favourite === true ?
            <img alt = '' src = {FullStar} onClick={() => { props.isFollow(u.id) }} /> :
            <img alt = '' src = {Star} onClick={() => { props.isUnfollow(u.id) }} />}
          </div></td>

        </tr>
      )}

    </tbody>
  )
}
export default Table
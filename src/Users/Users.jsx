import React from 'react'
import s from './Users.module.scss'
import Table from './Table'
import find from '../images/find.png'
import Show from './Show'



const Users = (props) => {
    const isFollow = (userId) => {
        props.SetFollow(userId)
    }
    const isUnfollow = (userId) => {
        props.SetUnfollow(userId)
    }
    const isSortedUp = (bool, field) => {
        props.IsSortedAction(bool)
        props.Sorted(field)
    }
    const ChooseFildSort = (field) => {
        props.Sorted(field)
    }
    const TurnLang = (islangRus) => {
        props.ChooseLang(islangRus)
    }
    const UserText = (e) => {
        let text=e.target.value;
        props.WordToFind(text);

    }
    const IsClickedButton = () =>{
        props.ClickButton(true)
        props.WordToFind(' ')
    }
    const IsClickedField = () =>{
        props.ClickButton(false)
    }

    return (

        <div className={s.container}>

            <div className={s.MainContent}>
                <div className={s.Row}>
                    <span className={s.firstRow}>
                        <div className={s.Sort}>{props.islangRus === true ? 'Сортировать по' : 'Sort by'}</div><br />
                        <div>
                            <button className={props.field === 'id' ? s.active : s.notActive} onClick={() => { ChooseFildSort('id') }}>ID</button>
                            <button className={props.field === 'name' ? s.active : s.notActive} onClick={() => { ChooseFildSort('name') }}>{props.islangRus === true ? 'Имя' : 'Name'}</button>
                            <button className={props.field === 'age' ? s.active : s.notActive} onClick={() => { ChooseFildSort('age') }}>{props.islangRus === true ? 'Возраст' : 'Age'}</button>
                        </div>
                        <div className={s.Params}>
                            <button className={props.isSorted === true ? s.active : s.notActive} onClick={() => { isSortedUp(true, props.field) }}>{props.islangRus === true ? 'По возрастанию' : 'Ascending'}</button>
                            <button className={props.isSorted === false ? s.active : s.notActive} onClick={() => { isSortedUp(false, props.field) }}>{props.islangRus === true ? 'По убыванию' : 'Descending'}</button>
                        </div>
                    </span>
                    <span className={s.secondRow}>
                        <div className={s.View}>{props.islangRus === true ? 'Вид' : 'View'}</div><br />
                        <button className={props.isTable === true ? s.active : s.notActive} onClick={() => props.TableShow(true)}> {props.islangRus === true ? 'Табилца' : 'Table'}</button>
                        <button className={props.isTable === false ? s.active : s.notActive} onClick={() => props.TableShow(false)}>{props.islangRus === true ? 'Превью' : 'Preview'}</button>
                    </span>
                    <span className={s.thirdRow}>
                        <div><input value={props.findWord} onClick={IsClickedField} onChange={UserText}></input></div>
                        
                        <div><img src={find} alt='' className={s.lang} onClick={IsClickedButton}/></div>
                    </span>
                    <span className={s.lastRow}>
                        {props.islangRus === true ?
                            <button className={s.lang} onClick={() => { TurnLang(false) }}>Русский</button> :
                            <button className={s.lang} onClick={() => { TurnLang(true) }}>English</button>}
                    </span>
                </div>

                {props.isTable === true ?
                    props.users.length > 1 ?
                    <table className = {s.table}>
                        <Table users = {props.users}
                            isFollow = {isFollow}
                            isUnfollow = {isUnfollow}
                            islangRus = {props.islangRus} />

                    </table>: <div>{props.islangRus === true ? 'Пользователь с таким именем не найден' : 'Can not find such user'}
                       </div> :
                     props.users.length > 0 ?
                    <div>
                        <Show users={props.users}
                            isFollow = {isFollow}
                            isUnfollow = {isUnfollow}
                            islangRus = {props.islangRus} />

                    </div>: <div>{props.islangRus === true ? 'Пользователь с таким именем не найден' : 'Can not find such user'}
                       </div>}
            </div>

        </div>
    )
}

export default Users
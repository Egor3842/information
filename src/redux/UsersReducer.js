import data from '../data.json'


const initialState = {
    users: data,
    isTable: true,
    field: 'id',
    isSorted: true,
    islangRus:true
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSELANG: {
            return {...state,islangRus:action.islangRus}
        }
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, favourite: false }
                    }
                    return u;
                })

            }
        }
        case SORT: {
            switch (action.field) {
                case 'id': {
                    let mass = [];
                    if (state.isSorted === true) {
                        mass = state.users.sort((prev, next) => prev.id - next.id);
                        return { ...state, field: action.field, users: mass }
                    }
                    else {
                        mass = state.users.sort((prev, next) => prev.id - next.id).reverse();
                        return { ...state, field: action.field, users: mass }
                    }
                }
                case 'name': {
                    let mass = []
                    if (state.isSorted === true) {
                        mass = state.users.sort(function(a, b) {
                            return (a.name).localeCompare(b.name);
                        });

                        return { ...state, field: action.field, users: mass }
                    }
                    else {
                        mass = state.users.sort(function(a, b) {
                            return (a.name).localeCompare(b.name)});
                        return { ...state, field: action.field, users: mass.reverse() }
                    }
                }
                case 'age': {
                    let mass = []
                    if (state.isSorted === true) {
                        mass = state.users.sort((prev, next) => prev.age - next.age);

                        return { ...state, field: action.field, users: mass }
                    }
                    else {
                        mass = state.users.sort((prev, next) => next.age - prev.age);
                        return { ...state, field: action.field, users: mass }
                    }
                }
            }
        }
        case ISSORTED: {
            return { ...state, isSorted: action.isSorted }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, favourite: true }
                    }
                    return u;
                })

            }
        }


        case ISTABLE: {
            return { ...state, isTable: action.isTable }
        }
        default:
            return state;
    }
}
export default UsersReducer

const SORT = 'SORT'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const ISTABLE = 'ISTABLE'
const ISSORTED = 'ISSORTED'
const CHOOSELANG='CHOOSELANG'

export const ChooseLang=(islangRus)=>({type:CHOOSELANG,islangRus})
export const IsSortedAction = (isSorted) => ({ type: ISSORTED, isSorted })
export const Sorted = (field) => ({ type: SORT, field })
export const SetFollow = (userId) => ({ type: FOLLOW, userId })
export const SetUnfollow = (userId) => ({ type: UNFOLLOW, userId })
export const TableShow = (isTable) => ({ type: ISTABLE, isTable })










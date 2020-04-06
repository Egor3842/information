import {connect} from 'react-redux'
import Users from './Users'
import {SetFollow,SetUnfollow,TableShow,IsSortedAction,Sorted,ChooseLang} from '../redux/UsersReducer'


import React from 'react'


class UsersContainer extends React.Component
{
    render(){
        return <Users users={this.props.users}
        SetFollow={this.props.SetFollow}
        SetUnfollow={this.props.SetUnfollow}
        isTable={this.props.isTable}
        TableShow={this.props.TableShow}
        IsSortedAction={this.props.IsSortedAction}
        Sorted={this.props.Sorted}
        field={this.props.field}
        isSorted={this.props.isSorted}
        islangRus={this.props.islangRus}
        ChooseLang={this.props.ChooseLang}/>
       

        
    }
}


let mapStateToProps=(state)=>{
    return {
            users:state.UsersReducer.users,
            isTable:state.UsersReducer.isTable,
            field:state.UsersReducer.field,
            isSorted:state.UsersReducer.isSorted,
            islangRus:state.UsersReducer.islangRus
    }
}


export default connect(mapStateToProps,
    {SetFollow,SetUnfollow,TableShow,IsSortedAction,Sorted,ChooseLang})(UsersContainer)
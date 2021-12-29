import React, { Component } from 'react'
import TableViewUser from '../table/TableViewUser'
import Avatar from 'react-avatar'

const userColumns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
  
    { title: "Address", field: "adress" },
    { title: "Phone", field: "phone" },
    { title: "Register Date", field: "registerDate" }
]


class UserView extends Component {

    render() {
        return (
            <TableViewUser model="user" columns={userColumns} field="name" functions={{
                setStateValue: this.props.setStateValue,
                setModalVisibility: this.props.setModalVisibility }} />
        )
    }
}

export default UserView
import React, { Component } from 'react'
import TableViewUser from '../table/TableViewUser'

const courseColumns = [
  { title: "Resource", field: "resource" },
  { title: "ID", field: "id" },
  { title: "Name", field: "name" },
  { title: "Description", field: "description" },
]

const detailPanel = data => {
  return (
    <iframe
      title={data.rowData.name}
      width="100%"
      height="315"
      src={data.rowData.resource}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

class CourseView extends Component {

  render() {
    return (
      <TableViewUser detailPanel={detailPanel} model="course" field="name" columns={courseColumns} functions={{ 
        setStateValue: this.props.setStateValue,
        setModalVisibility: this.props.setModalVisibility }} />
    )
  }
}

export default CourseView
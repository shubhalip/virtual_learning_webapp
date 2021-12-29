import React, { Component } from 'react'
import Content from '../common/components/Content'
import ContentHeader from '../common/components/ContentHeader'
import axios from 'axios'
import MaterialTable from "@material-table/core"
import { toastr } from 'react-redux-toastr'
import { baseApiUrl } from '../utils/systemConstans'
import { tableIcons, addIcon, editIcon, deleteIcon, refreshIcon, beautifyData, my_localization, options, fileName } from '../utils/materialTable'
import { ExportCsv } from '@material-table/exporters';

class TableViewUser extends Component {

    constructor(props) {
        super(props)
        this.state = { data: [] }
    }

    getData() {
        axios.get(`${baseApiUrl}/${this.props.model}s`)
            .then(result => {
                let tableData = []
                if (result.data && Array.isArray(result.data)) {
                    if (this.props.model === 'contact' || 'feedback') {
                        tableData = result.data.map(entity => {
                            const user = { ...entity.user }
                            user.userId = user.id
                            delete user.id
                            delete entity.user
                            return { ...entity, ...user }
                        })
                    } else {
                        tableData = result.data
                    }
                }
                beautifyData(tableData)
                this.setState({ data: tableData })
            })
            .catch(e => {
                if (e && e.response && e.response.data) {
                    toastr.error('Error', e.response.data)
                } else if (typeof e === 'string') {
                    toastr.error('Error', e)
                } else {
                    toastr.error('Error', 'Oops.. Something went wrong.')
                }
                this.setState({ data: [] })
            })
    }

    componentDidMount() {
        this.getData()
    }

   
    onRefreshClick = () => this.getData()

    render() {
        const actions = [
            {
                icon: refreshIcon,
                tooltip: 'Refresh',
                isFreeAction: true,
                onClick: this.onRefreshClick
            },
           
        ]
        return (
            <div>
                <ContentHeader title={this.props.model.charAt(0).toUpperCase() + this.props.model.slice(1) + 's'} />
                <Content>
                    <div>
                        <MaterialTable detailPanel={this.props.detailPanel} title="" columns={this.props.columns} icons={tableIcons}
                            data={this.state.data}
                            actions={actions}
                            options={{
                                ...options, exportMenu: [{
                                    label: 'Export CSV',
                                    exportFunc: (cols, data) => ExportCsv(cols, data, fileName+'_'+this.props.model)
                                }]
                            }}
                            localization={my_localization}
                        />
                    </div >
                </Content>
            </div >
        )
    }
}

export default TableViewUser
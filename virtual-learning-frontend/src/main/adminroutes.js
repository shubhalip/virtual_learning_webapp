import React, { Component } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,useParams,
    useRouteMatch,  } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CourseView from '../course/CourseView'
import UserView from '../user/UserView'
import ContactView from '../contact/ContactView'
import FeedbackView from '../feedback/FeedbackView'
import Modal from '../common/modal/Modal'
import { setModalVisibility } from '../common/modal/modalActions'
import If from '../common/operators/If'
import { setCourse } from '../course/courseActions'
import { setUser } from '../user/userActions'
import { setContact } from '../contact/contactActions'
import { setFeedback } from '../feedback/feedbackActions'
import { setAdmin } from '../admin/adminActions'

class AdminRoutes extends Component {


    render() {

        return (
            <div className='content-wrapper'>
           
                <Routes>
                    <Route exact path="/"  exact element={<CourseView setStateValue={this.props.setCourse} setModalVisibility={this.props.setModalVisibility} />} />
                    <Route  exact path="/users/"  exact element={<UserView setStateValue={this.props.setUser} setModalVisibility={this.props.setModalVisibility} />} />
                    <Route  exact path="/contacts/" exact element={<ContactView setStateValue={this.props.setContact} setModalVisibility={this.props.setModalVisibility} />} />
                    <Route  exact path="/feedbacks/" exact  element={<FeedbackView setStateValue={this.props.setFeedback} setModalVisibility={this.props.setModalVisibility} />} />
                </Routes>
             
            <If test={this.props.modalVisibility}>
                <Modal />
            </If>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    modalVisibility: state.modal.modalVisibility,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    setModalVisibility,
    setCourse,
    setUser,
    setContact,
    setFeedback,
   
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AdminRoutes)
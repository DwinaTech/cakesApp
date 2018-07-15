import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom'
import { CakesForm } from '../CakesForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editCake } from '../../actions';
import './style.css'

class EditCake extends Component {

    state = {
        name: '',
        yumFactor: null,
        imgUrl: '',
        comment: '',
        openEdit: false
    }

    componentDidMount(){
        this.setState({
            name: this.props.name,
            imageUrl: this.props.imageUrl,
            yumFactor: this.props.yumFactor,
            comment: this.props.comment
        })
    }

    handleCakeChange = (e) => {    
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmitChange = () => {
        const { cakeId } = this.props;
        this.props.editCake(this.state, cakeId);
        this.context.router.history.push('/')
    }

    showComponent = () => {
        this.setState({
            openEdit: true
        })
    }

    handleCancel = () => {
        this.setState({
            openEdit: false
        })
    }

    renderEditComponent = () => {
        return (
            <div className="edit">
                <div className="content">
                    <CakesForm 
                        handleSubmitChange={this.handleSubmitChange}
                        handleCakeChange={this.handleCakeChange}
                        handleCancel={this.handleCancel}
                        name={this.state.name}
                        imageUrl={this.state.imageUrl}
                        yumFactor={this.state.yumFactor}
                        comment={this.state.comment}
                        edit={this.state.openEdit}
                        buttonText='Update'
                    />
                </div>
            </div>
        )
    }

    render() {
        if (this.state.openEdit) {
            return this.renderEditComponent()
        }
        return (
            <button className="edit-button" onClick={this.showComponent} type="text" >Edit</button>
        );
    }
}

EditCake.propTypes = {
    editCake: PropTypes.func.isRequired
} 

EditCake.contextTypes = {
    router: PropTypes.object.isRequired
  };

function mapStateToProp({savedCake}) {    
    return {
        savedCake
    }
}
export default connect(mapStateToProp, { editCake })(EditCake);

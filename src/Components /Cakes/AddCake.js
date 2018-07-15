import React, { Component, Fragment } from 'react';
import { CakesForm } from '../CakesForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCake } from '../../actions';
import './style.css';

class AddCakes extends Component {

    state = {
        name: '',
        imgUrl: '',
        comment: '',
        open: false
    }

    handleCakeChange = (e) => {    
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmitChange = () => {
        this.props.addCake(this.state);
        this.context.router.history.push('/');
        this.setState({ open: false })
    }

    handleCakeChange = (e) => {    
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showComponent = () => {
        this.setState({
            open: true
        })
    }

    handleCancel = () => {
        this.setState({
            open: false
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
                        name={this.props.name}
                        imageUrl={this.props.imageUrl}
                        yumFactor={this.props.yumFactor}
                        comment={this.props.comment}
                        buttonText='Update'
                    />
                </div>
            </div>
        )
    }

    render() {
        if (this.state.open) {
            return (
                <div className="add-cake">
                    <CakesForm 
                        handleSubmitChange={this.handleSubmitChange}
                        handleCakeChange={this.handleCakeChange}
                        handleCancel={this.handleCancel}
                        buttonText="Save"
                    />
                </div>
            );
        }
        return (
            <button className="add-button" onClick={this.showComponent} type="text" >Add cake</button>
        )
    }
}

AddCakes.propTypes = {
    addCake: PropTypes.func.isRequired
} 

AddCakes.contextTypes = {
    router: PropTypes.object.isRequired
};

function mapStateToProp({savedCake}) {    
    return {
        savedCake
    }
}
export default connect(mapStateToProp, { addCake })(AddCakes);

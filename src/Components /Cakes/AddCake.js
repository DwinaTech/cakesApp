import React, { Component } from 'react';
import { CakesForm } from '../CakesForm';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCake } from '../../actions';
import './style.css';

class AddCakes extends Component {

    state = {
        name: '',
        imgUrl: '',
        comment: ''
    }

    handleCakeChange = (e) => {    
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmitChange = () => {
        this.props.addCake(this.state)
        .then(() => {
            this.context.router.history.push('/')
        })
        
    }

    render() {
        const add = this.props.location ? this.props.location.pathname : '';
        if (add.includes('add')) {
            return (
                <div className="add-cake">
                    <CakesForm 
                        handleSubmitChange={this.handleSubmitChange}
                        handleCakeChange={this.handleCakeChange}
                        buttonText="Save"
                    />
                </div>
            );
        }
        return (
            <Link to="/cakes/add"><button className="add-button" type="text" >Add cake</button></Link>
        )
    }
}

AddCakes.propTypes = {
    addCake: PropTypes.func.isRequired
} 

AddCakes.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(null, { addCake })(AddCakes);

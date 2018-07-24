import React, { Component } from 'react';
import { CakesForm } from '../CakesForm';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCake } from '../../actions';
import Spinner from '../Spinner';
import './style.css';

class AddCakes extends Component {

    state = {
        name: '',
        imgUrl: '',
        comment: '',
        isLoading: false
    }

    handleCakeChange = (e) => {    
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmitChange = () => {
        this.setState({ isLoading: true })
        this.props.addCake(this.state)
        .then(() => {
            this.context.router.history.push('/')
            this.setState({ isLoading: false })
        })
        
    }

    render() {
        const add = this.props.location ? this.props.location.pathname : '';
        if (add.includes('add')) {
            if (this.state.isLoading) {
                return <Spinner />
            }
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

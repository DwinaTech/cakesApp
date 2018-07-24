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
        imageUrl: '',
        comment: '',
        isLoading: false,
        error: ''
    }

    validation = () => {
        let isError = false;
        if (this.state.name.length === 0 || 
            this.state.imageUrl.length === 0 ||
            this.state.comment.length === 0
        ) {
            isError = true;
            this.setState({ error: 'All fields are required'})
        }
        return isError;
    }

    handleCakeChange = (e) => {    
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmitChange = async () => {
        const error = this.validation()
        if (!error) {
            this.setState({ isLoading: true })
            const response = await this.props.addCake(this.state);
            if (response.success) {
                this.setState({ isLoading: false })
                this.context.router.history.push('/')
            }else{
                this.setState({ error: response.message, isLoading: false })
            }
        }
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
                        error={this.state.error}
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

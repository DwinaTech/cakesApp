import React, { Component, Fragment } from 'react';
import { CakesForm } from '../CakesForm';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editCake } from '../../actions';
import './style.css'
import Spinner from '../Spinner';

class EditCake extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.data.name,
            imageUrl: props.data.imageUrl,
            yumFactor: props.data.yumFactor,
            comment: props.data.comment,
            cakeId: props.data._id,
            open: false,
            isLoading: false,
            error: ''
        }
    }

    handleCakeChange = (e) => {    
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
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

    handleSubmitChange = async () => {
        const error = this.validation()
        const { cakeId } = this.state;
        if (!error) {
            this.setState({ isLoading: true })
            const response = await this.props.editCake(this.state, cakeId);
            if (response.success) {
                this.setState({ isLoading: false })
                this.context.router.history.push('/favoritecakes')
                this.context.router.history.push('/')
            }else{
                this.setState({ error: response.message, isLoading: false })
            }
        }
    }

    handleOpen = () => {
        this.setState({ open: true })
    }

    handleCancel = () => {
        this.setState({ open: false })
    }

    render() {
        if (this.state.isLoading) {
            return <Spinner />
        }
        return (
            <Fragment>
                {
                    this.state.open ? 
                    <div className="edit">
                        <div className="content">
                            <CakesForm 
                                edit
                                handleSubmitChange={this.handleSubmitChange}
                                handleCakeChange={this.handleCakeChange}
                                handleCancel={this.handleCancel}
                                name={this.state.name}
                                imageUrl={this.state.imageUrl}
                                yumFactor={this.state.yumFactor}
                                comment={this.state.comment}
                                buttonText='Update'
                                error={this.state.error}
                            />
                        </div>
                    </div> : 
                    <button className="edit-button" onClick={this.handleOpen}>Edit</button>
                }
            </Fragment>
        )
    }
}

EditCake.propTypes = {
    editCake: PropTypes.func.isRequired
} 

EditCake.contextTypes = {
    router: PropTypes.object.isRequired
  };

export default connect(null, { editCake })(withRouter(props => <EditCake {...props} />));

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
            isLoading: false
        }
    }

    handleCakeChange = (e) => {    
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmitChange = () => {
        const { cakeId } = this.state;
        this.setState({ isLoading: true })
        this.props.editCake(this.state, cakeId)
        .then(() => {
            this.context.router.history.push('/favoritecakes')
            this.context.router.history.push('/')
            this.setState({ isLoading: false })
        })
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

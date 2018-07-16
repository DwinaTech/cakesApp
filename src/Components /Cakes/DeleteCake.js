import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteCake } from '../../actions/index'
import './style.css';

class DeleteCake extends Component {

    state = {
        open: false
    }

    handleDelete = () => {
        const { cakeId } = this.props
        this.props.deleteCake(cakeId)
        this.context.router.history.push('/');
        this.setState({ open: false })
    }

    handleCancel = () => {
        this.setState({
            open: false
        })
    }

    handleShowComponent = () => {
        this.setState({
            open: true
        })
    }

    renderContent = () => {  
        return (
            <div className="delete">
                <div className="content">
                    <h1>Are you sur want to delete this cake?</h1>
                    <div className="buttons">
                        <button className="deleteButton" onClick={ this.handleDelete } type="submit">Delete</button>
                        <button className="cancelButton" onClick={ this.handleCancel } type="text">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        if (this.state.open) {
            return this.renderContent()
        }
        return (
            <button className="delete-button" type="text" onClick={this.handleShowComponent}>Delete</button>
        )
    }
}

DeleteCake.propTypes = {
    deleteCake: PropTypes.func.isRequired
} 

DeleteCake.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(null, { deleteCake })(DeleteCake);

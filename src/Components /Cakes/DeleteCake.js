import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { deleteCake, deleteFavoriteCake } from '../../actions/index'
import Spinner from '../Spinner';
import './style.css';

class DeleteCake extends Component {
    constructor(props){
        super(props);
        this.state ={
            cakeId: props.match.params.cakeId,
            favoriteCakeId: props.match.params.favoriteCakeId,
            isLoading: false
        }
    }

    handleDelete = () => {
        const { cakeId } = this.state;
        const { favoriteCakeId } = this.state
        this.setState({ isLoading: true })
        if (favoriteCakeId) {
            this.props.deleteFavoriteCake(favoriteCakeId)
            .then(() => {
                this.context.router.history.push('/favoritecakes');
                this.setState({ isLoading: false })
            })
        }
        if (cakeId) {
            this.props.deleteCake(cakeId)
            .then(() => {
                this.context.router.history.push('/');
                this.setState({ isLoading: false })
            })
        }
    }

    render() {
        if (this.state.isLoading) {
            return <Spinner />
        }
        return (
            <div className="delete">
                <div className="content">
                    <h1>Are you sur want to delete this cake?</h1>
                    <div className="buttons">
                        <button className="deleteButton" onClick={ this.handleDelete } type="submit">Delete</button>
                        {
                            this.state.cakeId ?
                            <Link to="/"><button className="cancelButton" type="text">Cancel</button></Link>
                            :
                            <Link to="/favoritecakes"><button className="cancelButton" type="text">Cancel</button></Link>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

DeleteCake.propTypes = {
    deleteCake: PropTypes.func.isRequired
} 

DeleteCake.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(null, { deleteCake, deleteFavoriteCake })(DeleteCake);

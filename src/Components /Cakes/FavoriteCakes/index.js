import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFavoritecake, getFavoriteCakes } from '../../../actions';
import SingleCake from '../SingleCake';
import TopNav from '../../TopNav';
import './style.css';

class FavoriteCakes extends Component {

    state = {
        user: 'customer',
        error: ''
    }
    componentDidMount(){
        this.props.getFavoriteCakes();
    }

    handleSubmit = () => {
        const { name, imageUrl, comment, yumFactor } = this.props;
        this.props.addFavoritecake({ name, imageUrl, comment, yumFactor })
        .then(cake => {
            if (cake) {
                this.context.router.history.push('/favoritecakes');
            }else{
                this.setState({ error: 'There is an error occurred'})
            }
        })
    }

    handleUserType = (e) => {
        this.setState({ user: e.target.value })
    }

    showFavoriteCakesComponent = () => {
        const cakes = this.props.favoriteCakes.favoriteCakes ? this.props.favoriteCakes.favoriteCakes.data : [];
        return (
            <div className="cake-list">
            <TopNav />
            <h1>Favorite Cakes List</h1>
            <div className="content">
                {
                    cakes.map(cake => (
                        <div key={cake._id} className="cake-card">
                            <h1>{cake.name}</h1>
                            <h2>Cake number: {cake.yumFactor} cakes</h2>
                            <img src={`${cake.imageUrl}`} alt='img' /><br/>
                            <Fragment>
                                <SingleCake cake={cake} />
                                <Link className="delete-button" to={`/favoritecakes/delete/${cake._id}`}>Delete</Link>
                            </Fragment>
                        </div>
                    ))
                }
            </div>
        </div>
        )
    }

    render() {   
        const { pathname } = this.props.location;
        if (pathname === '/favoritecakes') {
            return this.showFavoriteCakesComponent()
        }
        return (
            <button onClick={this.handleSubmit} className="select-cake" type="submit" >Select</button>
        );
    }
}

FavoriteCakes.propTypes = {
    favoriteCakes: PropTypes.object.isRequired,
    addFavoritecake: PropTypes.func.isRequired,
    getFavoriteCakes: PropTypes.func.isRequired, 
}
  
FavoriteCakes.contextTypes = {
    router: PropTypes.object.isRequired
};

function mapStateToProp({favoriteCakes}) {    
    return {
        favoriteCakes
    }
}

export default connect(mapStateToProp, { addFavoritecake, getFavoriteCakes })(withRouter(props => <FavoriteCakes {...props} />));

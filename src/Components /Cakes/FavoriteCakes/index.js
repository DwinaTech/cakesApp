import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFavoriteCakes } from '../../../actions';
import DeleteCake from '../DeleteCake';
//import './favoriteCake.css';
import SingleCake from '../SingleCake';

class FavoriteCakes extends Component {

    state = {
        yumFactor: 1,
        user: 'customer'
    }
    async componentDidMount(){
        this.props.getFavoriteCakes();
    }

    handleSelectCakeNumber = (e) => {
        this.setState({ yumFactor: e.target.value })
    }

    handleUserType = (e) => {
        this.setState({ user: e.target.value })
    }

    render() {   
        const cakes = this.props.favoriteCakes.favoriteCakes ? this.props.favoriteCakes.favoriteCakes.data : [];
        return (
        <div className="cake-list">
            <h1>Cakes list</h1>
            <div className="content">
                {
                    cakes.map(cake => (
                        <div key={cake._id} className="cake-card">
                        {console.log(cake)
                        }
                            <h1>{cake.name}</h1>
                            {cake.yumFactor ? <label>Number of selected cakes { cake.yumFactor }</label>: null}
                            <img src={`${cake.imageUrl}`} alt='img' /><br/>
                            <Fragment>
                                <SingleCake cake={cake} />
                                <DeleteCake cakeId={cake._id} />
                            </Fragment>
                        </div>
                    ))
                }
            </div>
        </div>
        );
    }
}

FavoriteCakes.propTypes = {
    getFavoriteCakes: PropTypes.func.isRequired
}

const dispatchToProps = dispatch => {
    return {
        getFavoriteCakes: () => {
        return dispatch(getFavoriteCakes())
      }
    }
  }
  

function mapStateToProp({favoriteCakes}) {    
    return {
        favoriteCakes
    }
}
export default connect(mapStateToProp, dispatchToProps)(FavoriteCakes);

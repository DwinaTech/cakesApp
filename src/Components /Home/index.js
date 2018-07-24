import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getListOfCakes } from '../../actions';
import AddCake from '../Cakes/AddCake';
import './home.css';
import SingleCake from '../Cakes/SingleCake';
import FavoriteCakes from '../Cakes/FavoriteCakes'
import TopNav from '../TopNav';
import EditCake from '../Cakes/EditCake';
import Spinner from '../Spinner';

class Home extends Component {

    state = {
        yumFactor: 1,
        user: 'customer',
        isLoading: false
    }
    async componentDidMount(){
        this.props.getListOfCakes();
    }

    handleSelectCakeNumber = (e) => {
        this.setState({ yumFactor: e.target.value })
    }

    handleUserType = (e) => {
        this.setState({ user: e.target.value })
    }

    showSpinner = () => {
        this.setState({ isLoading: true })
    }

    render() {   
        const { yumFactor } =  this.state;
        const { user } = this.state;
        const cakes = this.props.listOfCakes.listOfCakes ? this.props.listOfCakes.listOfCakes.data : [];
        if (cakes.length === 0 || this.state.isLoading) {
            return <Spinner />
        }
        return (
        <Fragment>
            <TopNav />
            <div className="cake-list">
                <h1>Cakes list</h1>
                <div className="cakes-number">
                    <label>Select user type</label>
                    <select onChange={this.handleUserType} name="user" >
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                { user === 'admin' ? <AddCake /> : null }
                <div className="content">
                    {
                        cakes.map(cake => (
                            <div key={cake._id} className="cake-card">
                                <h1>{cake.name}</h1>
                                { user !== 'admin' ?
                                    (
                                        <div className="cakes-number">
                                            <label>Select number of cakes</label>
                                            <select onChange={this.handleSelectCakeNumber}>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                                <option value="4">Four</option>
                                                <option value="5">Five</option>
                                            </select>
                                        </div>
                                    ): null
                                }
                                {cake.yumFactor ? <label>Number of selected cakes { cake.yumFactor }</label>: null}
                                <img src={`${cake.imageUrl}`} alt='img' /> <br/>
                                {
                                    user === 'admin' ? (
                                        <Fragment>
                                            <SingleCake cake={cake} />
                                            <EditCake data={cake} /><br />
                                            <Link className="delete-button" to={`/cakes/delete/${cake._id}`} >Delete</Link>
                                        </Fragment>
                                    ):(
                                        <Fragment>
                                            <SingleCake cake={cake} />
                                            <FavoriteCakes yumFactor={yumFactor} showSpinner={this.showSpinner} {...cake}/>
                                        </Fragment>
                                    )
                                } 
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
        );
    }
}

Home.propTypes = {
    getListOfCakes: PropTypes.func.isRequired
}

const dispatchToProps = dispatch => {
    return {
        getListOfCakes: () => {
        return dispatch(getListOfCakes())
      }
    }
  }
  

function mapStateToProp({listOfCakes}) {    
    return {
        listOfCakes
    }
}
export default connect(mapStateToProp, dispatchToProps)(withRouter(props => <Home {...props} />));

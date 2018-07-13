import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getListOfCakes } from '../../actions';
import EditCake from '../Cakes/EditCake';
import DeleteCake from '../Cakes/DeleteCake';
import AddCake from '../Cakes/AddCake';
import './home.css';

class Home extends Component {
    async componentDidMount(){
        this.props.getListOfCakes();
    }

    render() {
        const cakes = this.props.listOfCakes.listOfCakes ? this.props.listOfCakes.listOfCakes.data : [];
        return (
        <div className="App">
            <h1>My favorite cakes</h1>
            <AddCake />
            {
                cakes.map(cake => (
                    <Fragment key={cake._id}>
                        <h1>{cake.name}</h1>
                        <label>
                            {cake.yumFactor}
                        </label>
                        <br/>
                        <img src='http://placehold.it/300x200' alt='img' /><br/>
                        <button className="select-cake" type="submit" >Select</button>
                        <EditCake {...cake} />
                        <br/>
                        <DeleteCake />
                    </Fragment>
                ))
            }
        </div>
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
export default connect(mapStateToProp, dispatchToProps)(Home);

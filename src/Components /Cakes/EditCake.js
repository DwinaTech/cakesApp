import React, { Component } from 'react';
import { CakesForm } from '../CakesForm';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editCake } from '../../actions';
import './style.css'

class EditCake extends Component {

    state = {
        name: '',
        yumFactor: null,
        imgUrl: '',
        comment: ''
    }

    componentDidMount(){
        const { data } = this.props.match.params;
        this.setState({
            name: data.name,
            imageUrl: data.imageUrl,
            yumFactor: data.yumFactor,
            comment: data.comment
        })
    }

    handleCakeChange = (e) => {    
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmitChange = () => {
        const { cakeId } = this.props;
        this.props.editCake(this.state, cakeId)
        .then(() => {
            this.context.router.history.push('/')
        })
    }

    render() {
        return (
            <div className="edit">
                <div className="content">
                    <CakesForm 
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
            </div>
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

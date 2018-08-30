import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route {...rest}  component={ (props) => {
                return (
                    isAuthenticated ?
                    <Redirect to="/dashboard"/>

                    :
                    
                    <Component {...props}/>
                );
            } 
        }/>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: Boolean(state.auth.uid)
    }
};

export default connect(mapStateToProps)(PublicRoute);

// class PublicRoute extends React.Component {
//     manual = () => {
//         let props = this.props;
//         let isAuthenticated = this.props.isAuthenticated;
//         let Component = this.props.component;

//         return (
//             isAuthenticated ?
//             <Redirect to="/dashboard"/>
//             :
//             <Component {...props}/>
//         );
//     }

//     render() {
//         return (
//             <Route component={this.manual} />
//         );
//     }
// }

// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    console.log(props);
    return (
        <div>
           <h1>Info</h1>
           <p>The info is: {props.info}</p>
        </div>
    );
}

const withAdminWarning = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                { props.isAdmin && <p>This is private info. Please don't share!</p>}
                <WrappedComponent {...props} />
            </div>
        );
    }
}

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));

// // Note:
// // requireAuthentication is a regular function that returns the higher order component
// const requireAuthentication = (WrappedComponent) => {
//     return (props) => { /* This is stateless functional component, in this case hoc*/
//         return (
//             <div>
//                 {console.log(props)}
//                 { props.isAuthenticated ?
//                     <WrappedComponent {...props} />
//                     :
//                     <p>Please log in!</p>
//                 }
                
//             </div>
//         );
//     }
// }

// const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));
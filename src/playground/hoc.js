// Higher order components - HOC
// A component that renders another component. 
// HOC will allow us to:
// 1. Reuse code.
// 2. Do render hijacking.
// 3. Manipulate props.
// 4. Abstract state.

import React from 'react';
import ReactDOM from 'react-dom';

// NOT a HOC!
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// This function will return a HOC.
const withAdminWarning = (WrappedComponent) => {
  // We return a stateless functional component.
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info. Please don't share!</p> }
      <WrappedComponent {...props} />
    </div>
  );
};

// AdminInfo is the HOC.
const AdminInfo = withAdminWarning(Info);

// =========== Another example ===========
const requireAuthentication = (WrapperdComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrapperdComponent {...props} />
      ) : (
        <p>Please login to see the info.</p>
      )}
    </div>
  );
};

// Another one...
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'));

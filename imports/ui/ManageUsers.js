import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

class ManageUsers extends React.Component {
constructor(props) {
  super(props);
    ManageUsers.defaultProps = {
      users: []
    };
}
renderUsers() {
  return this.props.users.map((users) => {
    return <ManageUsers key={users._id} user={users}/>;
    
  });
};

  render() {
    return (
      <div>
        <li>{this.renderUsers()}</li>
      </div>
    );
  }
};

ManageUsers.propTypes = {
  users: PropTypes.array.isRequired
};

export default withTracker(() => {
  Meteor.subscribe("users");
  return {
  users: Meteor.users.find({}).fetch()
  }
})(ManageUsers);

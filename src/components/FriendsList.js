import React from 'react';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      orderBy: 'name',
      order: 'ascending'
    };
  }

  handleChange(field, event) {
    this.setState({[field]: event.target.value});
  }

  render() {
    return (
      <div>
        <form className="form-inline searchForm" role="form">
          <div className="form-group">

            <input className="form-control" placeholder="Search For Friends"/>

            <select className="input-medium">
              <option>Name</option>
              <option>#Friends</option>
            </select>

            <select className="input-medium">
              <option>Descending</option>
              <option>Ascending</option>
            </select>

          </div>
        </form>

        <ul>
        </ul>
      </div>
    )
  }
}

export default FriendsList;
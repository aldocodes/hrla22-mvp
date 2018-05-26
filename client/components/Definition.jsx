import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listWord = "",
      lists: {}
    };
  }

  componentDidMount() {
    this.fetchDictionary();
  }

  fetchDictionary() {
    axios
    .get("")
    .then(data => {
      console.log('data in get:', data);
      this.setState( {lists: data}, () => {
        console.log('this.state.word = ', this.state.lists);
      })
    })
  }
}

export default App;
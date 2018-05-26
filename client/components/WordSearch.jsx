import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   listWord = "",
    //   lists: []
    // };
  }
    render(){
      return (
        <div>
          <input type="text"></input>
          <button onClick={() => this.props.deleteList(this.props.index)}>&#10004;</button>{' '}{this.props.list}
        </div>
      );
    }
  }



  // componentDidMount() {
  //   this.fetchDictionary();
  // }

  // fetchDictionary() {
  //   axios
  //   .get("")
  //   .then(data => {
  //     console.log('data in get:', data);
  //     this.setState( {lists: data}, () => {
  //       console.log('this.state.word = ', this.state.lists);
  //     })
  //   })
  // }
// }

export default App;
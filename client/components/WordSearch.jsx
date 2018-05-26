import React from 'react';
import axios from 'axios';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: ''
    };
  }

  lookUpWord() {
    // console.log(this.state.inputField)
    $.post('/dict', {word : this.state.inputField}, () => {
      $.get('/repos', repos => {
        if (repos.length) {
          this.setState(
            {
              repos: repos,
            },
            () => console.log(this.state),
          );
        }
      });
    // axios.get('https://od-api.oxforddictionaries.com/api/v1/entries/en/'+this.state.inputField)
      // .then(function(response){
      // console.log(response.data); // ex.: { user: 'Your User'}
      // console.log(response.status); // ex.: 200
    // })
    });  
  }

  updateInput(event) {
    this.setState({
      inputField: event.target.value
    })
  }

    render(){
      return (
        <div>
          {/* &#10004 */}
            <input type="text" onKeyUp={() => this.updateInput(event)}></input>
            <button onClick={() => this.lookUpWord()}></button>
        </div>
      );
    }
  }

//this.props.deleteList(this.props.index)

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
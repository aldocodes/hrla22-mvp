import React from 'react';
import axios from 'axios';
import $ from 'jquery';

class WordSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: '',
      sentence: '',
    };
  }

  componentDidMount() {
    console.log('grabbing sentences')

    $.get('/dict', sentence => {
      if (sentence.length) {
        this.setState(
          {
            sentence: sentence,
          },
        );
        console.log(this.state.sentence)
      }
      console.log(this.state.sentence)
    });
  }

  lookUpWord() {
    // console.log(this.state.inputField)
    $.post('/dict', {word : this.state.inputField}, () => {
      // console.log('GIANT CONSOLE LOG out',repos)
      $.get('/dict', sentence => {
        if (sentence.length) {
          this.setState(
            {
              sentence: sentence,
            },
          );
          console.log(this.state.sentence)
        }
        console.log(this.state.sentence)
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

    $.get('/dict', sentence => {
      if (sentence.length) {
        this.setState(
          {
            sentence: sentence,
          },
        );
        console.log(this.state.sentence)
      }
      console.log(this.state.sentence)
    });
  }

    render(){
      return (
        <div>
            <input type="text" onKeyUp={() => this.updateInput(event)}></input>
            <button onClick={() => this.lookUpWord(this.props.index)}>&#10004;</button>
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

export default WordSearch;
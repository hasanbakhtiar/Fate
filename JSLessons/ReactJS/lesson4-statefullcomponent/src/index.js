import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './sass/style.css';

const list = {
  item1:"pen",
  item2:"book",
  item3:"board"
}


class ListItem extends Component{
  render(){
    return(
      <>
      <li>{list.item1}</li>
      <li>{list.item2}</li>
      <li>{list.item3}</li>
      </>
    )
  }
}

class List extends Component{
  render(){
    return(
      <ol>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      </ol>
    )
  }
}

class App extends Component{
    render(){
      return(
        <>
       <List />
        </>
      )
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));

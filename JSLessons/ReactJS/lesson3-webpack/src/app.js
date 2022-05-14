import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';
import komp from './img/img.jpg'


class App extends React.Component{
    render(){
        return(
            <>
                <h1>Hello React</h1>
                <img src={komp} alt="" width="300" />
            </>
        )
    }
}


ReactDOM.render(<App/>,document.querySelector('#root'));
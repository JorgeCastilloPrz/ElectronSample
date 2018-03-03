import React from 'react'
import ReactDom from 'react-dom'
import Navbar from '../components/navbar'

class Layout extends React.Component {
  render() {
    return(
      <div>
        <Navbar/>
        <div className="container">
          <div className="starter-template">
            <h1>Bootstrap starter template</h1>
            <p className="lead">Use this document as a way to quickly start any new project.<br/> All you get is this text and a mostly barebones HTML document.</p>
          </div>
        </div>
      </div>
    )
  }
}

window.onload = function(){
  ReactDOM.render(<Layout/>, document.getElementById('layout-container'));
}

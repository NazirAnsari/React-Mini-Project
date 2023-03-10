import React from 'react'
import axios from 'axios';

export default class Users extends React.Component {
    constructor(props) {
    super(props);
  
    // Initializing the state 
    this.state = {
        renderType:'users',
        items: [],
      };
  }

  componentDidMount() {
    console.log("componentDidMountCalled",this.state.renderType);
    
    axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
      .then(res => this.setState({
        items:res.data
      }));
  }


  changeState=()=>{
    axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
    .then(res => this.setState({
      items:res.data.reverse()
      
    }));
  }
  
  render() {
    return (
      <div> 
        <center>
        <button onClick={()=>this.changeState()}>Reverse</button>
        <h1> {this.state.renderType} </h1>
        </center>


        <table border={2}>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
            </tr>

        <tr>
            <td>
            {this.state.items.map((item)=>{
            return <pre key={item.id}>{JSON.stringify(item.id)}</pre>
        })} 
            </td>
            <td>
            {this.state.items.map((item)=>{
            return <pre key={item.id}>{JSON.stringify(item.name)}</pre>
        })} 
            </td>
            <td>
            {this.state.items.map((item)=>{
            return <pre key={item.id}>{JSON.stringify(item.email)}</pre>
        })} 
            </td>
            <td>
            {this.state.items.map((item)=>{
            return <pre key={item.id}>{JSON.stringify(item.username)}</pre>
        })} 
            </td>
        </tr>
        </table>

        {/* <div>
        <h1> {this.state.renderType} </h1>
        {this.state.items.map((item)=>{
            return <pre key={item.id}>{JSON.stringify(item)}</pre>
        })}
        </div> */}
      </div>
    )
  }
}
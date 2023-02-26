import React from 'react'
import Posts from '../Components/Posts';
import Comments from '../Components/Comments';
import Users from '../Components/Users';


export default class ComponentClass extends React.Component {
    constructor(props) {
    super(props);
  
    // Initializing the state 
    this.state = {
        hello:true,
        renderType:'posts',
        items: [],
      };
  }

//   componentDidMount() {
//     console.log("componentDidMountCalled",this.state.renderType);
    
//     axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
//       .then(res => this.setState({
//         items:res.data
//       }));
//   }

  // componentDidUpdate(prevProps,prevState){
  //   console.log('componentdidUpdate',this.state.renderType)
  //   console.log(this.state.items);
  //   if(prevState.renderType!==this.state.renderType){
  //   axios.get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
  //       .then(res => this.setState({
  //       items:res.data
  //       }));
  //   }
  // }

  // changeState = ()=>{
  //   this.setState({
  //       hello: !this.state.hello
  //   })
  // }

  
  render() {
    return (
        <div>
          <center>
            {/* <button onClick={()=>{this.changeState()}}>Change</button> */}
            <button onClick={()=>this.setState({renderType:"posts"})}>Posts</button>
            <button onClick={()=>this.setState({renderType:"comments"})}>Comments</button>
            <button onClick={()=>this.setState({renderType:"users"})}>Users</button>
            <hr color='black'/>
            {this.state.renderType=== "posts" ? <Posts/> : (this.state.renderType === "comments" ? <Comments/> : <Users/>)} 
            </center>
            
        </div>
    )
  }
}
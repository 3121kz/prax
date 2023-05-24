import {Component} from "react";
class Counter extends Component{
    constructor(){
        super();
        this.state={
            counter:0,
        }
        //this.increment=this.increment.bind(this)
    }
    increment=()=>{
        console.log(this);
        this.setState({
            counter: this.state.counter +1,
        })
    }
    render(){
        return <div>
             <h3>Count value: {this.state.counter}</h3>
             <button onClick={this.increment}>Click me!</button>
        </div>
       
    }
}




export default Counter;
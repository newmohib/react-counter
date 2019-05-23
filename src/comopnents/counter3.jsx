
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class Counter extends Component {
    state={
        count:this.props.value
    };
    handleIncrement = ()=>{
        const counter=this.state.count ==="Zero"? 1:this.state.count+1;
        this.setState({count:counter});
    }
    handleDecrement = ()=>{
        const counter=this.state.count ===1? 0:this.state.count-1;
        if (this.state.count<=0) {
            this.setState({count:"Zero"});
        }else if(this.state.count>=0){
            this.setState({count:counter});
        }
       
      
    }
    render() {
        //here found all props...
        //props is object in all modules
        // console.log("props", this.props);

        if (this.state.count ===0) {
            let counterSet=this.state.count ===0? "Zero":this.state.count;
            this.setState({count:counterSet});
        }
        
        
        return (
            <React.Fragment>
                <div style={{marginLeft:"500px"}}>
                {/* from conouters.. if many children continue view */}
                {/* {this.props.children} */}
                 <h4>{this.props.id}</h4>
                <button onClick={this.handleIncrement} className="btn btn-success mr-1">Incriment</button>
                <button onClick={this.handleDecrement} className="btn btn-info mr-1">Decriment</button>
                 <p><strong>{this.state.count}</strong></p>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Counter;
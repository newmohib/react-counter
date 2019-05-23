import React, { Component } from 'react';
//import  counter from './counter';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters:[
            {id:1,value:0},
            {id:2,value:1},
            {id:3,value:2},
            {id:4,value:3}
        ]
     }
     handleIncrement = (counterId)=>{
        let counters=this.state.counters.map(counter=>{
            if (counterId===counter.id) {
                if (counter.value ==="Zero") {
                    counter.value= 1;
                    return counter;
                } else{
                    counter.value=counter.value+1;
                    return counter;
                }
            }else{
                return counter
            }
            
        });
       // const counter=this.state.counters.value ==="Zero"? 1:this.state.counters.value+1;
        
       this.setState({counters:counters});
        console.log(counters);
    }

     handleDelete=(counterId)=>{
        // console.log(' Event Handler Called ' , counterId);
         const counters=this.state.counters.filter(c=> c.id !==counterId);
         this.setState({counters:counters});
     };
     handleReset=()=>{
         const counters=this.state.counters.map(counter=>{
             counter.value=0;
             return counter;
         })
         this.setState({counters:counters});
     }

    render() {
        
        this.props.counters.map(counter=>{
                if (counter.value <=0) {
                    counter.value= "Zero";
                    return counter;
                } else{
                    return counter;
                }
        });
       
          const {onReset,counters,onDelete,onIncrement,onDecrement}=this.props;
        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter=>
                <Counter 
                  key={counter.id} 
                  counter={counter} 
                  onDelete={this.props.onDelete}
                  onIncrement={onIncrement}
                  
                  onDecrement={onDecrement}
                  
                  >
                  
                </Counter> )}
            </div>
            
         );
    }
}
 
export default Counters;
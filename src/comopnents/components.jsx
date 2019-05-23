import React, { Component } from 'react';
import Counters from './counters';
import Navbar from './navbar';

class Components extends Component {
      state = { 
        counters:[
            {id:1,value:0},
            {id:2,value:1},
            {id:3,value:2},
            {id:4,value:3}
        ]
      };

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
       this.setState({counters:counters});
        console.log(counters);
    };

    handleDecrement = (counterId)=>{
        let counters=this.state.counters.map(counter=>{
            if (counterId===counter.id) {
                if (counter.value ===1 || counter.value ==="Zero") {
                    counter.value= "Zero";
                    return counter;
                } else{
                    counter.value=counter.value-1;
                    return counter;
                }
            }else{
                return counter
            }
            
        });
        
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
    };

    render() { 
        return ( 
            <React.Fragment>
                <Navbar totalCounters={this.state.counters.filter(counter=> counter.value>0).length}/>
                <main className="container">
                <Counters
                  counters={this.state.counters}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onReset={this.handleReset}
                  onDecrement={this.handleDecrement}
                  
                  >
                </Counters>
                </main>
            </React.Fragment>
         );
    }
}
 
export default Components;
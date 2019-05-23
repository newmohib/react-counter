import React, { Component } from 'react';
//import  counter from './counter';
import Counter from './counter';

class Counters extends Component {
    state = { 
        coounters:[
            {id:1,value:0},
            {id:2,value:1},
            {id:3,value:2},
            {id:4,value:3}
        ]
     }
    render() { 
        return (
            <div>
                {this.state.coounters.map(counter=>
                <Counter key={counter.id} value={counter.value} id={counter.id}>
                    {/* <h5>Counter {counter.id}</h5> */}
                </Counter> )}
            </div>
            
         );
    }
}
 
export default Counters;
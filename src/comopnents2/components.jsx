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

      constructor(){
          super();
         // console.log('Components - Constructor');
      }
      componentDidMount(){
        //  console.log("Components- componentDidMount");
      }

      handleIncrement = (counter)=>{
        // let counters=this.state.counters.map(c=>{
        //     if (counter.id===c.id) {
        //         if (c.value ==="Zero") {
        //             c.value= 1;
        //             return c;
        //         } else{
        //             c.value=c.value+1;
        //             return c;
        //         }
        //     }else{
        //         return c
        //     }
            
        // });
        const counters=[...this.state.counters];
        const index=counters.indexOf(counter);
        counters[index]={ ...counter };
       // if (counters[index].id===counter.id) {
            if (counter.value ==="Zero") {
                counters[index].value=1;
            } else{
                counters[index].value++;
            }
       // }

       this.setState({counters:counters});
     };

    handleDecrement = (counter)=>{
        // let counters=this.state.counters.map(counter=>{
        //     if (counterId===counter.id) {
        //         if (counter.value ===1 || counter.value ==="Zero") {
        //             counter.value= "Zero";
        //             return counter;
        //         } else{
        //             counter.value=counter.value-1;
        //             return counter;
        //         }
        //     }else{
        //         return counter
        //     }
            
        // });

        const counters=[...this.state.counters];
        const index=counters.indexOf(counter);
        counters[index]={ ...counter };
       // if (counters[index].id===counter.id) {
            if (counter.value ===1 || counter.value ==="Zero") {
                counters[index].value="Zero";
            } else{
                counters[index].value--;
            }
       // }
        
        this.setState({counters:counters});
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
        //console.log("Components - Randered");
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

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class Counter extends Component {
    
    

    
    getBadgeClasses(){
        let classes= "badge m-2 badge-";
        classes += this.props.counter.value=== "Zero" ? "warning":"primary";
        return classes;
    }

    render() {
        const {onIncrement,onDecrement,onDelete}=this.props;
        const {id,value}=this.props.counter;
        return (
            <React.Fragment>
                <div>
                <button onClick={()=>onIncrement(id)} className="btn btn-success mr-1">Increase</button>
                <button onClick={()=>onDecrement(id)} className="btn btn-success mr-1">Decrease</button>
                <button onClick={()=>onDelete(id)} className="btn btn-info mr-1">Delete</button>
                 <p><strong className={this.getBadgeClasses()}>{value}</strong></p>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Counter;
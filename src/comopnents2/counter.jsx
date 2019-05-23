
import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
class Counter extends Component {
    getBadgeClasses(){
        let classes= "badge badge-";
        classes += this.props.counter.value=== "Zero" ? "warning":"primary";
        return classes;
    }

    componentDidUpdate(prevProps,prevState){
        //console.log("prevProps", prevProps);
        //console.log("prevState", prevState);
        if (prevProps.counter.value !==this.props.counter.value) {
            //ajax call and get new data from the server
            console.log("prevProps.counter.value  change");
        }
        
    }
    //befor delete the component then the fuction is exicute
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    render() {
       // console.log("counter - Randered");
        const {onIncrement,onDecrement,onDelete,counter}=this.props;
        const {id,value}=this.props.counter;
        return (
            <React.Fragment>
                <div className="row">
                <div className="col-1">
                 <p><strong className={this.getBadgeClasses()}>{value}</strong></p>
                </div>
                <div className="col">
                <button onClick={()=>onIncrement(counter)} className="btn btn-success mr-1"><i className="fa fa-plus" aria-hidden="true"></i></button>

                <button 
                    onClick={()=>onDecrement(counter)} 
                    className="btn btn-success mr-1" 
                    disabled={value==="Zero"?'disable':''}
                    ><i className="fa fa-minus" aria-hidden="true"></i></button>

                <button onClick={()=>onDelete(id)} className="btn btn-danger mr-1"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Counter;
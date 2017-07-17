import React, { Component } from 'react'


class CompleteProfile extends Component{


    constructor(){
        super()
        this.state = {
            name: '',
            pin: '',
            date: ''
        }
    }
    render(){
        return(
            <div className="form-inline" style={{margin: '5%'}}>
               <input
                        className="form-control"
                        placeholder="name"
                        type="name"
                        onChange={event => this.setState({ name: event.target.value})}
                    />
                     <input
                        className="form-control"
                        placeholder="pin"
                        type="pin"
                        onChange={event => this.setState({ pin: event.target.value})}
                    />
                    <input
                        className="form-control"
                        placeholder="date"
                        type="date"
                        onChange={event => this.setState({ date: event.target.value})}
                    />
               <button class="btn btn-primary">Continue</button>     
            </div>
        )
    }

}



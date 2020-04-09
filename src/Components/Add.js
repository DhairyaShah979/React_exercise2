import React, { Component } from 'react'

class Add extends Component {

constructor(props) {
    super(props)

this.state = {

    singleData: '',
     Firstname: '',
     Lastname: '',
     data: [],
    
}
}

handleFirstname = (event) => {
    this.setState({
        Firstname: event.target.value
    })
}

handleLastname = (event) => {
    this.setState({
        Lastname: event.target.value
    })
}



handleSubmit = (event) => {
    event.preventDefault();

    let data = {
        Firstname: this.state.Firstname,
        Lastname: this.state.Lastname
    }

this.state.data.push(data);
console.log(data);

this.setState({
   data: this.state.data
})
console.log(this)
}

// deletedata = (i) => {
//     let datas = this.state.data
//     datas.splice(i, 1)
//     this.setState({
//         data: datas
//     })
// }
clickHandlerEdit(e, id) {
    console.log(id);

    e.preventDefault()
    this.setState.singleData = this.state.data.find(element => element.index === id)        
    this.setState({
        Firstname: this.state.singleData.Firstname,
        Lastname: this.state.singleData.Lastname
    })
}
clickHandlerDelete(e, id) {
    e.preventDefault()
    this.state.data.splice(this.state.data.findIndex(d => d.index === id), 1)
    this.setState({})
}
clickHandlerUpdate(e) {
    e.preventDefault()
    this.setState.singleData = this.state.data.find(item => item.index === this.state.id)
    this.setState.singleData.Firstname = this.state.Firstname
    this.setState.singleData.Lastname = this.state.Lastname
    this.setState({
        Firstname: '',
        Lastname: '',
        
    })
}

render() {
    const {Firstname, Lastname} = this.props
        
    return (
        <div>
<form onSubmit={this.handleSubmit}>

            <label>FirstName : </label> 
            <input type="text" value={Firstname} onChange={this.handleFirstname} ></input>

        <label>LastName : </label> 
        <input type="text" value={Lastname} onChange={this.handleLastname} ></input>
         <br/>
         <button type="submit" >Add</button>
     </form>
     <div>
     {
                                this.state.data.map((item, index) => 
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.Firstname}</td>
                                    <td>{item.Lastname}</td>
                                    <button onClick={e => this.clickHandlerEdit(e, item)}>Edit</button>
                                    <button onClick={e => this.clickHandlerDelete(e, item)}>Delete</button>
                                    
                                    {/* <td><i onClick={e => this.clickHandlerDelete(e, item.id)} className="fas fa-trash text-danger"></i></td> */}
                                </tr>
                                )
                            }
     </div>
     
        </div>           
    )
}
}

export default Add
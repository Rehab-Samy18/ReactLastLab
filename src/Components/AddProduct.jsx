import React from "react";
class Adding extends React.Component{
    state={
        _id:'',
        _name:'',
        _price:'',
        _quantity:'',
        _desc:'',
        _img:''
    }
    handlerInput = (eventObject) => {
        this.setState({
            [eventObject.target.name]:eventObject.target.value
        })
    }
    render(){
        console.log("AddingProps",this.props)
    return(
        <>
            <span>Product ID</span>
            <input type={"text"} className="form-control" value={this.state._id} name="_id" onChange={this.handlerInput}/>
            <span>Product Name</span>
            <input type={"text"} className="form-control" value={this.state._name} name="_name" onChange={this.handlerInput}/>
            <span>Product Price</span>
            <input type={"text"} className="form-control" value={this.state._price} name="_price" onChange={this.handlerInput}/>
            <span>Product Quantity</span>
            <input type={"text"} className="form-control" value={this.state._quantity} name="_quantity" onChange={this.handlerInput}/>
            <span>Product Description</span>
            <input type={"text"} className="form-control" value={this.state._desc} name="_desc" onChange={this.handlerInput}/><br></br>
            <input type={"button"} value="Add" className="btn btn-primary" onClick={()=>this.props.AnthRef({id:this.state._id,name:this.state._name,price:this.state._price,quantity:this.state._quantity,productDesc:this.state._desc,productimg:"logo512.png"})} />
        </>
    )
    }
}
export default Adding;
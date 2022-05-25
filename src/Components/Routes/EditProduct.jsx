import { Component } from "react";
class EditComp extends Component{

    state={
        _id:this.props.location.SelectedObject.id,
        _name:this.props.location.SelectedObject.name,
        _price:this.props.location.SelectedObject.price,
        _quantity:this.props.location.SelectedObject.quantity,
        _desc:this.props.location.SelectedObject.productDesc,
    };
    handlerInput = (eventObject) => {
        this.setState({
            [eventObject.target.name]:eventObject.target.value
        })
    }
    render(){
        console.log(this.props)
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
            <input type={"button"} value="Edit" className="btn btn-outline-primary" onClick={()=>{
                this.props.EditRef({id:this.state._id,name:this.state._name,price:this.state._price,quantity:this.state._quantity,productDesc:this.state._desc})
                this.props.history.push("/list")
                }} 
            />
            </>
        )
    }
}

export default EditComp;
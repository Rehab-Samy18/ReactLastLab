import { Component } from "react";
import { Link } from "react-router-dom";
import '../../MyStyle.css'
class ListComp extends Component{
    state={};
    render(){
        console.log(this.props)
        return(
            <div>
                <h1 className="alert alert-success">Products List</h1>
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Quantity</th>
                            <th>Product Description</th>
                            <th>Product Image</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.props.ProductArrayRef.map(item => {
                               return <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.productDesc}</td>
                                <td>
                                    <img 
                                        src={`images/${item.productimg}`}
                                        style={{
                                            width:100,
                                            height:100
                                        }}
                                    />
                                </td>
                                <td>
                                    <Link to={{pathname:`/Details/${item.id}`,SelectedObject:item}} className="btn btn-outline-success">Details</Link>
                                    <Link to={{pathname:`/Edit/${item.id}`,SelectedObject:item}} className="btn btn-outline-success">Edit</Link>
                                    <Link to='/list' className="btn btn-outline-success">Delete</Link>

                                </td>
                               </tr>
                            })}
                    </tbody>
                </table>
                
                <Link to="/Add" className="btn btn-outline-primary">Add New Product</Link>
            </div>
        )
    }
}

export default ListComp;
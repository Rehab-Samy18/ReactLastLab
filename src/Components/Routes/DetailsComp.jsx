import { Link } from "react-router-dom"
import '../../MyStyle.css'

const DetailsCompAsFun = (props) => {
    console.log(props.location.SelectedObject)
    return(
        <div>
            <h1 className="alert alert-success">Product Details</h1>
            <div>
                Product ID : {props.location.SelectedObject.id}<br></br>
                Product Name : {props.location.SelectedObject.name}<br></br>
                Product Price : {props.location.SelectedObject.price}<br></br>
                Product Quantity : {props.location.SelectedObject.quantity}<br></br>
                Product Description : {props.location.SelectedObject.productDesc}<br></br>
                <img 
                        src={`../images/${props.location.SelectedObject.productimg}`}
                        style={{
                            width:200,
                            height:150
                        }}
                />
            </div>
            <Link to="/" className="btn btn-outline-success">Back To List</Link>
        </div>
    )
}
export default DetailsCompAsFun
import '../MyStyle.css'

let ProductDetails = (props) => {
    console.log("details component",props.Data)
        return(
            <>
            <h1>Product Details</h1>
            <div>
                Product ID : {props.Data.id}<br></br>
                Product Name : {props.Data.name}<br></br>
                Product Price : {props.Data.price}<br></br>
                Product Quantity : {props.Data.quantity}<br></br>
                Product Description : {props.Data.productDesc}<br></br>
                <img 
                        src={`images/${props.Data.productimg}`}
                        style={{
                            width:200,
                            height:150
                        }}
                />
            </div>
            <button className='btn btn-primary' onClick={props.BackToListRef}>Back To List</button>
            </>
        )
}
export default ProductDetails;
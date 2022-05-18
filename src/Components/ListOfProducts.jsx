import '../MyStyle.css'
let ListOfProducts = (props) => {
    let AllItems = props.Data.map((item)=>{
        return(
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.productDesc}</td>
                <td>
                    <img 
                        src={`images/${item.productimg}`}
                        style={{
                            width:200,
                            height:150
                        }}
                    />
                </td>
                <td><input type={"button"} value="Delete" className='btn btn-danger' onClick={()=>props.RemoveHandlerRef(item)}/></td>
                <td><input type={"button"} value="Details" className='btn btn-danger' onClick={()=>{props.DetailsHandlerRef(item)}}/></td>
            </tr>
        )
    })
    return(
        <div className='container'>
        <table id='list-style' className="table table-striped table-bordered table-hover">
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
                {AllItems}
            </tbody>
        </table>
        </div>
    )
}

export default ListOfProducts;
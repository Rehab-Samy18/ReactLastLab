import logo from './logo.svg';
import ListOfProducts from './Components/ListOfProducts';
import ProductDetails from './Components/ProductDetails';
import Header from './Components/Header';
import React from 'react';
import Adding from './Components/AddProduct';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
       prods : [
       {id:1,name:"Product 1",price:10,quantity:10,productDesc:"Description 1",productimg:"p1.png"},
       {id:2,name:"Product 2",price:20,quantity:20,productDesc:"Description 2",productimg:"p2.png"},
       {id:3,name:"Product 3",price:30,quantity:30,productDesc:"Description 3",productimg:"p3.png"},
       {id:4,name:"Product 4",price:40,quantity:40,productDesc:"Description 4",productimg:"p4.png"},
   ],
   ShowAdd:false,
   ShowDetails:false,
   DetailsObject:{}
      
    }
  }

 AddItem = (_newObject) => {
  let newArray = [...this.state.prods,_newObject];
  console.log(newArray)
  this.setState({
    prods:newArray,
    ShowAdd:false
  })
  console.log(this.state.prods)
}
RemoveItem = (_delObject) => {
  this.state.prods.splice(_delObject,1);
  this.setState({
    prods:this.state.prods
  })
}
ItemDetails = (_selectedObject) => {
  this.setState({
    ShowDetails:true,
    DetailsObject:_selectedObject
  })
}
BackToList = () => {
  this.setState({
    ShowAdd:false,
    ShowDetails:false
  })
}
render(){
  if(this.state.ShowAdd===false&&this.state.ShowDetails===false){
  return (
    <div>
      <Header/>
      <ListOfProducts 
      Data={this.state.prods} 
      AddHandlerRef={this.AddItem} 
      RemoveHandlerRef={this.RemoveItem} 
      DetailsHandlerRef={this.ItemDetails}/>
      <input type={"button"} className="btn btn-primary" value={"Add New Product"} onClick={()=>this.setState({
        ShowAdd:true
      })}/>
    </div>
  );
}
else if(this.state.ShowAdd===true&&this.state.ShowDetails===false){
  return(
    <Adding AnthRef={this.AddItem} />
    )
  }
  else{
    console.log(this.state.ShowDetails)
    return(
      <ProductDetails Data={this.state.DetailsObject} 
       BackToListRef={this.BackToList}
      />
    )
  }
}
}

export default App;

import { Component } from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import ListComp from './Components/Routes/ListComp'
import AddComp from './Components/Routes/AddComp'
import DetailsCompAsFun from './Components/Routes/DetailsComp'
import Header from "./Components/Header";
import EditComp from "./Components/Routes/EditProduct";
import Login from './Components/LoginForm'
class AppRouter extends Component{
    state = {
        prods:[
            {id:1,name:"Product 1",price:10,quantity:10,productDesc:"Description 1",productimg:"p1.png"},
            {id:2,name:"Product 2",price:20,quantity:20,productDesc:"Description 2",productimg:"p2.png"},
            {id:3,name:"Product 3",price:30,quantity:30,productDesc:"Description 3",productimg:"p3.png"},
            {id:4,name:"Product 4",price:40,quantity:40,productDesc:"Description 4",productimg:"p4.png"},
        ],
        DetailsObject:{},
    }
    AddItem = (_newObject) => {
        let newArray = [...this.state.prods,_newObject];
        console.log(newArray)
        this.setState({
          prods:newArray
        })
        console.log(this.state.prods)
    }
    EditItem = (_selectedObject,_newObject) => {
        this.setState({
          _selectedObject:_newObject  
        })
    }
    ItemDetails = (_selectedObject) => {
        this.setState({
          DetailsObject:_selectedObject
        })
      }
      RemoveItem = (_delObject) => {
        this.state.prods.splice(_delObject,1);
        this.setState({
          prods:this.state.prods
        })
      }
    render(){
        return (
        <>
        <Router>
            <Header/>
            <Route component={()=><Login/>} path="/" exact/>
            <Route component={(props)=><ListComp ProductArrayRef={this.state.prods} {...props} BOMProbs={props} />} path="/list" exact/>
            <Route component={(props)=><AddComp AddRef={this.AddItem} {...props}/>} path="/Add" />
            <Route component={(props)=><EditComp EditRef={this.EditItem} ProductArrayRef={this.state.prods} {...props}/>} path="/Edit/:id" />
            <Route component={(props)=><DetailsCompAsFun {...props}/>} path="/Details/:id" />
        </Router>
        </>
        )
    }
}
export default AppRouter;
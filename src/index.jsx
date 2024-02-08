import React from 'react'
import ReactDOM from 'react-dom/client'
class App extends React.Component{
    constructor() {
        super ()
        this.state={
          argument:""
        }
      }
      setArgument(){
        this.setState( { argument: "gamarjoba" }, function(){
          window.alert(this.state.argument)
        });
      }
      render() {
        function without_argument (){
            window.alert("gamarjoba")
        }
        
         return (
           <React.Fragment>
            {
              <div>
                < button typr="button" onClick={ () => this.setArgument()}>argumentiani</button>
              <button type="button" onClick={without_argument}>argumentis ugareshod:dd</button>
              </div>
            }
           </React.Fragment>
        );
      }
    }
var root=document.getElementById("root");
ReactDOM.createRoot(root).render(<App/>)
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "./logo.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/yeti/bootstrap.min.css";
import "./App.css";

import Loot from "./components/loot/list.component";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dates:[
                {id:1, name: 'Blackwing Lair', data:new Date().toLocaleString()}
            ]
        }

        console.log(this.state.dates);

        this.onSelectChange = this.onSelectChange.bind(this);
        this.onClickLoot = this.onClickLoot.bind(this);
    }

    onSelectChange(e) {
        e.preventDefault();
        
        let selectedOptions = e.target.selectedOptions;
    }

    onClickLoot(e) {
        e.preventDefault();
        console.log('onClickLoot',e);
        
        this.props.history.push('/loot');
    }


  render() {
    return (
      <Router>
        <div className="container">
            <div className="row justify-content-center">
                <div className="content">
                    <div className="">
                        <a href="index.html" className="logo text-center text-danger">
                            <div>
                                <h4>
                                    CangaceiroS - Thalnos
                                </h4>
                                <img src={logo} alt="Logo Cangaceiros" />    
                            </div>
                        </a>
	                </div>

                    <div className="card-box">
							
                        <p className="text-muted mb-0">Fala seus noob, seleciona o log ai e chora.</p>
                        <div className="">
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <select id="data_log" className="custom-select mt-3"
                                    onChange={this.onSelectChange}>
                                        <option >Select Date</option>
                                        {
                                            this.state.dates.map(function(d,i) {
                                                let selected = false;
                                                if(!selected) {
                                                    return (<option value={d.id} key={i}>{d.name} - {d.data}</option>);
                                                } 
                                            })
                                            
                                        }
                                    </select>	
                                </div>
                                <div className="row justify-content-center">
                                    <div className="">
                                        <div className="button-list">
                                            <button type="button" className="btn btn-primary waves-effect width-md waves-light">DKP</button>
                                            <button type="button" className="btn btn-secondary waves-effect width-md waves-light">Histórico de DKP</button>
                                            <button onClick={(e) => this.onClickLoot(e)} type="button" className="btn btn-info waves-effect width-md waves-light">Histórico de Loot</button>	
                                        </div>
                                    </div>
                                </div>
                            </form>
    			        </div>
                    </div>
                </div>

                <main>
                    <Route path="/loot" exact component={Loot} />
                </main>
            </div>
        </div>
        

        

      </Router>
    );
  }
}

export default App;

// https://medium.com/codingthesmartway-com-blog/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-2-637f337e5d61

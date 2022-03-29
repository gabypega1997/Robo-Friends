import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import "./App.css"
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry";

import { setSearchfield } from "../actions";

const mapStateToProps = state => {
    return {
        searchfield:state.searchfield
    }
}
const mapDispatchToProps = (dispatch) => {
    // eslint-disable-next-line no-labels
    return{ 
        onSearchChange: (event) => dispatch(setSearchfield(event.target.value))
    }
}


const App = (props) => {


    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState("");
    


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(respones=> respones.json())
        .then(users=> setRobots(users))

    },[]);



    const onSearchChange = (event) => {
            setSearchfield(event.target.value)
        
        
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
})

    return !robots.length?
    <h1>Loading</h1>
    :
    (
        <div className="tc">
            <h1 className="f1">RoboFriend</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 
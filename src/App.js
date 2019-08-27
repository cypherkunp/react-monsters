import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
    state = {
        monsters: [],
        searchField: ''
    };

    componentDidMount = async () => {
        const monsters = await this.getMonsters();
        this.setState({ monsters });
    };

    getMonsters = async () => {
        let monsters = await fetch('https://jsonplaceholder.typicode.com/users');
        return monsters.json();
    };

    handleChange = e => {
        this.setState({ searchField: e.target.value.toLowerCase() });
    };

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField)
        );

        return (
            <div className="App">
                <center>
                    <h1>Monsters Rolodex</h1>
                    <SearchBox
                        type="search"
                        placeholder="Search Monsters"
                        handleOnChange={this.handleChange}
                    />
                </center>
                <CardList dataList={filteredMonsters}></CardList>
            </div>
        );
    }
}

export default App;

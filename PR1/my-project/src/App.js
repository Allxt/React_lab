import './App.css';
import MyTable from './task1';
import Product from './task2';
import MainGrid from "./task3";
import MainGrid1 from "./MainGrid1";
import Selection1 from "./task5";
import Hooks from "./task6";

function App() {

    const prod1 = {name: "Mouse"};
    const prod2 = {name: "Keyboard"};

    const cities = [{id: 1, name: "Chicago", image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c0/b7/17/caption.jpg?w=500&h=300&s=1'},
                    {id: 2, name: "Los Angeles", image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/LA_Skyline_Mountains2.jpg/640px-LA_Skyline_Mountains2.jpg'},
                    {id: 3, name: "New York", image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e2/f0/new-york-city.jpg'},]

    return (
        <div className="App">
            <header className="App-header">
                <MyTable/>
                <Product product={prod1}/>
                <Product product={prod2}/>
            </header>
            <p>Without props</p>
            <MainGrid/>
            <p>With props</p>
            <MainGrid1/>
            <Selection1 cities={cities}/>
            <Hooks/>
        </div>
    );
}

export default App;

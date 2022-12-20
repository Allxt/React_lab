import './styleMain.css'
import FirsElement from "./FirsElement";
import SecondElement from "./SecondElement";
import ThirdElement from "./ThirdElement";
import FourthElement from "./FourthElement";
import FifthElement from "./FifthElement";
import SixthElement from "./SixthElement";

function MainGrid() {
    return (
        <div className='content'>
            <div className='container'>
                <div><FirsElement/></div>
                <div><SecondElement/></div>
            </div>

            <div className='container'>
                <div><ThirdElement/></div>
                <div><FourthElement/></div>
            </div>

            <div className='container'>
                <div><FifthElement/></div>
                <div><SixthElement/></div>
            </div>
        </div>
    );
}

export default MainGrid;
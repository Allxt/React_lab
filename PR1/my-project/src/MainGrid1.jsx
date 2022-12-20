import React from "react";

import FirstElement1 from "./FirstElement1";

function MainGrid1() {





    return (
        <div className='content'>
            <div className='container'>
                <div><FirstElement1 name='Pадіостанція' img='https://content1.rozetka.com.ua/goods/images/big/185553107.jpg' price='2 000'/></div>
                <div><FirstElement1 name='Портативна рація' img='https://content2.rozetka.com.ua/goods/images/big_tile/10660857.png' price='5 000'/></div>
            </div>

            <div className='container'>
                <div><FirstElement1 name='Портативна рація Agent' img='https://content.rozetka.com.ua/goods/images/big/185344013.jpg' price='1 300'/></div>
                <div><FirstElement1 name=' Комплект рацій Motorola' img='https://content1.rozetka.com.ua/goods/images/big/26031022.jpg' price='11 000'/></div>
            </div>

            <div className='container'>
                <div><FirstElement1 name='Рація Motorola' img='https://content1.rozetka.com.ua/goods/images/big/11122352.jpg' price='3 000'/></div>
                <div><FirstElement1 name='Рація Baofeng' img='https://content1.rozetka.com.ua/goods/images/big/240268679.jpg' price='7 500'/></div>
            </div>
        </div>
    );
}

export default MainGrid1;
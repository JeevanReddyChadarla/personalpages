import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import style from './CardCustom.module.scss'

const Carditem = ({carddata}) => {
  return (
    <div>
      <Card className='card'>
      <div className='img'>
      <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />
      </div>
      <ul className='no-dot'>
      <li>Title : {carddata}</li><br />
      <li>Genre : {carddata}</li><br />
      <li>Director : {carddata}</li><br />
    </ul>
    </Card>
    </div>
  );
}
export default Carditem;



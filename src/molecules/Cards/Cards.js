import React from 'react';
import style from './Cards.module.scss'
import { Card } from 'antd';
import 'antd/dist/antd.css';
const { Meta } = Card;

const Cards = props => {
return (
<div className={style['m-cards']} data-test="individual_card">
<Card
hoverable
style={{ width: 175 }}
cover={<img alt="example" src="https://source.unsplash.com/random/150x125" />}
>
<Meta title="The Complete Node.js Tutorial" description="Director : Nolan" data-test="meta_info"/>
</Card>
</div>
);
};

export default Cards;
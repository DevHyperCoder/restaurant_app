import React from 'react';

import cardIcon from '../../img/cardIcon.svg';
import fillHeart from '../../img/fillHeart.svg';

import RatingStars from './fillStarComp';
import EmptyStar from './emptyStar';
import Tags from './tags';
import desert2 from '../../img/desert2.svg';
interface Props {
    img: string;
    text: string;
    rate: number;
    tag1: string;
    tag2: any;
    typeOfFood: string;
}
function renderRating(ratingNum: Number) {
    let component = [];
    for (let i = 0; i < ratingNum; i++) {
        component.push(<RatingStars />);
    }
    while (component.length < 5) {
        component.push(<EmptyStar />);
    }
    return component;
}
function desertOr(foodType: string) {
    if (foodType == 'dinner') {
        return (
            <img
                className='text-white bg-primaryred p-3 rounded-full absolute bottom-2 left-4 cursor-pointer'
                src={cardIcon}
                alt='dinner icon'
            />
        );
    } else {
        return (
            <img
                className='text-white bg-primaryred p-3 rounded-full absolute bottom-2 left-4 cursor-pointer'
                src={desert2}
                alt='desert icon'
            />
        );
    }
}
function FoodCard(props: Props) {
    return (
        <div className='inline-block flex-1 food-card'>
            <div className='inline-block'>
                <div className='relative '>
                    <img
                        className='w-82.5  relative rounded-t-xl clear-both h-53'
                        src={props.img}
                        alt='Pakistan Food'
                    />
                    {desertOr(props.typeOfFood)}
                </div>
                <div className='border-2 border-gray-300 max-w-full rounded-b-xl'>
                    <p className='m-3  text-primaryred font-semibold text-lg inline-block'>
                        {props.text}
                    </p>
                    <img
                        className='clear-both inline-block float-right m-5'
                        src={fillHeart}
                        alt='heart icon'
                    />
                    <div>
                        {renderRating(props.rate)}
                        <p className='inline-block ml-3 text-primarygray font-semibold'>
                            32 Reviews
                        </p>
                    </div>
                    <Tags text={props.tag1} />
                    <Tags text={props.tag2} />
                </div>
            </div>
        </div>
    );
}
export default FoodCard;

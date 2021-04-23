import React from 'react';

import '../../style/landingPage.css';

import banCake from '../../img/bancake.svg';
import IconComp from './iconsComp';
import dish from '../../img/dish.svg';
import cup from '../../img/cup.svg';
import desert from '../../img/desert.svg';
import burger from '../../img/burger.svg';
import FoodCard from './foodCard';
import PakistaniFood from '../../img/Image 33@2x.png';
import Risotto from '../../img/Image 34.png';
import Maslenitca from '../../img/Image 35.png';

function landingPage() {
    return (
        <div>
            <section>
                {' '}
                <div className='w-8/12 m-auto '>
                    <h2 className='text-2xl text-center my-5 text-primaryorange'>
                        "People who loves to eat are always Best People"
                    </h2>
                    <h3 className='text-gray-700 float-right mr-7 mb-5'>
                        Julia Child
                    </h3>
                </div>
                <div className='mt-12 main-photo h-94 relative bg-contain	rounded-lg drop-shadow-mdv	'>
                    <h3 className='mx-4 my-5 text-5xl absolute text-white  top-1/4'>
                        Find healthy and <br /> Favorate food near you
                    </h3>
                </div>
            </section>

            <section className='max-w-57 mb-7'>
                <div className='max-w-full max-h-26 lastChild'>
                    <h3 className='uppercase my-7 text-primaryred font-semibold'>
                        our meals
                    </h3>
                    <h3 className='uppercase bg-primaryorange inline-block p-3 rounded-3xl mr-4 text-gray-200'>
                        all (170)
                    </h3>
                    <IconComp
                        icon={banCake}
                        text='Break Fast (23)'
                        alt='bank cake icon'
                    />
                    <IconComp icon={dish} text='Lunch (41)' alt='dish icon' />
                    <IconComp icon={cup} text='Drinks (53)' alt='cup icon' />
                    <IconComp
                        icon={desert}
                        text='Desserts (33)'
                        alt='desert icon'
                    />
                    <IconComp icon={burger} text='Fastfood (20)' alt='burger' />
                </div>
            </section>
            <section className='flex flex-wrap food-card-container'>
                <FoodCard
                    text='Pakistani Chicken Platter'
                    img={PakistaniFood}
                    rate={5}
                    tag1='Indian'
                    tag2='Pakistani'
                    typeOfFood='dinner'
                />
                <FoodCard
                    text='Risotto'
                    img={Risotto}
                    rate={4}
                    tag1='Italian'
                    tag2='Eurpeon'
                    typeOfFood='dinner'
                />
                <FoodCard
                    text='Maslenitca'
                    img={Maslenitca}
                    rate={2}
                    tag1='Russian'
                    tag2='sweeden'
                    typeOfFood='desert'
                />
            </section>
        </div>
    );
}
export default landingPage;

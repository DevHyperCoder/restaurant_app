import React from 'react';
import mainPhoto from '../../img/10882.png';
import '../../style/landingPage.css';
import appleIcon from '../../img/Apple.svg';
import googleIcon from '../../img/google play.png';

function landingPage() {
    return (
        <div>
            <div className='w-8/12 m-auto'>
                <h2 className='text-2xl text-center my-5 text-primaryorange'>
                    "People who loves to eat are always Best People"
                </h2>
                <h3 className='text-gray-700 float-right mr-7 mb-5'>
                    Julia Child
                </h3>
            </div>
            <div className='mt-12 main-photo h-94 relative bg-contain		'>
                {/* <img src={mainPhoto} alt='Food photo' /> */}
                <h3 className='mx-4 my-5 text-5xl absolute text-white  top-1/4'>
                    Find healthy and <br /> Favorate food near you
                </h3>
            </div>
        </div>
    );
}
export default landingPage;

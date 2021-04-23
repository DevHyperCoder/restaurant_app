import React from 'react';
import fillStar from '../../img/fillStar.svg';

function fillStarComp() {
    return (
        <div className='ml-3 inline-block' id='Rating'>
            <img
                className='inline-block pr-1 last:pr-0'
                src={fillStar}
                alt=''
            />
        </div>
    );
}
export default fillStarComp;

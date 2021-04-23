import React from 'react';
import emptyStarSvg from '../../img/emptyStar.svg';

function emptyStar() {
    return (
        <div className='ml-3 inline-block' id='Rating'>
            <img
                className='inline-block pr-1 last:pr-0'
                src={emptyStarSvg}
                alt=''
            />
        </div>
    );
}
export default emptyStar;

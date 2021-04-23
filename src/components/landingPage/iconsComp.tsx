import React from 'react';
interface Props {
    icon: string;
    text: string;
    alt: string;
}
function IconComp(props: Props) {
    return (
        <div className='inline-block mr-4 cursor-pointer last:m-0 '>
            <h3 className='inline-block p-3 bg-gray-200 rounded-3xl'>
                <img
                    className='inline-block mr-2'
                    src={props.icon}
                    alt={props.alt}
                />
                <div className='inline-block'>{props.text}</div>
            </h3>
        </div>
    );
}
export default IconComp;

import { type } from 'node:os';
import React from 'react';
interface Props {
    text: string;
}
function Tags(props: Props) {
    return (
        <p className='capitalize py-2 px-3 mt-4 mb-3 mx-3 bg-gray-200 rounded-lg text-primarygray  inline-block'>
            {props.text}
        </p>
    );
}
export default Tags;

/* eslint-disable react/prop-types */
// import React from 'react'

function HeaderItem({ name, Icon }) {
    return (
        <div className="flex gap-[10px] content-center items-center text-white cursor-pointer hover:text-gray-300 hover:underline underline-offset-8  ">
            <Icon className="text-2xl mb-1" />
            <h2 className="text-sm font-medium mb-1">{name}</h2>
        </div>
    );
}

export default HeaderItem;

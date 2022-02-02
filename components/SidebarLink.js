import React from 'react';

function sidebarLink({Icon,text,active}) {
  return <div className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
    active && "font-bold"
  }`}>

      <Icon className="h-7 text-black"/>
      <span className='hidden xl:inline text-black'>{text}</span>
  </div>;
}

export default sidebarLink;

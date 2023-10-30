import React from 'react';

const QuoteBox = ({data, random}) => {
  const randomNbr = Math.floor(Math.random() * 16);
  if(data[randomNbr]){
  return (
    <div className='container flex flex-col text-center p-8 m-6 w-auto bg-Grayish-Blue rounded-3xl relative shadow-xl shadow-Dark-Grayish-Blue'>
      <h4 className=' text-Neon-Green' >Quote n° {randomNbr}</h4>
      <h1 className='pb-5 text-Light-Cyan pb-8'>{data[randomNbr].text}</h1>
      <div className='flex justify-around  '>
        <hr className='pt-5 w-10  border-Light-Cyan'/>
        <hr className='pt-15 w-12 border-Light-Cyan'/>
      </div>
      <div className='flex justify-center text-center relative'>
        <button className='bg-Neon-Green p-3 w-10 rounded-full absolute text-center translate-l-1/2 mt-1 shadow-xl shadow-Neon-Green transform hover:scale-125 duration-700' onClick={random}><img src="../src/assets/icon-dice.svg"/></button>
      </div>
    </div>
  );
  }
}

export default QuoteBox;
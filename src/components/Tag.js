import React from 'react'
import { useState} from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const [tag, setTag] = useState("");

  const {gif, loader, fetchData} = useGif(tag);
  function clickHandler() {
    fetchData(tag);
  }
  function changeHandler(event) {
    setTag(event.target.value);
  }
  return (
    <div className='bg-blue-400 w-[700px] mx-[400px] max-h-fit flex flex-col items-center gap-y-4 py-1 mt-8 mb-4 border-[1.5px] rounded-xl border-gray-800'>
      <h1 className='text-2xl font-bold underline uppercase pt-3'>Random <span className='text-2xl font-bold underline uppercase'>{tag}</span> Gif</h1>
      {
        loader ? (<Spinner/>) : (<img src={gif} width={450}/>)
      }

      <input
        className='font-medium w-[600px] bg-white rounded-lg py-2 mb-1 text-center'
        onChange={changeHandler}
        onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        clickHandler(e);
                    }
                }}
        value={tag}
               
      />
      <button onClick={clickHandler}
       className='uppercase font-medium w-[600px] bg-white rounded-lg py-2 mb-3 bg-opacity-[0.7]'>
        Generate
      </button>
    </div>
  )
}

export default Tag
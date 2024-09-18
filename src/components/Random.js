import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Random = () => {
  const {gif, loader, fetchData} = useGif();

  function clickHandler() {
    fetchData();
  }
  return (
    <div className='bg-green-400 w-[700px] mx-[400px] max-h-fit flex flex-col items-center gap-y-5 py-1 mt-8 border-[1.5px] rounded-xl border-gray-800'>
      <h1 className='text-2xl font-bold underline uppercase pt-3'>A Random Gif</h1>
      {
        loader ? (<Spinner/>) : (<img src={gif} width={450}/>)
      }
      <button onClick={clickHandler}
       className='uppercase font-medium w-[600px] bg-white rounded-lg py-2 mb-3 bg-opacity-[0.7]'>
        Generate
      </button>
    </div>
  )
}

export default Random
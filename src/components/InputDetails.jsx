import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GetDocument,Input } from '../App';
import Loader from './Loader';


const InputDetails = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
    const Navigate=useNavigate();
    const [isLoading, setisLoading] = useState(false)


  const handleSubmit = (e) => {
    setisLoading(true);
    e.preventDefault();
    Input(name,message).then((data)=>{
        if(data){
            Navigate(`copy/${data.$id}`)
        }
    })
    setName('');
    setMessage('');
  };

  
  return  (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-4">
     {
            isLoading&&(
                <Loader/>
            )
        }
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Input Your Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
              Special Message for the Receiver 💌 
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              placeholder="Enter your special message "
              rows="4"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
            >
              Make 🚀
            </button>

            
          </div>
        </form>
      </div>
    </div>
    </>
  )

};

export default InputDetails;
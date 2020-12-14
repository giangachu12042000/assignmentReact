import React from 'react';

const Contac = () => {

    return (
        <div className="container py-14 mx-auto">
            <div className="bg-gray-100 w-1/2 mx-auto h-auto py-4 px-4 rounded-md">
                <div>
                    <label className="block py-2">
                        <span className="text-gray-700 ">Name</span>
                        <input className="form-input bg-white mt-1 block w-full" type="text" placeholder="Your name" />
                    </label>
                    <label className="block py-2">
                        <span className="text-gray-700">Name</span>
                        <input className="form-input bg-white mt-1 block w-full" type="email" placeholder="Your email" />
                    </label>
                    <label className="block py-2">
                        <span className="text-gray-700">Textarea</span>
                        <textarea className="form-textarea mt-1 block w-full rounded-md" rows="3" placeholder="Enter some long form content."></textarea>
                    </label>
                    {/* <div className="grid justify-self-auto py-4 "> */}
                    <button className="block my-4 bg-gray-800 bg-transparent mx-auto  text-xl font-bold text-yellow-800 font-semibold hover:text-gray-100 py-2 px-4 border border-blue hover:border-transparent rounded">
                        Submit
                    </button>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Contac;
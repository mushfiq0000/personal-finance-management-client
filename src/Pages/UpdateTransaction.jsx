import React, { use } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const UpdateTransaction = () => {
    const navigate = useNavigate()
    const {user} = use(AuthContext)
    const details = useLoaderData()
    const data = details.result
 
   
    





    const handelBack=()=>{
        navigate(-1)
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="bg-base-100 shadow-xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-semibold text-center mb-1 text-yellow-500">
          Update Transaction
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Edit your transaction details
        </p>

        {/* form */}
        <form className="space-y-5">


        {/* name */}
          <div>
            <label className="label font-medium">Name</label>
            <input
              type="text"
              defaultValue={user.displayName}
              placeholder="Name"
              className="input input-bordered w-full"
            />
          </div>




          {/* type */}
          <div>
            <label className="label font-medium">Transaction Type</label>
            <select className="select select-bordered w-full">
              <option>Expense</option>
              <option>Income</option>
            </select>
          </div>

          {/* category */}
          <div>
            <label className="label font-medium">Category</label>
            <select className="select select-bordered w-full">
              <option>Select a category</option>
              <option>Food</option>
              <option>Transport</option>
              <option>Shopping</option>
              <option>Health</option>
              <option>Other</option>
            </select>
          </div>

          {/* amount */}
          <div>
            <label className="label font-medium">Amount</label>
            <input
              type="number"
              placeholder="0.00"
              className="input input-bordered w-full"
            />
          </div>

          {/* description */}
          <div>
            <label className="label font-medium">Description (Optional)</label>
            <textarea
              placeholder="Add any notes about this transaction..."
              className="textarea textarea-bordered w-full h-24 resize-none"
            ></textarea>
          </div>

          {/* date */}
          <div>
            <label className="label font-medium">Date</label>
            <div className="relative">
              <input
                type="date"
                defaultValue="2025-11-08"
                className="input input-bordered w-full pr-10"
              />
              <FaCalendarAlt className="absolute right-3 top-3.5 text-gray-400 text-lg pointer-events-none" />
            </div>
          </div>


          <div className="flex justify-end gap-3 pt-3">
            <button onClick={handelBack} type="button" className="btn text-white  bg-gray-500 hover:bg-gray-600">
              Cancel
            </button>
            <button type="button" className="btn text-white bg-yellow-500 hover:bg-yellow-600"> 
                Update Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTransaction;

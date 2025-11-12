import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router";

const UpdateTransaction = () => {
  const navigate = useNavigate();
  const details = useLoaderData();
  const data = details.result;
  console.log(data);
  

  const [type, setType] = useState("Income");

  const categories = {
    Income: ["Salary", "Business", "Investments", "Other"],
    Expense: ["Food", "Bills", "Entertainment", "Shopping", "Other"],
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = {
      description: e.target.description.value,
      category: e.target.category.value,
      amount: e.target.amount.value,
      type: e.target.type.value,
      date: new Date(),
    };

    fetch(`http://localhost:3000/transaction/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate(0);
  };

  const handelBack = () => {
    navigate(-1);
  };

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
        <form onSubmit={handelSubmit} className="space-y-5">
          {/* name */}
          <div>
            <label className="label font-medium">Name</label>
            <input
              type="text"
              defaultValue={data.name}
              placeholder="Name"
              className="input input-bordered w-full cursor-not-allowed"
              disabled
            />
          </div>

          {/* Type */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Type</span>
            </label>
            <select
              defaultValue={data.type}
              className="select select-bordered w-full"
              name="type"
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option
              value={"Income"}
              >Income</option>
              <option
              value={"Expense"}
              >Expense</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <select
              defaultValue={data.category}
              className="select select-bordered w-full"
              name="category"
              required
            >
              <option value="">Select category</option>
              {categories[type].map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* amount */}
          <div>
            <label className="label font-medium">Amount</label>
            <input
              type="number"
              name="amount"
              defaultValue={data.amount}
              className="input input-bordered w-full"
            />
          </div>

          {/* description */}
          <div>
            <label className="label font-medium">Description (Optional)</label>
            <textarea
              defaultValue={data.description}
              name="description"
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
                name="date"
                defaultValue={
                  data.date
                    ? new Date(data.date).toISOString().split("T")[0]
                    : ""
                }
                className="input input-bordered w-full pr-10"
              />
              <FaCalendarAlt className="absolute right-3 top-3.5 text-gray-400 text-lg pointer-events-none" />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-3">
            <button
              onClick={handelBack}
              type="button"
              className="btn text-white  bg-gray-500 hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn text-white bg-yellow-500 hover:bg-yellow-600"
            >
              Update Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTransaction;

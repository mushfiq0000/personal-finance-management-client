import {
  FaArrowDown,
  FaArrowUp,
  FaEdit,
  FaEye,
  FaPlus,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router";


const MyTransactions = () => {
  const data = useLoaderData();


 

  

  return (
    <div className="bg-base-200 p-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <h1 className="text-2xl font-bold">My Transactions</h1>

        <div className="flex gap-3 items-center">
          <select className="select select-bordered select-sm">
            <option>Sort by Date</option>
            <option>Sort by Amount</option>
          </select>

          <select className="select select-bordered select-sm">
            <option>Descending</option>
            <option>Ascending</option>
          </select>

          <Link
            to="/add-transaction"
            className="btn bg-yellow-500 hover:bg-yellow-600 text-white btn-sm"
          >
            <FaPlus className="mr-2" /> Add Transaction
          </Link>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((transaction) => (
          <div
            key={transaction._id}
            className="card shadow-md border border-gray-200 bg-white hover:shadow-lg transition-all duration-200"
          >
            <div className="card-body">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 font-semibold text-gray-800 text-lg">
                  {transaction.type?.toLowerCase() === "income" ? (
                    <FaArrowUp className="text-green-500" />
                  ) : (
                    <FaArrowDown className="text-red-500" />
                  )}
                  <span className="capitalize">{transaction.type}</span>
                </div>

                <span
                  className={`font-bold ${
                    transaction.type?.toLowerCase() === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  ${transaction.amount}.00
                </span>
              </div>
              <p className="text-sm text-gray-800">
                <span className="font-semibold">Category:</span>{" "}
                {transaction.category}
              </p>
              <p className="text-sm text-gray-800">
                <span className="font-semibold">Date:</span>{" "}
                {transaction.date}
              </p>
              <p className="text-sm text-gray-800 line-clamp-2">
                {transaction.description}
              </p>

              {/* buttons */}
              <div className="flex items-center gap-3 mt-4 text-gray-800">
                <Link
                  to={`/view-details/${transaction._id}`}
                  className="btn btn-outline btn-sm flex-1"
                >
                  <FaEye className="mr-2" /> View
                </Link>

                <Link to={`/update-transaction/${transaction._id}`}
                    className="btn btn-outline btn-sm flex-1"
                  >
                    <FaEdit className="mr-2" /> Update
                  </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTransactions
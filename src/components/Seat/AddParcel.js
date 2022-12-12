import React from "react";

function AddParcel() {
  return (
    <div>
      <form className="mx-5 bg-gray-100 px-3 rounded border border-gray-300 mb-3">
        <div className="flex items-center">
          <div className="flex flex-col">
            <label>Item Type</label>
            <input
              type="text"
              className="px-1 items-center border border-gray-300 mx-1 w-fit mb-2"
              placeholder="Item Type"
            />
          </div>

          <div className="flex flex-col">
            <label>Item Name</label>
            <input
              type="text"
              className="px-1 items-center border border-gray-300 mx-1 w-fit mb-2"
              placeholder="Item Name"
            />
          </div>

          <div className="flex flex-col">
            <label>Qty</label>
            <input
              type="text"
              className="px-1 items-center border border-gray-300 mx-1 w-fit mb-2"
              placeholder="Qty"
            />
          </div>

          <div className="flex flex-col">
            <label>Cost</label>
            <input
              type="text"
              className="px-1 items-center border border-gray-300 mx-1 w-fit mb-2"
              placeholder="Cost"
            />
          </div>

          <div className="flex flex-col">
            {/* <label>add</label> */}
           <buuton className="text-lg rounded-lg bg-gray-300 cursor-pointer hover:bg-gray-800 hover:text-white mt-3 mx-5 px-2">+</buuton>
          </div>
        </div>

        <div className="flex justify-around w-4/12">
          <button
            className="p-2 rounded-lg mx-2 my-5 border border-gray-300"
            type="reset"
          >
            Reset
          </button>
          <button className="p-2 rounded-lg mx-2 my-5 border border-gray-300 bg-red-800 text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddParcel;

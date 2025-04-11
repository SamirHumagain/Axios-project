import React from "react";

const Buttons = ({
  handleClick,
  handleDelete,
  handleOpen,
  data,
  showdetails,
  showdelete,
  showedit,
  showaddtocart,
  handleAddtocart,
}) => {
  return (
    <div>
      {showdetails && (
        <button
          onClick={() => handleClick(data.id)}
          className="font-serif text-sm rounded-xl bg-blue-700 p-2 text-white mt-1"
          type="button"
        >
          Details
        </button>
      )}
      {showdelete && (
        <button
          onClick={() => handleDelete(data.id)}
          className="font-serif text-sm rounded-xl bg-red-700 p-2 text-white ml-2"
          type="button"
        >
          Delete
        </button>
      )}

      {showedit && (
        <button
          onClick={handleOpen}
          className="font-serif text-sm rounded-xl bg-orange-700 p-2 text-white ml-2"
          type="button"
        >
          Edit
        </button>
      )}

      {showaddtocart && (
        <button
          onClick={handleAddtocart}
          className="font-serif text-sm rounded-xl bg-orange-700 p-2 text-white ml-2"
          type="button"
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default Buttons;

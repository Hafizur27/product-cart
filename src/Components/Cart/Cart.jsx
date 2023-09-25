import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { CartContext } from "../../provider/Context/Context";
const Cart = () => {
  const { carts, dispatch } = useContext(CartContext);

  const handleDeleteBtn = (id) =>{
    dispatch({type: 'REMOVE_PRODUCT', payload: id});
  }
  const handleIncreaseBtn = (data) =>{
    dispatch({type: 'INCREASE_QUANTITY', payload: data});
  };
  const handleDecreaseBtn = (data) =>{
    dispatch({type: 'DECREASE_QUANTITY', payload: data})
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
          carts.cartItem.map((data,index)=><tr key={data.id}>
          <td>{index + 1}</td>
          <td> 
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={data.image}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </div>
          </td>
          <td>
            {data.title}
          </td>
          <td>{data.category}</td>
          <td>{data.price}</td>
          <td>
            <div className="flex items-center gap-2">
              <button onClick={()=>handleDecreaseBtn(data)} className="bg-red-600 text-white px-2 text-lg rounded-lg font-bold">
                -
              </button>
              <span>{data.orderQty}</span>
              <button onClick={()=>handleIncreaseBtn(data)} className="bg-green-600 text-white px-2 text-lg rounded-lg font-bold">
                +
              </button>
            </div>
          </td>
          <td>
            <button onClick={()=>handleDeleteBtn(data.id)} className="bg-red-500 text-white p-2 rounded-lg">
              <MdDelete />
            </button>
          </td>
        </tr>)
          }
        </tbody>
        {/* foot */}
        {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot> */}
      </table>
    </div>
  );
};

export default Cart;

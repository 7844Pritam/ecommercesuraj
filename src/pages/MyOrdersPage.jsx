import { useState, useEffect } from "react";
import { auth, db, collection, query, where, getDocs } from "../firebase";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const ordersRef = collection(db, "milkorders");
          const q = query(ordersRef, where("userId", "==", user.uid));
          const querySnapshot = await getDocs(q);

          const ordersArray = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setOrders(ordersArray);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleTrackOrder = (trackingNumber) => {
    alert(`Tracking Order: ${trackingNumber}`);
  };

  return (
    <div className="container px-6 py-12 mx-auto max-w-7xl">
      <h2 className="mb-8 text-4xl font-bold text-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        My Orders
      </h2>

      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 border-t-4 border-blue-600 rounded-full animate-spin"></div>
        </div>
      ) : orders.length > 0 ? (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg shadow-lg border-2 border-gray-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Order ID: {order.id}</h3>
              <p className="text-gray-600 mb-4">Status: {order.status}</p>

              {order.trackingNumber && (
                <div className="mt-4">
                  <button
                    onClick={() => handleTrackOrder(order.trackingNumber)}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
                  >
                    Track Order
                  </button>
                </div>
              )}

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800">Shipping Address</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>{order.selectedAddress.name}</li>
                  <li>{order.selectedAddress.street}</li>
                  <li>
                    {order.selectedAddress.city}, {order.selectedAddress.state} {order.selectedAddress.postalCode}
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800">Order Items</h4>
                <ul className="space-y-2">
                  {order.cart.map((item, index) => (
                    <li key={index} className="flex justify-between text-gray-600">
                      <span>{item.title}</span>
                      <span>₹{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-500">You haven't placed any orders yet.</p>
      )}
    </div>
  );
};

export default MyOrdersPage;

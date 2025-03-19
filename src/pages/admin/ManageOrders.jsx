import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ManageOrders = () => {
  const orders = useSelector((state) => state.orders.items);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Array.isArray(orders)) {
      setLoading(false);
    }
  }, [orders]);

  if (loading) return <p>Loading...</p>;

  // 🔹 التحقق من أن الطلبات ليست فارغة أو غير معرفة
  if (!orders || !Array.isArray(orders)) {
    return <p>⚠️ No orders available</p>;
  }

  return (
    <div>
      <h2>Manage Orders</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>Order #{order.id} - {order.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManageOrders;

import React from "react";
import { useRecoilValue } from "recoil";
import { useCancelOrder, useConfirmOrder , useDeliveryOrder,useReceiveOrder,useWaitReturnOrder,useReturnOrder } from "../../hooks/useOrder";
import { userState } from "../../lib/recoil-root";
import CardOrderItem from "./CardOrderItem";

const OrderAllItems = ({ orders }) => {
  console.log(orders);

  const user = useRecoilValue(userState);

  const { mutate: cancelOrder } = useCancelOrder();
  const { mutate: confirmOrder } = useConfirmOrder();
  const { mutate: deliveryOrder } = useDeliveryOrder();
  const { mutate: receiveOrder } = useReceiveOrder();
  const { mutate: waitReturnOrder } = useWaitReturnOrder();
  const { mutate: returnOrder } = useReturnOrder();

  const deleleOrder = (item) => {
    const params = {};
    params.orderId = item._id;
    params.token = user.token;
    cancelOrder(params);
    alert("Hủy đơn hàng thành công");
  };
  const confirmOrderHandle = (item) => {
    const params = {};
    params.orderId = item._id;
    params.token = user.token;
    confirmOrder(params);
    alert("Đơn hàng đã được xác nhận");
  };
  const deliveryOrderHandle = (item) => {
    const params = {};
    params.orderId = item._id;
    params.token = user.token;
    deliveryOrder(params);
    alert("Đơn hàng đang đi lấy");
  };
  const receiveOrderHandle = (item) => {
    const params = {};
    params.orderId = item._id;
    params.token = user.token;
    receiveOrder(params);
    alert("Đơn hàng đã được nhận");
  };
  const waitReturnOrderHandle = (item) => {
    const params = {};
    params.orderId = item._id;
    params.token = user.token;
    waitReturnOrder(params);
    alert("Đơn hàng đang đợi lấy");
  };
  const returnOrderHandle = (item) => {
    const params = {};
    params.orderId = item._id;
    params.token = user.token;
    returnOrder(params);
    alert("Đơn hàng đang đưa về người cho thuê");
  };
  const renderItems = () =>
    orders?.docs?.map((item) => (
      <CardOrderItem
        deleteOrder={(item) => deleleOrder(item)}
        confirmOrder={(item) => confirmOrderHandle(item)}
        deliveryOrder={(item) => deliveryOrderHandle(item)}
        receiveOrder={(item) => receiveOrderHandle(item)}
        waitReturnOrder={(item) => waitReturnOrderHandle(item)}
        returnOrder={(item) => returnOrderHandle(item)}
        key={item._id}
        item={item}
      />
    ));
  return <>{renderItems()}</>;
};
export default OrderAllItems;

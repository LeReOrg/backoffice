import { useMutation, useQuery } from "react-query";
import axios from "axios";
import config from "../../config";


const getOrderLessor = async (params) => {
  if (params) {
    const { data } = await axios.get(`${config.api}/orders`, {
      params: params?.queryKey[1],
    });
    return data;
  }
};
const getOrderLessorDetail = async (params) => {
  if (params) {
    const { data } = await axios.get(
      `${config.api}/orders/${params?.queryKey[1]}`
    );
    return data;
  }
};
const useOrderLessorAndLesse = (id) => {
  return useQuery(["useOrderLessorAndLesse", id], getOrderLessor, {
    staleTime: 1000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};
const useOrderLessorDetail = (id) => {
  return useQuery(["orderLessorDetail", id], getOrderLessorDetail, {
    staleTime: 1000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });
};

const cancelOrder = async (params) => {
  const { data } = await axios.post(
    `${config.api}/orders/${params.orderId}/cancel`,
    params,
    {
      headers: { Authorization: `Bearer ${params.token}` },
    }
  );
  return data;
};
const useCancelOrder = () => {
  return useMutation(cancelOrder);
};

const confirmOrder = async (params) => {
  const { data } = await axios.post(
    `${config.api}/orders/${params.orderId}/confirm`,
    params,
    {
      headers: { Authorization: `Bearer ${params.token}` },
    }
  );
  return data;
};
const useConfirmOrder = () => {
  return useMutation(confirmOrder);
};

const deliveryOrder = async (params) => {
  const { data } = await axios.post(
    `${config.api}/orders/${params.orderId}/delivery`,
    params,
    {
      headers: { Authorization: `Bearer ${params.token}` },
    }
  );
  return data;
};
const useDeliveryOrder = () => {
  return useMutation(deliveryOrder);
};
const receiveOrder = async (params) => {
  const { data } = await axios.post(
    `${config.api}/orders/${params.orderId}/receive`,
    params,
    {
      headers: { Authorization: `Bearer ${params.token}` },
    }
  );
  return data;
};
const useReceiveOrder = () => {
  return useMutation(receiveOrder);
};

const waitReturnOrder = async (params) => {
  const { data } = await axios.post(
    `${config.api}/orders/${params.orderId}/wait-return`,
    params,
    {
      headers: { Authorization: `Bearer ${params.token}` },
    }
  );
  return data;
};
const useWaitReturnOrder = () => {
  return useMutation(waitReturnOrder);
};
const returnOrder = async (params) => {
  const { data } = await axios.post(
    `${config.api}/orders/${params.orderId}/return`,
    params,
    {
      headers: { Authorization: `Bearer ${params.token}` },
    }
  );
  return data;
};
const useReturnOrder = () => {
  return useMutation(returnOrder);
};
const confirmReturnedOrder = async (params) => {
  const { data } = await axios.post(
    `${config.api}/orders/${params.orderId}/confirm-returned`,
    params,
    {
      headers: { Authorization: `Bearer ${params.token}` },
    }
  );
  return data;
};
const useConfirmReturnedOrder = () => {
  return useMutation(confirmReturnedOrder);
};
export {
  useOrderLessorAndLesse,
  getOrderLessor,
  useOrderLessorDetail,
  getOrderLessorDetail,
  useCancelOrder,
  cancelOrder,
  useConfirmOrder,
  confirmOrder,
  useDeliveryOrder,
  deliveryOrder,
  useReceiveOrder,
  receiveOrder,
  useWaitReturnOrder,
  waitReturnOrder,
  useReturnOrder,
  returnOrder,
  useConfirmReturnedOrder,
  confirmReturnedOrder,
};

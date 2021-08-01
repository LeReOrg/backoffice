import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import styles from "./CardOrderItemStyled";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia';
const CardOrderItem = ({ item, deleteOrder, confirmOrder,deliveryOrder,receiveOrder,waitReturnOrder,returnOrder }) => {
  const {
    amount,
    deposit,
    status,
    startDate,
    hiredDays,
    endDate,
    _id,
    detail,
    lessee,
  } = item;
  const useStyles = makeStyles(styles);
  let startDateFormat = startDate.slice(0, 10);
  let startDay = `${startDateFormat.substr(-2, 2)}-${startDateFormat.substr(
    -5,
    2
  )}-${startDateFormat.substr(0, 4)}`;
  let endDateFormat = endDate.slice(0, 10);
  let endDay = `${endDateFormat.substr(-2, 2)}-${endDateFormat.substr(
    -5,
    2
  )}-${endDateFormat.substr(0, 4)}`;
  const [valueStatus, setValueStatus] = useState();
  const [valueSub, setValueSub] = useState();
  useEffect(() => {
    switch (status) {
      case "PENDING CONFIRM":
        setValueStatus("Chờ xác nhận");
        setValueSub("Đơn hàng của bạn đang chờ xác nhận...");
        break;
      case "AWAITING PICKUP":
        setValueStatus("Chờ lấy hàng");
        setValueSub("Tài xế đang đi lấy hàng...");
        break;
      case "DELIVERING":
        setValueStatus("Đang giao hàng");
        setValueSub("Tài xế đang đi đến vị trí của bạn...");
        break;
      case "DELIVERED":
        setValueStatus("Đã giao hàng");
        setValueSub("Đon hàng được giao thành công");
        break;
      case "AWAITING RETURN PICKUP":
        setValueStatus("Chờ xác nhận");
        setValueSub("Đon hàng của bạn đang đợi tài xế đến lấy...");

        break;
      case "RETURNING":
        setValueStatus("Chờ trả hàng");
        setValueSub("Đon hàng được giao thành công");

        break;
      case "RETURNED":
        setValueStatus("Trả hàng thành công");
        setValueSub("Đon hàng được trả thành công");

        break;
      case "CANCELLED":
        setValueStatus("Đơn hàng đã hủy");
        setValueSub("Đơn hàng của bạn đã hủy");
        break;
      default:
        break;
    }
  }, [status]);
  const classes = useStyles();
  return (
    <div className={classes.tabInfo}>
      <Grid className={classes.tabInfoItems} container>
        <Grid item lg={4} md={4}>
          <div className={classes.tabInfoStatus}>{valueStatus}</div>
        </Grid>
        <Grid item lg={4} md={4}>
          <div className={classes.tabInfoCode}>Mã đơn hàng LERE {_id}</div>
        </Grid>
        {status === "PENDING CONFIRM" && (
          <Grid item lg={4} md={4}>
            <div
              onClick={() => deleteOrder(item)}
              className={classes.cancelOrder}
            >
              Hủy đơn hàng
            </div>
          </Grid>
        )}
      </Grid>
      <Grid className={classes.tabInfobody} container>
        <Grid item lg={5} md={5}>
          <div className={classes.tabInfo_contentLeft}>
            <div className={classes.tabInfo_contentLeftImage}>
            <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={detail.thumbnail.url}
          title="Contemplative Reptile"
        />
              {/* <Image src={detail.thumbnail.url} height={88} width={88} /> */}
            </div>
            <div className={classes.tabInfo_contentLeftInfo}>
              <p>{detail.name}</p>
              <p style={{ color: "#888E8A", fontSize: 12, lineHeight: "18px" }}>
                Cung cấp bởi <span>{lessee.displayName}</span>
              </p>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={4} className={classes.quantityNumber}>
          <div className={classes.tabInfo_contentRightQuantity}>
            Số lượng: {detail.quantity}
          </div>
        </Grid>
        <Grid item lg={4} md={4}>
          <div className={classes.tabInfo_contentRight}>
            <div className={classes.tabInfo_contentRightTotal}>
              <div className={classes.tabInfo_contentRightAmount}>
                Tổng tiền: {Math.round(amount).toLocaleString("en-US")}đ
              </div>

              <div className={classes.tabInfo_contentRightpile}>
                Giá thuê: {Math.round(detail.unitPrice).toLocaleString("en-US")}
                đ | Đặt cọc {Math.round(deposit).toLocaleString("en-US")}đ
              </div>
              <div className={classes.tabInfo_contentRightpile}>
                Ngày thuê: {startDay} - {endDay} | <span>{hiredDays} ngày</span>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <Box className={classes.buttonActions}>
        <div className={classes.buttonActions_Content}>
          <div className={classes.buttonActions_ContentStatus}>
            <div className={classes.buttonActions_ContentIcon}></div>
            <p>{valueSub}</p>
          </div>
          <div className={classes.buttonActionsContainer}>
            {status === "PENDING CONFIRM" && (
              <div
                className={classes.buttonDetail}
                onClick={() => confirmOrder(item)}
              >
                Xác nhận đơn hàng
              </div>
            )}
            {status === "AWAITING PICKUP" && (
              <div
                className={classes.buttonDetail}
                onClick={() => deliveryOrder(item)}
              >
                Lấy đơn hàng bên cho thuê
              </div>
            )}
            {status === "DELIVERING" && (
              <div
                className={classes.buttonDetail}
                onClick={() => receiveOrder(item)}
              >
               Xác nhận đã giao hàng thành công
              </div>
            )}
            {status === "DELIVERED" && (
              <div
                className={classes.buttonDetail}
                onClick={() => waitReturnOrder(item)}
              >
               Xác nhận chờ trả hàng
              </div>
            )}
            {status === "AWAITING RETURN PICKUP" && (
              <div
                className={classes.buttonDetail}
                onClick={() => returnOrder(item)}
              >
                Xác nhận đã lấy hàng của bên thuê
              </div>
            )}
            
            {/* <Link href={`/account/customer/view/${String(_id)}`}> */}
              {/* <div className={classes.buttonDetail}>Chi tiết đơn hàng</div> */}
            {/* </Link> */}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default CardOrderItem;

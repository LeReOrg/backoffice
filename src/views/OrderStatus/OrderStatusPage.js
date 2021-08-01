import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { Box } from "@material-ui/core";
import styles from "./OrderLeaseStyled";
import OrderStatus from "components/OrderStatus/OrderStatus";
import { useOrderLessorAndLesse } from "../../hooks/useOrder/";
import { userState } from "../../lib/recoil-root";
import { useRecoilValue } from "recoil";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const OrderStatusPage = (props) => {
  const tabValue = [
    {
      key: 0,
      value: "Tất cả",
    },
    {
      key: 1,
      value: "Chờ xác nhận",
    },
    {
      key: 2,
      value: "Chờ lấy",
    },
    {
      key: 3,
      value: "Đang giao",
    },
    {
      key: 4,
      value: "Đã giao",
    },
    {
      key: 5,
      value: "Chờ Trả Hàng",
    },
    {
      key: 6,
      value: "Đang trả",
    },
    {
        key: 7,
        value: "Đã trả hàng",
    },
    {
      key: 8,
      value: "Đã huỷ",
    },
  ];
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const theme = useTheme();
  const user = useRecoilValue(userState);
  const [filter, setFilter] = useState({
    populate: "detail,product,lessor,lessee,lessorAddress,lesseeAddress",
  });

  const { data: orders, isLoading, isSuccess } = useOrderLessorAndLesse(filter);
  const [value, setValue] = useState(0);
  const [tabs, setTabs] = useState(tabValue);
  useEffect(() => {
    switch (value) {
      case 0:
        setFilter((preState) => ({
          ...preState,
          status: undefined,
        }));
        break;
      case 1:
        setFilter((preState) => ({ ...preState, status: "PENDING CONFIRM" }));
        break;
      case 2:
        setFilter((preState) => ({ ...preState, status: "AWAITING PICKUP" }));
        break;
      case 3:
        setFilter((preState) => ({ ...preState, status: "DELIVERING" }));
        break;
      case 4:
        setFilter((preState) => ({ ...preState, status: "DELIVERED" }));
        break;
      case 5:
        setFilter((preState) => ({
          ...preState,
          status: "AWAITING RETURN PICKUP",
        }));
        break;
      case 6:
        setFilter((preState) => ({ ...preState, status: "RETURNING" }));
        break;
      case 7:
        setFilter((preState) => ({ ...preState, status: "RETURNED" }));
        break;
      case 8:
        setFilter((preState) => ({ ...preState, status: "CANCELLED" }));
        break;
      default:
        break;
    }
  }, [value]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const renderTab = () =>
    tabs.map((index, key) => (
      <Tab
        key={key}
        classes={{
          selected: classes.selectedTab,
          root: classes.rootTab,
        }}
        label={index.value}
        {...a11yProps(index.key)}
      />
    ));

  return (
    <>
      <AppBar
        className={classes.customerInfo_headerAppBar}
        position="static"
        color="default"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant={props.isMobile ? "scrollable" : "fullWidth"}
          scrollButtons="auto"
        >
          {renderTab()}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        className={classes.tabContainer}
      >
        <TabPanel
          
          value={value}
          index={0}
          dir={theme.direction}
        >
          {orders?.docs?.length > 0 ? (
            <OrderStatus orders={orders} />
          ) : (
            <p>Bạn ko có sản phẩm nào</p>
          )}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {orders?.docs?.length > 0 ? (
            <OrderStatus orders={orders} />
          ) : (
            <p>Bạn ko có sản phẩm nào</p>
          )}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {orders?.docs?.length > 0 ? (
            <OrderStatus orders={orders} />
          ) : (
            <p>Bạn ko có sản phẩm nào</p>
          )}
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          {orders?.docs?.length > 0 ? (
            <OrderStatus orders={orders} />
          ) : (
            <p>Bạn ko có sản phẩm nào</p>
          )}
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          {orders?.docs?.length > 0 ? (
            <OrderStatus orders={orders} />
          ) : (
            <p>Bạn ko có sản phẩm nào</p>
          )}
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          {orders?.docs?.length > 0 ? (
            <OrderStatus orders={orders} />
          ) : (
            <p>Bạn ko có sản phẩm nào</p>
          )}
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          {orders?.docs?.length > 0 ? (
            <OrderStatus orders={orders} />
          ) : (
            <p>Bạn ko có sản phẩm nào</p>
          )}
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          {orders?.docs?.length > 0 ? (
            <OrderStatus orders={orders} />
          ) : (
            <p>Bạn ko có sản phẩm nào</p>
          )}
        </TabPanel>.
        <TabPanel value={value} index={8} dir={theme.direction}>
          {orders?.docs?.length > 0 ? (
            <OrderStatus orders={orders} />
          ) : (
            <p>Bạn ko có sản phẩm nào</p>
          )}
        </TabPanel>
      </SwipeableViews>
    </>
  );
};

export default OrderStatusPage;

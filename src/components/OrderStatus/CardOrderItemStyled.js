import IconStatus from "assets/img/note.svg";
const styles = (theme) => ({
  tabInfo_contentLeft: {
    display: "flex",
    alignItems: "center",
  },
  tabInfoItems: {
    padding: "8px 18px",
    borderBottom: "1px solid #888E8A",
  },
  buttonActionsContainer: {
    display: "flex",
    alignItems: "center",
  },
  tabInfobody: {
    padding: "24px 18px 27px 18px",
    borderBottom: "1px solid #F3F4F3",
  },
  tabInfo_contentLeftInfo: {
    maxWidth: 305,
    fontSize: 14,
    lineHeight: "20px",
    "& span": {
      fontSize: 12,
      lineHeight: "18px",
      color: "#2F80ED",
    },
  },
  tabInfoStatus: {
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: "13px",
    color: "#2F80ED",
  },
  tabInfoCode: {
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: "13px",
    color: "#000000",
    textAlign: "center",
  },
  cancelOrder: {
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: "13px",
    color: "#000000",
    textAlign: "right",
    cursor: "pointer",
  },
  tabInfo: {
    border: "1px solid #888E8A",
    borderRadius: 5,
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      border: "none",
      padding: 0,
    },
    "&:first-child": {
      marginTop: 40,
    },
  },
  tabInfo_contentLeft: {
    display: "flex",
  },
  tabInfo_contentLeftImage: {
    paddingRight: 16,
  },
  tabInfo_content: {
    padding: 24,
  },
  main_customerProfileContent: {
    display: "flex",
    flexDirection: "column",
  },
  tabInfo_contentRight: {},
  tabInfo_contentRightTotal: {
    textAlign: "right",
  },
  tabInfo_contentRightQuantity: {
    textAlign: "center",
  },
  quantityNumber: {
    borderLeft: "1px solid #E7E9E8",
    borderRight: "1px solid #E7E9E8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  tabInfo_contentRightpile: {
    fontSize: 14,
    color: " #888E8A",
    paddingBottom: 10,
    lineHeight: "20px",
    "& span": {
      fontWeight: "bold",
      fontSize: 12,
      color: "#000000",
      lineHeight: "18px",
    },
  },
  buttonActions_Content: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.between("sm", "md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  buttonDetail: {
    padding: "9px 16px",
    backgroundColor: "#ffffff",
    borderRadius: 4,
    border: "1px solid #2FAF62",
    color: "#2FAF62",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: "22px",
    cursor: "pointer",
    "&:first-child": {
      marginRight: 16,
    },
  },
  buttonActions: {
    padding: "10px 18px 10px 18px",
  },
  buttonActions_ContentIcon: {
    background: `url(${IconStatus})`,
    width: "18px",
    height: "18px",
    marginRight: 8,
  },
  buttonActions_ContentStatus: {
    display: "flex",
    alignItems: "center",
    "& p": {
      fontWeight: "normal",
      fontSize: 12,
      color: "#2F80ED",
      lineHeight: "18px",
    },
  },
  tabInfo_contentRightAmount: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#111E16",
    lineHeight: "22px",
    paddingBottom: 10,
  },
});
export default styles;

const styles = (theme) => ({
  tabContainer: {
    backgroundColor : "#ffffff",
  },
  rootTab: {
    textTransform: "none",
    fontSize: 16,
    fontWeight: "500",
    minWidth: 140,
    [theme.breakpoints.between("sm", "md")]: {
      minWidth: 120,
      padding: "3px 5px",
    },
  },
  customerInfo_headerAppBar: {
    boxShadow: "unset",
    backgroundColor: "white",
    borderBottom: "1px solid #E7E9E8",
    borderRadius: "8px 8px 0 0",
  },
  tabInfo: {
    border: "1px solid #E7E9E8",
    borderRadius: 8,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      border: "none",
      padding: 0,
    },
  },
  tabInfo_contentLeft: {
    display: "flex",
    maxWidth: "60%",
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
  tabInfo_contentRight: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "30%",
    width: "30%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxWidth: "unset",
    },
  },
  tabInfo_contentRightTotal: {
    textAlign: "right",
  },
  tabInfo_contentRightpile: {
    fontSize: 14,
    color: " #888E8A",
    paddingBottom: 10,
  },

  selectedTab: {
    color: "#2F6BFF !important",
    fontWeight: "500",
    boxShadow: "inset 0px -2px 0px #2F6BFF",
  },
});

export default styles;

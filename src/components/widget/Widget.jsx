import "./widget.scss";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widget = ({ type }) => {
  //sample data
  const amount = 100;
  let data;
  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "see all users",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "see all orders",
        icon: <ShoppingCartOutlinedIcon className="icon"  style={{ color: "goldenrod", backgroundColor: "rgba(218,165,32,0.2)" }} />,
      };
      break;
    case "earnings":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "view net earning",
        icon: <MonetizationOnOutlinedIcon className="icon"  style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }} />,
      };
      break;
    case "myBalance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "see details",
        icon: <AccountBalanceWalletOutlinedIcon className="icon"  style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)" }} />,
      };
      break;

    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ExpandLessOutlinedIcon />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;

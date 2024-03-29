import "./widget.scss";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Widget = ({ type }) => {
  const [usersCount, setUsersCount] = useState(null);
  const [diff, setDiff] = useState(null);
  //sample data

  let data;
  switch (type) {
    case "users":
      data = {
        title: "USERS",
        query: "users",
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
    case "products":
      data = {
        title: "PRODUCT",
        query: "products",
        isMoney: false,
        link: "see all products",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218,165,32,0.2)",
            }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNING",
        query: "earnings",
        isMoney: true,
        link: "view net earning",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
          />
        ),
      };
      break;
    case "myBalance":
      data = {
        title: "BALANCE",
        query: "myBalance",
        isMoney: true,
        link: "see details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)" }}
          />
        ),
      };
      break;

    default:
      break;
  }

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthData = query(
        collection(db, data.query),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const prevMonthData = query(
        collection(db, data.query),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );

      const querySnapshotLastMonth = await getDocs(lastMonthData);
      const lastMonthUsersCount = querySnapshotLastMonth.docs.length;

      const querySnapshotPrevMonth = await getDocs(prevMonthData);
      const prevMonthUsersCount = querySnapshotPrevMonth.docs.length;

      setUsersCount(lastMonthUsersCount);
      setDiff(Math.round(

        ((lastMonthUsersCount - prevMonthUsersCount) / prevMonthUsersCount) *
        100
        ) || 0
      );
    };

    fetchData();
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {usersCount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className= {`percentage ${diff>=0? "positive" : "negative"}`}>
          { diff>=0? <ExpandLessOutlinedIcon /> : <ExpandMoreIcon/>}
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;

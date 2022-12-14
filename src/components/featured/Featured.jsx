import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const Featured = () => {
  const percentage = 70;

  return (
    <div className="featured">
      <div className="top">
        <h3 className="title">Total Revenue</h3>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={percentage} text={`%${percentage}`} strokeWidth={4} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$530</p>
        <p className="description">Previous transaction processing. Last payment may not be included.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult negative">
              <ExpandMoreOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

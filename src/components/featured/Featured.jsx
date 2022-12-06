import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
      </div>
    </div>
  );
};

export default Featured;

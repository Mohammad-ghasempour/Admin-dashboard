import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editbutton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                className="itemImg"
                src="https://i.pinimg.com/280x280_RS/27/36/dd/2736dd96c2680c4a9722c7b778ff4602.jpg"
              />
              <div className="details">
                <h1 className="itemTitle">Mohammad Ghasempour</h1>
                <div className="itemInfo">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">M.gh84@gmail.com</span>
                </div>
                <div className="itemInfo">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+47 938 28 281</span>
                </div>
                <div className="itemInfo">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">41 Holbergs gate, Stavanger</span>
                </div>
                <div className="itemInfo">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Norway</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Single;

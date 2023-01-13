import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import MyTable from "../../components/table/MyTable";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="products" />
          <Widget type="earnings" />
          <Widget type="myBalance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2/1} title={'Last 6 months (revenue)'} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest transaction</div>
          <MyTable/>
        </div>
      </div>
    </div>
  );
};

export default Home;

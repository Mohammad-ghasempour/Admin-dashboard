import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";

const New = () => {
  return (
    <div className="new">
      <Sidebar />

      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add new User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="No image"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="Mohammad-ghasempour" />
              </div>
              <div className="formInput">
                <label>Name and Surname</label>
                <input type="text" placeholder="Mohammad Ghasempour" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="M.gh84nor" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="+47 938 28 281" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="+47 938 28 281" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;

import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import "../../dataTableSource";
import { userRows , productsRows } from "../../dataTableSource";
import { userColumns , productColumns } from "../../dataTableSource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

const DataTable = ({type}) => {
  const [myRows, setMyRows] = useState([]);

  const rowsType = type === "Users" ? myRows : type === "Products" ? productsRows : null;
  const culumnType = type === "Users" ? userColumns : type === "Products" ? productColumns : null;

  useEffect(() => {
    const fetchData = async () => {
      var list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
          const id = doc.id;
          const data = doc.data();
          list.push({ id: id, ...data });
        });
        setMyRows(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(myRows);

  const handleDelete = async (id) => {
    const name = myRows.find((item) => item.id == id);
    var answer = window.confirm(
      "are you sure to delete  '" + name.userName + "'  from database?!"
    );
    if (answer) {
      try {
        await deleteDoc(doc(db, "users", id));
        setMyRows(myRows.filter((item) => item.id !== id));
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  };
  const actionCulumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="cellView">View</div>
            </Link>
            <div
              className="cellDelete"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];



  return (
    <div className="dataTable">
      <div className="dataTableTitle">
      {type}
        <Link to="/users/new" className="link">
          Add new
        </Link>
      </div>
      <DataGrid
        sx={{ "& .MuiDataGrid-cell": { borderColor: "#333" } }}
        className="dataGrid"
        rows={rowsType}
        columns={culumnType.concat(actionCulumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;

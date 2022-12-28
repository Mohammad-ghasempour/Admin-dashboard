import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import "../../dataTableSource";
//import { userRows, productsRows } from "../../dataTableSource";
import { userColumns, productColumns } from "../../dataTableSource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

const DataTable = ({ type }) => {
  const [userRows, setUserRows] = useState([]);
  const [productsRows, setProductsRows] = useState([]);

  const rowsType =
    type === "Users" ? userRows : type === "Products" ? productsRows : null;
  const culumnType =
    type === "Users"
      ? userColumns
      : type === "Products"
      ? productColumns
      : null;

  useEffect(() => {
    const fetchUsers = async () => {
      var userList = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
          const id = doc.id;
          const data = doc.data();
          userList.push({ id: id, ...data });
        });
        setUserRows(userList);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchProducts = async () => {
      var productsList = [];
      try {
        const unsub = onSnapshot(
          collection(db, "products"),
          (snapshot) => {
            snapshot.docs.forEach((doc) => {
              const id = doc.id;
              const data = doc.data();
              productsList.push({ id: id, ...data });
            });
            setProductsRows(productsList);
          },
          (error) => {
            console.log(error);
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
    switch (type) {
      case "Users":
        fetchUsers();
        break;

      case "Products":
        fetchProducts();
        break;

      default:
        break;
    }

    return () => {
      fetchProducts();
      fetchUsers();
    };
  }, []);

  const handleDelete = async (id) => {

    const name = rowsType.find((item) => item.id == id);

    switch (type) {
      case "Users":
        //

         var answer = window.confirm(
      "are you sure to delete  '" + name.userName + "'  from database?!"
    );
    if (answer) {
      try {
        await deleteDoc(doc(db, "users", id));
        setUserRows(userRows.filter((item) => item.id !== id));
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
        break;


        case "Products":
                var answer = window.confirm(
          "are you sure to delete  '" + name.title + "'  from database?!"
        );
        if (answer) {
          try {
            await deleteDoc(doc(db, "products", id));
            setProductsRows(productsRows.filter((item) => item.id !== id));
          } catch (err) {
            console.log(err);
          }
        } else {
          return;
        }



        break;
      
      default:
        break;
    }

   
    // const name = userRows.find((item) => item.id == id);
    // var answer = window.confirm(
    //   "are you sure to delete  '" + name.userName + "'  from database?!"
    // );
    // if (answer) {
    //   try {
    //     await deleteDoc(doc(db, "users", id));
    //     setUserRows(userRows.filter((item) => item.id !== id));
    //   } catch (err) {
    //     console.log(err);
    //   }
    // } else {
    //   return;
    // }
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
        <Link to={`/${type}/new`} className="link">
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

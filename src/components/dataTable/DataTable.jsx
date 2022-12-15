import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import "../../dataTableSource";
import { userRows } from "../../dataTableSource";
import { userColumns } from "../../dataTableSource";
import { Link } from "react-router-dom";

const DataTable = () => {
  const actionCulumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="cellView">View</div>
            </Link>
            <div className="cellDelete">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add new
        </Link>
      </div>
      <DataGrid
        sx={{ "& .MuiDataGrid-cell": { borderColor: "#333" } }}
        className="dataGrid"
        rows={userRows}
        columns={userColumns.concat(actionCulumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;

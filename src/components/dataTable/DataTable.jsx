import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import "../../dataTableSource";
import { userRows } from "../../dataTableSource";
import { userColumns } from "../../dataTableSource";

const DataTable = () => {
  
  const actionCulumn = [{
    field: 'action' , headerName: 'Action' , width:200, renderCell:()=>{
      return (<div className="cellAction">
        <div className="cellView">View</div>
        <div className="cellDelete">Delete</div>

      </div>)
    }
  }]
  
  
  return (
    <div className="dataTable">
      <DataGrid
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

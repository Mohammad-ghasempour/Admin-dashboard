import "./myTable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

  const rows = [
    {
      id: 123456,
      product: "Acer monitor",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS7l28OdW-03Jbd-e4wsYxsSHkWqpAlptCiA_U_dh1q1Xrth9c8ldakySLLbYjDAXrynlC9_aVFizmbdXKTXIoUdT0n_wugNWNqdfI&usqp=CAE",
      customer: "Mohammad Ghasempour",
      date: "1 March",
      amount: 1200,
      methods: "Cash on delivery",
      status: "Approved",
    },
    {
      id: 123457,
      product: "Laptop",
      img: "https://fdn.gsmarena.com/imgroot/news/21/09/surface-laptops/-1200/gsmarena_001.jpg",
      customer: "Anthon Smith",
      date: "1 april",
      amount: 2600,
      methods: "Cash on delivery",
      status: "Pending",
    },
    {
      id: 123458,
      product: "Iphone",
      img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg",
      customer: "Jone kjold",
      date: "10 March",
      amount: 800,
      methods: "CryptoCurrency",
      status: "Approved",
    },
    {
      id: 123447,
      product: "Amazon Mouse",
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61i0CV-tKpL._AC_SX425_.jpg",
      customer: "Laila Smith",
      date: "11 September",
      amount: 6600,
      methods: "Online payment",
      status: "Pending",
    },
    {
      id: 122447,
      product: "Gaming laptop",
      img: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71RK6+rx-xL._AC_SX679_.jpg",
      customer: "Mina Hosseini",
      date: "05 December",
      amount: 3600,
      methods: "Online",
      status: "Pending",
    }
  ];
const List = () => {

  return (
    <TableContainer component={Paper} className="myTable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
         
              <TableCell className="tableCell" >{row.id}</TableCell>
              <TableCell className="tableCell" >
                <div className="cellWrapper">
                  <img src={row.img} alt={row.product} className="images"/>
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell" >{row.customer}</TableCell>
              <TableCell className="tableCell" >{row.date}</TableCell>
              <TableCell className="tableCell" >{row.amount}</TableCell>
              <TableCell className="tableCell" >{row.methods}</TableCell>
              <TableCell className="tableCell" >
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;

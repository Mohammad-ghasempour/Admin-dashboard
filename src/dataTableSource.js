
export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'userName',
      headerName: 'User name',
      width: 230,
      renderCell:(param)=>{
        return(
            <div className="cellWrapper">
            <img className="cellWithImg" src={param.row.imgUrl} />
            {param.row.userName}
            </div>
        )
      },
    },
    {field: 'email' , headerName: 'Email' , width:230},
    {field: 'status' , headerName: 'Status' , width:160 , renderCell: (params)=>{
      return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
    }},
];
export const productColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'title',
      headerName: 'Title',
      width: 260,
      renderCell:(param)=>{
        return(
            <div className="cellWrapper">
            <img className="cellWithImg" src={param.row.img} />
            {param.row.title}
            </div>
        )
      },
    },
    { field: 'producer', headerName: 'Producer', width: 180 },    
    {field: 'status' , headerName: 'Status' , width:160 , renderCell: (params)=>{
      return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
    }},
];


//temporary data
export const userRows = [
    {
      id: 1,
      username: "Mohammad",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Jone",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Tørbjorn",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3snow@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Hakoon",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Mina",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5snow@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Fixer",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
  ];

//temporary data
export const productsRows = [
    {
      id: 1,
      title: "Iphone",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539",
      status: "active",
      stock: 25,
      producer: "digikala",
    },
    {
      id: 2,
      title: "laptop",
      img: "https://www.scandinavianphoto.no/globalassets/1054104_proart-studiobook-16-oled-03.jpg?ref=3F326239A4&w=960&h=960&mode=max",
      status: "pending",
      stock: 16,
      producer: "asusProducer",
    }
  ];
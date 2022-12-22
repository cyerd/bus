import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import useSWR from "swr";
import Loading from "./Loading";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { format } from "date-fns";

const columns = [
  { field: "id", headerName: "ID", width: 130 },
  {
    field: "pickDate",
    headerName: "DATE",
    width: 140,
    valueGetter: (params) =>
      format(new Date(params.row.pickDate), "eee d-MMM-y H:mm:ss"),
  },
  { field: "parcelNo", headerName: "PARCEL NO", width: 150 },
  { field: "itemQty", headerName: "QTY", width: 70 },
  { field: "from", headerName: "FROM", width: 70 },
  { field: "pickup", headerName: "PICKUP POINT", width: 130 },
  { field: "destination", headerName: "DESTINATION", width: 130 },
  { field: "drop", headerName: "DROP POINT", width: 70 },
  { field: "sender", headerName: "SENDER", width: 150 },
  { field: "senderMobile", headerName: "SENDER MOBILE", width: 130 },
  { field: "receiver", headerName: "RECEIVER", width: 130 },
  { field: "cost", headerName: "COST", width: 130 },
  { field: "totalAmount", headerName: "TOTAL AMOUNT", width: 130 },
  { field: "receiverMobile", headerName: "RECEIVER MOBILE", width: 130 },
  {
    field: "item",
    headerName: "ITEM TYPE",
    width: 130,
    valueGetter: (params) =>
      `${params.row.itemName || ""} ${params.row.itemType || ""}`,
  },
];

export default function ParcelList() {
  const [query, setQuery] = React.useState("");
  const fetcher = async () => {
    const ParcelList = await fetch(`/api/getparcel?receiver=${query}`);
    const data = await ParcelList.json();
    const parcels = data.parcelList;

    return parcels;
  };

  const {
    data: parcel,
    error,
    mutate,
  } = useSWR(`/api/getparcel?receiver=${query}`, fetcher);

  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({
    id: false,
    from: false,
    destination: false,
    receiverMobile: false,
    drop: false,
    pickup: false,
    senderMobile: false,
    cost: false,
    totalAmount: false,
    itemQty: false,
  });

  return (
    <div>
      <div>
        <div>
          <input
            onChange={(e) => setQuery(e.target.value.toUpperCase())}
            value={query.toUpperCase()}
            type="search"
            placeholder="search"
            className="p-2 border uppercase border-gray-400 bg-purple-100  rounded-lg my-2 ml-5"
          />
        </div>
      </div>
      {parcel ? (
        <Box
          sx={{
            height: 650,
            width: "100%",
            backgroundColor: "gray",
            textAlign: "center",
          }}
        >
          <DataGrid
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) =>
              setColumnVisibilityModel(newModel)
            }
            className="bg-gray-200"
            checkboxSelection
            rows={parcel}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            sx={{
              "& .MuiDataGrid-columnHeader": {
                color: "white",
                backgroundColor: "black",
                borderRadius: "5px",
                marginRight: "2px",
                width: "100%",
              },
              "& .MuiDataGrid-menuIcon": {
                color: "white",
                backgroundColor: "black",
              },

              // ".MuiSvgIcon-root": {
              //   color: "white",
              //   text: "red",
              //   border: "black 1px solid",
              //   outline: "none",
              // },
              ".css-1m9pwf3t": {
                color: "white",
              },
              ".MuiDataGrid-iconSeparator": {
                display: "none",
              },
              ".MuiDataGrid-cell": {
                marginRight: "2px",
                backgroundColor: "#fff",
                borderRadius: "5px",
                textAlign: "center",
                alignItems: "center",
              },
              ".MuiDataGrid-menuIconButton": {
                color: "white",
              },

              ".MuiDataGrid-sortIcon": {
                color: "white",
              },
            }}
          />
        </Box>
      ) : (
        <Loading />
      )}
    </div>
  );
}

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);

function StockTable({ rowData, onRowClick }) {

  
  const columnDefs = [
    { headerName: 'Ticker', field: 'ticker', filter: 'agTextColumnFilter' },
    { headerName: 'Company', field: 'company', filter: 'agTextColumnFilter' },
    { headerName: 'Close Price', field: 'Close', filter: 'agNumberColumnFilter' },
    {
      headerName: 'Ma Signal',
      field: 'Signal',
      filter: 'agTextColumnFilter',
      valueFormatter: (params) => {
        if (params.value === 1) return 'BUY';
        if (params.value === -1) return 'SELL';
        return 'HOLD';
      },
      cellStyle: (params) => {
        if (params.value === 1) return { backgroundColor: 'green', color: 'white' }; 
        if (params.value === -1) return { backgroundColor: 'red', color: 'white' }; 
        return null;  
      },
    },
    {
      headerName: 'Lin Signal',
      field: 'Lin_Signal',
      filter: 'agTextColumnFilter',
      valueFormatter: (params) => {
        if (params.value === 1) return 'BUY';
        if (params.value === -1) return 'SELL';
        return 'HOLD';
      },
      cellStyle: (params) => {
        if (params.value === 1) return { backgroundColor: 'green', color: 'white' };  // Green for BUY
        if (params.value === -1) return { backgroundColor: 'red', color: 'white' };    // Red for SELL
        return null;
      },
    },
    {
      headerName: 'Poly Signal',
      field: 'Poly_Signal',
      filter: 'agTextColumnFilter',
      valueFormatter: (params) => {
        if (params.value === 1) return 'BUY';
        if (params.value === -1) return 'SELL';
        return 'HOLD';
      },
      cellStyle: (params) => {
        if (params.value === 1) return { backgroundColor: 'green', color: 'white' };  
        if (params.value === -1) return { backgroundColor: 'red', color: 'white' };   
        return null; 
      },
    },
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
  };

  return (
    <div className="ag-theme-alpine w-full" style={{ height: 500, width: '80%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={defaultColDef}
        onRowClicked={(row) => onRowClick(row.data.ticker)}
        theme={"legacy"}
      />
    </div>
  );
}

export default StockTable;
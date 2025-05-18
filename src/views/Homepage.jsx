import StockTable from '../components/StockTable';
import Charts from '../components/Charts';
import useHomePage from '../hooks/useApp';


function Homepage() {
  const {
    rowData,
    chartData,
    maData,
    linpolyData,
    selectedTicker,
    handleRowClick,
  } = useHomePage();

  return (
    <div className="bg-slate-800">
      <div className="container mx-auto flex flex-col items-center min-h-screen">
        <h1 className="text-6xl font-bold underline mb-20 mt-20 text-slate-200">DashBoard v1.0</h1>
        <h2 className="text-3xl text-slate-200 mb-20">DashBoard v1.0: A web-based application for your daily trade.</h2>
        <StockTable rowData={rowData} onRowClick={handleRowClick} />
        <Charts chartData={chartData} maData={maData} linpolyData={linpolyData} selectedTicker={selectedTicker}/>
      </div>
    </div>
  );
}

export default Homepage;
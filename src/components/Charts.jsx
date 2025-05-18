import React from 'react';
import CandlestickChart from './CandlestickChart';
import MovingAveragesChart from './MovingAveragesChart';
import LinChart from './LinChart';
import PolyChart from './PolyChart';

function Charts({ chartData, maData, linpolyData, selectedTicker }) {
  return (
    <div className="w-full">
      <div  className="flex-wrap flex md:flex-row flex-col">
        <div className="w-full md:w-1/2">
          {chartData && <CandlestickChart chartData={chartData} selectedTicker={selectedTicker} />}
        </div>
        <div className="w-full md:w-1/2">
          {maData && <MovingAveragesChart maData={maData} selectedTicker={selectedTicker} />} 
        </div>
      </div>
      <div  className="flex-wrap flex md:flex-row flex-col">
      <div className="w-full md:w-1/2">
          {linpolyData && <LinChart linpolyData={linpolyData} selectedTicker={selectedTicker} />}
        </div>
        <div className="w-full md:w-1/2">
          {linpolyData && <PolyChart linpolyData={linpolyData} selectedTicker={selectedTicker} />}
        </div>
      </div>
    </div>
  );
}

export default Charts;
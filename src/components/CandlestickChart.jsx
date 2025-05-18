import Plot from 'react-plotly.js';

function CandlestickChart({ chartData, selectedTicker }) {
  return (
    <div className="mt-10 w-full flex justify-center">
      <Plot
        data={[
          {
            x: chartData.x,
            open: chartData.open,
            high: chartData.high,
            low: chartData.low,
            close: chartData.close,
            type: 'candlestick',
            xaxis: 'x',
            yaxis: 'y',
          },
        ]}
        layout={{
          title: `${selectedTicker} Candlestick Chart`,
          paper_bgcolor: '#1E293B',
          plot_bgcolor: '#1E293B',
          font: { color: '#E2E8F0' },
          showlegend: false,
          margin: {
            l: 50,
            r: 20,
            t: 30,
            b: 30,
          },
        }}
        config={{
          displayModeBar: false, 
        }}
        useResizeHandler={true}
        style={{ width: '100%', height: '500px' }}
      />
    </div>
  );
}

export default CandlestickChart;
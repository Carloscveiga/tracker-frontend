import Plot from 'react-plotly.js';

function LinChart({ linpolyData, selectedTicker }) {
  return (
    <div className="mt-10 w-full flex justify-center">
      <Plot
        data={[
          {
            x: linpolyData.x,
            y: linpolyData.Close_Price,
            type: 'scatter',
            mode: 'lines',
            name: 'Close Price',
          },
          {
            x: linpolyData.x,
            y: linpolyData.Lin_Trendline,
            type: 'scatter',
            mode: 'lines',
            name: 'Trendline',
          },
          {
            x: linpolyData.linbuySignals.map((signal) => signal.x),
            y: linpolyData.linbuySignals.map((signal) => signal.y),
            mode: 'markers',
            name: 'BUY',
            marker: { color: 'green', size: 10, symbol: 'circle' },
          },
          {
            x: linpolyData.linsellSignals.map((signal) => signal.x),
            y: linpolyData.linsellSignals.map((signal) => signal.y),
            mode: 'markers',
            name: 'SELL',
            marker: { color: 'red', size: 10, symbol: 'circle' },
          },
        ]}
        layout={{
          title: `${selectedTicker} Lin with Signals`,
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

export default LinChart;
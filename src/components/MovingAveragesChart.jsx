import Plot from 'react-plotly.js';

function MovingAveragesChart({ maData, selectedTicker }) {
  return (
    <div className="mt-10 w-full flex justify-center">
          <Plot
            data={[
              { x: maData.x, y: maData.ma5, type: 'scatter', mode: 'lines', name: 'MA 5' },
              { x: maData.x, y: maData.ma15, type: 'scatter', mode: 'lines', name: 'MA 15' },
              { x: maData.x, y: maData.ma20, type: 'scatter', mode: 'lines', name: 'MA 20' },
              { x: maData.x, y: maData.ma200, type: 'scatter', mode: 'lines', name: 'MA 200' },
              {
                x: maData.buySignals.map((signal) => signal.x),
                y: maData.buySignals.map((signal) => signal.y),
                mode: 'markers',
                name: 'BUY',
                marker: { color: 'green', size: 10, symbol: 'triangle-up' },
              },
              {
                x: maData.sellSignals.map((signal) => signal.x),
                y: maData.sellSignals.map((signal) => signal.y),
                mode: 'markers',
                name: 'SELL',
                marker: { color: 'red', size: 10, symbol: 'triangle-down' },
              },
            ]}
            layout={{
              title: `${selectedTicker} Moving Averages with Signals`,
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

export default MovingAveragesChart;
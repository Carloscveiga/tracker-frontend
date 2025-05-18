import { useState, useEffect } from 'react';
import axios from 'axios';

function useHomePage() {
  const [rowData, setRowData] = useState([]);
  const [chartData, setChartData] = useState(null);
  const [maData, setMaData] = useState(null);
  const [linpolyData, setlinpolyData] = useState(null);
  const [selectedTicker, setSelectedTicker] = useState(null);


  useEffect(() => {
    axios
      .get('http://localhost:5000/api/stocks')
      .then((response) => {
        setRowData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const fetchChartData = (ticker) => {
    axios
      .get(`http://localhost:5000/api/stock-history/${ticker}`)
      .then((response) => {
        const data = response.data;
        setChartData({
          x: data.map((item) => new Date(item.Date).toISOString().split('T')[0]),
          open: data.map((item) => item.Open),
          high: data.map((item) => item.High),
          low: data.map((item) => item.Low),
          close: data.map((item) => item.Close),
        });
        setSelectedTicker(ticker);
      })
      .catch((error) => {
        console.error('Error fetching chart data:', error);
      });
  };


  const fetchMaData = (ticker) => {
    axios
      .get(`http://localhost:5000/api/moving-averages-with-signals/${ticker}`)
      .then((response) => {
        const data = response.data;

        const formattedData = data.map((item) => ({
          ...item, Date: new Date(item.Date).toISOString().split('T')[0], 
        }));


        const buySignals = formattedData.filter((item) => item.Signal === 1);
        const sellSignals = formattedData.filter((item) => item.Signal === -1);

        setMaData({
          x: formattedData.map((item) => item.Date),
          ma5: data.map((item) => item.SMA_5),
          ma15: data.map((item) => item.SMA_15),
          ma20: data.map((item) => item.SMA_20),
          ma200: data.map((item) => item.SMA_200),
          buySignals: buySignals.map((item) => ({
            x: item.Date,
            y: item.SMA_5,
          })),
          sellSignals: sellSignals.map((item) => ({
            x: item.Date,
            y: item.SMA_5,
          })),
        });
      })
      .catch((error) => {
        console.error('Error fetching moving average data:', error);
      });
  };


  const fetchlinpolyData = (ticker) => {
    axios
      .get(`http://localhost:5000/api/lin-poly-with-signals/${ticker}`)
      .then((response) => {
        const data = response.data;

        const formattedData = {
          x: data.map((item) => new Date(item.Date).toISOString().split('T')[0]), 
          Close_Price: data.map((item) => item.Close_Price),
          Lin_Trendline: data.map((item) => item.Lin_Trendline),
          Poly_Trendline: data.map((item) => item.Poly_Trendline),
        };

        const linbuySignals = data.filter((item) => item.Lin_Signal === 1);
        const linsellSignals = data.filter((item) => item.Lin_Signal === -1);
  
        const polybuySignals = data.filter((item) => item.Poly_Signal === 1);
        const polysellSignals = data.filter((item) => item.Poly_Signal === -1);
  
        formattedData.linbuySignals = linbuySignals.map((item) => ({
          x: item.Date,
          y: item.Close_Price,
        }));
        formattedData.linsellSignals = linsellSignals.map((item) => ({
          x: item.Date,
          y: item.Close_Price,
        }));
        formattedData.polybuySignals = polybuySignals.map((item) => ({
          x: item.Date,
          y: item.Close_Price,
        }));
        formattedData.polysellSignals = polysellSignals.map((item) => ({
          x: item.Date,
          y: item.Close_Price,
        }));

        
        setlinpolyData(formattedData);
        
      })
      .catch((error) => {
        console.error('Error fetching lin poly data:', error);
      });
  };



  const handleRowClick = (ticker) => {
    fetchChartData(ticker);
    fetchMaData(ticker);
    fetchlinpolyData(ticker);
  };

  return {
    rowData,
    chartData,
    maData,
    linpolyData,
    selectedTicker,
    handleRowClick,
  };
}

export default useHomePage;
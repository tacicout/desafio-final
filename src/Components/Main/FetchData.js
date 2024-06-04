// src/components/main/FetchData.js
const fetchData = async () => {
  try {
    console.log('Fetching data from API...');
    const response = await fetch('https://fakestoreapi.com/products');
    console.log('Response status:', response.status);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Data fetched:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;

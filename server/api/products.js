// server/api/products.js

const products = [
    {
      id: 1,
      name: '产品一号',
      details: '这是产品一号的详情。',
      price: '¥2999',
      otherInfo: '其他相关信息。'
    },
    {
      id: 2,
      name: '产品二号',
      details: '这是产品二号的详情。',
      price: '¥3999',
      otherInfo: '其他相关信息。'
    },
    {
        id: 3,
        name: '产品三号',
        details: '这是产品三号的详情。',
        price: '¥4999',
        otherInfo: '其他相关信息。'
    }
    // Add as many products as you need
];

export default defineEventHandler(async (event) => {
  // Simulate fetching data from an asynchronous source like a database
  const data = await fetchProductsFromDatabase();

  return data;
});

async function fetchProductsFromDatabase() {
  // Simulating async operation with a timeout
  await new Promise(resolve => setTimeout(resolve, 0));

  return products;
}

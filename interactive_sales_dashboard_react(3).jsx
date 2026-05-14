export default function SalesDashboard() {
  const kpis = [
    { title: 'Total Revenue', value: '₹965,400' },
    { title: 'Total Profit', value: '₹165,000' },
    { title: 'Profit Margin', value: '17.09%' },
    { title: 'Total Orders', value: '30' },
  ];

  const topProducts = [
    ['Laptop', 120000],
    ['Camera', 90000],
    ['Smartphone', 75000],
    ['Bed', 70000],
    ['Sofa Set', 55000],
  ];

  const regions = [
    ['West', 311500],
    ['North', 279500],
    ['South', 240400],
    ['East', 134000],
  ];

  const categories = [
    ['Electronics', 532000],
    ['Furniture', 248000],
    ['Clothing', 158500],
    ['Grocery', 26900],
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Business Sales Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <h2 className="text-lg font-semibold text-gray-600">
              {kpi.title}
            </h2>
            <p className="text-3xl font-bold mt-2">{kpi.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Top Selling Products</h2>
          {topProducts.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{item[0]}</span>
                <span>₹{item[1].toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${(item[1] / 120000) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Regional Performance</h2>
          {regions.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{item[0]}</span>
                <span>₹{item[1].toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{ width: `${(item[1] / 311500) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Category Performance</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Sales</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{item[0]}</td>
                <td className="p-3">₹{item[1].toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Business Insights</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Electronics category generated the highest revenue.</li>
          <li>West region showed the strongest performance.</li>
          <li>February had the highest monthly sales.</li>
          <li>Premium products generated maximum profits.</li>
          <li>East region needs sales improvement strategies.</li>
        </ul>
      </div>
    </div>
  );
}

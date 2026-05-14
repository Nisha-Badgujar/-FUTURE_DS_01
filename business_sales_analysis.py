import pandas as pd
import matplotlib.pyplot as plt

# Load dataset
df = pd.read_csv("sales_data.csv")

# Convert date column
df['Order_Date'] = pd.to_datetime(df['Order_Date'])

# Monthly Revenue
monthly_sales = df.groupby(df['Order_Date'].dt.to_period('M'))['Sales'].sum()

# Top Products
top_products = df.groupby('Product_Name')['Sales'].sum().sort_values(ascending=False).head(10)

# Regional Sales
regional_sales = df.groupby('Region')['Sales'].sum()

# Print Results
print("Monthly Sales:")
print(monthly_sales)

print("\nTop Products:")
print(top_products)

print("\nRegional Sales:")
print(regional_sales)

# Plot Monthly Revenue
monthly_sales.plot(
    kind='line',
    figsize=(10,5),
    title='Monthly Revenue Trend',
    marker='o'
)

plt.ylabel("Revenue")
plt.grid(True)
plt.show()

# Plot Top Products
top_products.plot(
    kind='bar',
    figsize=(10,5),
    title='Top Selling Products'
)

plt.ylabel("Sales")
plt.xticks(rotation=45)
plt.show()

# Plot Regional Sales
regional_sales.plot(
    kind='pie',
    autopct='%1.1f%%',
    figsize=(7,7),
    title='Regional Sales Distribution'
)

plt.ylabel("")
plt.show()

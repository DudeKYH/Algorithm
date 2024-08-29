SELECT date_format(sales_date, '%Y-%m-%d') sales_date, product_id, user_id, sales_amount FROM online_sale WHERE month(sales_date) = 3
UNION ALL
SELECT date_format(sales_date, '%Y-%m-%d') sales_date, product_id, NULL user_id, sales_amount FROM offline_sale WHERE month(sales_date) = 3
ORDER BY sales_date, product_id, user_id
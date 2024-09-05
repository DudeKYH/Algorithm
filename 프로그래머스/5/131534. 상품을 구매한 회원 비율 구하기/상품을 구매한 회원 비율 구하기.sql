SELECT year(o.sales_date) YEAR, month(o.sales_date)MONTH, count(distinct u.user_id) PURCHASED_USERS,
round((count(distinct u.user_id) / total), 1) PUCHASED_RATIO FROM user_info u
LEFT JOIN online_sale o ON o.user_id=u.user_id AND
year(u.joined)="2021"
CROSS JOIN (SELECT count(*) total FROM user_info WHERE year(joined)="2021") su 
WHERE year(u.joined)="2021" AND o.user_id IS NOT NULL
GROUP BY year(o.sales_date), month(o.sales_date)
ORDER BY year(o.sales_date), month(o.sales_date)
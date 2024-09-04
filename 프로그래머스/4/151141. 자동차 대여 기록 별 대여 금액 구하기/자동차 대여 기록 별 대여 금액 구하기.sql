SELECT 
    srh.history_id,
    FLOOR(c.daily_fee * srh.duration * (1 - (if(dp.discount_rate IS NULL, 0, dp.discount_rate) / 100))) fee
FROM car_rental_company_car c
LEFT JOIN (SELECT *, datediff(rh.end_date, rh.start_date) + 1 duration FROM car_rental_company_rental_history rh) srh ON c.car_id=srh.car_id
LEFT JOIN car_rental_company_discount_plan dp ON c.car_type=dp.car_type AND
    dp.duration_type = CASE WHEN srh.duration >= 7 AND srh.duration < 30 THEN "7일 이상"
    WHEN srh.duration >= 30 AND srh.duration < 90 THEN "30일 이상"
    WHEN srh.duration >= 90 THEN "90일 이상"
    ELSE ''
    END
WHERE c.car_type="트럭"
ORDER BY fee desc, srh.history_id desc
#select rh.car_id, cc.car_type, ROUND((cc.daily_fee * (1 - (dp.discount_rate / 100))) * 30) fee
#from car_rental_company_rental_history rh
#LEFT JOIN car_rental_company_car cc ON cc.car_id=rh.car_id AND cc.car_type IN ("세단", "SUV") 
#LEFT JOIN car_rental_company_discount_plan dp ON cc.car_type=dp.car_type AND dp.duration_type="30일 이상"
#WHERE rh.car_id NOT IN (SELECT rh.car_id FROM car_rental_company_rental_history WHERE rh.end_date >= "2022-11-01" AND rh.start_date <= "2022-11-30")
#GROUP BY cc.car_id HAVING fee BETWEEN 500000 AND 2000000
#ORDER BY fee desc, cc.car_type asc, cc.car_id desc

SELECT 
    C.CAR_ID, 
    C.CAR_TYPE, 
    FLOOR(C.DAILY_FEE * 30 * (1 - DP.DISCOUNT_RATE / 100)) AS FEE
FROM 
    CAR_RENTAL_COMPANY_CAR C
LEFT JOIN 
    CAR_RENTAL_COMPANY_RENTAL_HISTORY RH 
    ON C.CAR_ID = RH.CAR_ID 
    AND RH.START_DATE <= '2022-11-30' 
    AND RH.END_DATE >= '2022-11-01'
JOIN 
    CAR_RENTAL_COMPANY_DISCOUNT_PLAN DP 
    ON C.CAR_TYPE = DP.CAR_TYPE 
    AND DP.DURATION_TYPE = '30일 이상'
WHERE 
    C.CAR_TYPE IN ('세단', 'SUV')
    AND RH.HISTORY_ID IS NULL  -- 2022년 11월 1일~30일 사이에 대여 이력이 없는 자동차만 선택
HAVING 
    FEE >= 500000 AND FEE < 2000000
ORDER BY 
    FEE DESC, 
    C.CAR_TYPE ASC, 
    C.CAR_ID DESC;
SELECT MAX(`SALARY`) FROM hr.employees;

SELECT MAX(`SALARY`) - MIN(`SALARY`) FROM hr.employees;

SELECT `JOB_ID`, AVG(`SALARY`) FROM hr.employees
GROUP BY `JOB_ID`
ORDER BY AVG(`SALARY`) DESC;

SELECT SUM(`SALARY`) FROM hr.employees;

SELECT SUM(`SALARY` * `COMMISSION_PCT`) FROM hr.employees;

SELECT SUM(`SALARY`) + SUM(`SALARY` * `COMMISSION_PCT`) FROM hr.employees;

SELECT ROUND(MAX(`SALARY`), 2), ROUND(MIN(`SALARY`), 2), ROUND(SUM(`SALARY`), 2), ROUND(AVG(`SALARY`), 2) FROM hr.employees;

SELECT `JOB_ID`, COUNT(*) FROM hr.employees
GROUP BY `JOB_ID`
HAVING `JOB_ID` = 'IT_PROG';

SELECT `JOB_ID`, SUM(`SALARY`) FROM hr.employees
GROUP BY `JOB_ID`;

SELECT `JOB_ID`, SUM(`SALARY`) + SUM(`SALARY` * `COMMISSION_PCT`) FROM hr.employees
GROUP BY `JOB_ID`;

SELECT `JOB_ID`, SUM(`SALARY`) FROM hr.employees
GROUP BY `JOB_ID`
HAVING `JOB_ID` = 'IT_PROG';

SELECT `JOB_ID`, AVG(`SALARY`) FROM hr.employees
GROUP BY `JOB_ID`
HAVING `JOB_ID` <> 'IT_PROG'
ORDER BY AVG(`SALARY`) DESC;

SELECT `DEPARTMENT_ID`, COUNT(`DEPARTMENT_ID`), AVG(`SALARY`) FROM hr.employees
GROUP BY `DEPARTMENT_ID`
HAVING COUNT(`DEPARTMENT_ID`) > 10;

SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees
SET `PHONE_NUMBER` = REPLACE(`PHONE_NUMBER`, '515', '777')
WHERE `PHONE_NUMBER` LIKE '515%';

SET SQL_SAFE_UPDATES = 1;

SELECT * FROM hr.employees
WHERE CHAR_LENGTH(`FIRST_NAME`) >= 8;

SELECT `EMPLOYEE_ID`, `FIRST_NAME`, YEAR(`HIRE_DATE`) FROM hr.employees;

SELECT `EMPLOYEE_ID`, `FIRST_NAME`, DAY(`HIRE_DATE`) FROM hr.employees;

SELECT `EMPLOYEE_ID`, `FIRST_NAME`, MONTH(`HIRE_DATE`) FROM hr.employees;

SELECT UCASE(`FIRST_NAME`) FROM hr.employees;

SELECT `LAST_NAME`, `HIRE_DATE` FROM hr.employees
WHERE `HIRE_DATE` BETWEEN '1987-07-01' AND '1987-07-31';
SELECT LAST_NAME, HIRE_DATE
FROM hr.employees
WHERE MONTH(HIRE_DATE)=7 and YEAR(HIRE_DATE)=1987;

SELECT `FIRST_NAME`, `LAST_NAME`, ABS(DATEDIFF(`HIRE_DATE`, NOW())) FROM hr.employees;
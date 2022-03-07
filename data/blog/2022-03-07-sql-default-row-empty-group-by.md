TIL to watch out for cases when I

* group by
* want the sum to be 0 even if there are no rows to sum

I moved the existing query to a view

```sql
WITH actual_sum AS (
  SELECT
    payee_id
    SUM(amount) AS total,
  FROM table
  WHERE ...
  GROUP BY payee_id
)
```

I added a new view with one row

```sql
, zero_row AS (
  SELECT
    :payee_id::INTEGER AS payee_id
    0 AS total
)
SELECT total_ytd_payments
FROM
  (SELECT * FROM actual_sum
  UNION ALL
  SELECT * FROM zero_row) combined
-- ensure that the non zero row is always first
ORDER BY ABS(total) DESC
LIMIT 1
```


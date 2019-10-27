---
templateKey: blog-post
title: How to create a MySql Stored Procedure
date: 2019-09-10T16:33:18.298Z
featuredpost: true
tags:
  - mysql
---
Example #1:

Table: `inventory`
```
part_id	part_name	stock	reorder_level	reorder_qty
```

A simple procdure to call and run a select query:
```sql
DELIMITER ;;
CREATE PROCEDURE selectStock()
select * from inventory; ;;
DELIMITER ;
```

How to use it:
```sql
call selectStock()
```

### More procedures
* **get inventory which needs to be ordered.**

  ```sql
  DROP PROCEDURE IF EXISTS  stockToOrder ;

  DELIMITER ;;
  CREATE PROCEDURE stockToOrder()
  select * from inventory
  where stock <= reorder_level; ;;
  DELIMITER ;
  ```

* **get Inventory where stock is more than a given value**

  ```sql
  DROP PROCEDURE IF EXISTS hasMoreThan;

  DELIMITER ;;
  CREATE PROCEDURE hasMoreThan(qty INT)
  SELECT * FROM inventory
  WHERE stock > qty; ;;
  DELIMITER ;
  ```

  sample call
  ```sql
  hasMoreThan(30)
  ```

* **check if a stock record exists by the given name**

  ```sql
  DROP PROCEDURE IF EXISTS hasStockType;

  DELIMITER ;;
  CREATE PROCEDURE hasStockType(name varchar(255))
  BEGIN
    IF EXISTS (SELECT * FROM inventory
      WHERE part_name = name) THEN
        SELECT 'HAS STOCK' AS '';
      ELSE
        SELECT 'DOES NOT HAVE STOCK' AS '';
    END IF;
  END; ;;
  DELIMITER ;
  ```

Example #2

Table: `inventory`
```
id	name	email
```

* **Procedure to set user name**

```sql
 DELIMITER ;;

DROP PROCEDURE IF EXISTS set_name;
CREATE PROCEDURE set_name(uid INTEGER, name TEXT)
BEGIN
  UPDATE users
  SET name = name
  WHERE id = uid;
END;

DELIMITER ;
  ```

---
templateKey: blog-post
title: How to create a MySql Stored Procedure
date: 2019-09-10T16:33:18.298Z
featuredpost: true
tags:
  - mysql
---
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

get inventory which needs to be ordered.

```sql
DROP PROCEDURE IF EXISTS  stockToOrder ;
DELIMITER ;;
CREATE PROCEDURE stockToOrder()
select * from inventory
where stock <= reorder_level; ;;
DELIMITER ;
```

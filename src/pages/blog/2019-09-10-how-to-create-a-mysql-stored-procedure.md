---
templateKey: blog-post
title: How to create a MySql Stored Procedure
date: 2019-09-10T16:33:18.298Z
featuredpost: true
tags:
  - mysql
---
A simple procdure to call and run a select query:
```mysql
DELIMITER ;;
CREATE PROCEDURE selectStock()
select * from inventory; ;;
DELIMITER ;
```

How to use it:
```mysql
call selectStock()
```


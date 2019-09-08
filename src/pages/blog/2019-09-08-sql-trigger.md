---
templateKey: blog-post
title: SQL Trigger
date: 2019-09-08T06:39:45.827Z
description: How to setup MySql triggers from scratch
featuredpost: false
featuredimage: /img/trigger.jpg
tags:
  - mysql
---
My SQL is a relational database which makes it easier to model business requirements such as accounting, inventory management, etc.

Triggers are a feature of `sql` which enables users to run various operations on the database automatically, based on events.

Let's look at how to setup one by scratch.

So test `triggers` out, we will create two tables called `inventory` and `reorder`. Then we'll setup a trigger to create a new entry on the `reorder` table everytime the `inventry` level goes below the `reorder_level`.

**First things first, let's create the two tables**

Inventroy table

```sql
CREATE TABLE `inventory`(
  part_id INT  NOT NULL AUTO_INCREMENT,
  part_name VARCHAR(225) NOT NULL,
  stock INT,
  reorder_level INT,
  reorder_qty INT,
  PRIMARY KEY (part_id)
);
```

Reorder table

```sql
CREATE TABLE `reorder`(
  id INT NOT NULL AUTO_INCREMENT,
  part_id INT  NOT NULL,
  reorder_qty INT,
  date timestamp,
  PRIMARY KEY (id)
);
```

Next let's create a

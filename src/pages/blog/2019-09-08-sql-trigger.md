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

First things first, you need to have a table on which to set the trigger. In this example I'm going to create an `inventory` table for that.



```
CREATE TABLE `inventory`(  
  part_id int auto_increment NOT NULL,
  part_name varchar(225) NOT NULL,
  stock int,  reorder_level int,
  reorder_qty int,
  primary key (part_id)); 
```

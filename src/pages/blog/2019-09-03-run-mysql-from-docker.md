---
templateKey: blog-post
title: Complete guide to run Mysql from docker
date: 2019-09-03T17:17:49.403Z
description: Step by step guide on how to run mysql from docker
featuredpost: false
featuredimage: /img/caspar-camille-rubin-fpkvu7rdmco-unsplash.jpg
tags:
  - docker
  - mysql
---

As a prerequisite you need to have docker `community edition` and `docker compose` [installed](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04) in your machine.

- Step one
  pull docker image for [mysql](https://hub.docker.com/_/mysql) from [docker hub](https://hub.docker.com/)

```bash
docker pull mysql
```

- Run mysql container

```bash
docker run --name myMysqlContainer -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7
```

`myMysqlContainer` can be any name for the container.

`5.7` is the version of mysql for the container

## Connect to mysql shell of the running docker container

```bash
docker exec -it myMysqlContainer mysql -uroot -p
```

Type `root` and enter when you are prompted to enter the password.

This will connect you to the mysql shell from where you can execute any mysql command.


## Connect using a client

To connect using a mysql client like `MySQL Work bench` you need to get the `ip` of this running instance.
To get the instance `ip` run following on the terminal.

```bash
docker inspect myMysqlContainer | grep "\"IPAddress\""

```



## Connect using PhpMyAdmin


```bash
docker run --name myadmin -d --link myMysqlContainer:db -p 8080:80 phpmyadmin/phpmyadmin
```

Then to get the `ip` address of the running phpmyadmin instance run following

```bash
docker inspect myadmin | grep "\"IPAddress\""
```

Type the `ip` address you get in your browser address bar, then you should be able to login using `root` as user name and password.
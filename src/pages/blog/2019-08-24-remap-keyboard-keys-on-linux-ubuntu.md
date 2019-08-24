---
templateKey: blog-post
title: Remap keyboard keys on Linux (Ubuntu)
date: 2019-08-24T06:25:14.749Z
description: How to remap keys on ubuntu
featuredpost: true
featuredimage: /img/keys.jpg
tags:
  - linux
  - ubuntu
---

**Get Key Info**
Type `xev` on a terminal. This will open a small window on which will log to terminal information on the input events.


**Key: Right Click**
- Info
```
KeyRelease event, serial 43, synthetic NO, window 0x5800001,
    root 0x23f, subw 0x0, time 4662954, (36,-6), root:(1566,725),
    state 0x10, keycode 135 (keysym 0xff67, Menu), same_screen YES,
    XLookupString gives 0 bytes: 
    XFilterEvent returns: False
```

**Key: Print Screen**
- Info

```
KeyRelease event, serial 43, synthetic NO, window 0x5800001,
    root 0x23f, subw 0x0, time 4763251, (59,-6), root:(1589,725),
    state 0x10, keycode 107 (keysym 0xff61, Print), same_screen YES,
    XLookupString gives 0 bytes: 
    XFilterEvent returns: False
```

**Key: Home**

- Info
```
KeyRelease event, serial 44, synthetic NO, window 0x5800001,
    root 0x23f, subw 0x0, time 4811187, (-437,-143), root:(1093,588),
    state 0x10, keycode 110 (keysym 0xff50, Home), same_screen YES,
    XLookupString gives 0 bytes: 
    XFilterEvent returns: False
```
** Key: End **
- Info


```
KeyRelease event, serial 46, synthetic NO, window 0x5800001,
    root 0x23f, subw 0x0, time 4837411, (-67,-4), root:(1463,727),
    state 0x10, keycode 115 (keysym 0xff57, End), same_screen YES,
    XLookupString gives 0 bytes: 
    XFilterEvent returns: False
```

Run following to map print screen to work as home
```
# Map Print screen to act as End
xmodmap -e "keycode 107 = End"
# Map right click to act as Home
xmodmap -e "keycode 135 = Home"
```


Create a file called `.Xmodmap` in the home directory and add following to get these working the next loggin
```
keycode 107 = End
keycode 135 = Home
```

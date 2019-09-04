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

## Get Key Info

Type `xev` on a terminal. This will open a small window on which will log to terminal information on the input events.

So following are some of the key info that I've copied to remap.

- **Key: Right Click**
- Info

```
KeyRelease event, serial 43, synthetic NO, window 0x5800001,
    root 0x23f, subw 0x0, time 4662954, (36,-6), root:(1566,725),
    state 0x10, keycode 135 (keysym 0xff67, Menu), same_screen YES,
    XLookupString gives 0 bytes:
    XFilterEvent returns: False
```

- **Key: Print Screen**
- Info

```
KeyRelease event, serial 43, synthetic NO, window 0x5800001,
    root 0x23f, subw 0x0, time 4763251, (59,-6), root:(1589,725),
    state 0x10, keycode 107 (keysym 0xff61, Print), same_screen YES,
    XLookupString gives 0 bytes:
    XFilterEvent returns: False
```

- **Key: Home**
- Info

```
KeyRelease event, serial 44, synthetic NO, window 0x5800001,
    root 0x23f, subw 0x0, time 4811187, (-437,-143), root:(1093,588),
    state 0x10, keycode 110 (keysym 0xff50, Home), same_screen YES,
    XLookupString gives 0 bytes:
    XFilterEvent returns: False
```

- **Key: End**
- Info

```
KeyRelease event, serial 46, synthetic NO, window 0x5800001,
    root 0x23f, subw 0x0, time 4837411, (-67,-4), root:(1463,727),
    state 0x10, keycode 115 (keysym 0xff57, End), same_screen YES,
    XLookupString gives 0 bytes:
    XFilterEvent returns: False
```

## Re map the Keys

Let's say you want to re-map the `Print Screen` key to work as the `End` key and the `Right Click` action key to work as the `Home` key.

So to achieve this, you can run following commands in the terminal.

```bash
# Map Print screen to act as End
xmodmap -e "keycode 107 = End"
# Map right click to act as Home
xmodmap -e "keycode 135 = Home"
```

If you did everything right, you should be able to use `Right click` and `Print screen` keys to work as `Home` and `End` keys.

That's all good but if you have to run these commands each time you login and out or restart your machine. Let's see how to save these settings to persist next.

## Save re-map key settings

Create a file called `.Xmodmap` in the home directory and add following to get these settings to be automatically working the next time you log in.

```
 keycode 107 = End
 keycode 135 = Home
```

Above setting may not work in some systems. In that case you can put the code you ran to remap at the end of your `.profile` file.

Open `~/.profile` file from any text editor

```
gedit ~/.profile
```

Then add following at the end of the file:

```bash
# Map Print screen to act as End
xmodmap -e "keycode 107 = End"
# Map right click to act as Home
xmodmap -e "keycode 135 = Home"
```

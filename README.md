# ArylicJS

A basic helper script for interfacing with Arylic devices.

Include the script in the `<head>` section.

```
<script src="arylic.js" /></script>
```

## Groups

```
// initialize new group with slaves
a_grp_init("192.168.10.100", ["192.168.10.101", "192.168.10.102"]);

// join additional slaves to a group
a_grp_join("192.168.10.100", ["192.168.10.103", "192.168.10.104"]);

// leave a group
a_grp_leave("192.168.10.101");
```

## Volume

```
// Change device volume level (0->100)
a_vol(device, volume);

// Enable or disable mute (0->1)
a_mute(device, mute);
```

## Playback

```
// Playback Control
a_pause(device);
a_play(device);

// Track Control
a_next(device);
a_prev(device);

// Jump to given preset (1->6)
a_preset(device, preset);
```

## Mode Select

```
// Change the device input
a_input(device, input);

// Stream a given URL
a_stream(device, url);
```

## Misc

```
// Power off the device
a_poweroff(seconds);
```


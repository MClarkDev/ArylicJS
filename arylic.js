//
// arylic.js
//

// Helper Delay Method
const sleep = (ms) => {
	return new Promise((resolve, reject) => setTimeout(resolve, ms));
};

// Helper API Request Method
function call(host, cmd, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onload = function(data) { console.log(data); };
	xhr.open("GET", "http://" + host + "/httpapi.asp?command=" + cmd);
	xhr.send();
}

// Leave a group
function a_grp_leave(master) {
	call(master, "multiroom:Ungroup");
}

// Initialize a group with a list of slaves
function a_grp_init(master, slaves) {
	sleep(0)
		.then(() => a_grp_leave(master))
		.then(() => sleep(250))
		.then(() => a_grp_join(master, slaves));
}

// Ungroup then join a Master
function a_grp_join(master, slaves) {
	for(x in slaves) {
		sleep(0)
			.then(() => a_grp_leave(slave))
			.then(() => sleep(100))
			.then(() => call(slaves[x], "ConnectMasterAp:JoinGroupMaster:eth" + master + ":wifi0.0.0.0"));
	}
}

// Set device input
function a_input(master, input) {
	call(master, "setPlayerCmd:switchmode:" + input);
}

// Play a URL stream
function a_stream(master, url) {
	call(master, "setPlayerCmd:play:" + url);
}

// Pause playback
function a_pause(master) {
	call(master, "setPlayerCmd:pause");
}

// Resume playback
function a_play(master) {
	call(master, "setPlayerCmd:resume");
}

// Next playback track
function a_next(master) {
	call(master, "setPlayerCmd:next");
}

// Previous playback track
function a_prev(master) {
	call(master, "setPlayerCmd:prev");
}

// Enable or disable mute (0||1)
function a_mute(master, mute) {
	call(master, "setPlayerCmd:mute:" + mute);
}

// Set output volume level (0->100)
function a_vol(master, vol) {
	call(master, "setPlayerCmd:vol:" + vol);
}

// Set playback to preset (0->6)
function a_preset(master, preset) {
	call(master, "MCUKeyShortClick:" + preset);
}

// Power off the device
function a_poweroff(master, time=0) {
	call(master, "setShutdown:" + time);
}


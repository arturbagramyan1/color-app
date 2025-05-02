// replace your fetch-based api.js with JSONP helpers

const SCRIPT_URL =
	"https://script.google.com/macros/s/AKfycbxYomWCmWI1D317KCYamxl2AzOILXWslLA1G_BL7jo-forKtWE3bL1CZl_c5RDojhPI/exec";
export function fetchAvailableJSONP() {
	return new Promise((resolve, reject) => {
		const cb = `cbAvail_${Date.now()}`;
		window[cb] = (data) => {
			resolve(data);
			delete window[cb];
			tag.remove();
		};
		const tag = document.createElement("script");
		tag.src = `${SCRIPT_URL}?callback=${cb}`;
		tag.onerror = () => {
			reject(new Error("JSONP load failed"));
			delete window[cb];
			tag.remove();
		};
		document.body.appendChild(tag);
	});
}

export function assignColorJSONP(name) {
	return new Promise((resolve, reject) => {
		const cb = `cbAssign_${Date.now()}`;
		window[cb] = (data) => {
			resolve(data);
			delete window[cb];
			tag.remove();
		};
		const tag = document.createElement("script");
		tag.src = `${SCRIPT_URL}?name=${encodeURIComponent(name)}&callback=${cb}`;
		tag.onerror = () => {
			reject(new Error("JSONP load failed"));
			delete window[cb];
			tag.remove();
		};
		document.body.appendChild(tag);
	});
}

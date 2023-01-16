// test version - paloma

const EVENT_DATA_SOURCE = "paloma-nest-gateway";

const Messages = {
	EXTERNAL_CONNECT_WALLET: "EXTERNAL_CONNECT_WALLET",
	EXTERNAL_CONNECT_WALLET_RESPONSE: "EXTERNAL_CONNECT_WALLET_RESPONSE",
}

function connect(onMessageReceived) {
	if (typeof window !== "undefined") {
		if (typeof onMessageReceived !== "function") {
			return {
				status: false,
				message: "`onMessageReceived` parameter should be a callback function"
			}
		}

		console.log('sending message');
		// browser mode
		window.postMessage({ source: EVENT_DATA_SOURCE, message: Messages.EXTERNAL_CONNECT_WALLET, payload: "" }, "*");

		// window.addEventListener("message", (event) => {
		window.onmessage = (event) => {
			// console.log("event listener for EXTERNAL_CONNECT_WALLET", event);
			if (event["data"]["message"] === Messages.EXTERNAL_CONNECT_WALLET_RESPONSE && event["data"]["source"] === EVENT_DATA_SOURCE) {
				onMessageReceived(event["data"]["response"]);
			}
		};

		return {
			status: true,
			message: "sent request, please receive the informations from callback function"
		}
	} else {
		// send request in modejs
		return {
			status: false,
			message: "it doesn't work in backend mode yet"
		}
	}
}

const PalomaWalletConnectLibrary = {
	connect: connect,
}

export default PalomaWalletConnectLibrary;

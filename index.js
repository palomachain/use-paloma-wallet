// test version - paloma

function connect(onMessageReceived) {
    if (typeof window !== "undefined") {
        if (typeof onMessageReceived !== "function") {
            return {
                status: false,
                message: "`onMessageReceived` parameter should be a callback function"
            }
        }

        // browser mode
        window.postMessage({source: "paloma-nest-gateway", message: "EXTERNAL_CONNECT_WALLET", payload: ""}, "*");

        // window.addEventListener("message", (event) => {
        window.onmessage = (event) => {
            // console.log("event listener for EXTERNAL_CONNECT_WALLET", event);
            if (event["data"]["message"] === "EXTERNAL_CONNECT_WALLET_RESPONSE" && event["data"]["source"] === "paloma-nest-gateway") {
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

function disconnect(onMessageReceived) {
    if (typeof window !== "undefined") {
        if (typeof onMessageReceived !== "function") {
            return {
                status: false,
                message: "`onMessageReceived` parameter should be a callback function"
            }
        }

        // browser mode
        window.postMessage({source: "paloma-nest-gateway", message: "EXTERNAL_DISCONNECT_WALLET", payload: ""}, "*");

        // window.addEventListener("message", (event) => {
        window.onmessage = (event) => {
            // console.log("event listener for EXTERNAL_DISCONNECT_WALLET", event);
            if (event["data"]["message"] === "EXTERNAL_DISCONNECT_WALLET_RESPONSE" && event["data"]["source"] === "paloma-nest-gateway") {
                onMessageReceived(event["data"]["response"]);
            }
        };

        return {
            status: true,
            message: "sent request, please receive the informations from callback function"
        }
    } else {
        // send request in nodejs
        return {
            status: false,
            message: "it doesn't work in backend mode yet"
        }
    }
}

function getBalance(tokenUid, onMessageReceived) {
    if (typeof window !== "undefined") {
        if (typeof onMessageReceived !== "function") {
            return {
                status: false,
                message: "`onMessageReceived` parameter should be a callback function"
            }
        }

        if (tokenUid === "" || tokenUid === "0")
            tokenUid = "00";

        // browser mode
        window.postMessage({source: "paloma-nest-gateway", message: "EXTERNAL_GET_BALANCE", tokenUid: tokenUid, payload: ""}, "*");

        // window.addEventListener("message", (event) => {
        window.onmessage = (event) => {
            // console.log("event listener for external_get_balance", event);
            if (event["data"]["message"] === "EXTERNAL_GET_BALANCE_RESPONSE" && event["data"]["source"] === "paloma-nest-gateway") {
                onMessageReceived(event["data"]["response"]);
            }
        };

        return {
            status: true,
            message: "sent request, please receive the informations from callback function"
        }
    } else {
        // send request in nodejs
        return {
            status: false,
            message: "it doesn't work in backend mode yet"
        }
    }
}

function getConnectionStatus(onMessageReceived) {
    if (typeof window !== "undefined") {
        if (typeof onMessageReceived !== "function") {
            return {
                status: false,
                message: "`onMessageReceived` parameter should be a callback function"
            }
        }

        // browser mode
        window.postMessage({source: "paloma-nest-gateway", message: "EXTERNAL_GET_CONNECTION_STATUS", payload: ""}, "*");

        window.onmessage = (event) => {
            if (event["data"]["message"] === "EXTERNAL_GET_CONNECTION_STATUS_RESPONSE" && event["data"]["source"] === "paloma-nest-gateway") {
                onMessageReceived(event["data"]["response"]);
            }
        };

        return {
            status: true,
            message: "sent request, please receive the informations from callback function"
        }
    } else {
        return {
            status: false,
            message: "it doesn't work in backend mode yet"
        }
    }
}

function getSignature(text, onMessageReceived) {
    if (typeof window !== "undefined") {
        if (typeof onMessageReceived !== "function") {
            return {
                status: false,
                message: "`onMessageReceived` parameter should be a callback function"
            }
        }
        // browser mode
        window.postMessage({source: "paloma-nest-gateway", message: "EXTERNAL_GET_SIGNATURE", text: text, payload: ""}, "*");

        // window.addEventListener("message", (event) => {
        window.onmessage = (event) => {
            // console.log("event listener for EXTERNAL_GET_SIGNATURE", event);
            if (event["data"]["message"] === "EXTERNAL_GET_SIGNATURE_RESPONSE" && event["data"]["source"] === "paloma-nest-gateway") {
                onMessageReceived(event["data"]["response"]);
            }
        };

        return {
            status: true,
            message: "sent request, please receive the informations from callback function"
        }
    } else {
        // send request in nodejs
        return {
            status: false,
            message: "it doesn't work in backend mode yet"
        }
    }
}

function getTokenOwnerStatus(tokenUid, onMessageReceived) {
    if (typeof window !== "undefined") {
        if (typeof onMessageReceived !== "function") {
            return {
                status: false,
                message: "`onMessageReceived` parameter should be a callback function"
            }
        }

        // browser mode
        window.postMessage({source: "paloma-nest-gateway", message: "EXTERNAL_GET_TOKEN_OWNER_STATUS", tokenUid: tokenUid, payload: ""}, "*");

        // window.addEventListener("message", (event) => {
        window.onmessage = (event) => {
            // console.log("event listener for EXTERNAL_GET_TOKEN_OWNER_STATUS", event);
            if (event["data"]["message"] === "EXTERNAL_GET_TOKEN_OWNER_STATUS_RESPONSE" && event["data"]["source"] === "paloma-nest-gateway") {
                onMessageReceived(event["data"]["response"]);
            }
        };

        return {
            status: true,
            message: "sent getbalance request, please receive the informations from callback function"
        }
    } else {
        // send request in nodejs
        return {
            status: false,
            message: "it doesn't work in backend mode yet"
        }
    }
}

function getUtxos(tokenUid, onMessageReceived) {
    if (typeof window !== "undefined") {
        if (typeof onMessageReceived !== "function") {
            return {
                status: false,
                message: "`onMessageReceived` parameter should be a callback function"
            }
        }

        if (tokenUid === "" || tokenUid === "0")
            tokenUid = "00";

        // browser mode
        window.postMessage({source: "paloma-nest-gateway", message: "EXTERNAL_GET_UTXOS", tokenUid: tokenUid, payload: ""}, "*");

        window.onmessage = (event) => {
            if (event["data"]["message"] === "EXTERNAL_GET_UTXOS_RESPONSE" && event["data"]["source"] === "paloma-nest-gateway") {
                onMessageReceived(event["data"]["response"]);
            }
        };

        return {
            status: true,
            mesage: "sent getutxos request, please receive the informations from callback function"
        }
    } else {
        return {
            status: false,
            message: "it doesn't work in backend mode yet"
        }
    }
}

function getWalletVersion(onMessageReceived) {
    if (typeof window !== "undefined") {
        if (typeof onMessageReceived !== "function") {
            return {
                status: false,
                message: "`onMessageReceived` parameter should be a callback function"
            }
        }
        // browser mode
        window.postMessage({source: "paloma-nest-gateway", message: "EXTERNAL_GET_WALLET_VERSION", payload: ""}, "*");

        // window.addEventListener("message", (event) => {
        window.onmessage = (event) => {
            // console.log("event listener for EXTERNAL_GET_WALLET_VERSION", event);
            if (event["data"]["message"] === "EXTERNAL_GET_WALLET_VERSION_RESPONSE" && event["data"]["source"] === "paloma-nest-gateway") {
                onMessageReceived(event["data"]["response"]);
            }
        };

        return {
            status: true,
            message: "sent request, please receive the informations from callback function"
        }
    } else {
        // send request in nodejs
        return {
            status: false,
            message: "it doesn't work in backend mode yet"
        }
    }
}

async function isPalomaNestInstalled() {
    try {
        await fetch("chrome-extension://cgpnkmnikfkkiilkimhlphjcodhmbglc/popup.html");  // extension link

        return {
            status: true
        }
    } catch {
        return {
            status: false
        }
    }
}

function sendToken(address, tokenUid, amount, onMessageReceived) {
    if (typeof window !== "undefined") {
        if (typeof onMessageReceived !== "function") {
            return {
                status: false,
                message: "`onMessageReceived` parameter should be a callback function"
            }
        }

        if (tokenUid === "" || tokenUid === "0")
            tokenUid = "00";

        if (amount === "")
            amount = 1;
        
        // browser mode
        window.postMessage({source: "paloma-nest-gateway", message: "EXTERNAL_SEND_TOKEN", address: address, tokenUid: tokenUid, amount: amount, payload: ""}, "*");

        window.onmessage = (event) => {
            if (event["data"]["message"] === "EXTERNAL_SEND_TOKEN_RESPONSE" && event["data"]["source"] === "paloma-nest-gateway") {
                onMessageReceived(event["data"]["response"]);
            }

            if (event["data"]["message"] === "EXTERNAL_UPDATED_ESTIMATION_RESPONSE" && event["data"]["source"] === "paloma-nest-gateway") {
                onMessageReceived(event["data"]["response"]);
            }

            if (event["data"]["message"] === "EXTERNAL_JOB_DONE" && event["data"]["source"] === "paloma-nest-gateway") {
                onMessageReceived(event["data"]["response"]);
            }
        };

        return {
            status: true,
            message: "sent sendtoken request, please receive the transaction information from callback function"
        }
    } else {
        return {
            status: false,
            message: "it doesn't work in backend mode yet"
        }
    }
}

function signTransaction(data, onMessageReceived) {
    if (typeof window !== "undefined") {
        if (typeof onMessageReceived != "function") {
            return {
                status: false,
                message: "`onMessageReceived` parameter should be a callback function"
            }
        }

        // browser mode
        window.postMessage({source: "paloma-nest-gateway", message: "EXTERNAL_SIGN_TRANSACTION", data: data, payload: ""}, "*");

        window.onmessage = (event) => {
            if (event["data"]["message"] === "EXTERNAL_SIGN_TRANSACTION_RESPONSE" && event["data"]["source"] === "paloma-nest-gateway") {
                onMessageReceived(event["data"]["response"]);
            }
        };

        return {
            status: true,
            message: "sent signtransaction request, please receive the signed transaction information from callback function"
        }
    } else {
        return {
            status: false,
            message: "it doesn't work in backend mode yet"
        }
    }
}

function verifySignature(text, xpubkey, signature) {
    const addresses = walletUtils.getAddresses(xpubkey, 0, 1);
    const keys = Object.keys(addresses);

    if (keys.length === 0) {
        return false;
    }

    const address = keys[0];

    const message = new bitcore.Message(text);
    return message.verify(address, signature);
}

module.exports = {
    connect: connect,
    disconnect: disconnect,
    getBalance: getBalance,
    getConnectionStatus: getConnectionStatus,
    getSignature: getSignature,
    getTokenOwnerStatus: getTokenOwnerStatus,
    getUtxos: getUtxos,
    getWalletVersion: getWalletVersion,
    isPalomaNestInstalled: isPalomaNestInstalled,
    sendToken: sendToken,
    signTransaction: signTransaction,
    verifySignature: verifySignature
}
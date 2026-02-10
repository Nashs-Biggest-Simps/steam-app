// API Handler File
import { db } from "$lib/data"

const key = "20C1F35B7542A2AA3770FBCA32674486"
let sid = null
const unsub = db.subscribe(data => {
    if (data?.sid) sid = data.sid
})
unsub()

async function callAPI(url) {
    if (!sid) return
    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error("Fetch error:", error);
            throw error;
        });
}

export const apiLib = {
    getPlayerSummaries: async () => {
        let url = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=" + key + "&steamids=" + sid
        return await callAPI(url)
    }
}


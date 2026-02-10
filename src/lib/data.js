import { writable } from 'svelte/store'

let initial_db = {
    user: {},
    sid: null
}

const app_title = "steam.0002"
const storage_ref = `localDB-${app_title}`

const storage = {
    read: function (location) {
        if (typeof window =="undefined") return

        if (storage.exists(location)) {
            return localStorage[location]
        } else {
            return ''
        }
    },
    write: function (location, value) {
        if (typeof window =="undefined") return

        localStorage[location] = value
    },
    clear: function() {
        if (typeof window =="undefined") return

        localStorage.clear()
    },
    exists: function (location) {
		if (typeof window =="undefined") return

        if (localStorage[location]) return true
		else return false
	}
}

export const db = storage.exists(storage_ref) ? writable(JSON.parse(storage.read(storage_ref))) : writable(initial_db)
export function clearDB() {
    db.update(data => {
        data = initial_db
        return data
    })
    console.log("Cleared db")
}

db.subscribe(db => {
    let data
    
    if (Object.keys(db) == undefined) {
        data = initial_db
        if (typeof window !== "undefined") window.open("/", "_self")
    }
    else {
        data = JSON.stringify(db)
    }

    storage.write(storage_ref, data)
})
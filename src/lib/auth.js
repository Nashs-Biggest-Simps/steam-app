// src/lib/stores/auth.js
import { writable } from 'svelte/store';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '$lib/data'

// Import your already-initialized app
// (adjust path if your file is named differently)
import { app } from '$lib/firebase';

export const auth = getAuth(app);

// Only run the listener in the browser (prevents SSR issues)
if (typeof window !== 'undefined') {
    onAuthStateChanged(auth, (fireuser) => {
        if (fireuser) {
            db.update(data => {
                console.log("User found, updated db store")
                data.user = fireuser
                return data
            })
        }
    });
}
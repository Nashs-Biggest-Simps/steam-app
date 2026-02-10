<!-- created by Aaron Meche -->
<script>
    import { goto } from "$app/navigation";
    import { resolve } from "$app/paths";
    import { onMount } from "svelte";
    import { db } from "$lib/data";
    import { auth } from "$lib/auth";
    import {
        GoogleAuthProvider,
        signInWithPopup,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
    } from "firebase/auth";

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (err) {
            console.error(err)
        }
    }
</script>

<!--  -->

<div class="page">
    <div class="island">
        <div class="logo">steam</div>
        <div class="title">Login or Sign Up</div>
        <div class="message">In order to access finance manager, you must create a free account or login to an existing account.</div>
        <div class="button-grid">
            <button class="google" on:click={signInWithGoogle}><i class="fa-brands fa-google"></i>Sign in with Google</button>
        </div>
    </div>
</div>

<!--  -->

<style>
    .page {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .island {
        height: auto;
        width: 30rem;
        max-width: calc(100vw - 8rem);
        margin: auto;
        margin-top: 2rem;
        padding: 2rem;
        background: linear-gradient(to top right, var(--l05), transparent);
        box-shadow: -10pt 10pt 20pt 0px var(--l2);
        outline: solid 1pt var(--l5);
        text-align: center;
        border-radius: 1rem;
    }

    .logo{
        margin-bottom: 1rem;
        font-size: 24pt;
        font-weight: 700;
    }

    .title {
        margin-bottom: 0.5rem;
        font-size: 20pt;
        font-weight: 600;
    }

    .message{
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        border-bottom: solid 1pt var(--l6);
    }

    .button-grid{
        display: grid;
        gap: 1rem;
    }

    button{
        width: calc(100% - 2rem);
        padding: 1rem;
        background: var(--l1);
        outline: solid 1pt var(--l2);
        border-radius: 0.5rem;
        cursor: pointer;
    }

    button:hover{
        background: var(--l2);
        outline: solid 1pt var(--l3);
    }

    button i{
        margin-right: 0.5rem;
    }
</style>
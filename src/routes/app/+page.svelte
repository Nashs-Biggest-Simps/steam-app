<!-- created by Aaron Meche -->
<script>
    import { checkForUser } from "$lib/auth";
    import { onMount } from "svelte";
    import { db } from "$lib/data"
    import { debugErrorMap } from "firebase/auth";
    import { apiLib } from "$lib/api";


    onMount(() => {
        console.log(checkForUser())
    })

    let sid = null
    $: { 
        sid = $db.sid
    }
    
    function getPlayerSummaries() {
        console.log(apiLib.getPlayerSummaries())
    }

    function empty() {
        console.log("empty")
    }

</script>

<!--  -->

<div class="page">
    <div class="heading">Main Page</div>
    <div class="message">This is the main page of this web application</div>
    <div class="message">Your steam id is: {sid}</div>
    <button onclick={getPlayerSummaries}><i class="fa-solid fa-arrow-right"></i> Get Player Summaries</button>
    <button onclick={empty}><i class="fa-solid fa-arrow-right"></i> Continue</button>
    <button onclick={empty}><i class="fa-solid fa-arrow-right"></i> Continue</button>
</div>

<!--  -->

<style>
    .page{
        padding: 2rem;
    }

    .page .heading{
        margin-bottom: 0.5rem;
        font-size: 24pt;
        font-weight: 600;
    }

    button{
        width: 20rem;
        margin-top: 1rem;
        padding: 1rem;
        background: var(--l1);
        border-radius: 0.5rem;
        text-align: center;
        cursor: pointer;
    }

    button:hover{
        background: var(--l2);
        outline: solid 2pt var(--l5);
    }
</style>

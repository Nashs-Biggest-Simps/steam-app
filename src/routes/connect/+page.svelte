<!-- created by Aaron Meche -->
<script>
    import { db } from '$lib/data'

    let access_token, item_id
    db.subscribe(data => {
        access_token = data?.accessToken || "emp"
        item_id = data?.itemId || "emp"
    })

    let steamID_input
    function setSteamID() {
        db.update(data => {
            data.sid =  steamID_input.value.trim()
            return data
        })
    }
</script>

<!--  -->

<div class="page">
    <div class="island">
        <div class="title">Connect Account</div>
        <div class="message">Now that you are logged in, lets connect your Steam account by inputting your Steam ID.</div>
        <form action="">
            <div class="input-label">Steam ID</div>
            <input bind:this={steamID_input} type="text" name="" id="">
            <button class="submit" onclick={setSteamID}><i class="fa-solid fa-arrow-right"></i> Continue</button>
        </form>
    </div>
</div>

<!--  -->

<style>
    .page {
        height: 100vh;
        width: 100vw;
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
        box-shadow: -10pt 10pt 25pt 0px var(--l1);
        outline: solid 1pt var(--l5);
        text-align: center;
        border-radius: 1rem;
    }

    .title {
        margin-bottom: 0.5rem;
        font-size: 20pt;
        font-weight: 600;
    }

    .message{
        margin-bottom: 1rem;
    }

    form{
        text-align: left;
    }

    .input-label{
        margin: 0.5rem 1rem;
        font-size: 10pt;
        font-weight: 500;
        opacity: 0.75;
    }

    input{
        width: calc(100% - 2rem);
        padding: 0.5rem 1rem;
        outline: solid 2pt var(--l2);
        border-radius: 0.5rem;
    }
    
    input:focus{
        background: var(--l1);
        outline: solid 2pt var(--l5);
    }
    
    button.submit{
        width: calc(100% - 2rem);
        margin-top: 1rem;
        padding: 1rem;
        background: var(--l1);
        border-radius: 0.5rem;
        text-align: center;
        cursor: pointer;
    }

    button.submit:hover{
        background: var(--l2);
        outline: solid 2pt var(--l5);
    }
</style>

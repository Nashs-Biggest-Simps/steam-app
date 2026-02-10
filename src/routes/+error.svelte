<!-- created by Aaron Meche -->
<script>
    import { page } from '$app/stores';
    import { resolve } from '$app/paths';
</script>

<!--  -->

<head>
    <title>Page Error</title>
</head>

<div class='page'>
    <div class="island">
        <div class="label">Page Error</div>
        <div class="title">{$page.status} - {$page.error.message}</div>
        <div class="message">Oops! It looks like you ventured off the beaten path! No worries, click the button below to return to the home page.</div>
        <a href={resolve("/")}>Return to Home Page</a>
    </div>
</div>

<!--  -->

<style>
    .island{
        height: auto;
        width: 30rem;
        max-width: calc(100vw - 8rem);
        margin: auto;
        margin-top: 2rem;
        padding: 2rem;
        outline: solid 1pt var(--l5);
        text-align: center;
        border-radius: 1rem;
    }

    .label{
        font-weight: 500;
        opacity: 0.75;
    }
    
    .title{
        margin-bottom: 0.5rem;
        font-size: 20pt;
        font-weight: 600;
    }

    a{
        margin-top: 1rem;
        padding: 1rem;
        background: var(--l2);
        outline: solid 1pt var(--l5);
        border-radius: inherit;
        cursor: pointer;
    }

    a:hover{
        backgronud: var(--l2);
        color: var(--accent);
    }
</style>
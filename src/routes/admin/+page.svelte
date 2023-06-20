<script>
    import { applyAction, deserialize, enhance } from "$app/forms";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    export let data;

    let links = [];
    let IDE = null;

    $: if (data.links) {
        links = data.links;
    }

    const navegar = (url) => {
        goto(url);
    };

    $: clave = null;

    onMount(() => {
        clave = localStorage.getItem("clave");
    });

    $: respuesta = null;

    const Delete = async (ide) => {
        IDE = ide;
    };
</script>

<div class="grilla">
    <div>
        <h5>
            {respuesta}
        </h5>
        <ul>
            {#each links as item}
                <li class="lista">
                    {item?.id}
                    <button class="btn" on:click={() => navegar(item?.url)}>
                        {item?.title} - {item?.slug}
                    </button>

                    <button
                        on:click={() => Delete(item?.id)}
                        type="submit"
                        form="Delete"
                        class="btn red">delete</button
                    >
                </li>
            {/each}
        </ul>
    </div>

    <div class="formulario">
        <form method="post" action="?/Create" use:enhance>
            <label for="title">Titulo</label>
            <input type="text" name="title" />
            <label for="slug">Slug</label>
            <input type="text" name="slug" />
            <label for="url"> Url </label>
            <input type="text" name="url" />
            <input type="hidden" name="clave" bind:value={clave} />
            <input type="submit" value="Submit" class="btn" />
        </form>
    </div>
</div>
<div class="delete">
    <form action="?/Delete" method="post" id="Delete" use:enhance>
        <input type="text" name="id" hidden bind:value={IDE} />
        <input type="text" name="clave" hidden value={clave} />
    </form>
</div>

<style>
    .grilla {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        max-width: 1200px;
        margin: auto;
        margin-top: 100px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .formulario {
        background-color: "#f1f1f1";
        padding: "20px";
        border-radius: "5px";
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    input {
        outline-style: none;
        padding: 10px;
        border-radius: 10px;
        margin-top: 10px;
        border: none;
        border-bottom-color: black;
        border-bottom: 2em;
        border: none;
        border-bottom: 4px solid black;
        outline: none;
        background-color: beige;
    }

    label {
        font-weight: bold;
    }

    .btn {
        background-color: #4caf50;
        color: white;
        padding: 10px;
        border-radius: 5px;
        border: none;
        font-weight: bold;
        cursor: pointer;
    }

    .red {
        background-color: red;
    }

    li {
        background-color: #f1f1f1;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
    }
</style>

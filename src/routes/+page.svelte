<script>
    export let form;

    $: console.log(form);
</script>

<h1>Crear nuevo Acortador URL</h1>

{#if form}
    parece que todo funciona
{/if}

<div class="grid">
    <div class="lista">
        <ul>
            <li>1`hola`</li>
            <li>2`hola`</li>
            <li>3`hola`</li>
            <li>4`hola`</li>
            <li>5`hola`</li>
        </ul>
    </div>
    <div class="formulario">
        <form action="/?/Create" method="post">
            <label for="titulo">Titulo</label>
            <input type="text" name="title" id="titulo" />
            <label for="slug">Slug</label>
            <input type="text" name="slug" id="slug" />
            <label for="url"> Url</label>
            <input type="text" name="url" id="url" />
            <button type="submit">Agregar</button>
        </form>
    </div>
</div>

<style>
    h1 {
        text-align: center;
    }
    .grid {
        display: grid;
        grid-template-columns: 2;
        max-width: 1400px;
        margin: auto;
    }
</style>

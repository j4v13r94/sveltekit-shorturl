<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    export let data;

    const { links } = data;

    onMount(() => {
        if (links && links.url) {
            goto(links.url);
        }
    });
</script>

<h1>hola</h1>

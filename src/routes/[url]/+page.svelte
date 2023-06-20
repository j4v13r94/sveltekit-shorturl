<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    export let data;

    const { links } = data;

    onMount(() => {
        if (links && links.url) {
            window.location = links.url;
        } else
            window.location =
                "https://www.highrevenuegate.com/c62cgx221y?key=4693712f1a75d4e101b66cf1b9a3dbe5";
    });
</script>

<h1>cargando...</h1>

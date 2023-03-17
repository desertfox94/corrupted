<script lang="ts">
    import type {Falling} from "./Falling";



    export let falling : Falling;
    console.log(falling)

    $: style = `font-size: ${falling.size}px; left: ${falling.x}px; top: ${falling.y}px; position: absolute`
</script>

<div {style}>
    {falling.emoticon}
</div>

<style>
    div{
        position: absolute;
    }
</style>
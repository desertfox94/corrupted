<script lang="ts">
    import { create } from "./Falling";
	import type {Falling} from "./Falling";
    import FallingEmoticon from "./FallingEmoticon.svelte";

	let epoch = 150;
	$: width = window.screen.width
	$: height = window.screen.height


	let fallings : Array<Falling> = []

	function addFalling() {
		fallings.push(create(width))
		fallings = fallings
		console.log(fallings)
	}

	function removeDeads() {
		fallings = fallings.filter(f => f.y < height);
	}

	function tick() {
		addFalling()
		removeDeads()
	}

	function move() {
		fallings.forEach(f => {
			f.y = f.y+1;
			//if (Math.random() > 0.5) {
			//	f.x = f.x + ( 1 * (Math.random() > 0.5 ? 1 : -1))
			//}
		})
		fallings = fallings
	}

	setInterval(tick, epoch);

	setInterval(move, 10);
	

</script>

<div>
	<img src="/trollface.png" width="100%" alt="troll face looking at you">
	<p>corrupt rocks &#129304;</p>
</div>

{#each fallings as falling (falling.id)}
	<FallingEmoticon {falling} />
{/each}

<style>
    div {
    width: 15em;
    height: 15em;
    
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    
    margin: auto;
}
p {
    text-align: center;
    font-weight: bold;
    font: 2em sans-serif;
}
</style>
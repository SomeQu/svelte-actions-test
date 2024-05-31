<script lang="ts">
  import { getContext } from "svelte";
  import { contextArr } from "../variables/variables";
  import type { Writable } from "svelte/store";

    const contextActions:Writable<any> = getContext('context')
     const changeContext = (e:MouseEvent) =>{
        const event = e.target as HTMLInputElement
        $contextActions = event.value
        console.log('$contextActions :>> ', $contextActions);
}
    const goBack = () =>{
        $contextActions=null
    }
</script>
<div class="buttons">
    {#if $contextActions===null}
{#each contextArr as context}
    <input class="btn" on:click={(e)=>changeContext(e)} type="button" value={context}>
    {/each}
    {:else}
    <button class="btn" on:click={goBack}>go Back</button>
    {/if}
</div>

<style lang="scss">
    .buttons{
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        .btn{
            margin-bottom: 10px;
        }
    }    
</style>
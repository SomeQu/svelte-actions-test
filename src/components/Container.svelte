<script>
  import { getContext } from "svelte";


  import TooltipAction from "./TooltipAction.svelte";
    const contextActions = getContext('context')
</script>
    {#if $contextActions==='tooltip'}
<div class="container">
    <div class="wrapper"> 
          <TooltipAction/>
       </div>
       </div>
       {/if}
    <style lang="scss">
        .container{
           display: flex;
           justify-content: space-between;
        
        }
       
     </style>
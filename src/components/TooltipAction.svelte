<script lang="ts">
  import type { Readable, Writable } from "svelte/store";
  import { tooltip } from "../actions/tooltip";
  import text from "../text/text";
  import type { languageType } from "../types/types";
  import { getContext } from "svelte";

 
    let tooltipText = "Hello, World!"
    let language:Writable<languageType>= getContext('language')

    </script>
    

<input bind:value={tooltipText} placeholder={text.placeholder[$language]} />

<div use:tooltip={tooltipText}>
   {text.enter_mouse[$language]}
</div>



<style lang="scss">
 
 </style>
 
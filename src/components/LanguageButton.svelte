<script lang="ts">
  import { getContext } from "svelte";
  import type { languageType } from "../types/types";
  import type { Writable } from "svelte/store";

    const language:Writable<languageType> = getContext("language")
const changeLanguage = ():void =>{
    if($language==='RU'){
        $language='EN'
    }else{
        $language="RU"
    }
}
</script>
<div class="wrapper_button">
    <button class="btn" on:click={changeLanguage}>Change language</button>
 </div>

 <style lang="scss">
       .wrapper_button{
       position: absolute;
       top: 0px;
       right: 0px;
    }
 </style>
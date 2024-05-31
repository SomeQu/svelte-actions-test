<script lang="ts">
  import { getContext } from "svelte";
import Contexts from "./Core/Contexts.svelte";
  import ContextButtons from "./components/ContextButtons.svelte";

  import LanguageButton from "./components/LanguageButton.svelte";
  import TooltipAction from "./components/TooltipAction.svelte";
  import type { Writable } from "svelte/store";
  import Container from "./components/Container.svelte";

   const contextActions:Writable<any> = getContext('context')

</script>
<Contexts>
   <ContextButtons/>
   <Container/>

   
   <LanguageButton/>
   
</Contexts>
<style lang="scss">

</style>

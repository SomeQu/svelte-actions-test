<script lang="ts">
  import { writable, type Writable } from 'svelte/store';
import type { contextType, languageType } from '../types/types';
  import { setContext } from 'svelte';

const language:Writable<languageType> = writable('RU');
const contextActions:Writable<contextType|null> = writable(null)
  setContext('language', language);
  setContext('context',contextActions)
</script>
<slot />
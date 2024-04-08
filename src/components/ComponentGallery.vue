<script setup lang="ts">
import { ref, computed } from 'vue'
import FunctionalRaw from './functionals/FunctionalRaw'
import FunctionalTsx from './functionals/FunctionalTsx'
import StatefulRefComponentCompositionRaw from './stateful/refComponent/StatefulRefComponentCompositionRaw'
import StatefulRefComponentCompositionTsx from './stateful/refComponent/StatefulRefComponentCompositionTsx'
import StatefulRefComponentOptionsRaw from './stateful/refComponent/StatefulRefComponentOptionsRaw'
import StatefulRefComponentOptionsTsx from './stateful/refComponent/StatefulRefComponentOptionsTsx'
import StatefulRefElementCompositionRaw from './stateful/refElement/StatefulRefElementCompositionRaw'
import StatefulRefElementOptionsRaw from './stateful/refElement/StatefulRefElementOptionsRaw'
import StatefulRefElementOptionsTsx from './stateful/refElement/StatefulRefElementOptionsTsx'
import StatefulRefElementCompositionTsx from './stateful/refElement/StatefulRefElementCompositionTsx'
const useComposition = ref(true)
const useFunctional = ref(false)
const useTsx = ref(true)
const hLevel = ref(1)
const refOnComponent = ref(false)

const statefulComponent = computed(() => {
  if (useFunctional.value) {
    return null
  }
  if (refOnComponent.value) {
    if (useTsx.value) {
      return useComposition.value
        ? StatefulRefComponentCompositionTsx
        : StatefulRefComponentOptionsTsx
    } else {
      return useComposition.value
        ? StatefulRefComponentCompositionRaw
        : StatefulRefComponentOptionsRaw
    }
  }
  if (useTsx.value) {
    return useComposition.value ? StatefulRefElementCompositionTsx : StatefulRefElementOptionsTsx
  } else {
    return useComposition.value ? StatefulRefElementCompositionRaw : StatefulRefElementOptionsRaw
  }
})
</script>
<template>
  <header>
    <h1>Component Gallery</h1>
    <div>
      <input type="checkbox" v-model="useFunctional" id="functionalChkbox" />
      <label for="functionalChkbox">Functional API</label>
    </div>
    <div v-if="useFunctional">
      <h2>Functional API</h2>
      <label for="level">H-Level</label>
      <input v-model="hLevel" type="number" id="level" min="1" max="6" />
      <input type="checkbox" v-model="useTsx" id="tsxChkbox" /> <label for="tsxChkbox">TSX</label>
    </div>
    <div v-else>
      <h2>Component with state</h2>
      <input type="checkbox" v-model="refOnComponent" id="component" />
      <label for="component">Ref on a component</label>
      <input type="checkbox" v-model="useComposition" id="compositionChkbox" />
      <label for="compositionChkbox">Composition API</label>
      <input type="checkbox" v-model="useTsx" id="tsxChkbox" /> <label for="tsxChkbox">TSX</label>
    </div>
  </header>
  <main>
    <template v-if="useFunctional">
      <functional-tsx v-if="useTsx" :level="hLevel">Mon Super Contenu TSX</functional-tsx>
      <functional-raw v-else :level="hLevel">Mon Super Contenu Typescript</functional-raw>
    </template>
    <template v-else-if="statefulComponent">
      <component :is="statefulComponent" />
    </template>
  </main>
</template>

<template>
  <main>hello</main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { mapStores } from 'pinia'

  import { useDataStore } from '@/stores/dataStore'

  export default defineComponent({
    name: 'home',

    computed: {
      ...mapStores(useDataStore),
    },

    mounted() {
      this.getData()
    },

    methods: {
      async getData() {
        try {
          const data = await this.dataStore.getCountries()

          console.log(data)
        } catch (err) {
          console.error(err)
        }
      },
    },
  })
</script>

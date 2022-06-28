<template>
  <div>
    <p>{{ $store.state.name }}</p>
    <button type="button" @click="handleVuex">vuex</button>
  </div>
</template>

<script>
import { computed } from 'vue'
import $store from './store/index'

export default {
  setup () {
    // 获取state.name的值
    const name = computed(() => { return $store.state.name })
    const Adata = computed(() => { return $store.state.Adata })

    // Promise（需要用异步同步来接），async（异步），await （同步）
    async function getBCallback () {
      const getBData = await $store.dispatch('getB')
      return getBData
    }

    onMounted(async () => {
      console.log('name', name.value)// 原值
      await $store.dispatch('setName', '小明')// 修改
      console.log('name', name.value)// 新值
      console.log('Adata', Adata.value)
      await $store.dispatch('getA')
      console.log('Adata', Adata.value.data)
      const getBData = await getBCallback()
      console.log('getBData' + getBData)
    })
    return {}
  }
}
</script>

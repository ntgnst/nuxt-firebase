<template>
  <no-ssr>
    <div class="container">
      <div>
        <logo />
        <h1 class="title">fireTest</h1>
        <p>RealTimeData</p>
        <no-ssr>
          <ul>
            <li v-for="user in list" :key="user.Ad">{{ user.Ad }}</li>
          </ul>
        </no-ssr>
      </div>
    </div>
  </no-ssr>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      list: {
        type: Array,
        required: false,
        default: () => []
      }
    }
  },
  mounted() {
    const docRef = this.$firestore
      .collection('test')
      .doc('test')
      .collection('denemeler')
    const arr = []
    docRef.onSnapshot((collectionSnapshot) => {
      collectionSnapshot.forEach((item) => {
        console.log('docChanges', item)
        arr.push({ Ad: item.data().Ad, Soyad: item.data().Soyad })
      })
    })
    this.list = arr
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

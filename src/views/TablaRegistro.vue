<template>
  <div>
      <h1>Certificado y registro de vacunación</h1>
      <hr/>
        <certificado/>
  </div>
</template>

<script>
import Certificado from '../components/Certificado.vue'
export default {
  components: { Certificado },

}
</script>

<style>
h1{
    margin-top:8vh;
    text-align: center;
    color:#00b347;
}

</style>
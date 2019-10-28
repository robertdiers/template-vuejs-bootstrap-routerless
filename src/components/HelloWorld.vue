<template>
  <div class="hello">
    <h1>{{ $t("message.hello") }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>    
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org/" target="_blank" rel="noopener">VueJS</a></li>   
      <li><a href="https://bootstrap-vue.js.org/" target="_blank" rel="noopener">Bootstrap-Vue</a></li> 
      <li><a href="https://www.npmjs.com/package/vue-sessionstorage" target="_blank" rel="noopener">Vue-Sessionstorage</a></li>  
      <li><a href="https://github.com/axios/axios" target="_blank" rel="noopener">Axios</a></li>  
    </ul>    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

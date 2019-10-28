<template>
  <div class="hello">
    {{ transferdata }}  <br><br><br>
    {{ examplerestdata }}
  </div>
</template>

<script>
export default {
  name: 'ExampleClick',
  data: function() {
    return {
      transferdata: this.$session.get('transferdata'),
      examplerestdata: ''
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
      loadData() {
          // example axios call       
          const baseURI = 'https://jsonplaceholder.typicode.com/users'
          this.$http.get(baseURI)
          .then((result) => {
            this.examplerestdata = result.data
          })
      }
  }
}
</script>
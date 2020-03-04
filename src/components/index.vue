<template>
  <div class="index container">
      <div class="card" v-for="movie in movies" :key="movie.id">
        <div class="card-content">
          <h2 class="indigo-text">{{movie.title}}</h2>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      movies: [
       {title: 'Matrix', slug:'matrix', genre: 'Action', id:'1'}, 
       {title: 'Avengers', slug:'avengers', genre: 'Action', id:'2'}, 
       {title: 'Terminator', slug:'terminator', genre: 'Action', id:'1'} 
      ]
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2{
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}

</style>

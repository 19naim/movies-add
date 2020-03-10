<template>
  <div class="index container">
    <div class="col s12 m6" v-for="movie in movies" :key="movie.id">
      <div class="card" >
        <div class="card-content">
          <h2 class="indigo-text">{{movie.title}}</h2>
          <img :src="movie.img" alt="" width="100%">
          <p>{{movie.genre}}</p>
        </div>
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
       {title: 'Matrix',
       rating: '*****',
        genre: 'Action', 
        id:'1',
        img: "https://cdn.cdon.com/media-dynamic/images/product/00/04/04/49/19/3/1a9716f6-28ee-40d5-8e5a-d4c852542f92.jpg"
      }, 
       {title: 'Avengers',
        genre: 'Action', 
        id:'2',
        img:"https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"
        }, 

       {title: 'Terminator',  
       genre: 'Action', 
       id:'1',
       img:"https://images-na.ssl-images-amazon.com/images/I/81yxPkxTOcL._AC_SX342_.jpg"} 
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
  margin-bottom: 0;
}

.card{
    height: 400px; /* Your height here */
    overflow: hidden;
}



</style>

<template>
  <div class="index container">
    <div class="col s12 m6" v-for="movie in movies" :key="movie.id">
      <div class="card" >
        <div class="card-content">
          <h2 class="indigo-text"><b>{{movie.title}}</b></h2>
          <br>
          <img :src="movie.img" alt="" width="100%">
          <h6><b>{{movie.genre}}</b></h6>
          <p>{{movie.rating}}</p>
          <p class="indigo-text">{{movie.description}}</p>
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
      { title: 'Matrix',
        genre: 'Action',
        rating: '*****', 
        id:'1',
        img: "https://cdn.cdon.com/media-dynamic/images/product/00/04/04/49/19/3/1a9716f6-28ee-40d5-8e5a-d4c852542f92.jpg",
        description:'Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.'
      }, 
       {title: 'Avengers',
        genre: 'Action', 
        rating: '5',
        id:'2',
        img:"https://i.etsystatic.com/15963200/r/il/c669e3/1845637618/il_570xN.1845637618_kyhb.jpg ",
        description:'The Avengers (also known as Avengers Assemble in the UK and Ireland) is a 2012 superhero film and the sixth film in the Marvel Cinematic Universe, based on the superhero team.'
        }, 

       {title: 'Terminator',  
       genre: 'Action', 
       rating: '5',
       id:'1',
       img:"https://images-na.ssl-images-amazon.com/images/I/81yxPkxTOcL._AC_SX342_.jpg",
       description:'The Terminator is a 1984 American science fiction film directed by James Cameron. It stars Arnold Schwarzenegger as the Terminator, a cyborg assassin sent back in time from 2029.'
       }
        
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

.card-content img{
    height: 500px; /* Your height here */
    overflow: hidden;
}



</style>

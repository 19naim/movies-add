<template>
    <div class="add-movies container">
        <h2 class="center-align indigo.text">Add New Movie Details</h2>
        <form action="">
            <div class="field title">
                <label for="title">Movie Name</label>
                <input type="text" name="tilte" v-model="title">

                <label for="title">Poster Url</label>
                <input type="text" name="tilte" v-model="title">

                <label for="title">Genre</label>
                <input type="text" name="tilte" v-model="title">

                
            </div>
        </form>

    </div>
</template>

<script>
export default {
    name:'AddMovies',
    data(){
        return{
            title:null
        }
    }
    
}
</script>

<style scoped>

</style>
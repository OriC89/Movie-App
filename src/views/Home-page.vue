<template>
  <div class="home">
    <div class="featured-card">
      <router-link to="/movie/tt0121766">
        <img
          src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8e9486657ca1cec4a616e0c524fd21fced3d0fb330855a2bb7a47cf5e3fedfbf._RI_V_TTW_.jpg"
          alt="Star Wars Revenge Of The Sith"
          class="featured-img"
        />
        <div class="detail">
          <h3>STAR WARS - REVENGE OF THE SITH</h3>
          <p>
            Three years into the Clone Wars, the Jedi rescue Palpatine from
            Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a
            double agent between the Jedi Council and Palpatine and is lured
            into a sinister plan to rule the galaxy.
          </p>
        </div>
      </router-link>
    </div>
    <form @submit.prevent="searchMovies()" class="search-box">
      <input type="text" placeholder="Search..." v-model="search" />
      <input type="submit" value="Search" />
    </form>

    <div class="movies-list">
      <div class="movie" :key="movie.imdbID" v-for="movie in movies">
        <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
          <div class="product-img">
            <img :src="movie.Poster" class="movie-list-img" alt="" />
            <div class="type">{{ movie.Type }}</div>
          </div>
          <div class="product-detail">
            <p class="year">{{ movie.Year }}</p>
            <h3>{{ movie.Title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import env from "@/env.js";
export default {
  setup() {
    const search = ref("");
    const movies = ref([]);
    const searchMovies = () => {
      if (search.value != "") {
        fetch(`http://www.omdbapi.com/?s=${search.value}&apikey=${env.apikey}`)
          .then((response) => response.json())
          .then((data) => {
            movies.value = data.Search;
            search.value = "";
          });
      }
    };

    return {
      search,
      movies,
      searchMovies,
    };
  },
};
</script>

<style>
.featured-card {
  position: relative;
}

.featured-img {
  display: block;
  width: 100%;
  height: 500px;
  object-fit: cover;
  position: relative;
  z-index: 0;
}

.detail {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 15px;
  z-index: 1;
}

h3 {
  color: #fff;
  margin-bottom: 15px;
}

p {
  color: #fff;
}

.search-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
}

input {
  display: block;
  border: none;
  outline: none;
  background: none;
}

input[type="text"] {
  width: 100%;
  color: #fff;
  background-color: #496583;
  font-size: 20px;
  padding: 10px 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  transition: 0.4s;
}

input[type="text"]::placeholder {
  color: #f3f3f3;
}

input[type="text"]:focus {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
}

input[type="submit"] {
  width: 100%;
  max-width: 300px;
  background-color: #42b883;
  padding: 10px;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  transition: 0.4s;
}

input[type="submit"]:active {
  background-color: #3b8070;
}

.movies-list {
  display: flex;
  flex-wrap: wrap;
  margin: 8px 8px;
}

.movie {
  max-width: 50%;
  flex: 1 1 50%;
  padding: 12px 8px;
}

.movie-link {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-img {
  position: relative;
  display: block;
}

.product-img .movie-list-img {
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.movie-link .type {
  position: absolute;
  left: 0px;
  bottom: 20px;
  padding: 6px 10px;
  background-color: #42b883;
  color: #fff;
}

.movie .movie-link .product-detail{
background-color: #496583;
padding:15px 8px;
flex: 1 1 100%;
border-radius: 0px 0px 8px 8px;
}

.product-detail .year{
  color:#aaa;
  font-size: 16px;
}

.product-detail h3{
  color:#fff;
  font-weight: 600;
  font-size: 18px;
}
</style>
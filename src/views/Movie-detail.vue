<template>
  <div class="movie-detail">
    <h2>{{ movie.Title }}</h2>
    <p class="year">{{ movie.Released }}</p>
    <img :src="movie.Poster" alt="Movie Poster" class="featured-img" />
    <div class="movie-info">
      <div class="title">Starring</div>
      <div class="actors">{{ movie.Actors }}</div>
    </div>
    <p class="plot">{{ movie.Plot }}</p>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";

export default {
  setup() {
    const movie = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      fetch(
        `${env.URL_BASE}/?apikey=${env.apikey}&i=${route.params.id}&plot=full`
      )
        .then((response) => response.json())
        .then((data) => {
          movie.value = data;
        });
    });

    return {
      movie,
    };
  },
};
</script>

<style>
.movie-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.movie-detail h2 {
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 26px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 5px;
}

.movie-detail .featured-img {
  display: block;
  max-width: 200px;
  margin-bottom: 20px;
}

.movie-detail .plot {
  display: flex;
  text-align: center;
  color: rgb(204, 199, 199);
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  line-height: 1.5;
  border-top: 1px solid rgba(66, 184, 131, 0.2);
  padding: 15px 10px;
}

.movie-detail .year {
  display: flex;
  margin-bottom: 15px;
}

.movie-detail .movie-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(204, 199, 199);
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  gap: 5px;
  padding: 15px 0px;
}

.movie-detail .movie-info .title {
  font-size: 18px;
  font-weight: 600;
  color: rgb(66, 184, 131);
  text-decoration: underline;
}
</style>
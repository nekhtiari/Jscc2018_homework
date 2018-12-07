<script>
import { mapActions, mapState } from 'vuex';
import ResturantCard from '@/components/ResturantCard.vue'

export default {
  name: 'resturants',
  created() {
    this.fetchResturants();
  },
  components: {
    ResturantCard
  },
  computed: {
    ...mapState({
      resturants: state => state.resturants.data,
      likes: state => state.resturants.likes
    }),
  },
  methods: {
    ...mapActions(['fetchResturants', 'addLikes'])
  },
};
</script>

<template lang="pug">
div
  h1 Hello!
  button(@click="addLikes") Like!
  div Likes: {{likes}}
  div(v-if="resturants.length")
    p Here are the resturants:
    div.resturants-list
      div.resturant(v-for="resturant in resturants")
        resturant-card(:data="resturant" key="resturant._id")
</template>

<style>
.resturants-list {
  display: flex;
}

.resturant {
  margin: 30px;
}
</style>

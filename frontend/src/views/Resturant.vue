<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'resturant',
  created() {
    this.fetchResturant(this.$route.params.id)
  },
  computed: {
    ...mapState({
      resturant: state => state.resturants.resturant
    }),
  },
  methods: {
    ...mapActions(['fetchResturant'])
  },
};
</script>

<template lang="pug">
div
  h2.name {{resturant.name}}
  div {{resturant.location}}
</template>

<style>
.name {
  color:rgb(255,20,147);
}
</style>

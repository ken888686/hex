<template>
  <div class="container text-center">
    <WeeklyMissions />
  </div>
</template>

<script>
import WeeklyMissions from '@/components/WeeklyMissions.vue';

export default {
  name: 'Home',
  components: {
    WeeklyMissions,
  },
};
</script>

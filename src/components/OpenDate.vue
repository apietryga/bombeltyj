<template>
  <div class="openDate">
    <h2>OTWARCIE JUŻ ZA</h2>
    <div class="countdown">
      <div class="countdown-item">
        <div class="countdown-item-value" v-text="days"></div>
        <div class="countdown-item-label">dni</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-item-value" v-text="hours"></div>
        <div class="countdown-item-label">godziny</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-item-value" v-text="minutes"></div>
        <div class="countdown-item-label">minuty</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-item-value" v-text="seconds"></div>
        <div class="countdown-item-label">sekundy</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OpenDate',
  props: {
    object: Object
  },
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  },
  mounted() {
    this.getTime();
  },
  methods: {
    getTime() {
      let now = new Date();
      let end = Date.parse('01 May 2022 09:00:00 GMT');
      let diff = end - now;
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);
      this.days = days;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
      setTimeout(() => {
        this.getTime();
      }, 1000);
    }
  }
}
</script>

<style lang="scss">
  @use '@/styles/_global.scss' as *;
  .openDate{
    background: linear-gradient($pink1, $pink4);
    // border:20px dashed red;
    box-shadow: 0 0 2em $pink4;
    margin:2em;
    padding:2em;
    text-align:center;
    .countdown{
      font-family:Avenir, Helvetica, Arial, sans-serif;
      display:flex;
      justify-content: center;
      flex-wrap: wrap;
      .countdown-item{
        display:flex;
          padding:.5em;
        >div{
          padding:.1em;
        }
      }
    }
  }
</style>


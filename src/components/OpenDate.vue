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
      date: '01 May 2022 10:00:00 GMT+2'
    }
  },
  mounted() {
    this.getTime();
  },
  methods: {
    getTime() {
      const date = new Date(this.date);
      const now = new Date();
      const diff = date.getTime() - now.getTime();
      if (diff < 0) {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      } else {
        this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(diff / (1000 * 60 * 60) % 24);
        this.minutes = Math.floor(diff / 1000 / 60 % 60);
        this.seconds = Math.floor(diff / 1000 % 60);
      }
      setTimeout(() => {
        this.getTime();
      }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>
  @use '@/styles/_global.scss' as *;
  .openDate{
    padding:0 2em;
    text-align:center;
    h2{
      margin:0;
      text-align:left;
      font-size:clamp(.8em, 1.5em, 5em);
    }
    .countdown{
      // font-family:Arial Black, Arial, sans-serif;
      font-family:$secondFont;
      font-weight: bold;
      display:flex;
      justify-content: center;
      flex-wrap: wrap;
      .countdown-item{
        display:flex;
        padding:.2em;
        >div{
          padding:.1em;
        }
      }
    }
    @media only print{
      display:none;
    }
  }
</style>


<template lang="html">
<div class="central-wrapper">
  <div class="car">

    <section class="main-information">
      <div class="main-information-left">
        <div class="left">
          <div class="img-container-small">
            <img src="../assets/tesla9.png" alt="">
          </div>
          <div class="img-container-small">
            <img src="../assets/tesla10.png" alt="">
          </div>
          <div class="img-container-small">
            <img src="../assets/tesla11.png" alt="">
          </div>
        </div>
        <div class="right">
          <div class="img-container-large">
            <img src="../assets/tesla8.png" alt="">
          </div>
        </div>
      </div>

      <div class="main-information-right">
        <ul>
          <li><b>Key information:</b></li>
          <br>
          <li>Make: </li>
          <li>Model: </li>
          <li>Milage: </li>
          <li>Fabrication: </li>
          <li>Rate: </li>
          <li>Price: </li>
        </ul>
        <br>
        <button type="button" name="button">Buy</button>
      </div>
    </section> <!-- main-information -->

    <section class="event-wrapper">
      <div class="events-text">
        <div class="events-description">
          Key events in the lifecycle of the vehicule:
        </div>
      </div>
      <div v-for="event in car.events" class="event">
        <img :src="iconLocation(event.type)" class="event-logo">
        <ul>
          <li>Type: {{ event.type }}</li>
          <li>Date: {{ event.date }}</li>
          <li>Location: {{ event.location }}</li>
          <li>Actor: {{ event.actor }}</li>
        </ul>
      </div>
      <div class="event">
        You?
      </div>
    </section>
  </div>
</div> <!-- central wrapper -->
</template>

<script>
import { cars } from '../data/cars.js'

export default {
  data () {
    return {
      car: cars[2],
    }
  },
  methods: {
    iconLocation: function (type) {
      return 'src/assets/icons/' + type + '.png'
    }
  },
}
</script>

<style lang="css">
.central-wrapper {
  display: flex;
  justify-content: center;
  background-color: #CCCCCC;
}

.main-information {
  display: flex;
  margin-top: 10px;
}

.main-information-left {
  display: flex;
}

.img-container-small {
  height: 130px;
  width: 200px;
  padding-bottom: 20px;
}

.img-container-small img {
  width: 100%;
}

.img-container-large {
  height: 430px;
}

.img-container-large img {
  max-width: 100%;
  max-height: 100%;
}

.main-information-right {
  margin-left: 10px;
  height: 430px;
  width: 300px;
  border: 2px solid red;
  padding-left: 10px;
}

.main-information-right li {
  padding-bottom: 3px;
}

.event-wrapper {
  display: flex;
  margin-top: 20px;
}

.events-description {
  height: 210px;
  width: 160px;
  padding: 15px;
  margin-top: 25px;
  font-size: 1.5rem;
}

.event {
  border: 2px red solid;
  height: 210px;
  width: 140px;
  padding: 10px;
  margin: 0 25px;
}

.event-logo {
  width: 70px;
  height: 70px;
  padding-bottom: 5px;
  margin-left: 15px;
}

.event ul li {
  padding: 1px 0;
}
</style>

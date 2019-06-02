<template>
  <div id="app">
    <ul class="nav__container">
      <nav class="nav">
        <router-link to="/" class="nav__btn">Home</router-link>
        <!-- <router-link to="/stories" class="nav__btn">Story</router-link> -->
        <router-link to="/🎒" class="nav__btn">Education</router-link>
        <!-- <router-link to="/💻" class="nav__btn">Award</router-link>
        <router-link to="/📧" class="nav__btn">Contact</router-link> -->
      </nav>
    </ul>
    <Hero></Hero>
    <div class="card__container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero'

export default {
  name: 'App',
  components: {
    Hero
  }
}
</script>

<style>

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background: #fafafa;
  /*font-family: 'Muli', sans-serif;*/
  font-family: "Courier New", Courier, monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
ul,
li {
  margin: 0;
  padding: 0;
}

/*
 * APP 
 */
#app {
  display: flex;
  flex-direction: row;
}

/*
 * NAV
 */
.nav__container  {
  position: absolute;
  z-index: 100;
  top: 10px;
  left: 0;
  display: block;
  width: 100%;
  list-style: none;
}

.nav {
  text-align: center;
}

.nav__btn {
  margin: 2px 2px 2px 0;
  padding: 6px;
  font-size: 14px;
  color: #fff;
  background: #1e88e5;
  border-radius: 2px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  text-decoration: none;
}

/*
 * CONTAINERS
 *
 * card
 * skills-list
 * contact
 * education
 */
.card__container {
  width: 60%;
}

.skills-list__container,
.contact__container, 
.education__container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/*
 * HEADERS
 *
 * hero
 * skills-list
 * education
 * contact
 */
.hero__header,
.contact__header,
.education__header,
.skills-list__header {
  margin-bottom: 20px;
}

@media (max-width: 370px) {
  .nav__container {
    display: none;
  }

  .hero__arrow {
    display: none;
  }
}

@media (max-width: 990px) {
  /*
   * APP 
   */
  #app {
    flex-direction: column;
  }

  /*
   * CONTAINERS
   *
   * card
   * skills-list
   * education 
   * contact 
   */
  .card__container {
    width: 100vw;
  }

  .skills-list__container,
  .education__container,
  .contact__container {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
  }

  /*
   * MODALS
   *
   * skills-list
   * education 
   * contact 
   */
  .skills-list__modal,
  .education__modal,
  .contact__modal {
    background-color: #fefefe;
    margin: 0 auto;
    padding: 20px;
    width: calc(100% - 40px);
  }
}

@media (min-width: 991px) {
  .nav {
    position: absolute;
    left: calc(20% - 162px);
    text-align: left;
  }

  .hero {
    width: 40%;
    height: 100vh;
  }

  .hero__arrow {
    display: none;
  }

  .card__container {
    height: 100vh;
    overflow: auto;
  }

  .card__content {
    min-height: 100vh;
    overflow-y: auto;
  }

  /*
   * CONTAINERS
   *
   * skills-list
   * education 
   * contact 
   */
  .contact__container,
  .education__container,
  .skills-list__container {
    width: 60%;
  }
}

@media only screen and (orientation: landscape) {
  .nav__container {
    display: none;
  }

  .hero__arrow {
    display: none;
  }
}

@media only screen and (orientation: landscape) and (min-width: 820px) {
  .nav__container {
    display: block;
  }

  .hero__arrow {
    display: block;
  }
}

@media only screen and (orientation: landscape) and (min-width: 991px) {
  .hero__arrow {
    display: none;
  }
}
</style>

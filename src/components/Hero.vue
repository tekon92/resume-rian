<template>
  <div class="hero">
      <h1 class="hero__header">{{ resume.basic.name }}</h1>
      <h4 class="hero__subheader">{{ resume.basic.location.city }} <span role="img" aria-label="Sun">☀️</span></h4>
      <p>{{ resume.basic.label}}</p>
      <p class="hero__text">
        <a href="rian-pauzi.pdf">PDF version</a> of the resume.
      </p>
      <div class="hero__link-container">
        <a href="https://github.com/tekon92/resume-rian" target="_blank" rel="noopener noreferrer" class="hero__link">
          made with
          <img alt="Vue logo" src="@/assets/logo.png" class="hero__logo">
        </a>
      </div>
      <span role="img" aria-label="Arrow down" class="hero__arrow">⬇️</span>
    </div>
</template>

<script>
import RESUMEENTRIES from '@/statics/data/resume.json'

export default {
  name: 'Hero',
  computed: {
    resume() {
      return RESUMEENTRIES
    }
  }
}
</script>

<style scoped>
/*
 * HERO
 */
.hero {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  height: 100vh;
  max-width: 360px;
  background: #fafafa;
  text-align: center;
}

.hero__header {
  color: #4a4a4a;
}

.hero__subheader {
  font-weight: 300;
}

.hero__text {
  margin: 10px 0;
  font-weight: 700;

}

.hero__logo {
  height: 40px;
  vertical-align: middle;
  animation: hero-logo infinite 20s linear;
}

@keyframes hero-logo {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.hero__arrow {
  display: inline-block;
  position: absolute;
  left: calc(50% - 20px);
  bottom: 20px;
  font-size: 40px;
  animation-duration: 1.5s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-name: hero-arrow;
}

@keyframes hero-arrow {
  from {
    opacity: 0.25;
    transform: scale3d(1, 1, 1);
  }

  50% {
    opacity: 1;
    transform: scale3d(1.15, 1.15, 1.15);
  }

  to {
    opacity: 0.25;
    transform: scale3d(1, 1, 1);
  }
}

</style>

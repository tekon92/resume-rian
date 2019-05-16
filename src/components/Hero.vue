<template>
  <div class="hero">
      <h1 class="hero__header">Vladimir Skok</h1>
      <h4 class="hero__subheader">San Diego <span role="img" aria-label="Sun">☀️</span></h4>
      <p>Organized and motivated frontend developer seeking to work closely with a team of experienced engineers to craft a product that has an impact.</p>
      <p class="hero__text">
        <a href="vladimir-skok.pdf">PDF version</a> of the resume.
      </p>
      <div class="hero__link-container">
        <a href="https://github.com/iamskok/react-resume" target="_blank" rel="noopener noreferrer" class="hero__link">
          made with
          <img alt="Vue logo" src="@/assets/logo.png" class="hero__logo">
        </a>
      </div>
      <span role="img" aria-label="Arrow down" class="hero__arrow">⬇️</span>
    </div>
</template>

<script>
export default {
  name: 'Hero'
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

<template>

    <div class="job__container" v-bind:style="styleObject">
      <div class="job">
        <div class="job__header">
          <h3>{{ company }}</h3>
          <h4>{{ position }}</h4>
        </div>
        <div class="job__date">{{ startDate }} to {{ endDate }}</div><br>
        <p class="job__paragraph">{{ summary }}</p>
        <ul class="job__list">
          <li v-for="high in highlights" :key="high"> {{ high }}</li>
        </ul>
      </div>
    </div>
      
</template>

<script>

export default {
  name: 'Card',
  props: ['company', 'position','startDate','endDate','summary','highlights', 'styleObject']
}
</script>

<style scoped>
/*
 * CARD
 */
.card__container {
  width: 60%;
}

/*
 * JOB
 */
.job__container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 50px;
  color: #fafafa;
  background: #54e7c7;
}

.job__date {
  font-size: 14px;
  font-weight: 300;
}

.job__paragraph {
  font-style: italic;
}

/*
 * SKILLS
 */
.skill {
  margin: 2px 4px 2px 0;
  color: #fff;
  padding: 8px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  background: #1e88e5;
}

.skills-list__header {
  color: #4a4a4a;
  text-align: center;
}

.skills-list {
  display: flex;
  flex-flow: row wrap;
  list-style: none;
}

/*
 * EDUCATION
 */
.education__header {
  color: #4a4a4a;
  text-align: center;
}

.education__text {
  text-align: center;
}

.education__subheader {
  margin-bottom: 20px;
}

/*
 * CONTACT
 */
.contact__header {
  color: #4a4a4a;
}


</style>

<template>
      <div class="card__content">

         <div v-for="job in jobs.work" :key="job.id" class="job__container" v-bind:style="job.styleObject">
          <div class="job">
            <div class="job__header">
              <h3>{{ job.company }}</h3>
              <h4>{{ job.position }}</h4>
            </div>
            <div class="job__date">{{job.startDate}} to {{ job.endDate }}</div><br>
            <p class="job__paragraph">{{ job.summary }}</p>
            <ul class="job__list">
              <li v-for="high in job.highlights" :key="high"> {{ high }}</li>
            </ul>
          </div>
        </div>
        
      </div>
</template>

<script>
import RESUMEENTRIES from '@/statics/data/resume.json'

export default {
  name: 'Card',
  computed: {
    jobs() {
      return RESUMEENTRIES
    },
    hexa() {
      return '#'+Math.floor(Math.random()*16777215).toString(16);
    }
  }
}
</script>

<style scoped>
/*
 * CARD
 */
.card__content {
  width: 100%;
  display: flex;
  flex-direction: column;
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

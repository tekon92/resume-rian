<template>
<div class="card__content" >
        <Card v-for="work in jobs.education" :key="work"
          :company=work.company
          :position=work.position
          :startDate=work.startDate
          :endDate=work.endDate
          :summary=work.summary
          :highlights=work.highlights
          :styleObject=work.styleObject
        />
      </div>
</template>

<script>
import RESUMEENTRIES from '@/statics/data/resume.json'

import Card from '@/components/Card'

export default {
  name: 'home',
  components: {
    Card,
    // Hero
  },
  computed: {
    jobs() {
      return RESUMEENTRIES
    }
  }
}
</script>


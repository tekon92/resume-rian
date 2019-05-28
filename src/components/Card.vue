<template>
      <div class="card__content">
         <div class="job__container" style="background: rgb(251, 140, 0);">
          <div class="job">
            <div class="job__header">
              <h3>Freelance</h3>
              <h4>Frontend Engineer</h4>
            </div>
            <div class="job__date">August 2017 to January 2019</div><br>
            <p class="job__paragraph">Various projects utilizing ES6, Gatsby, Sass and WordPress.</p>
            <ul class="job__list">
              <li>Improved client's development workflow by incorpating modern tools like: Webpack, Gulp, ESLint, Prettier, Jest, Ansible and others.</li>
              <li>Ensure that the developing codebase conforms to best practices with regard to coding standards.</li>
              <li>A/B tested multiple CTA components and improved conversions by 23%</li>
            </ul>
          </div>
        </div>
        <div class="job__container" style="background: rgb(57, 73, 171);">
          <div class="job">
            <div class="job__header">
              <h3>Recovery Brands</h3>
              <h4>Frontend Engineer</h4>
            </div>
            <div class="job__date">May 2013 to June 2017</div><br>
            <p class="job__paragraph">Add features and fix bugs for Recovery Brands network of websites.</p>
            <ul class="job__list">
              <li>Built "Recovery Brands" Sass framework, its automated build process, and documentation.</li>
              <li>Implemented structured data markup across multiple websites of "Recovery Brands" network, which led to a 5% increase in CTR.</li>
              <li>Consistently took part in adding new features for a network of 20+ WordPress websites (such as Rehabs.com) with a total amount of 5m+ visitors per month.</li>
              <li>Ran workshops and talks on CSS &amp; Sass architecture for the team of 5 frontend developers.</li>
            </ul>
          </div>
        </div>
      <div class="job__container" style="background: rgb(229, 57, 53);">
        <div class="job">
          <div class="job__header"><h3>Udacity</h3><h4>Frontend Developer [Remote]</h4></div>
          <div class="job__date">April 2016 to August 2016</div><br>
            <p class="job__paragraph">Sass architecture and development of Udacity Blitz React app.</p>
            <ul class="job__list"><li>Frontend Sass development with the focus on reusability and cross-browser compatibility.</li>
              <li>Implemented the Udacity Blitz UI kit using Sass.</li><li>Implemented UI atoms.</li>
            </ul>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Card'
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

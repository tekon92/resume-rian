import Vue from 'vue'
import Router from 'vue-router'
import Story from './views/Story.vue'
import Home from './views/Home.vue'
// import Card from './components/Card'

Vue.use(Router)

import BlogEntries from './statics/data/blogs.json'

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`./markdowns/${section}/${child.id}.md`)
  }))
  return {
    path: `/${section}`,
    name: section,
    component: () => import(`./views/Blog.vue`),
    children
  }
})



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // children: [
      //   {
      //     path: '',
      //     component: Story
      //   }
      // ]
    },
    {
      path: '/stories',
      name: 'Story',
      component: Story
    },
    ...blogRoutes
  ]
})

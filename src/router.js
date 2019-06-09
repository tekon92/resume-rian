import Vue from 'vue'
import Router from 'vue-router'
import Story from './views/Story.vue'
import Home from './views/Home.vue'
import Education from './views/Education.vue'
import PDFGen from './components/PDFgen.vue'
import Editor from './views/Editor.vue'

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
    },
    {
      path: '/🎒',
      name: 'education',
      component: Education
    },
    {
      path: '/award',
      name: 'award',
      component: Education
    },
    {
      path: '/📧',
      name: 'contact',
      component: Education
    },
    {
      path: '/pdf',
      name: 'pdf',
      component: PDFGen
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    },
    {
      path: '/💻',
      name: 'Story',
      component: Story
    },
    ...blogRoutes
    ,{
      path: '*',
      redirect: '/'
    }
  ]
})

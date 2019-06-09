<template>
  <div id="app">
    <textarea v-model="input" @input="update"></textarea>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
// var marked = require('marked')
import marked from 'marked'
import _ from 'lodash'

export default {
  name: 'editor',
  data() {
    return {
     input: '# hello' 
    }
  },
  computed: {
    compiledMarkdown () {
      console.log(this.input)
      console.log(this.getNumber(this.input))

      return marked(this.input, { sanitize: true})
    }
  },
  methods: {
    update () {
      _.debounce(function (e) {
        this.input = e.target.value
      }, 300)
    },
    getNumber(input) {
      let regex = /[-]{0,1}[\d]*[\.]{0,1}[\d]+/g 
      return input.match(regex)
    }
  }
}
</script>

<style scoped>
html, body, #app {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

textarea, #app div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>

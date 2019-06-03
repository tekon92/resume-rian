<template>
  <div class="vuepdf">
    <h1>{{ msg }}</h1>
    <div id="pdf">
      <button v-on:click="pdfgen">Generate PDF</button>
    </div>
  </div>
</template>

<script>
import RESUMEENTRIES from '@/statics/data/resume.json'
var pdfMake = require('pdfmake/build/pdfmake')
var pdfFont = require('pdfmake/build/vfs_fonts')

export default {
  name: 'pdfgen',
  props: {
    msg: String
  },
  computed: {
    resume () {
      return RESUMEENTRIES
    }
  },
  methods: {
    pdfgen () {
      if (pdfMake.vfs === undefined) {
        pdfMake.vfs = pdfFont.pdfMake.vfs
      }
      // var name = this.resume.basic.name
      
      var docDefinition = {
        content: [
          {
            text: this.resume.basic.name,
            style: 'header',
            alignment: 'center'
          },
          {
            text: this.resume.basic.location.city + ' - ' + this.resume.basic.location.country,
            style: 'subheader',
            alignment: 'center'
          },
          {
            text: 'Email:'+ this.resume.basic.email +' | '+ 'Phone: '+ this.resume.basic.phone,
            style: 'small',
            alignment: 'center'
          },
          {
            text: '===========================================================================',
            style: 'small',
            alignment: 'center'
          },
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            alignment: 'justify'
          },
          subheader: {
            fontSize: 15,
            bold: true
          },
          quote: {
            italics: true
          },
          small: {
            fontSize: 8
          }
        }
      }
      pdfMake.createPdf(docDefinition).download('optionalName.pdf')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

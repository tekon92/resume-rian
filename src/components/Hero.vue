<template>
  <div class="hero">
      <h1 class="hero__header">{{ resume.basic.name }}</h1>
      <h4 class="hero__subheader">{{ resume.basic.location.city }} - {{ resume.basic.location.country }}<span role="img" aria-label="Sun">☀️</span></h4>
      <p>{{ resume.basic.label}}</p>
      <p class="hero__text">
        <a href="#" v-on:click="pdfgen">PDF version</a> of the resume.
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
import { isNullOrUndefined } from 'util';
var pdfMake = require('pdfmake/build/pdfmake')
var pdfFont = require('pdfmake/build/vfs_fonts')

export default {
  name: 'Hero',
  computed: {
    resume() {
      return RESUMEENTRIES
    }
  },
  methods : {
    pdfgen () {
      var bio = this.resume.basic
      var work = this.resume.work
      var edu = this.resume.education
      
      var style = {
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

      var header =  [
          {
            text: bio.name,
            style: 'header',
            alignment: 'center'
          },
          {
            text: bio.location.city + ' - ' + bio.location.country,
            style: 'subheader',
            alignment: 'center'
          },
          {
            text: 'Email:'+ bio.email +' | '+ 'Phone: '+ bio.phone,
            style: 'small',
            alignment: 'center'
          },
          {
            text: '===========================================================================',
            style: 'small',
            alignment: 'center'
          },
          {
            stack: [
              bio.label, 
              {
                text: bio.summary,
                style: 'small'
              },
            ]
          },
          {
            stack: [
              'WORK EXPERIANCE',
              {
                text: '===========================================================================',
                style: 'small'
              }
            ]
          }
        ]
      

      // need to improve using dynamic
      var workQ = []
        for (var a = 0; a < work.length; a++){
          workQ += "{ \"stack\":[\"" + work[a].company+ "\",\"" + work[a].position+"\",\""+work[a].startDate+" - "+work[a].endDate+"\",\""+work[a].summary+"\",{ \"ol\": ["
        for (var b = 0; b < Object.keys(work[a].highlights).length; b++) {
          workQ += "\"" + Object.keys(work[a].highlights)[b]+ " : " + work[a].highlights[Object.keys(work[a].highlights)[b]]+"\","
          }
          workQ += "]}]},"
        }

      if (pdfMake.vfs === undefined) {
        pdfMake.vfs = pdfFont.pdfMake.vfs
      }
      // var name = this.resume.basic.name
      
      var docDefinition = {
        content: [
          {
            text: bio.name,
            style: 'header',
            alignment: 'center'
          },
          {
            text: bio.location.city + ' - ' + bio.location.country,
            style: 'subheader',
            alignment: 'center'
          },
          {
            text: 'Email:'+ bio.email +' | '+ 'Phone: '+ bio.phone,
            style: 'small',
            alignment: 'center'
          },
          {
            text: '===========================================================================',
            style: 'small',
            alignment: 'center'
          },
          {
            stack: [
              bio.label, 
              {
                text: bio.summary,
                style: 'small'
              },
            ],
            style: 'superMargin'
          },
          {
            stack: [
              'WORK EXPERIANCE',
              {
                text: '====================================',
                style: 'small'
              },
            ],
            style: 'notSuperMargin'
          },
          { stack:["PT.Tech Mahindra Indonesia","Software Developer","July 2015 - Now","Various Projects utilizing (Greenplum - PosgtreSQL, Oracle, Shell Script, IBM DataStage, and SAP BusinessObject also DWH day to day basis monitoring.",{ ol: ["Time Commitment : Generate Bonus (Chest) for retailer each they passed the threshold on certain periode/season.","Treasure Chest : Generate Bonus (Chest) for retailer each they passed the threshold.","CENO : Generate Data from multiple source system, transform raw data, and dump the transoformized data into files.","Customer Segmentation : Create segmentation for subscribers based on their ARPU (Average Revenue per User).","Customer360 : this project was build to give 360 view about customers. we design this apps to works with machine learning. the database was built using greenplum postgresql, r language for the machine learning, dashboard that built on desktop and mobile.","Database Migration : Upgrading our old greenplum db version to the latest one. i manage to mapping table that we use, manage to check the capability of our environment, analyze which table that can be migrated first (partition table) and table that needs to be migrated the same date with migration date.","Angie2 Mobile Apps : (mobile application for retailer). we create this app so our client (hutchinson Indonesia) can track their retailer transaction and trends. i managed to design the ETL job to provide the data real time, database that we used is oracle","Hadoop Instalation : on this assignment, i need to do some research about hadoop hortonworks. the capability of their big data storage wether can give benefit to our next project. HDP hortonworks was installed on 3 server, 1 master and 2 slaves",]}], style: 'contentWithMargin'},
          { stack:["PT. Growinc Indonesia","Fullstack Engineer","October 2014 - May 2015","Various projects utilizing Laravel, JS, CSS.",{ ol: ["Yukbaca.co.id : Create Yukbaca.co.id, An book writing platform, and an online storefront where you can buy our authors' books.","suara.merah.putih.com : Blog Platform and online publication.",]}], style: 'contentWithMargin'},
          { stack:["customkita.com","Frontend Developer","September 2013 - January 2014","working as an internee to handle front end of online marketplace for custom products.",{ ol: ["0 : Frontend Sass development with the focus on reusability and cross-browser compatibility.","1 : OpenCart implementations.","2 : CSS and Javascript Improvement.",]}], style: 'contentWithMargin'}, 
          {
            stack: [
              'EDUCATION',
              {
                text: '====================================',
                style: 'small'
              },
            ],
            style: 'notSuperMargin'
          },
          {
            stack: [
              {
                text: edu.company,
                style: 'superMargin'
              },
              edu.position,
              edu.startDate+" - "+edu.endDate
            ],
            style: 'contentWithMargin'
          },
          {
            stack: [
              'CONTACT',
              {
                text: '====================================',
                style: 'small'
              },
            ],
            style: 'notSuperMargin'
          },
          {
            stack: [
              "Phone :" + bio.phone,
              "Email :" + bio.email,
              "Website :" + bio.website
            ],
            style: 'contentWithMargin'
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
          },
          superMargin: {
            margin: [0, 20, 0, 10],
            fontSize: 15
          },
          notSuperMargin: {
            margin: [0, 10, 0, 10],
            fontSize: 15
          },
          contentWithMargin: {
            margin: [0, 10, 0, 10],
            fontSize: 12
          }
        }
      }
  
  
      // var result = JSON.parse(s);
      // var jsonP = JSON.parse(s) 
      // var newObj = [...header, jsonP]
      // var intoObj = {"content": newObj}
      // var newStr = Object.assign(intoObj, style)
      
      // console.log(edu.company)
      pdfMake.createPdf(docDefinition).download('resume-rian.pdf')
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

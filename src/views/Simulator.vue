<template>
  <div>
    <!-- <Banner bannerImg="simulator_banner.png"></Banner> -->



    <div class="simulator-container justify-content-center container">
      <div class="row justify-content-center">

        <div class="col-8">

          <div class="img-container">


            <div v-show="!videoFeed">
              <div v-show="!simulatedState">
                <img v-show="imgInput" class="user-img fadeIn" :class="{ filterImg: loadingState }" :src="imgInput"
                  alt="InputImg" />
                <img v-show="!imgInput" class="user-img fadeIn" id="userImage" :class="{ filterImg: loadingState }"
                  :src="getUserInfo.userImgURL" alt="InputImg" />
              </div>
              <div v-show="simulatedState">
                <img :class="{ filterImg: loadingState }" class="user-img" v-if="imageSimulated"
                  :src="imageSimulated" />
              </div>
            </div>

            <div v-show="videoFeed">
              <img :class="{ filterImg: loadingState }" class="user-img" v-if="videoFeed" :src="vedioFeedSource" />
            </div>


          </div>
          <Loading :loadingState="loadingState"></Loading>


          <!-- <div class="all-container">
            <div class="selected-makeup" v-show="videoEyeshadowIcon">
              <div class="circle-img">
                <div class="cancel-lip-simulated">
                  <a @click="handleCancelVideo('eyeshadow')" class="cancel-icon"><i class="fas fa-times"></i></a>
                </div>
                <img v-if="videoEyeshadowIcon" class="selected-simu-img fadeIn" :src="eyeshadowSourceIcon" />

              </div>
            </div>

            <div class="selected-makeup" v-show="videoBlushIcon">
              <div class="circle-img">
                <div class="cancel-lip-simulated">
                  <a @click="handleCancelVideo('blush')" class="cancel-icon"><i class="fas fa-times"></i></a>
                </div>
                <img v-if="videoBlushIcon" class="selected-simu-img fadeIn" :src="blushSourceIcon" />

              </div>
            </div>

            <div class="selected-makeup" v-show="videoFoundationIcon">
              <div class="circle-img">
                <div class="cancel-lip-simulated">
                  <a @click="handleCancelVideo('foundation')" class="cancel-icon"><i class="fas fa-times"></i></a>
                </div>
                <img v-if="videoFoundationIcon" class="selected-simu-img fadeIn" :src="foundationSourceIcon" />

              </div>
            </div>

            <div class="selected-makeup" v-show="videoLipstickIcon">
              <div class="circle-img">
                <div class="cancel-lip-simulated">
                  <a @click="handleCancelVideo('lipstick')" class="cancel-icon"><i class="fas fa-times"></i></a>
                </div>
                <img v-if="videoLipstickIcon" class="selected-simu-img fadeIn" :src="lipstickSourceIcon" />

              </div>
            </div>

            <div class="selected-makeup" v-show="videoEyelinerIcon">
              <div class="circle-img">
                <div class="cancel-lip-simulated">
                  <a @click="handleCancelVideo('eyeliner')" class="cancel-icon"><i class="fas fa-times"></i></a>
                </div>
                <img v-if="videoEyelinerIcon" class="selected-simu-img fadeIn" :src="eyelinerSourceIcon" />

              </div>
            </div>

            <div class="selected-makeup" v-show="videoConcealerIcon">
              <div class="circle-img">
                <div class="cancel-lip-simulated">
                  <a @click="handleCancelVideo('concealer')" class="cancel-icon"><i class="fas fa-times"></i></a>
                </div>
                <img v-if="videoConcealerIcon" class="selected-simu-img fadeIn" :src="concealerSourceIcon" />

              </div>
            </div>
            <div class="selected-makeup" v-show="videoLensIcon">
              <div class="circle-img">
                <div class="cancel-lip-simulated">
                  <a @click="handleCancelVideo('lens')" class="cancel-icon"><i class="fas fa-times"></i></a>
                </div>
                <img v-if="videoLensIcon" class="selected-simu-img fadeIn" :src="lensSourceIcon" />

              </div>
            </div>

          </div> -->

          <!-- <div class="selected-makeup" v-show="!videoFeed">
            <div class="circle-img">
              <div v-if="getMakeupSimulator" class="cancel-lip-simulated">
                <a @click="handleCancelSimulated" class="cancel-icon"><i class="fas fa-times"></i></a>
              </div>
              <img v-if="getMakeupSimulator" class="selected-simu-img fadeIn"
                :src="getMakeupSimulator.api_image_link ? splitImageURL(getMakeupSimulator.api_image_link) : getMakeupSimulator.image_link" />
              <div v-show="!getMakeupSimulator" class="selected-simu-img empty">
                <i class="fas fa-magic"></i>
              </div>
            </div>


          </div> -->
          <div class="butts2">

            <div class="level-lip-bar" v-if="simulatedState && getMakeupSimulator && !loadingState">

              <button type="button" class="level-btn" @click="makeupSimulatedLevel(0)"
                :class="{ selectedLevel: simulatedLevel === 0 }" :style="[
              getMakeupSimulator
                ? { background: 'rgb' + getMakeupSimulator.rgb_value + ' !important' }
                : '',
            ]"></button>
              <button type="button" class="level-btn medium" @click="makeupSimulatedLevel(1)"
                :class="{ selectedLevel: simulatedLevel === 1 }" :style="[
              getMakeupSimulator
                ? { background: 'rgb' + getMakeupSimulator.rgb_value + ' !important' }
                : '',
            ]"></button>
              <button type="button" class="level-btn light" @click="makeupSimulatedLevel(2)"
                :class="{ selectedLevel: simulatedLevel === 2 }" :style="[
              getMakeupSimulator
                ? { background: 'rgb' + getMakeupSimulator.rgb_value + ' !important' }
                : '',
            ]"></button>
            </div>
          </div>

          <div class="butts">

            <div class="change-cam">
              <UploadImageModal class="change-img-btn" titleButton="تعویض تصویر"></UploadImageModal>
              <button class="change-cam-btn" v-show="!videoFeed" @click="openCam"> دوربین</button>
              <button class="change-cam-btn" v-show="videoFeed" @click="closeCam">بستن دوربین</button>
            </div>
            <div class="img-profile-btn">
            </div>

          </div>

        </div>
        <div class="col-4">
          <SimulatorTab></SimulatorTab>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  // import Banner from '@/components/main/Banner.vue';
  import UploadImageModal from '@/components/main/UploadImageModal.vue';
  import SimulatorTab from '@/components/simulator/SimulatorTab.vue';
  import Loading from '@/components/main/Loading.vue';
  import {
    mapGetters
  } from 'vuex';
  import axios from 'axios';

  export default {
    components: {
      // Banner,
      UploadImageModal,
      SimulatorTab,
      Loading,
    },
    data() {
      return {
        imgUser: 'user.jpg',
        imgInput: '',
        imageSimulated: null,
        loadingState: false,
        simulatedState: false,
        simulatedLevel: 1,
        videoFeed: false,

        videoEyeshadowIcon: false,
        eyeshadowSourceIcon: "",

        videoBlushIcon: false,
        blushSourceIcon: "",

        videoFoundationIcon: false,
        foundationSourceIcon: "",

        videoLipstickIcon: false,
        lipstickSourceIcon: "",

        videoEyelinerIcon: false,
        eyelinerSourceIcon: "",

        videoConcealerIcon: false,
        concealerSourceIcon: "",

        videoLensIcon: false,
        lensSourceIcon: "",

        vedioFeedSource: ""

      };
    },
    beforeCreate() {
      this.$store.dispatch('updateMakeupState', null);
      this.$store.dispatch('updateMakeupSimulator', null);
    },
    computed: {
      ...mapGetters([
        'getImageUpload',
        'getFileUpload',
        'getMakeupSimulator',
        'getMakeupSimulatedImage',
        'getMakeupState',
        'getUserInfo',
      ]),
    },
    methods: {
      async openCam() {
        this.handleCancelSimulated()
        this.loadingState = true;
        await axios.get("opencam");
        this.vedioFeedSource = "http://localhost:5000/api/video_feed?" + new Date().getTime()
        this.loadingState = false;
        this.videoFeed = true
        console.log(this.videoFeed)
      },
      async closeCam() {
        this.videoFeed = false
        this.videoEyeshadowOff();
        this.videoEyeshadowIcon = false;
        this.eyeshadowSourceIcon = ""

        this.videoBlushOff();
        this.videoBlushIcon = false;
        this.blushSourceIcon = ""

        this.videoFoundationOff();
        this.videoFoundationIcon = false;
        this.foundationSourceIcon = ""

        this.videoLipstickOff();
        this.videoLipstickIcon = false;
        this.lipstickSourceIcon = ""

        this.videoEyelinerOff();
        this.videoEyelinerIcon = false;
        this.eyelinerSourceIcon = ""

        this.videoConcealerOff();
        this.videoConcealerIcon = false;
        this.concealerSourceIcon = ""

        this.videoLensOff();
        this.videoLensIcon = false;
        this.lensSourceIcon = ""


        console.log(this.videoFeed)
        this.vedioFeedSource = ""
        await axios.get("closecam", {});
        this.$store.dispatch('updateMakeupSimulator', null);
        this.$store.dispatch('updateMakeupState', '');
        this.simulatedState = false;
        this.imageSimulated = null;
      },







      createFormData(form) {
        console.log("colorsssssssssss")
        console.log(form.r_value)
        var data = {
          'user_id': form.userID,
          'r_value': form.r_value,
          'g_value': form.g_value,
          'b_value': form.b_value
        }
        return data
      },
      createFormDataLip(form) {
        console.log("colorsssssssssss")
        console.log(form.r_value)
        var data = {
          'user_id': form.userID,
          'r_value': form.r_value,
          'g_value': form.g_value,
          'b_value': form.b_value,
          'l_type': form.l_type,
          'gloss': form.gloss
        }
        return data
      },
      getIconImage() {
        var iconSource
        if (this.getMakeupSimulator.api_image_link) {
          iconSource = this.splitImageURL(this.getMakeupSimulator.api_image_link)
        } else {
          iconSource = this.getMakeupSimulator.image_link
        }
        return iconSource
      },

      async videoEyeshadow(form) {
        console.log("videEyeshadow")
        await axios.post("video/eyeshadow", this.createFormData(form));
        this.eyeshadowSourceIcon = this.getIconImage()
        this.videoEyeshadowIcon = true
      },
      async videoEyeshadowOff() {
        console.log("videEyeshadowOff")
        await axios.get("video_off/eyeshadow");
        this.eyeshadowSourceIcon = ""
        this.videoEyeshadowIcon = false
      },

      async videoBlush(form) {
        console.log("videBlush")
        await axios.post("video/blush", this.createFormData(form));
        this.blushSourceIcon = this.getIconImage()
        this.videoBlushIcon = true
      },

      async videoBlushOff() {
        console.log("videBlushOff")
        await axios.get("video_off/blush");
        this.blushSourceIcon = ""
        this.videoBlushIcon = false
      },

      async videoFoundation(form) {
        console.log("videFoundation")
        await axios.post("video/foundation", this.createFormData(form));
        this.foundationSourceIcon = this.getIconImage()
        this.videoFoundationIcon = true
      },


      async videoFoundationOff() {
        console.log("videFoundationOff")
        await axios.get("video_off/foundation");
        this.foundationSourceIcon = ""
        this.videoFoundationIcon = false
      },


      async videoLipstick(form) {
        console.log("videLip")
        await axios.post("video/lipstick", this.createFormDataLip(form));
        this.lipstickSourceIcon = this.getIconImage()
        this.videoLipstickIcon = true
      },


      async videoLipstickOff() {
        console.log("videlipOff")
        await axios.get("video_off/lipstick");
        this.lipstickSourceIcon = ""
        this.videoLipstickIcon = false
      },



      async videoEyeliner(form) {
        console.log("videeyeliner")
        await axios.post("video/eyeliner", this.createFormData(form));
        this.eyelinerSourceIcon = this.getIconImage()
        this.videoEyelinerIcon = true
      },


      async videoEyelinerOff() {
        console.log("videeyelinerOff")
        await axios.get("video_off/eyeliner");
        this.eyelinerSourceIcon = ""
        this.videoEyelinerIcon = false
      },


      async videoConcealer(form) {
        console.log("videconcealer")
        await axios.post("video/concealer", this.createFormData(form));
        this.concealerSourceIcon = this.getIconImage()
        this.videoConcealerIcon = true
      },


      async videoConcealerOff() {
        console.log("videeconcealerOff")
        await axios.get("video_off/concealer");
        this.concealerSourceIcon = ""
        this.videoConcealerIcon = false
      },


      async videoLens(form) {
        console.log("videlens")
        await axios.post("video/lens", this.createFormData(form));
        this.lensSourceIcon = this.getIconImage()
        this.videoLensIcon = true
      },


      async videoLensOff() {
        console.log("videelensOff")
        await axios.get("video_off/lens");
        this.lensSourceIcon = ""
        this.videoLensIcon = false
      },







      changeToUserImg() {
        this.imgInput = '';
      },
      splitImageURL(url) {
        if (url) {
          return 'http://' + url.substring(2, url.length - 1);
        }
      },
      handleCancelSimulated() {
        this.$store.dispatch('updateMakeupSimulator', null);
        this.$store.dispatch('updateMakeupState', '');
        this.simulatedState = false;
        this.imageSimulated = null;
      },
      handleCancelVideo(makeupType) {
        this.$store.dispatch('updateMakeupSimulator', null);
        this.$store.dispatch('updateMakeupState', '');
        this.simulatedState = false;
        this.imageSimulated = null;
        if (makeupType == 'eyeshadow') {
          this.videoEyeshadowOff();
          this.videoEyeshadowIcon = false;
          this.eyeshadowSourceIcon = ""
        }
        if (makeupType == 'blush') {
          this.videoBlushOff();
          this.videoBlushIcon = false;
          this.blushSourceIcon = ""
        }
        if (makeupType == 'foundation') {
          this.videoFoundationOff();
          this.videoFoundationIcon = false;
          this.foundationSourceIcon = ""
        }
        if (makeupType == 'lipstick') {
          this.videoLipstickOff();
          this.videoLipstickIcon = false;
          this.lipstickSourceIcon = ""
        }

        if (makeupType == 'eyeliner') {
          this.videoEyelinerOff();
          this.videoEyelinerIcon = false;
          this.eyelinerSourceIcon = ""
        }

        if (makeupType == 'concealer') {
          this.videoConcealerOff();
          this.videoConcealerIcon = false;
          this.concealerSourceIcon = ""
        }

        if (makeupType == 'lens') {
          this.videoLensOff();
          this.videoLensIcon = false;
          this.lensSourceIcon = ""
        }
      },
      readFileImg(imgRes) {
        var reader = new window.FileReader();
        reader.readAsDataURL(imgRes);
        reader.onload = () => {
          this.imageSimulated = reader.result;
        };
      },
      async imageSrcToFile(src) {
        let res = await fetch(src);
        let buff = await res.arrayBuffer();
        return new File([buff], 'simulator_input.jpg', {
          type: 'image/jpeg'
        });
      },
      spilitRgbColor(rgb) {
        const getRgb = rgb.substring(1, rgb.length - 1);
        const rgbArr = getRgb.split(', ');
        return rgbArr;
      },
      makeupSimulatedLevel(level) {
        this.imageSimulated = 'data:image/png;base64, ' + this.getMakeupSimulatedImage[level];
        this.simulatedLevel = level;
      },
    },
    watch: {
      getImageUpload: {
        async handler(val) {
          if (val) {
            this.simulatedState = false;
            this.loadingState = false;
            this.imgInput = val;
            this.$store.dispatch('updateMakeupState', '');
            this.$store.dispatch('updateMakeupSimulator', null);
          }
        },
        deep: true,
      },
      getMakeupSimulator: {
        async handler(val) {
          if (val) {
            this.loadingState = true;
            let form = {
              userID: 123,
              r_value: parseInt(this.spilitRgbColor(val.rgb_value)[0]),
              g_value: parseInt(this.spilitRgbColor(val.rgb_value)[1]),
              b_value: parseInt(this.spilitRgbColor(val.rgb_value)[2]),
            };

            if (this.getMakeupState === 'Lip') {

              let form2 = {
                gloss: val.gloss,
                l_type: val.l_type
              }
              console.log("///////////////////////////////")
              console.log(form)
              form = Object.assign(form2, form)
            }
            console.log(val.rgb_value);
            console.log(this.videoFeed);

            if (!this.videoFeed) {
              if (this.getFileUpload) {
                form.fileUpload = await this.getFileUpload;
              } else {
                let src = document.getElementById('userImage').src;
                form.fileUpload = await this.imageSrcToFile(src);
              }
              console.log("??????????????????")
              console.log(this.getMakeupState);

              if (this.getMakeupState === 'Eyeshadow') {
                await this.$store.dispatch('loadEyeshadowSimulated', form);
              } else if (this.getMakeupState === 'Blush') {
                console.log("sim bl")
                await this.$store.dispatch('loadBlushSimulated', form);
              } else if (this.getMakeupState === 'Foundation') {
                console.log("sim fon")
                await this.$store.dispatch('loadFoundationSimulated', form);
              } else if (this.getMakeupState === 'Lip') {
                console.log("sim lip")
                await this.$store.dispatch('loadLipSimulated', form);
              } else if (this.getMakeupState === 'Eyeliner') {
                await this.$store.dispatch('loadEyelinerSimulated', form);
              } else if (this.getMakeupState === 'Concealer') {
                await this.$store.dispatch('loadConcealerSimulated', form);
              } else if (this.getMakeupState === 'Lens') {
                await this.$store.dispatch('loadLensSimulated', form);
              }


              if (this.getMakeupSimulatedImage) {
                this.imageSimulated = 'data:image/png;base64, ' + this.getMakeupSimulatedImage[1];
              }
            }
            // ---------- handle vide feed ----------
            if (this.videoFeed) {
              console.log("state:  ")
              console.log(this.getMakeupState)
              if (this.getMakeupState === 'Eyeshadow') {

                await this.videoEyeshadow(form)
              }
              if (this.getMakeupState === 'Blush') {
                await this.videoBlush(form)
              }

              if (this.getMakeupState === 'Foundation') {
                await this.videoFoundation(form)
              }

              if (this.getMakeupState === 'Lip') {
                await this.videoLipstick(form)
              }

              if (this.getMakeupState === 'Eyeliner') {
                await this.videoEyeliner(form)
              }


              if (this.getMakeupState === 'Concealer') {
                await this.videoConcealer(form)
              }

              if (this.getMakeupState === 'Lens') {
                await this.videoLens(form)
              }


            }
            this.loadingState = false;
            this.simulatedState = true;
          }
        },
        deep: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  button {
    outline: none;
  }



  .all-container {
    display: flex;
    flex-direction: column;
    ;
    justify-content: center;
  }

  .selected-makeup {
    display: flex;
    justify-content: center;
  }

  .container2 {
    display: flex;
    justify-content: center;
    width: 800px // width: 100%
  }

  .circle-img {
    position: relative;
    width: 8rem;
    height: 8rem;
    background: #ffffff;
    display: none;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 50%;
    border: 3px solid #cfcfcf;
    margin: 0.5rem;
    flex-direction: column;
  }

  .selected-simu-img {
    height: 4rem;
    font-size: 3rem;
    max-width: 100%;
    color: #cfcfcf;
  }

  .img-profile-btn {
    display: flex;
    justify-content: flex-end;
    font-size: 0.8rem;
    text-decoration: underline;
    margin-top: 0.5rem;
  }

  .change-img-btn {
    // position: absolute;
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  }

  .change-cam {
    padding-top: 30px;
    position: absolute;
    display: flex;
    flex-direction: column;
    // justify-content: flex-end;
    margin-top: 1rem;
  }

  .change-cam-btn {
    margin-top: 10px;
    background: rgb(255, 229, 221);
    background: linear-gradient(90deg, rgba(255, 229, 221, 1) 0%, rgba(255, 188, 185, 1) 100%);
    border: 0px solid #d1d1d1;
    border-radius: 0 30px 30px 0px;
    width: 180px;
    padding: 0.5rem 1rem;
    color: #bb5050;
  }

  .user-img-link {
    cursor: pointer;
    color: #2f4858;
  }

  .container {
    margin-top: 30px;
    max-width: 1400px;
    border: 1px solid rgb(231, 231, 231);
  }

  .butts {
    position: absolute;
    top: 70vh
  }

  .butts2 {
    position: absolute;
    top: 2vh
  }

  .col-4 {
    padding: 0px;

  }

  .col-8 {
    position: relative;
    padding: 0px;
    height: 90vh;
  }

  .img-container {
    // margin-top: 44px;
    // display: flex;
    // // justify-content: center;
    // align-items: center;
    // overflow: hidden;
    // width: 100%;
  }

  .user-img {
    // width:60vw;
    // height: 35rem;
    object-fit: cover;

    width: 100%;
    height: 90vh;
    // max-height: 100%;
    // display: block; 
    // min-height: 100%
  }

  .filterImg {
    filter: blur(2px);
    -webkit-filter: blur(2px);
  }



  .selected-simu-img {
    border-radius: 50%;
  }

  .cancel-lip-simulated {
    margin-top: 1rem;
    margin-right: -3.5rem;
    display: flex;
    height: 100%;
    position: absolute;
  }

  .cancel-icon {
    color: #cfcfcf;
    cursor: pointer;

    &:hover {
      color: #db141a;
    }
  }

  .level-lip-bar {
    // padding-top: 30px;
    // position: absolute;
    padding: 30 px;
    margin-left: 10px;
    border-radius: 20px;
    display: flex;
    background: #fff;
    flex-direction: row;
    justify-content: center;
  }

  .level-btn {
    margin-bottom: 1rem;
    margin: 15px;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 2px solid transparent;
  }

  .medium {
    opacity: 0.7;
  }

  .light {
    opacity: 0.5;
  }

  .selectedLevel {
    border-color: #000 !important;
  }
</style>
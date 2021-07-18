<template>
  <div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <!-- <li class="nav-item" role="presentation">
        <a
          class="nav-link lips-link"
          :class="{ active: simulatorActive }"
          @click="handlSimuColActive"
          >Simulator collection</a
        >
      </li> -->
      <!-- <li class="nav-item" role="presentation">
        <a class="nav-link" :class="{ active: likedActive }" @click="handleLikedActive">
          <i class="like-icon heart-red fas fa-heart"></i>
          Liked
        </a>
      </li> -->
      <li class="nav-item" role="presentation">
        <a class="nav-link" :class="{ active: skinActive }" @click="handleSkinActive"
          ><img class="icon-tab" src="@/assets/images/cream.png"/>
        </a>
      </li>

      <li class="nav-item" role="presentation">
        <a class="nav-link" :class="{ active: cheekActive }" @click="handleCheeckActive"
          ><img class="icon-tab" src="@/assets/images/brush.png"/>
        </a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link lips-link" :class="{ active: lipsActive }" @click="handleLipsActive"
          ><img class="icon-tab" src="@/assets/images/lips.png"/>
        </a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link lips-link" :class="{ active: eyeshadowActive }" @click="handleEyeshadowActive"
          ><img class="icon-tab" src="@/assets/images/eye-shadow.png"/>
        </a>
      </li>
        <li class="nav-item" role="presentation">
        <a class="nav-link lips-link" :class="{ active: eyelinerActive }" @click="handleEyelinerActive"
          ><img class="icon-tab" src="@/assets/images/eyeliner.png"/>
        </a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link lips-link" :class="{ active: concealerActive }" @click="handleConcealerActive"
          ><img class="icon-tab" src="@/assets/images/powder.png"/>
        </a>
      </li>

        <li class="nav-item" role="presentation">
        <a class="nav-link lips-link" :class="{ active: lensActive }" @click="handleLensActive"
          ><img class="icon-tab" src="@/assets/images/makeup.png"/>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <!-- <div class="tab-pane lips-pane" :class="[simulatorActive ? 'active' : 'd-none']"></div> -->
      <div class="tab-pane" :class="[skinActive ? 'active' : 'd-none']">
        <LikedTab :skinState="true" ><div class="title">کرم پودر</div></LikedTab>
      </div>
      <div class="tab-pane" :class="[cheekActive ? 'active' : 'd-none']">
        <LikedTab :blushState="true" ><div class="title">رژ گونه</div></LikedTab>
      </div>
      <div class="tab-pane" :class="[lipsActive ? 'active' : 'd-none']">
        <LikedTab :lipsState="true"><div class="title">رژلب</div></LikedTab>
      </div>
        <div class="tab-pane" :class="[eyeshadowActive ? 'active' : 'd-none']">
        <LikedTab :eyeshadowState="true"><div class="title">سایه چشم</div></LikedTab>
      </div>
        <div class="tab-pane" :class="[eyelinerActive ? 'active' : 'd-none']">
        <LikedTab :eyelinerState="true"><div class="title">خط چشم</div></LikedTab>
      </div>
        <div class="tab-pane" :class="[concealerActive ? 'active' : 'd-none']">
        <LikedTab :concealerState="true"><div class="title">کانسیلر</div></LikedTab>
      </div>

      <div class="tab-pane" :class="[lensActive ? 'active' : 'd-none']">
        <LikedTab :lensState="true"><div class="title">لنز</div></LikedTab>
      </div>
    </div>
  </div>
</template>

<script>
import LikedTab from '@/components/simulator/LikedTab.vue';

export default {
  components: {
    LikedTab,
  },
  data() {
    return {
      simulatorActive: false,
      likedActive: true,
      skinActive: true,
      cheekActive: false,
      lipsActive: false,
      eyeshadowActive: false,
      eyelinerActive: false,
      concealerActive: false, 
      lensActive:false
    };
  },
  methods: {
    handlSimuColActive() {
      this.simulatorActive = true;
      this.likedActive = false;
    },
    handleLikedActive() {
      this.simulatorActive = false;
      this.likedActive = true;
    },
    handleCheeckActive() {
      this.lipsActive = false;
      this.cheekActive = true;
      this.skinActive = false;
      this.eyeshadowActive = false;
      this.eyelinerActive = false;
      this.concealerActive = false;
      this.lensActive =false;
    },
    handleSkinActive() {
      this.lipsActive = false;
      this.cheekActive = false;
      this.skinActive = true;
      this.eyeshadowActive = false;
      this.eyelinerActive = false;
      this.concealerActive = false;
      this.lensActive =false;
      
    },
    handleLipsActive() {
      this.lipsActive = true;
      this.cheekActive = false;
      this.skinActive = false;
      this.eyeshadowActive = false;
      this.eyelinerActive = false;
      this.concealerActive = false;
      this.lensActive =false;
    },
    handleEyeshadowActive() {
      this.lipsActive = false;
      this.cheekActive = false;
      this.skinActive = false;
      this.eyeshadowActive = true;
      this.eyelinerActive = false;
      this.concealerActive = false;
      this.lensActive =false;
    },
    handleEyelinerActive() {
      this.lipsActive = false;
      this.cheekActive = false;
      this.skinActive = false;
      this.eyeshadowActive = false;
      this.eyelinerActive = true;
      this.concealerActive = false;
      this.lensActive =false;
    },
    handleConcealerActive() {
      this.lipsActive = false;
      this.cheekActive = false;
      this.skinActive = false;
      this.eyeshadowActive = false;
      this.eyelinerActive = false;
      this.concealerActive = true;
      this.lensActive =false;
    },

    handleLensActive() {
      this.lipsActive = false;
      this.cheekActive = false;
      this.skinActive = false;
      this.eyeshadowActive = false;
      this.eyelinerActive = false;
      this.concealerActive = false;
      this.lensActive =true;
    },
  },
};
</script>

<style scoped>
a.nav-link {
  cursor: pointer;
  color: #222;
  font-size: 1.1rem;
}
.title{
  color: white;

}

.tab-pane {
  height: 84.9vh;
  background: #c98fa2;
  /* border: 1px solid transparent; */
  border-color: #ffffff #dee2e6 #dee2e6 #dee2e6;
  padding: 2rem 1rem;
}

.icon-tab {
  width: 2rem;
}
</style>

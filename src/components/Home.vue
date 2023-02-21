<script setup lang="ts">
import { ref, reactive } from 'vue'

import HeaderView from "../components/Header.vue";
import TabView from "../components/Tab.vue";
import UploadView from "../components/upload.vue";
import FeeView from "../components/Fee.vue";
import AddrView from "../components/Address.vue";
import ArchiveView from "../components/Archive.vue";

let state = reactive({ step: 0})

const RefChild = ref()

function updateTab(idx: number) {
  state.step = idx
}

function backAction() {
  state.step--
}

function toFee(idx: number) {
  state.step = idx
  RefChild.value.tabSwitchWithIdx(state.step)
}
</script>

<template>
  <HeaderView class="header-view"/>

  <div class="main-view">
    <TabView :cur-idx="state.step" ref="RefChild" @update-tab="updateTab" @back-action="backAction"/>

    <UploadView v-if="state.step == 0" class="upload-view" @update-tab="toFee"/>
    <FeeView v-else-if="state.step == 1" class="fee-view" />
    <AddrView v-else-if="state.step == 2" />
    <ArchiveView v-else-if="state.step == 3" />
  </div>
</template>

<style scoped>
.header-view {
  height: 91px;
  width: 100%;
}

.main-view {
  background-image: url(../assets/Background_texture@2x.png);
  background-repeat: repeat;
  min-height: 1000px
}

.upload-view {
    margin: 0 auto;
    width: 1200px;
}
</style>

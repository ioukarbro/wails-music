<template>
  <div class="common-layout">
    <el-container>
      <el-aside style="width: 200px">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#545c64"
        >
          <el-menu-item index="1" @click="handleRoute('home')">
            <el-icon>
              <HomeFilled/>
            </el-icon>
            <span>Home</span>
          </el-menu-item>
          <el-menu-item index="2" @click="handleRoute('search')">
            <el-icon>
              <search/>
            </el-icon>
            <span>Search</span>
          </el-menu-item>
          <el-menu-item index="3" @click="handleRoute('library')">
            <el-icon>
              <histogram/>
            </el-icon>
            <span>Your Library</span>
          </el-menu-item>
          <el-divider/>
          <el-menu-item index="4" @click="handleRoute('createPlaylist')">
            <el-icon>
              <histogram/>
            </el-icon>
            <span>Create Playlist</span>
          </el-menu-item>
          <el-menu-item index="5" @click="handleRoute('likedSongs')">
            <el-icon>
              <histogram/>
            </el-icon>
            <span>Liked Songs</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-page-header :icon="ArrowLeft" content="detail" style="float: left"/>
          <div style="float: right; cursor: pointer">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <el-avatar shape="square" :size="50" :src="squareUrl"/>
                <el-icon class="el-icon--right">
                  <arrow-down/>
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="handleRoute('account')">Account</el-dropdown-item>
                  <el-dropdown-item>Profile</el-dropdown-item>
                  <el-dropdown-item>Setting</el-dropdown-item>
                  <el-dropdown-item divided>Update now</el-dropdown-item>
                  <el-dropdown-item @click="greet">Log out</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer class="app-footer">
          <el-row :gutter="80">
            <el-col :span="6">
              <div style="cursor: pointer">
                <el-image style="float: left;width: 80px; height: 60px" src="../src/assets/images/maxresdefault.jpeg"
                          fit="contain"/>
                <div class="block" style="float: left; width: 80px;height: 60px">
                  <span style="word-break-wrap: none">Cheap Chills</span>
                  <span>Sia</span>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content ep-bg-purple"/>
              <div class="slider-demo-block">
              <span>
               <el-icon><ArrowLeftBold/></el-icon>
                <el-icon v-if="pause"><VideoPause/></el-icon>
                <el-icon v-if="!pause"><VideoPlay/></el-icon>
                <el-icon><ArrowRightBold/></el-icon>
              </span>
                <el-slider v-model="progress"/>
              </div>
            </el-col>
            <el-col :span="6">
              <div style="margin-left: 200px">
                <el-icon>
                  <Bell/>
                </el-icon>
                <el-slider v-model="volume" size="small"/>
              </div>
            </el-col>
          </el-row>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>


<script lang="ts" setup>
import {
  HomeFilled,
  Histogram,
  Search,
  VideoPause,
  VideoPlay,
  ArrowLeftBold,
  ArrowRightBold,
  Bell,
  ArrowDown,
  ArrowLeft,
} from '@element-plus/icons-vue'
import {reactive, toRefs} from 'vue'
import {useRouter} from 'vue-router'
import {Greet1} from '../../wailsjs/go/main/App'

// import album from '@/assets/56242da2a2903a36532d44dc7f953fbe.jpeg'
// const album = '~@/assets/56242da2a2903a36532d44dc7f953fbe.jpeg'
const router = useRouter()

function greet() {
  console.log(Greet1('aa'))
}
const handleRoute = (name: string) => {
  router.push({name})
}

const progress = ""
const volume = ""
const state = reactive({
  circleUrl:
      'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
      'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
  pause: true,
})
const {circleUrl, squareUrl, sizeList, pause} = toRefs(state)
</script>

<style scoped>
.app-footer {
  position: fixed;
  left: 0;
  bottom: 20px;
  width: 100%;
  color: white;
  text-align: center;
  /*margin-bottom: 10px;*/
}

.common-layout {
  margin: 10px;
}
</style>
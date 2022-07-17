<template>
  <el-table :data="songList" stripe style="width: 100%; background-color: #1b2636">
    <el-table-column label="#" width="20">
      <template #default="scope">{{ scope.$index + 1 }}</template>
    </el-table-column>
    <el-table-column prop="title" label="TITLE" width="180"/>
    <el-table-column prop="album" label="ALBUM" width="180"/>
    <el-table-column prop="period" label="TIME"/>
  </el-table>
</template>
<script lang="ts" setup>
const songList = [
  {
    title: 'Cheap Thrills',
    singer: 'Sia',
    cover: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    period: '3:32',
    album: 'This is Acting',
  },
  {
    title: 'Unstoppable',
    singer: 'Sia',
    cover: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    period: '3:38',
    album: 'This is Acting',
  },
  {
    title: 'Talking to the moon',
    singer: 'Bruno Mars',
    cover: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    period: '3:38',
    album: 'Doo-Wops & Hooligans',
  }
]
</script>
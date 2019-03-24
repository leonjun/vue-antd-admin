<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
      
    >
      <div class="logo">logo</div>
      <a-menu theme="dark" :openKeys="openKeys" defaultSelectedKeys="['0']"  mode="inline" @openChange="openChange">
    
        <template v-for="(item,index) in this.$router.options.routes">
          <template v-if="item.hasChild">
            <a-sub-menu :key="index">
            <span slot="title"><a-icon type="mail" /><span>{{item.name}}</span></span>
              <a-menu-item v-for="(itt) in item.children" :key="itt.name">
              {{itt.name}}
              </a-menu-item>
            </a-sub-menu>
          </template>
          <template v-else>
            <a-menu-item :key="index">
              <a-icon type="desktop" />
              <span>{{item.name}}</span>
            </a-menu-item>
          </template>

        </template>
        


        
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data(){
    return {
      collapsed: false,
      // rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
       openKeys:["2"]
    }
  },
  methods:{
     openChange (openKeys) {
       console.log(openKeys)
       this.openKeys = openKeys;
      // const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      // if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      //   this.openKeys = openKeys
      // } else {
      //   this.openKeys = latestOpenKey ? [latestOpenKey] : []
      // }
    },
  },
  mounted:function(){
    console.log(this.$router)
  }
}
</script>
<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  color: white;
  text-align: center;
  margin: 16px;
}
.ant-layout{
  height: 100%;
}
</style>
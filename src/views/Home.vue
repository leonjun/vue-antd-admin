<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
      
    >
      <div class="logo">logo</div>
      <a-menu 
      
       @click="change"  
       theme="dark" 
       :defaultSelectedKeys="[]" 
      mode="inline"
      @openChange="openChange">
        
        <template v-for="(item) in this.$router.options.routes">
          
          <template v-if="!item.hidden">
            <!-- 无子菜单 -->
            <template v-if="!item.hasChild">
              <a-menu-item  :key="item.id" :keyPath="item.children[0].path">
                <a-icon :type="item.icon" />
                <span >{{item.name}}</span>
              </a-menu-item>
            </template>
            <template v-else>
              <!-- 有子菜单 -->
              <a-sub-menu :key="item.name">
              <span slot="title"><a-icon :type="item.icon" /><span>{{item.name}}</span></span>
                <a-menu-item v-for="(itt) in item.children" :key="itt.id" :keyPath="itt.path">
                {{itt.name}}
                </a-menu-item>
              </a-sub-menu>
            </template>
          </template>


          
        </template>
        


        
      </a-menu>
    </a-layout-sider>
    <a-layout>

      <!-- 顶部 -->
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />

      </a-layout-header>

      <!-- 内容区 -->
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <!-- 面包屑 -->
        <a-breadcrumb separator=">">
          <a-breadcrumb-item v-for="(item,index) in this.$route.matched" :key="index">{{item.name}}</a-breadcrumb-item>
        </a-breadcrumb>
        
        <router-view></router-view>
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
       openKeys:["0"],
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
    change:function({item,key,keyPath}){

      let path=item.$attrs.keyPath;
      this.$router.push(path)
      this.$route.params.pathMatch;
      console.log(item);
      
      console.log(key)
      console.log(keyPath)
      console.log(this.$route)
    }
  },
  mounted:function(){
    console.log(this.$route);
    
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
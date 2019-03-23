/*
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'


import Gondan from '../pages/Gondan/Gondan.vue'
import Gondandaichuli from '../pages/Gondan/Gondandaichuli.vue'
import Gondanyichuli from '../pages/Gondan/Gondanyichuli.vue'

import AreaList from '../pages/AreaList/AreaList.vue'
import Arealistdaixunjian from '../pages/AreaList/Arealistdaixunjian.vue'
import Arealistyixunjian from '../pages/AreaList/Arealistyixunjian.vue'

import statisticsIndex from '../pages/statisticsIndex/statisticsIndex.vue'
import gonDanchulijilu from '../pages/statisticsIndex/gonDanchulijilu.vue'
import yunWuiritonji from '../pages/statisticsIndex/yunWuiritonji.vue'
import yunWuiyuetonji from '../pages/statisticsIndex/yunWuiyuetonji.vue'
import yunWuiniantonji from '../pages/statisticsIndex/yunWuiniantonji.vue'
import jiGoupaiminritonji from '../pages/statisticsIndex/jiGoupaiminritonji.vue'
import jiGoupaiminyuetonji from '../pages/statisticsIndex/jiGoupaiminyuetonji.vue'
import jiGoupaiminniantonji from '../pages/statisticsIndex/jiGoupaiminniantonji.vue'

import mineIndex from '../pages/mineIndex/mineIndex.vue'
import woDexinxi from '../pages/mineIndex/woDexinxi.vue'
import yunWuirenyuan from '../pages/mineIndex/yunWuirenyuan.vue'


Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {path:'/',redirect:'/gondan'},
        {path:'/gondan',component:Gondan,
            children:[
            {path:'/',redirect:'/gondan/gondandaichuli'},
            {path:'gondandaichuli', component:Gondandaichuli},
            {path:'gondanyichuli',component:Gondanyichuli}
        ]
},

        {path:'/arealist',component:AreaList,
            children:[
            {path:'/',redirect:'/arealist/arealistdaixunjian'},
            {path:'arealistdaixunjian',component:Arealistdaixunjian},
            {path:'arealistyixunjian',component:Arealistyixunjian}
        ]    
},

        {path:'/statisticsindex',component:statisticsIndex},
        {path:'/statisticsindex/gondanchulijilu',component:gonDanchulijilu},
        {path:'/statisticsindex/yunwuiritonji',component:yunWuiritonji},
        {path:'/statisticsindex/yunwuiyuetonji',component:yunWuiyuetonji},
        {path:'/statisticsindex/yunwuiniantonji',component:yunWuiniantonji},
        {path:'/statisticsindex/jigoupaiminritonji',component:jiGoupaiminritonji},
        {path:'/statisticsindex/jigoupaiminyuetonji',component:jiGoupaiminyuetonji},
        {path:'/statisticsindex/jigoupaiminniantonji',component:jiGoupaiminniantonji},

        {path:'/mineindex',component:mineIndex},
        {path:'/mineindex/wodexinxi',component:woDexinxi},
        {path:'/mineindex/yunwuirenyuan',component:yunWuirenyuan}
    ]
})
import 'indexcss';
import './js/H5.js';
import './css/H5.css';
import './js/H5_loading.js';
import './css/H5_loading.css';
import './js/H5ComponentBar.js';
import './css/H5ComponentBar.css';
import './js/H5ComponentBar_v.js';
import './css/H5ComponentBar_v.css';
import './js/H5ComponentBase.js';
import './css/H5ComponentBase.css';
import './js/H5ComponentPie.js';
import './css/H5ComponentPie.css';
import './js/H5ComponentPoint.js';
import './css/H5ComponentPoint.css';
import './js/H5ComponentPolyline.js';
import './css/H5ComponentPolyline.css';
import './js/H5ComponentRadar.js';
import './css/H5ComponentRadar.css';
import './js/H5ComponentRing.js';
import './css/H5ComponentRing.css';

var description_bg= require('./imgs/description_bg.gif');
var face_bg = require('./imgs/face_bg.png');
var face_img_left= require('./imgs/face_img_left.png');
var face_img_right = require('./imgs/face_img_right.png');
var face_logo = require('./imgs/face_logo.png');
var face_slogan = require('./imgs/face_slogan.png');
var footer = require('./imgs/footer.png');
var p1_people = require('./imgs/p1_people.png');
var page_bg = require('./imgs/page_bg.png');
var page_caption_bg = require('./imgs/page_caption_bg.png');
var tail_back = require('./imgs/tail_back.png');
var tail_logo = require('./imgs/tail_logo.png');
var tail_share = require('./imgs/tail_share.png');
var tail_slogan = require('./imgs/tail_slogan.png');

$(function  () {
    var h5 = new H5();
    h5.whenAddPage = function(){
        this.addComponent('slide_up',{
            bg:footer,
            css:{
                opacity:0,
                left:0,bottom:-20,
                width:'100%',height:'20px',zIndex:999
            },
            animateIn:{
                opacity:1,bottom:'-1px'
            },
            animateOut:{
                opacity:0,bottom:'-20px'
            },
            delay:500
        });
    }

    h5
    .addPage('face')
        .addComponent('logo',{
            center:true,
            width:198,
            height:65,
            bg:face_logo,
            css:{opacity:0},
            animateIn:{top:100,opacity:1},
            animateOut:{top:0,opacity:0},
        })
        .addComponent('slogan',{
            center:true,
            width:183,
            height:49,
            bg:face_slogan,
            css:{opacity:0,top:180},
            animateIn:{left:'50%',opacity:1},
            animateOut:{left:'0%',opacity:0},
            delay:500
        })
        .addComponent('face_img_left',{
            width:120,
            height:160,
            bg:face_img_left,
            css:{opacity:0,left:-50,bottom:-50},
            animateIn:{opacity:1,left:0,bottom:0},
            animateOut:{opacity:0,left:-50,bottom:-50},
            delay:1000
        })
        .addComponent('face_img_right',{
            width:92,
            height:150,
            bg:face_img_right,
            css:{opacity:0,right:-50,bottom:-50},
            animateIn:{opacity:1,right:0,bottom:0},
            animateOut:{opacity:0,right:-50,bottom:-50},
            delay:1000
        })
    .addPage()
        .addComponent('caption',{text:'关于。。'})
        .addComponent('text',{
            width:250,
            height:15,
            center:true,
            text:'还没想好怎么说',
            css:{
                opacity:0,textAlign:'center',color:'red'
            },
            animateIn:{opacity:1,top:120},
            animateOut:{opacity:0,top:240},
        })
        .addComponent('description',{
            center:true,
            width:210,
            height:200,
            bg:description_bg,
            css:{
                "box-sizing":"border-box",
                opacity:0,
                padding:'15px 10px 10px 10px',
                color:'#fff',
                fontSize:'15px',
                lineHeight:'18px',
                textAlign:'justify',
                top:240
            },
            text:'基于jQuery、fullpage.js开发、大部分地方采用canvas画图展示数据，现有7中展示样式，正逐步开发中。。。',
            animateIn:{opacity:1,top:210},
            animateOut:{opacity:0,top:240},
            delay:1000
        })
        .addComponent('people',{
            center:true,
            width:200,
            height:120,
            bg:p1_people,
            css:{
                opacity:0,
                bottom:0
            },
            animateIn:{opacity:1,bottom:40},
            animateOut:{opacity:0,bottom:0},
            delay:500
        })
    .addPage()
        .addComponent('caption',{text:'折线图组件对象'})
        .addComponent('polyline',{
            type:'polyline',
            data:[
                ['哈哈哈哈',.4,'#ff7676'],
                ['哈哈哈哈',.2],
                ['哈哈哈哈',.3,'blue'],
                ['哈哈哈哈',.1]
            ],
            width:265,
            height:150,
            center:true,
            css:{opacity:0,top:200},
            animateIn:{opacity:1,top:250},
            animateOut:{opacity:0,top:100},
        })
        .addComponent('msg',{
            text:'还没想好怎么说',
            css:{
                opacity:0,top:180,
                textAlign:'center',width:'100%',color:'#ff7676'
            },
            animateIn:{ opacity:1},
            animateOut:{ opacity:0}
        })
    .addPage()
        .addComponent('caption',{text:'饼图组件对象'})//pie
        .addComponent('pie',{
            type:'pie',
            data:[
                ['哈哈' , .1  ,'#ff7676'],
                ['哈哈' , .2 ],
                ['哈哈' , .3 ],
                ['哈哈' , .4  ]
            ],
            css:{top:200},
            width:150,
            height:150,
            center:true
        })
        .addComponent('msg',{
            text:'还没想好怎么说',
            css:{
                opacity:0,bottom:120,
                textAlign:'center',width:'100%',color:'#ff7676'
            },
            animateIn:{ opacity:1},
            animateOut:{ opacity:0}
        })
    .addPage()
        .addComponent('caption',{text:'柱图组件对象'})
        .addComponent('bar',{
            type : 'bar',             
            width : 265,
            height : 300,
            data:[
                ['Javascript' , .4  ,'#ff7676'],
                ['HTML/CSS' , .2  ],
                ['CSS3' , .1 ],
                ['HTML5' , .2  ],
                ['jQuery' , .35 ],
                ['Bootstrap' , .05 ],
                ['AngularJs' , .09  ]
            ],
            css : {
                top:100,
                opacity:0
            },
            animateIn:{
                opacity:1,
                top:200,
            },
            animateOut:{
                opacity:0,
                top:100,
            },
            center : true,
            })
        .addComponent('msg',{
            text:'还没想好怎么说',
            css:{
                opacity:0,bottom:90,
                textAlign:'center',width:'100%',color:'#ff7676'
            },
            animateIn:{ opacity:1},
            animateOut:{ opacity:0}
        })
    .addPage()
        .addComponent('caption',{text:'垂直柱图组件对象'})
        .addComponent('bar',{
            type : 'bar_v',
            width : 265,
            height : 200,
            data:[
                ['Js' , .4  ,'#ff7676'],
                ['CSS3' , .1 ],
                ['HTML5' , .2  ],
                ['PHP' , .05  ],
                ['jQuery' , .35 ]
            ],
            css : {
                top:220,
                opacity:0
            },
            animateIn:{
                opacity:1,
                top:200
            },
            animateOut:{
                opacity:0,
                top:220
            },
                center : true
            })
        .addComponent('msg',{
            text:'还没想好怎么说',
            css:{
                opacity:0,top:180,
                textAlign:'center',width:'100%',color:'#ff7676'
            },
            animateIn:{ opacity:1},
            animateOut:{ opacity:0}
        })
    .addPage()
        .addComponent('caption',{text:'雷达图组件对象'})
        .addComponent('radar',{
            type : 'radar',
            width : 200,
            height : 200,
            data:[
                ['Js' , .9  ,'#ff7676'],
                ['CSS3' , .8 ],
                ['HTML5' , .7  ],
                ['PHP' , .6  ],
                ['jQuery' , .5 ]
            ],
            css : {
                top:100,
                opacity:0
            },
            animateIn:{
                opacity:1,
                top:200
            },
            animateOut:{
                opacity:0,
                top:100
            },
            center : true
          })
    .addPage()
          .addComponent('caption',{text:'环图组件对象'})//ring
          .addComponent('ring-all',{
              type : 'ring',center : true,
              width : 150,height : 150,
              data:[['哈哈' , .7  ,'#ff7676']],
              css : { top:120,opacity:0 ,fontSize:'30px'},
              animateIn: { opacity:1},
              animateOut:{ opacity:0},
          })
         .addComponent('msg',{
              text:'还没想好怎么说',
              css:{
                  opacity:0,top:300,
                  textAlign:'center',width:'100%',color:'#ff7676'
              },
              animateIn:{ opacity:1},
              animateOut:{ opacity:0},
              delay:1800,
          })
          .addComponent('ring-1',{
              type : 'ring',center : true,
              width : 70,height : 70,
              data:[['哈哈' , .4  ,'darkorange']],
              css : { left:30,bottom:110,opacity:0,fontSize:'12px' },
              animateIn: { opacity:1},
              animateOut:{ opacity:0},
          })
          .addComponent('ring-2',{
              type : 'ring',
              width : 70,height : 70,
              data:[['哈哈' , .3  ,'darkorange']],
              css : { left:30,bottom:110,opacity:0,fontSize:'12px' },
              animateIn: { opacity:1},
              animateOut:{ opacity:0},
          })
          .addComponent('ring-3',{
              type : 'ring',
              width : 70,height : 70,
              data:[['哈哈' , .2  ,'darkorange']],
              css : { right:30,bottom:110,opacity:0,fontSize:'12px' },
              animateIn: { opacity:1},
              animateOut:{ opacity:0},
          })
          .addComponent('ring-3',{
              type : 'ring',
              width : 70,height : 70,
              data:[['哈哈' , .1  ,'darkorange']],
              css : { left:70,bottom:40,opacity:0,fontSize:'12px' },
              animateIn: { opacity:1},
              animateOut:{ opacity:0},
          })
          .addComponent('ring-3',{
              type : 'ring',
              width : 70,height : 70,
              data:[['哈哈' , .1  ,'darkorange']],
              css : { right:70,bottom:40,opacity:0,fontSize:'12px' },
              animateIn: { opacity:1},
              animateOut:{ opacity:0},
          })  
    .addPage()
        .addComponent('caption',{text:'散点图表组件对象'})//point
        .addComponent('point',{
            type : 'point',
            width : 150,
            height : 150,
            data:[
              ['哈哈' , .4  ,'#ff7676'],
              ['哈哈' , .2  ,'#ffa3a4', 0 ,'-60%'],
              ['哈哈' , .3  ,'#99c1ff', '50%' ,'-120%']
            ],
            css : {
              bottom:'20%'
            },
            center : true,
        })
    .addPage('tail')
        .addComponent('logo',{
            center:true,
            width:180,
            height:65,
            bg:tail_logo,
            css:{top:240,opacity:0},
            animateIn:{opacity:1,top:210},
            animateOut:{opacity:0,top:240},
        })
          .addComponent('slogan',{
              center:true,
              width:157,
              height:23,
              bg:tail_slogan,
              css:{top:280,opacity:0},
              animateIn:{opacity:1},
              animateOut:{opacity:0},
              delay:500
          })
          .addComponent('share',{
              width:64,
              height:60,
              bg:tail_share,
              css:{opacity:0,top:110,right:110},
              animateIn:{opacity:1,top:10,right:10},
              animateOut:{opacity:0,top:110,right:110},
              delay:1000 
          })
          .addComponent('back',{
              width:26,
              height:25,
              bg:tail_back,
              center:true,
              onclick : function(){
                   $.fn.fullpage.moveTo( 1 )
              }
          })
    
    .loader( [ tail_back,tail_share,tail_slogan ] );
});
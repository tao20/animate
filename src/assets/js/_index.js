//banner
//引入使用
import { Swiper, swiperSlide } from "vue-awesome-swiper";
//引入axios
import axios from 'axios';

export default {
    data() {
        return {
            result:[],
            new_comic: [],
            tags: ''
        }
    },
    components: {
        Swiper,
        swiperSlide
    },
    methods: {
        _initSwiper() {
            var mySwiper = new Swiper(".swiper-container", {
                loop: true,
                autoplay: {
                delay: 3000,
                disableOnInteraction: false
                },
            });
        },
        //遍历获取  每一条tags里面的 分类内容
        // getProps(val) {
        //     for( var key in val) {
        //         for(var i in val[key].tags) {
        //             console.log(this.new_comic[key].tags[i])
        //             this.tags += val[key].tags[i] + ' ';
        //         }
        //     }
        //     console.log( this.tags )
        //     console.log(1111)
        // }
    },
    mounted() {
        this._initSwiper();
    },
    //这里是动态加载 6张图的地方
    //异步请求数据  要写在生命周期的钩子里面
     async created() {
        this.result = await axios.get('/Recommend/get/?num=6&adpos=910&t=1551512046429&')
            .then( res => res.data.list)
            .catch (err => console.log( err ));
        

        this.new_comic = await axios({
            method: 'get',
            url: 'Recommend/get/?num=3&adpos=49985&t=1551269805835&'
        })
        .then( res => res.data.list)
        .catch( err => console.log( err ))


        
    }
};


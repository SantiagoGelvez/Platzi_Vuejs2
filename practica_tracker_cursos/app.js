new Vue({
    el: app,
    
    data() {
        return{
            courses: [],
            title: '',
            time: ''
        }
    },

    methods:{
        addCourseTrack(){
            this.courses.push({ key:this.title, value:this.time})
            this.title = '';
            this.time = '';
        },
    },

    computed:{
        totalTime(){
            // let total = 0
            // for (i in this.courses) {
            //     total = Number(this.courses[i].value) + total;
            // }
            if(!this.courses.length){
                return 0
            }
            
            return this.courses.reduce((a,b) => a + Number(b.value), 0);
        }
    }
})
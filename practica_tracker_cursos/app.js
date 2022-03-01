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
            if(!this.title || !this.time){
                console.log(this.title, this.time)
                return 0
            }
            this.courses.push({ key:this.title, value:this.time})
            this.title = '';
            this.time = '';
        },
    },

    computed:{
        totalTime(){
            if(!this.courses.length){
                return 0
            }
            
            return this.courses.reduce((a,b) => a + Number(b.value), 0);
        }
    }
})
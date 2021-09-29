(function() {
    'use strict';

    var likeComponent = Vue.extend({
        props: {
            message: {
                type: String,
                default: 'Like'
            }
        },
        data: function () {
            return {
                count: 0
            }
        },
        template: '<button @click="countUp">{{ message }} {{ count }}</button>',
        methods: {
            countUp: function () {
                this.count++;
                this.$emit('increment');
            }
        }
    });



    var vm = new Vue({
        el: '#app',
        components: {
            'like-component': likeComponent
        },
        data: {
            newItem:'',
            name: 'amano',
            todos: [],
            total: 0
        },
        watch:{
            todos: {
                handler: function(){
                    localStorage.setItem('todos', JSON.stringify(this.todos));
                },
                deep: true
            }
        },
        mounted: function(){
            this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        },
        methods:{
            addItem: function() {
                var item ={
                    tit: this.newItem,
                    done: false
                };
                this.todos.push(item);
                this.newItem = '';
            },
            delItem: function(index) {
                if (confirm('本当に？')){
                    this.todos.splice(index, 1);
                }
            },
            allDelete: function() {
                if ( !confirm('終わった？')){
                    return
                }
                this.todos = this.remaining;
            },
            incrementTotal: function () {
                this.total++;
            }
        },
        computed:{
            remaining: function(){
                return this.todos.filter(function(todo){
                    return !todo.done
                });
            }
        }
    });
})();

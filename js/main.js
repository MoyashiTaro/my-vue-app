(function() {
    'use strict';


    var vm = new Vue({
        el: '#app',
        data: {
            newItem:'',
            name: 'amano',
            todos: [
                {
                tit: 'task1',
                done: false
                },
                {
                tit: 'task2',
                done: false
                },
                {
                tit: 'task3',
                done: true
                },
            ]
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
                // this.todos = this.todos.filter(function(todo){
                //     return !todo.done
                // });
                this.todos = this.remaining;
            },
        },
        computed:{
            remaining: function(){
                // var items = this.todos.filter(function(todo){
                //     return !todo.done
                // });
                // return items.length;
                return this.todos.filter(function(todo){
                    return !todo.done
                });
            }
        }
    });
})();

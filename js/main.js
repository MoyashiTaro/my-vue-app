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
        watch:{
            todos: {
                handler: function(){
                    localStorage.setItem('todos', JSON.stringify(this.todos));
                    // alert('保存した！');
                },
                deep: true
                // deepwatcherを使う。→要素の中身も変更したら更新かかるようにする
            }
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

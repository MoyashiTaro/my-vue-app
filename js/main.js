(function() {
    'use strict';



    //
    // ①vueの特徴
    // 双方向データバインディング
    //　データを書き換えればUIにも反映される


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
            }
        }
    });
})();

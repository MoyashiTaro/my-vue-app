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
                'task1',
                'task2',
                'task3'
            ]
        },
        methods:{
            addItem: function() {
                this.todos.push(this.newItem);
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

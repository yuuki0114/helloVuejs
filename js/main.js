Vue.component('hello-component', {
  template:'<p>Hello<p>',
})

var app = new Vue({
  // option
  el: '#app',
  data: {

    colors: [
      'red', 'green', 'blue'
    ],

    user: {
      firstName: 'Taro',
      lastName: ' Yamada',
      age: 28
    },

    now: '',

    message: 'Hello Vue.js!',


  },

  methods: {
    onclick: function() {
      // alert('onclick!');
      this.now = new Date(). toLocaleString();
    }
  }
})
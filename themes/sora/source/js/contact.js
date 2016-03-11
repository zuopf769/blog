;(function () {
  Vue.config.delimiters = ['${', '}']
  new Vue({
    el: '#contact-form',
    data: function () {
      return {
        sending: false,
        message: {
          name: '',
          email: '',
          subject: '',
          text: ''
        },
        error: ''
      }
    },
    methods: {
      submit: function () {
        this.sending = true
        this.validData()
        axios.post('https://mail-to-egoist.leanapp.cn/api/send', this.message)
        .then(function (response) {
          this.sending = false
          if (response.data.error) {
            this.error = response.data.error
          }
        })
        .catch(function (error) {
          this.error = error.message
          this.sending = false
        }.bind(this))
      },
      validData: function () {
        for (var key in this.message) {
          if (!this.message[key]) {
            this.error = 'Form data is not complete!'
            this.sending = false
            return
          }
        }
      }
    }
  })
}());

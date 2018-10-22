<template>
  <div class="login">
    <h3>
      ChatRoom
    </h3>
    <div class="login-area">
      <van-cell-group>
        <van-field
          v-model="nickname"
          required
          clearable
          label="昵称"
          icon="question"
          placeholder="请输入用户昵称"
          @click-icon="$toast('聊天室房间显示名称')"
        />
      </van-cell-group>
      <van-button class="login-btn" @click="handleLogin" type="primary">登录</van-button>
    </div>
    
  </div>
</template>
<script>
// @ is an alias to /src
import { rongCloundRegister } from "@/service/rongcloud.js"
export default {
  name: "login",
  components: {},
  data() {
    return {
      nickname: ''
    }
  },
  mounted() {
  },
  methods: {
    async getToken() {
      let a = await rongCloundRegister(this.$route.query)
      if(a.status === 200) {
        return a.data
      }else {
        return null
      }
    },
    async handleLogin() {
      const that = this
      // this.getToken(this.$route.query)
      // const token = this.$route.query.token
      let data = await this.getToken()
      if(!data) {
        console.log('未能收到token')
        return
      }
      // const token = '7I90EFyUEuNZiAQPyCFHriWSZvYN7leRo76Bdzkj+Pp9Nb/ILBoYpNpTMcHAB23Sdtekt5ds3pqSAlyiQ1tXiQ=='
      const nickname = this.nickname
      this.$RongIM.connect(decodeURIComponent(data.token)).then((res) => {
        console.log(res)
        that.$RongIM.instance.joinChatRoom('testChat1', 50, {
          onSuccess(){
            console.log('joinChatRoom')
            that.$router.push({
              path: '/chatroom/testChat1'
            })
          },
          onError(){
            console.log('joinChatRoom failed')
          }
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>

.login{
  h3{
    font-size: 30px;
    text-align: center;
    margin: 100px 0;
  }
  .login-area{
    margin: 0 20px;
    .login-btn{
      margin: 40px auto;
      width: 100%;
    }
  }
}
</style>


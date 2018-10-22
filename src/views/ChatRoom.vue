<template>
  <div class="chatroom">
    <div class="spark-area">
      spark-area
    </div>
    <div class="history-area">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="handleOnloadMsg"
      >
        <div
          v-for="(msg, index) in msgHistory"
          :key="index"
          class="msg"
          :class="{
            'is-self-msg': msg.self
          }"
        >
          <span>{{msg.senderUserId}}</span>
          <span>:</span>
          <div>{{msg.content.content}}</div> 
        </div>
      </van-list>
    </div>
    <div >
      <form class="entry-area" @submit.stop.prevent="handleSend()">
        <van-field v-model="selfMsg" placeholder="请输入信息" />
        <button @click.stop.prevent="handleSend()">
          发送
        </button>
      </form>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
let banners = [
  {
    img_url: 'https://cdn.mytoken.org/Fm2p58AKhVxO0gWZF0XP60D7Grp-',
    name: '火讯',
    roomId: ''
  },
  {
    img_url: 'https://cdn.mytoken.org/FsHLn8OxLZIr2m4zyDmVosmkmr_F',
    name: 'infinito',
    roomId: ''
  },
  {
    img_url: 'https://cdn.mytoken.org/FoX6XfDW7IsnA4XKpEcAaJaCFcZ2',
    roomId: 'bitKeep'
  },
  {
    img_url: 'https://cdn.mytoken.org/FnZugo4lUOimh6T2A25pv-vQKCAT',
    name: 'ChaiNext',
    roomId: ''
  }
]
let hotRooms = [
  {
    img_url: 'https://cdn.mytoken.org/e04064b7f151008854f4f0d6c822b608',
    name: 'BTC',
    roomId: ''
  },
  {
    img_url: 'https://cdn.mytoken.org/FvKK2xxE7DNqbKHA9Dle2FPheJJe',
    name: 'ETH',
    roomId: ''
  },
  {
    img_url: 'https://cdn.mytoken.org/FjMXTFsqGTqS3rNEygtKl6BeBJeY',
    name: 'EOS',
    roomId: ''
  },
  {
    img_url: 'https://cdn.mytoken.org/6a9ce7554e145b54a79a775c9a14edd9',
    name: 'MT',
    roomId: ''
  },
  {
    img_url: 'https://cdn.mytoken.org/6a9ce7554e145b54a79a775c9a14edd9',
    name: 'XXX',
    roomId: ''
  },
  {
    img_url: 'https://cdn.mytoken.org/6a9ce7554e145b54a79a775c9a14edd9',
    name: 'XXX',
    roomId: ''
  },
  {
    img_url: 'https://cdn.mytoken.org/6a9ce7554e145b54a79a775c9a14edd9',
    name: 'XXX',
    roomId: ''
  },
  {
    img_url: 'https://cdn.mytoken.org/6a9ce7554e145b54a79a775c9a14edd9',
    name: 'XXX',
    roomId: ''
  }
]

export default {
  name: "chatroom",
  components: {},
  data() {
    return {
      // history
      msgHistory: [],
      loading: false,
      finished: true,
      // entry
      selfMsg:''
    }
  },
  computed: {
    newmsg() {
      return this.$store.state.rongIM.newMsg
    }
  },
  watch: {
    newmsg(message) {
      if (message.conversationType === this.$RongIM.RongIMLib.ConversationType.CHATROOM) {
        this.handleMsgHistory(message)
      }
    }
  },
  mounted() {
    let chatRoomId = this.$route.params.id
  },
  methods: {
    handleSend() {
      let msg = new this.$RongIM.RongIMLib.TextMessage({content:this.selfMsg, extra:"附加信息"});
      let that = this
      this.$RongIM.instance.sendMessage(this.$RongIM.RongIMLib.ConversationType.CHATROOM,'testChat1', msg, {
        onSuccess: function (message) {
          // message 为发送的消息对象并且包含服务器返回的消息唯一Id和发送消息时间戳
          that.handleMsgHistory({
            self: true,
            senderUserId:  that.$store.state.rongIM.user,
            content: msg
          })
          that.selfMsg = ''
          console.log("Send successfully");
        },
        onError: function (errorCode,message) {
          var info = '';
          switch (errorCode) {
              case that.$RongIM.RongIMLib.ErrorCode.TIMEOUT:
                  info = '超时';
                  break;
              case that.$RongIM.RongIMLib.ErrorCode.UNKNOWN_ERROR:
                  info = '未知错误';
                  break;
              case that.$RongIM.RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
                  info = '在黑名单中，无法向对方发送消息';
                  break;
              case that.$RongIM.RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
                  info = '不在讨论组中';
                  break;
              case that.$RongIM.RongIMLib.ErrorCode.NOT_IN_GROUP:
                  info = '不在群组中';
                  break;
              case that.$RongIM.RongIMLib.ErrorCode.NOT_IN_CHATROOM:
                  info = '不在聊天室中';
                  break;
              default :
                  info = x;
                  break;
          }
          console.log('发送失败:' + info);
        }
      })
    },
    handleMsgHistory(message) {
      if(this.msgHistory.length<1000){
        this.msgHistory.push(message)
      } else {
        this.msgHistory.shift()
        this.msgHistory.push(message)
      }
    },
    handleOnloadMsg() {

    }
  }
}
</script>
<style lang="scss" scoped>

.chatroom{
  .spark-area{
    height: 150px;
    padding: 10px;
  }
  .history-area{
    height: calc(100vh - 200px);
    padding: 10px;
    border: 1px solid #eee;
    overflow: scroll;
    .msg{
      display: flex;
    }
    .is-self-msg{
      // justify-content: flex-end;
      flex-direction: row-reverse;
    }
  }
  .entry-area{
    display: flex;
    button{
      width: 80px;
    }
  }
}
</style>


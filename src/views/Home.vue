<template>
  <div class="home">
    <van-swipe class="banners" :autoplay="3000" :height="400">
      <van-swipe-item
        v-for="(banner, index) in banners"
        :key="index"
      >
        <img :src="banner.img_url" :alt="banner.name">
      </van-swipe-item>
    </van-swipe>
    <div class="hot-area">
      <div
         v-for="(hotRoom, index) in hotRooms"
        :key="index"
        class="van-hairline--right van-hairline--bottom"
      >
        <img :src="hotRoom.img_url" :alt="hotRoom.name">
        <p>
          {{hotRoom.name}}
        </p>
      </div>
    </div>
    <van-field v-model="msg" placeholder="请输入信息" />
    <br>
    <button @click="handleSend()">
      发送
    </button>
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
  name: "home",
  components: {},
  data() {
    return {
      msg: '',
      banners,
      hotRooms
    }
  },
  mounted() {
    setTimeout(() => {
      this.$RongIM.instance.joinChatRoom('testChat1', 50, {
        onSuccess(res){
          console.log(res)
          console.log('joinChatRoom')
        },
        onError(){
          console.log('joinChatRoom failed')
        }
      })
    }, 1000)
  },
  methods: {
    handleSend() {
      let msg = new this.$RongIM.RongIMLib.TextMessage({content:this.msg, extra:"附加信息"});
      let that = this
      this.$RongIM.instance.sendMessage(this.$RongIM.RongIMLib.ConversationType.CHATROOM,'testChat1', msg, {
        onSuccess: function (message) {
          //message 为发送的消息对象并且包含服务器返回的消息唯一Id和发送消息时间戳
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
    }
  }
}
</script>
<style lang="scss" scoped>

.home{
  .banners{
    // padding: 10px 0;
    margin: 5px ;
    height: 150px;
    .van-swipe-item{
      overflow: hidden;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
  .hot-area{
    display: flex;
    padding: 10px;
    flex: 1;
    flex-wrap: wrap;
    // justify-content: space-around;
    >div {
      flex-basis: 88px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>


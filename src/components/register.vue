<template>
    <div>
        <div class="ht">
          <p class="text">成功贷款人数</p>
          <countup :start-val="1" :end-val="156189" :duration="2" class="num"></countup>
        </div>
        <grid class="grid_introduce">
          <grid-item :label="'高通过率'"  >
            <x-icon type="ios-checkmark-outline" size="30" slot="icon"></x-icon>
          </grid-item>
          <grid-item :label="'1分钟申请'">
            <x-icon type="ios-ionic-outline" size="30" slot="icon"></x-icon>
          </grid-item>
          <grid-item :label="'年化低至7.6%'">
            <x-icon type="ios-star-outline" size="30" slot="icon"></x-icon>
          </grid-item>
        </grid>
        <div class="ipnutBar">
          <p class="phone"><input type="number" v-model.number="inputData.phone" placeholder="请输入手机号"></p>
          <p class="name"><input type="text" v-model.number="inputData.name" placeholder="请输入姓名"></p>
          <p class="verify"><input type="text" v-model="inputData.verify" placeholder="请输入验证码"> <button v-on:click="verify" > {{inputData.verifyText}}</button></p>
          <p class="agreement"><check-icon :value.sync="inputData.agreement" type="plain">我已阅读并同意<a href="#/agreement" style="color: #0099FF;">《乐借钱平台服务协议》</a> </check-icon></p>
          <p class="next"><button v-on:click="go('register2')">下一步</button></p>
        </div>

    </div>
</template>

<script>

import { Countup, CheckIcon, Grid, GridItem } from 'vux'
import { setInterval, clearInterval } from 'timers';

export default {
  components: {
    Countup,
    CheckIcon,
    Grid,
    GridItem
  },
  data () {
    return { 
      inputData: {
        phone: '',
        verify: '',
        agreement: true,
        verifyText: '请输入验证码',
        verifyRP: 60,
        verifyFlag: true,
        name: ''
      }
    }
  },
  methods: {
    verify: function (){
      var _this = this.inputData;
      var timer = null;
      if (_this.verifyFlag){
        _this.verifyFlag = false;
        _this.verifyText = '60秒后重发';
        timer = setInterval(function(){
          if(_this.verifyRP > 1){
            _this.verifyRP--;
            _this.verifyText = _this.verifyRP + '秒后重发';
          } else {
            clearInterval(timer);
            _this.verifyText = '请输入验证码';
            _this.verifyRP = 60;
            _this.verifyFlag = true;
          }
        }, 1000);
      }
    },
    go: function(url){
      this.$router.push({ path: url });
    }
  }
}

</script>

<style lang="less">
@rem: 200rem;

.ht {
  height: 300 / @rem;
  //line-height: 300 / @rem;
  background:-webkit-gradient(linear, 0 0, 0 bottom, from(#0099FF), to(#00CCFF)); 
  text-align: center;
  font-size: 80 / @rem;
  .text {
    padding-top: 60 / @rem;
    margin-bottom: 40 / @rem;
    font-size: 40 / @rem;
    color: #fff;
  }
  .num {
    color: #fff;

  }
}

.grid_introduce {
  margin-bottom: 20 / @rem;
}

.ipnutBar {
  text-align: center;
  .phone,
  .name {
    margin-bottom: 20 / @rem;
    input{
      width: 80%;
      padding: 20 / @rem 30 / @rem;
      border: 1px solid #ccc;
      border-radius: 20 / @rem;
      text-align: left;
    }
  }
  .verify {
    margin-bottom: 20 / @rem;
    input {
      width: 50%;
      padding: 20 / @rem 30 / @rem;
      border: 1px solid #ccc;
      border-radius: 20 / @rem;
      text-align: left;
    }
    button {
      width: 29%;
      padding: 20 / @rem 30 / @rem;

      border-radius: 20 / @rem;
      color: #fff;
      background-color: #0099FF;
    }
  }
  .agreement {
    margin-bottom: 50 / @rem;
  }
  .next {
    button {
      width: 80%;
      padding: 20 / @rem 30 / @rem;
      border-radius: 20 / @rem;
      color: #fff;
      background-color: #0099FF;
    }
  }
  
} 
input::-webkit-input-placeholder {
  /* WebKit browsers */
  text-align: left;
}
input::placeholder {
  text-align: left;
}

</style>


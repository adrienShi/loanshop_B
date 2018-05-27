<template>
    <div class="center">
        
      <div class="ipnutBar">

        <group label-width="7em" label-margin-right="2em" label-align="right">
          <x-input 
            title="身份证号" 
            v-model="submitData.idData" 
            :max=18 
            placeholder="请输入身份证号"
          >
          </x-input>

          <x-input 
            title="芝麻信用分" 
            v-model="submitData.sesameCreditData" 
            :max=4 
            placeholder="请输入芝麻信用分"
          >
          </x-input>

          <popup-picker 
            :title="'贷款金额'" 
            :data="quota" 
            :popup-title="'请选择金额'" 
            :placeholder="'请选择金额'"
            :show-name="true"
            v-model="submitData.quotaData" 
            @on-change="quota_change" 
          >
          </popup-picker>

          <x-address 
            :title="'现所在地'" 
            v-model="submitData.addData" 
            :list="addressData" 
            @on-shadow-change="add_change" 
            placeholder="请选择地址"
          >
          </x-address>

          <popup-picker 
            :title="'职业身份'" 
            :data="occupation" 
            :popup-title="'请选择职业身份'" 
            :placeholder="'请选择职业身份'"
            :show-name="true"
            v-model="submitData.occupationData" 
            @on-change="occupation_change" 
          >
          </popup-picker>

          <popup-picker 
            :title="'月收入'" 
            :data="income" 
            :popup-title="'请选择月收入'" 
            :placeholder="'请选择月收入'"
            :show-name="true"
            v-model="submitData.incomeData" 
            @on-change="income_change" 
          >
          </popup-picker>

          <popup-radio :title="'性别'" :options="sex" v-model="submitData.sex"></popup-radio>

          <popup-radio :title="'是否有社保'" :options="radio" v-model="submitData.security"></popup-radio>

          <popup-radio :title="'是否有公积金'" :options="radio" v-model="submitData.fund"></popup-radio>

          <popup-radio :title="'是否有信用卡'" :options="radio" v-model="submitData.creditCard"></popup-radio>

          <popup-radio :title="'是否名下有房产'" :options="radio" v-model="submitData.haveHouse"></popup-radio>

          <popup-radio :title="'是否有房贷'" :options="radio" v-model="submitData.housingLoan"></popup-radio>

          <popup-radio :title="'是否名下有车产'" :options="radio" v-model="submitData.haveCar"></popup-radio>

          <popup-radio :title="'是否有车贷'" :options="radio" v-model="submitData.carLoan"></popup-radio>

          <popup-radio :title="'本人是否拥有人寿保险'" :options="radio" v-model="submitData.lifeInsurance"></popup-radio>

          <popup-radio :title="'是否有微粒贷'" :options="radio" v-model="submitData.particleLoanData"></popup-radio>

        </group>

      </div>
      <p class="next"><button v-on:click="go">立即提额</button></p>

    </div>
</template>

<script>

import { 
  Countup, 
  CheckIcon, 
  Group, XInput, 
  PopupPicker, 
  XAddress, 
  ChinaAddressV4Data,
  Checker, 
  CheckerItem,
  PopupRadio 
} from 'vux'

export default {
  components: {
    Countup,
    CheckIcon,
    Group,
    XInput,
    PopupPicker,
    XAddress,
    ChinaAddressV4Data,
    PopupRadio 
  },
  data () {
    return { 
      quota: [[
        { value: '1', name: '10000-20000' },
        { value: '2', name: '20000-50000' },
        { value: '3', name: '50000-200000' },
        { value: '4', name: '200000-1000000' }
      ]],
      occupation: [[
        { value: '1', name: '上班族' },
        { value: '2', name: '个体户' },
        { value: '3', name: '企业主' },
        { value: '4', name: '学生' },
        { value: '5', name: '无固定职业' }
      ]],
      income: [[
        { value: '1', name: '0-3000' },
        { value: '2', name: '3000-6000' },
        { value: '3', name: '6000-20000' },
        { value: '4', name: '20000以上' }
      ]],
      sex: [
        {key:'0', value: '男'},
        {key:'1', value: '女'}
      ],
      radio: [
        {key:'0', value: '否'},
        {key:'1', value: '是'}
      ],
      addressData: ChinaAddressV4Data,
      submitData: {
        idData: '',
        quotaData: [],
        addData: [],
        sesameCreditData: '',
        occupationData: [],
        incomeData: [],
        sex: '0',
        security: '0',
        fund: '0',
        creditCard: '0',
        haveHouse: '0',
        housingLoan: '0',
        haveCar: '0',
        carLoan: '0',
        lifeInsurance: '0',
        particleLoanData: '0',
        
      }

    }
  },
  methods: {
    go: function(){
      this.$router.push({ path: '/' });
    },
    birthDate_change: function (){
     
    },
    quota_change: function(){

    },
    add_change: function(){

    },
    occupation_change: function(){

    },
    income_change: function(){

    },
  }
}

</script>

<style lang="less">

@rem: 200rem;

.center {
  text-align: center;
  background:-webkit-gradient(linear, 0 0, 0 bottom, from(#66CCFF), to(#FF99FF)); 
  background-color: #CC66FF;
  padding-top: 30 / @rem;
  font-size: 20 / @rem;
}

.ipnutBar {
  margin: 0 50 / @rem 30 / @rem;
  border-radius: 20 / @rem;
  overflow: hidden;
} 

.next {
  button {
    width: 80%;
    padding: 20 / @rem 30 / @rem;
    border-radius: 20 / @rem;
    color: #fff;
    background-color: #FFCC00;
    margin-bottom: 100 / @rem;
  }
}
input::-webkit-input-placeholder {
  /* WebKit browsers */
  text-align: left;
}
input::placeholder {
  text-align: left;
}

.weui-cells {
  margin-top: 0 !important;
}



</style>


<template>
    <div class="main">
        <p>{{$store.state.role}}</p>
        <div class="betContainer" v-for="(betData, index) in betlist" v-bind:key="betData.id">
            <div class="betdiv" v-on:click="toggleActive(index)">
                <div class="null"/>
                <div class="betsubdiv">
                    <p class="betTitle">{{betData.name}}</p>
                    <p class="betDate">{{betData.date}}</p>
                </div>
                <img v-if="!show.includes(index)" class="betUp" src="img/icon-downarrow.png" alt="">
                <img v-if="show.includes(index)" class="betDown" src="img/icon-downarrow.png" alt="">
                <div class="betsubdiv2">
                    <p class="betNum">{{numberWithComma(betData.team1 + betData.team2)}}</p>
                    <progress class="betProgress" max="100" :value="getPercent(betData.team1, betData.team1 + betData.team2)"> 70% </progress>
                </div>
            </div>
            <div class="betDetail" v-show="show.includes(index)">
                <div class="betVsContainer">
                    <h2>{{betData.name}}</h2>
                    <h3 class="betIsFinish">제출 마감됨</h3>
                </div>
                <div class="betDetailMain">
                    <div class="betLeftSide">
                        <div class="betTextSide">
                            <div class="betDetailText">
                                <p class="betTotal">{{numberWithComma(betData.team1)}}</p>
                                <p class="betRate">1:19.54</p>
                                <p class="betTotalPerson">514</p>
                                <p class="betHighest">25만</p>
                            </div>
                            <div class="betPercent">
                                <p class="betPercentText">{{getPercent(betData.team1, betData.team1 + betData.team2)+'%'}}</p>
                                <progress class="betProgressLeft" max="100" :value="getPercent(betData.team1, betData.team1 + betData.team2)"></progress>
                            </div>
                        </div>
                        <div class="betVote">
                            <input class="betVoteInput" placeholder="액수를 입력하세요" type="number">
                            <button class="betVoteButton">투표</button>
                        </div>
                    </div>
                    <div class="hr"/>
                    <div class="betRightSide">
                        <div class="betTextSide">
                            <div class="betPercent">
                                <p class="betPercentText">{{getPercent(betData.team2, betData.team1 + betData.team2)+'%'}}</p>
                                <progress class="betProgressRight" max="100" :value="getPercent(betData.team2, betData.team1 + betData.team2)"></progress>
                            </div>
                            <div class="betDetailText">
                                <p class="betTotal">{{numberWithComma(betData.team2)}}</p>
                                <p class="betRate">1:19.54</p>
                                <p class="betTotalPerson">514</p>
                                <p class="betHighest">25만</p>
                            </div>
                        </div>
                        <div class="betVote">
                            <input class="betVoteInput" placeholder="액수를 입력하세요" type="number">
                            <button class="betVoteButton">투표</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from 'axios';
export default {
    created: function() {
        this.$store.commit('loginCheck')
        this.$Axios.get(`${this.$store.state.host}/api/bettings`).then(res => {
            this.betlist = res.data
            // alert(res);
        }).catch(() => {
            console.log("ERR");
        });
    },
    data() {
        return {
            betlist: [],
            show: [],
        }
    },
    methods: {
        getPercent(num, totalNum) {
            return Math.round(num * 100 / totalNum);
        },
        numberWithComma(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        toggleActive(index) {
            if (this.show.includes(index)) {
                this.show = this.show.filter(entry => entry !== index);
            } else {
                this.show.push(index)
            }
        }
    }
}
</script>
<template>
    <div class="main">
        <div class="betContainer" v-for="betData in betlist" v-bind:key="betData.id">
            <div class="betdiv" v-on:click="betData.show = !betData.show">
                <div class="null"/>
                <div class="betsubdiv">
                    <p class="betTitle">{{betData.text}}</p>
                    <p class="betDate">오전 15시(9교시)</p>
                </div>
                <img v-if="!betData.show" class="betUp" src="img/icon-downarrow.png" alt="">
                <img v-if="betData.show" class="betDown" src="img/icon-downarrow.png" alt="">
                <div class="betsubdiv2">
                    <p class="betNum">123,123,123</p>
                    <progress class="betProgress" max="100" value="20"> 70% </progress>
                </div>
            </div>
            <div class="betDetail" v-show="betData.show">
                <div class="betVsContainer">
                    <h2>{{betData.text}}</h2>
                    <h3 class="betIsFinish">제출 마감됨</h3>
                </div>
                <div class="betDetailMain">
                    <div class="betLeftSide">
                        <div class="betTextSide">
                            <div class="betDetailText">
                                <p class="betTotal">12만</p>
                                <p class="betRate">1:19.54</p>
                                <p class="betTotalPerson">514</p>
                                <p class="betHighest">25만</p>
                            </div>
                            <div class="betPercent">
                                <p class="betPercentText">5%</p>
                                <progress class="betProgressLeft" max="100" value="5"> 70% </progress>
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
                                <p class="betPercentText">95%</p>
                                <progress class="betProgressRight" max="100" value="95"> 70% </progress>
                            </div>
                            <div class="betDetailText">
                                <p class="betTotal">12만</p>
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
export default {
    data() {
        return {
            betlist: [
                {text: '무상이와 싸워서 이기는법', show: false},
                {text: '무상이와 때려서 이기는법', show: false},
                {text: '너도 될수 있다 무상편', show: false},
            ],
        }
    },
    methods: {
    }
}
</script>
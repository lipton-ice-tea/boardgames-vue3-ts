<template>
    <div class="game-detail">
        <div class="game-detail__aside">
            <img class="game-detail__img" v-if="gameData.photoUrl" :src="gameData.photoUrl"/>
        </div>
        <div class="game-detail__main">
            <router-link to="/" class="game-detail__goback"><i class="el-icon-caret-left"></i> Вернуться к списку</router-link>
            <div class="game-detail__head">
                <h1>{{ gameData.title }}</h1>
                <div class="game-detail__props">
                    <div
                        v-for="(prop, i) in gameProps || []"
                        class="detail-prop"
                        :key="i">
                        <el-tooltip :content="prop.title" placement="bottom">
                            <p><i :class="prop.icon"></i> {{ prop.value }}</p>
                        </el-tooltip>
                    </div>
                </div>
            </div>

            <div class="game-detail__descr" v-html="gameData.description"></div>
        </div>
    </div>
</template>

<script src="./GameView.ts"></script>
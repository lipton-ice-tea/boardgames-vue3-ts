<template>
    <div class="cards">
        <router-link
            v-for="game in list"
            class="card"
            :to="`/games/${game.alias}`"
            :key="game.alias">
            <el-image class="card__img" :src="game.photoUrl"></el-image>
            <!-- <img v-if="game.photoUrl" :src="game.photoUrl" :alt="game.title"> -->
            <div class="card__descr">
                <p class="card__title">{{ game.title }}</p>
            </div>
        </router-link>
    </div>
</template>

<script src="./Cards.ts"></script>
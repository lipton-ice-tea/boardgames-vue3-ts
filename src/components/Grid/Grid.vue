<template>
    <div class="cards">
        <router-link
            v-for="game in list"
            class="card"
            :to="`/games/${game.alias}`"
            :key="game.alias">
            <el-card>
                <img v-if="game.photoUrl" :src="game.photoUrl" :alt="game.title">
                {{ game.title }}
            </el-card>
        </router-link>
    </div>
</template>

<script src="./Grid.ts"></script>
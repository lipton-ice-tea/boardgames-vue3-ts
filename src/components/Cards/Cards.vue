<template>
    <div class="cards">
        <div
            v-for="game in computedList || []"
            class="card"
            @click="openDetail(game.alias || '')"
            :key="game.alias">
            <el-image class="card__img game-img" :src="game.photoUrl"/>
            <!-- <img v-if="game.photoUrl" :src="game.photoUrl" :alt="game.title"> -->
            <p class="card__title" :class="{'card__title_small': game.title.length > 40 }">{{ game.title }}</p>
            <el-table :data="game.props" :show-header="false">
                <el-table-column prop="title"></el-table-column>
                <el-table-column prop="value"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script src="./Cards.ts"></script>
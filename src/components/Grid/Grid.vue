<template>
    <el-table :data="list">
        <el-table-column prop="photoUrl" width="70">
            <template #default="scope">
                <el-image class="table-img" :src="scope.row.photoUrl"/>
            </template>
        </el-table-column>
        <el-table-column prop="title" label="Название"></el-table-column>
        <el-table-column prop="bggRating" label="Рейтинг" width="150"></el-table-column>
        <el-table-column prop="commentsTotal" label="Комментарии" width="150"></el-table-column>
        <el-table-column prop="year" label="Год" width="150"></el-table-column>
        <el-table-column prop="playersMin" label="Игроков" width="150">
            <template #default="scope">
                {{ scope.row.playersMin === scope.row.playersMax ? scope.row.playersMax : `${scope.row.playersMin} - ${scope.row.playersMax}` }}
            </template>
        </el-table-column>
        <el-table-column prop="playersAgeMin" label="Возраст" width="150"></el-table-column>
        <el-table-column prop="alias" width="150">
            <template #default="scope">
                <el-button @click="openDetail(scope.row.alias)">Подробнее</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script src="./Grid.ts"></script>
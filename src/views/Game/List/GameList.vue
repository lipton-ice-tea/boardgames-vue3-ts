<template>
    <div class="games">
        <div class="games__header">
            <div class="game-sort">
                <p>Сортировка</p>
                <div
                    v-for="sort in sortList"
                    class="game-sort__item"
                    :class="{'game-sort__item_current': sort.key === currentSort}"
                    @click="changeSort(sort.key)"
                    :key="sort.key">
                    {{ sort.title }}
                </div>
            </div>
            <div class="games__view">
                <i
                    v-for="view in viewTypes"
                    class="games__view-type"
                    :class="[view.icon, {'games__view-type_current': currentView === view.key}]"
                    @click="changeView(view.key)"
                    :key="view.key">
                </i>
            </div>
        </div>
        <Cards v-if="currentView === 'card'" :list="gameList" @openDetail="openDetail"/>
        <Grid v-if="currentView === 'grid'" :list="gameList" @openDetail="openDetail"/>
        <div class="games__pagination">

        </div>
    </div>
</template>

<script src="./GameList.ts"></script>
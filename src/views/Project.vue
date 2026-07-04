<template>
  <div class="container">
    <div class="section section-profile">
      <div class="section-main-title project-title has-options">
        <PortfolioOptionList
          :active-type="listType"
          @select="listProfileCard"
        />
      </div>
      <template v-if="loading">
        <Loading />
      </template>
      <template v-else-if="error">
        <div class="cms-status cms-status--error">{{ error }}</div>
      </template>
      <template v-else>
        <router-link
          class="profile_card"
          v-for="item in projectItems"
          :key="getProjectKey(item)"
          :to="getProjectRoute(item)"
        >
          <LoadingImg
            class="profile_card-pic img-loading-wrapper img-loading-light"
            :IsBanner="false"
            :IsLight="true"
            :ImageUrl="item.bannerImg"
          />
          <div class="profile_card-text">
            <p class="headline_02">{{ getProjectTitle(item) }}</p>
            <p class="content-text time">{{ item.period }}</p>
            <div class="tips-area">
              <span
                class="tips-text"
                v-for="tag in item.tags"
                :key="tag"
              >{{ getProjectTag(item, tag) }}</span>
            </div>
          </div>
        </router-link>
      </template>
    </div>
    <nav v-if="totalPages > 1" class="cms-pagination">
      <button
        class="cms-pagination__btn"
        :disabled="page <= 1"
        @click="goPage(page - 1)"
      >‹</button>
      <span class="cms-pagination__info">{{ page }} / {{ totalPages }}</span>
      <button
        class="cms-pagination__btn"
        :disabled="page >= totalPages"
        @click="goPage(page + 1)"
      >›</button>
    </nav>
  </div>
</template>
<script setup lang="ts">
import Loading from "/@/components/Loading.vue";
import LoadingImg from "/@/components/LoadingImg.vue";
import PortfolioOptionList from "/@/components/PortfolioOptionList.vue";
import { useProjectList } from "/@/hooks/useProjectList";

const {
  projectItems,
  listType,
  page,
  totalPages,
  loading,
  error,
  listProfileCard,
  goPage,
  getProjectKey,
  getProjectRoute,
  getProjectTitle,
  getProjectTag
} = useProjectList();
</script>
<style lang="scss" scoped src="../style/views/project.scss"></style>

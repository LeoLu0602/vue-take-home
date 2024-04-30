# Vue Take Home Project: Premier League Scores

## Description

This is a very simple sports web app built with Nuxt. It allows users to check Premier League Scores fetched from a **fake** api. Users can also set their preferences locally including username, light/dark mode, and favorite team. [Here](https://vue-take-home.vercel.app/) is a link to the demo.

## 我的想法

### Vue/Nuxt vs React/Next.js

這是我第一次使用 Vue/Nuxt 進行開發。雖然是第一次，因為過去有使用 React/Next.js 的經驗，透過閱讀 Vue/Nuxt 的 official documentation 就足以完成這項作業。選擇 Nuxt 是因為之前用過 Next.js ，了解使用這類 framework 的好處，其中一個好處是 routing ，使用 framework 讓 routing 變得容易且直覺許多。在做的過程發現很多 React 的觀念都可以對應到 Vue ，譬如 component ，但同時也接觸到一些 React 沒有的東西例如 v-model 。Vue/Nuxt 整體開發體驗佳，documentation 寫得非常好，然而我感覺 Vue/Nuxt 的社群相較 React/Next.js 小，這在搜尋很特定的問題時可以感受到。

### 困難與解決

遇到最大的困難大概是 localStorage 的部份，似乎是因為 Nuxt 預設使用 SSR 的關係導致出現 localStorage is not defined 的 Error 。解決的辦法是使用 Nuxt-Storage 這個 package ，雖然在 import 上有些怪異的行為出現 (CommonJS vs ES modules ，Nuxt-Storage 使用 CommonJS)，仍然足以應付需求。

### 延伸

由於時間有限，只有完成基本的功能。若要做延伸，我會想加入 RWD 以及一些 CSS 動畫來提昇使用者體驗。

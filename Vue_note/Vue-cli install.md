# Vue-cli install

**安裝vue-cli腳手架(全域安裝，環境安裝初期行為，一次性)**
```
npm install -g vue-cli
```
**使用webpack便於hot-loader(畫面同步更新)**
```
vue init webpack new-project(即項目名稱)
```
**專案相關設定說明**
```
->計畫命名(no longer)
->計畫說明(app)
->作者
->standalone
->install vue-router(y)
->install ESLint(js語法檢測器)
->兩個測試庫(暫時為n，未來專案導入)
```

**進入專案**
```
cd new-project(即項目名稱)
```
**運用yarn安裝依賴**
```
 yarn(yarn為yarn install簡寫，等同於npm install)
```
**運行項目專案**
```
yarn run dev
```
**安裝vuex**
```
yarn add vuex --save
```
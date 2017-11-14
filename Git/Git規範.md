# Git規範

* master分支, 作為正式站使用, 線上版本(Protected)
* devlop主要開發分支, 測試版使用，新增功能彙整用分支(Protected)
* 專案下必須撰寫`README.md`, 內容須包含Build Setup及Application Structure

```
e.g.

##Build Setup
yarn run init

##Application Structure
|-- build                 #webpack相關
|-- config                #環境配置
|-- dist                  #專案建置輸出目錄
|-- src
    |-- assets
|-- static                #靜態資源目錄
```

Commit message
* 不要使用句號`. ` `。`
* 標點符號使用半形
* 第一行為摘要
* 詳細說明內需加 - 並以一個空白隔開
* 若只有變更一項功能, 則不寫摘要
* 若為修正issue, 需要在摘要最後面加入(#issue編號)
```
e.g.
增加A功能
```
```
e.g.
增加A功能(#12)
```
```
e.g.
某某活動頁面調整(#12)
- 刪除A頁面
- 新增B頁面
```
# 多人協作專案
* 以最新的devlop分支為基底，獨立出新的分支進行開發
* 開發完成的功能需經QA驗證，驗證完成後使用Pull Request合併開發完成功能(尚未掌握)
* Pull Request前需先更新本地的devlop分支
* 合併分支後刪除該功能開發分支

# 單獨作業專案
* 從最新的devlop分支中開發
* 確認每個commit為一個功能段落

# 工作流程
* 切換至devlop分支並Pull
* 新增功能分支
* 進行開發
* Rebase interactive整理過commit, 確認每個commit為一個功能段落
* Pull到最新的devlop, 並解決本地衝突
* 送出Pull Request
* 合併分支後刪除開發分支
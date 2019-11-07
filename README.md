# Module-PopupPromo

## 功能描述

這是一個提供行銷人員設定促銷活動相關內容的模組，會以 popup 視窗的形式，覆蓋在網頁上面。

模組提供設定圖片、大標、副標、描述、連以及顯示時間。

## 使用方式

1. 引入模組： `<script src="/popup-promo/popup-promo.js"></script>`

2. 在頁面上加上 tag： `<div id="popup-promo"></div>`
3. 設定參數：
    ```
    promoInfo = {
        image: "",
        title: "",
        subtitle: "",
        description: "",
        link: "",
        linkName: "",
        duration: "" // second (optional)
    }
    ```
4. 呼叫 `show()` 並帶入參數，初始化：`popupPromo.show(promoInfo);`

## 模組功能

### 參數

`image`: 設定圖片。

`title`: 大標題。

`subtitle`: 副標題。

`description`: 文字內容。

`link`: 連結位址。

`linkName`: 連結名稱。

`duration` (optional): 視窗要持續多久時間才關閉，單位為秒。

### Method

`show`: 初始化並載入視窗。

`open`: 開啟視窗。

`close`: 關閉視窗。

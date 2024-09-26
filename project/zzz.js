
// -----------首頁遊戲圖片------------

let carouselIndex = {
    'carousel1': 0,
    'carousel2': 0
};

// carousel1 对应的描述
const carousel1Descriptions = [
    "描述 1",  // 对应第1张图片
    "描述 2",  // 对应第2张图片
    "描述 3",  // 对应第3张图片
    "描述 4",  // 对应第4张图片
    "描述 5",  // 对应第5张图片
    "描述 6",  // 对应第6张图片
    "描述 7",  // 对应第7张图片
    "描述 8",  // 对应第8张图片
    "描述 9",  // 对应第9张图片
    "描述 10", // 对应第10张图片
    "描述 11"  // 对应第11张图片
];

// carousel2 对应的描述
const carousel2Descriptions = [
    "描述 11", // 对应第1张图片
    "描述 12", // 对应第2张图片
    "描述 13", // 对应第3张图片
    "描述 14", // 对应第4张图片
    "描述 15"  // 对应第5张图片
];

// 顯示指定索引的圖片並更新描述
function showSlide(carouselId, index) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('.custom-carousel-item');
    const descElement = document.getElementById(carouselId + '-desc');
    
    // 确保索引有效
    if (index >= slides.length) {
        carouselIndex[carouselId] = 0;
    } else if (index < 0) {
        carouselIndex[carouselId] = slides.length - 1;
    } else {
        carouselIndex[carouselId] = index;
    }

    // 显示当前索引的图片并隐藏其他图片
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[carouselIndex[carouselId]].classList.add('active');

    // 更新描述文字
    updateDescription(carouselId, carouselIndex[carouselId]);
}

// 更新描述文字的函数
function updateDescription(carouselId, index) {
    const descElement = document.getElementById(carouselId + '-desc');
    if (carouselId === 'carousel1') {
        descElement.textContent = carousel1Descriptions[index];
    } else if (carouselId === 'carousel2') {
        descElement.textContent = carousel2Descriptions[index];
    }
}

// 下一张图片
function nextSlide(carouselId) {
    showSlide(carouselId, carouselIndex[carouselId] + 1);
}

// 上一张图片
function prevSlide(carouselId) {
    showSlide(carouselId, carouselIndex[carouselId] - 1);
}

// 手势滑动支持
document.querySelectorAll('.custom-carousel').forEach(carousel => {
    let touchstartX = 0;
    let touchendX = 0;

    carousel.addEventListener('touchstart', function (event) {
        touchstartX = event.changedTouches[0].screenX;
    }, false);

    carousel.addEventListener('touchend', function (event) {
        touchendX = event.changedTouches[0].screenX;
        handleGesture(carousel.id);
    }, false);

    function handleGesture(carouselId) {
        if (touchendX < touchstartX) {
            nextSlide(carouselId);
        }
        if (touchendX > touchstartX) {
            prevSlide(carouselId);
        }
    }
});



// ------遊戲特點---內容圖文修改中----

let currentIndex = 0;

// 定義圖片和對應的文字內容
const slides = [
    {
        image: "../material/game_photo_original/game_photo_tvbk_00.png",
        title: "作品介紹",
        description: "它的故事發生在被神秘的超自然災害「空洞」所侵襲的近未來。",
        text: "在這災禍頻仍的世界裡，崛起了一座另類的城市——「新艾利都」。這座最後的「綠洲」掌握了與「空洞」共生的技術，盤踞著錯綜複雜的勢力，它混亂、喧囂、危險又充滿活力。而你將成為串聯起空洞與都市的關鍵少數派，名為「繩匠」的特殊職業人士。這裡正等待著見證你的故事。"
    },
    {
        image: "../material/game_photo_original/game_photo_tvbk_01.jpg",
        title: "背景介紹",
        description: "不要進入空洞。",
        text: "我知道我知道，空洞裡有以太資源、有異化造物、甚至有舊文明的遺產，全都是珍貴的財富。但是別忘了，那裡面空間紊亂，怪物肆虐，異變橫生，終究是一場吞沒世界的災難，不是一般人該去的地方。所以不要進入空洞。至少，不要「獨自」進入空洞。如果你執意要進入險境，那先去新艾利都吧。那座魚龍混雜的都市裡有許多對空洞有需求的人：權勢遮天的財閥、蟄伏街頭的幫派、暗藏陰謀的狂人或者鐵面無情的官吏。在那裡做好完全的準備，結交有實力的同伴，以及最重要的——找到一位「繩匠」。只有他們有能力把人從迷宮般的空洞裡引導出來。祝你好運。"
    },
    {
        image: "../material/game_photo_original/game_photo_tvbk_02.jpg",
        title: "劇情設定",
        description: "法厄同紀事",
        text: "法厄同紀事是遊戲的主線任務，內容主要為主角在新艾利都生活與冒險的故事，劇情包括法厄同紀事、代理人秘聞等。"
    },
    {
        image: "../material/game_photo_original/game_photo_tvbk_03.jpg",
        title: "Random Play",
        description: "想在新艾利都看一部好電影？",
        text: "記得先去錄像店「Random Play」逛逛。店主是一對性格迥異的兄妹，一定能給你滿意的答案。不過他們本人的經歷，可能比最刺激的動作電影還精彩幾分……"
    },
    {
        image: "../material/game_photo_original/game_photo_tvbk_04.png",
        title: "特色玩法介紹",
        description: "主打連攜技 Combo 玩法",
        text: "一定要先建立動作表現與打擊回饋，比起誇張特效與隨意的螢幕震動，他們更傾向於以「Frame」為單位，去校準和打磨所有的動作和特效，相信只有讓畫面乾淨，才能充滿向玩家展現動作之美。換句話說，要營造出優秀的打擊感，是不能錯過一點細節的。"
    },
    {
        image: "../material/game_photo_original/game_photo_tvbk_05.png",
        title: "戰鬥系統",
        description: "主打連攜系統",
        text: "繩匠操作代理人攻擊敵人會使其累積失衡槽，當失衡槽積滿時且施放相應的攻擊後，敵人會進入失衡的狀態，此時繩匠可以選擇代理人施放對應的連攜技。當然除了在進攻上為玩家提供爽快感，防守部分也提供了更多的選擇。"
    },
    {
        image: "../material/game_photo_original/game_photo_tvbk_06.jpg",
        title: "爬格子式地城探索",
        description: "「空洞」是《絕區零》的核心設定，而遊戲玩法自然和空洞有關。",
        text: "空洞也直接等同遊戲中的關卡，玩家需要帶領能在空洞裡作戰的代理人在空洞中探索；關卡採用「爬格子」地城探索形式，玩家需要在格子地圖上探索或解開謎題材能到達目的地，而當進入戰鬥時就會變成類似《崩壞3rd》的動作玩法。"
    },
    {
        image: "../material/game_photo_original/game_photo_tvbk_07.jpg",
        title: "爽快動作華麗連段特效",
        description: "會有cut-in演出",
        text: "攻擊分普通攻擊和特殊技兩種，攻擊命中敵人會為自己累積「能量」和「喧響等級」，能量儲滿之後可以發動更強力的強化特殊技；喧響等級儲滿後就可以發動必殺技。"
    },
    {
        image: "../material/game_photo_original/game_photo_tvbk_08.png",
        title: "街區探索與尋寶",
        description: "日本街景的巷弄",
        text: "主角一開始所居住的地區為「新艾利都」城市的六分街，玩家在探索空洞之餘，也會需要來到六分街上與其他 NPC 互動，或是購買商品。"
    },
    {
        image: "../material/game_photo_original/game_photo_tvbk_09.png",
        title: "代理人培育與養成",
        description: "在《絕區零》遊戲中，負責戰鬥的並不是主角，而是「代理人」。",
        text: "每一位「代理人」的強化可從三個地方著手，分別是「等級」、「技能」與「音擎」。每一種升級都需要對應的素材，這些素材都仰賴主線或探索素材關卡來獲取，要育成一位代理人資源大致上需要花費不少時間，很難初期就全面培養的面面俱到。"
    },
    {
        image: "../material/game_photo_original/game_photo_tvbk_10.jpg",
        title: "抽卡機制特色",
        description: "以錄像店結合賽博龐克的混合",
        text: "以電視機與錄像帶為主，與之抽卡介面一併以TV風格呈現"
    }
];

// 更新圖片和文字
function updateSlide(index) {
    document.getElementById('custom_image').src = slides[index].image;
    document.getElementById('custom_title').textContent = slides[index].title;
    document.getElementById('custom_description').textContent = slides[index].description;
    document.getElementById('custom_text').textContent = slides[index].text;
}

// 下一張圖片
function customNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // 確保循環
    updateSlide(currentIndex);
}

// 上一張圖片
function customPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // 循環到最後一張
    updateSlide(currentIndex);
}

// ----------遊戲特點滑動---------------

function customNextSlide() {
    const imageElement = document.getElementById('custom_image');

    // 淡出效果 (減少透明度)
    imageElement.style.opacity = '0';

    setTimeout(() => {
        // 更新圖片
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide(currentIndex);

        // 淡入效果 (重新顯示圖片)
        setTimeout(() => {
            imageElement.style.opacity = '1';  // 回到完全不透明
        }, 50); // 淡入，縮短延遲時間
    }, 200); // 閃爍效果
}

function customPrevSlide() {
    const imageElement = document.getElementById('custom_image');

    // 淡出效果 (減少透明度)
    imageElement.style.opacity = '0';

    setTimeout(() => {
        // 更新圖片
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide(currentIndex);

        // 淡入效果 (重新顯示圖片)
        setTimeout(() => {
            imageElement.style.opacity = '1';  // 回到完全不透明
        }, 50); // 淡入，縮短延遲時間
    }, 200); // 閃爍效果
}


// ---------------最新消息--------------

// 滾動到頁面頂部的功能
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------------最新消息內容頁--------------

document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById('grid-container');
    let currentPage = 1;
    const itemsPerPage = 9;

    // 九宮格內容模板
    const contentTemplates = {
        latest: [],
        news: [
            { imgSrc: "../material/new_info_live/new/new_00.jpg", date: "2024/09/10", description: "《絕區零》外環宣傳動畫｜偶爾也要出去逛逛", type: "news", link: "https://zenless.hoyoverse.com/zh-tw/news/125803" },
            { imgSrc: "../material/new_info_live/new/new_01.jpg", date: "2024/09/10", description: "《絕區零》1.2版本「火獄騎行」前瞻特別節目預告", type: "news", },
            { imgSrc: "../material/new_info_live/new/new_02.png", date: "2024/09/09", description: "《絕區零》簡角色動畫短片| 驚魂午夜", type: "news", },
            { imgSrc: "../material/new_info_live/new/new_03.png", date: "2024/09/09", description: "【麗都放大鏡】賽斯篇", type: "news", },
            { imgSrc: "../material/new_info_live/new/new_04.png", date: "2024/09/06", description: "【六分街街頭異聞】第5話", type: "news", },
            { imgSrc: "../material/new_info_live/new/new_05.png", date: "2024/09/04", description: "【麗都放大鏡】簡篇", type: "news", },
            { imgSrc: "../material/new_info_live/new/new_06.jpg", date: "2024/09/04", description: "「天衣無縫的偽裝」", type: "news", },
            { imgSrc: "../material/new_info_live/new/new_07.png", date: "2024/09/03", description: "《絕區零》簡角色展示｜致命審訊", type: "news", },
            { imgSrc: "../material/new_info_live/new/new_08.png", date: "2024/09/02", description: "「代理人機制介紹：賽斯篇", type: "news", },
            // ...其他新聞項目
        ],
        announcement: [
            { imgSrc: "../material/new_info_live/announcement/info_00.png", date: "2024/09/11", description: "「第一幕，第一鏡！」活動說明", type: "announcement", },
            { imgSrc: "../material/new_info_live/announcement/info_01.png", date: "2024/09/04", description: "「實境戰術演練」活動說明", type: "announcement", },
            { imgSrc: "../material/new_info_live/announcement/info_02.png", date: "2024/09/02", description: "「『查無此人』」調頻說明", type: "announcement", },
            { imgSrc: "../material/new_info_live/announcement/info_03.png", date: "2024/09/02", description: "「喧譁奏鳴」調頻說明", type: "announcement", },
            { imgSrc: "../material/new_info_live/announcement/info_04.png", date: "2024/09/02", description: "「『嗯呢』從天降」活動說明", type: "announcement", },
            { imgSrc: "../material/new_info_live/announcement/info_05.png", date: "2024/09/02", description: "「咖啡魔藥學-實戰模擬室」活動說明", type: "announcement", },
            { imgSrc: "../material/new_info_live/announcement/info_06.png", date: "2024/08/28", description: "「治安官的一天」活動說明", type: "announcement", },
            { imgSrc: "../material/new_info_live/announcement/info_07.png", date: "2024/08/14", description: "「金牌售後」活動說明", type: "announcement", },
            { imgSrc: "../material/new_info_live/announcement/info_08.png", date: "2024/08/14", description: "新劇情：「臥底藍調」獨家視界開啟", type: "announcement", },
            // ...其他公告項目
        ],
        live: [
            { imgSrc: "../material/new_info_live/live/live_00.png", date: "2024/09/04", description: "簡同人繪畫徵集活動", type: "live", },
            { imgSrc: "../material/new_info_live/live/live_01.png", date: "2024/09/01", description: "9月生日慶典", type: "live", },
            { imgSrc: "../material/new_info_live/live/live_02.png", date: "2024/08/15", description: "🎁Discord有獎活動｜以骸大作戰", type: "live", },
            { imgSrc: "../material/new_info_live/live/live_03.jpg", date: "2024/08/14", description: "1.1版本TikTok短影片徵集活動", type: "live", },
            { imgSrc: "../material/new_info_live/live/live_04.png", date: "2024/08/14", description: "Twitch 掉寶 獎勵開始掉落！", type: "live", },
            { imgSrc: "../material/new_info_live/live/live_05.png", date: "2024/08/14", description: "【有獎活動】1.1版本攻略徵集活動現已開啟！", type: "live", },
            { imgSrc: "../material/new_info_live/live/live_06.png", date: "2024/08/10", description: "青衣同人繪畫徵集活動", type: "live", },
            { imgSrc: "../material/new_info_live/live/live_07.jpg", date: "2024/08/09", description: "Twitch 直播激勵", type: "live", },
            { imgSrc: "../material/new_info_live/live/live_08.png", date: "2024/08/03", description: "Twitch 前瞻特別節目 抽獎福利放送！", type: "live", },
            // ...其他活動項目
        ]
    };

    // 合併所有項目並按日期排序
    function mergeAndSortContent() {
        let combinedContent = [...contentTemplates.news, ...contentTemplates.announcement, ...contentTemplates.live];

        // 日期轉換函數
        function parseDate(dateString) {
            return new Date(dateString.replace(/\//g, '-'));
        }

        // 按日期排序（最新在最前面）
        combinedContent.sort((a, b) => parseDate(b.date) - parseDate(a.date));

        return combinedContent;
    }

    // 根據頁碼加載內容
    function loadContent(type, page = 1) {
        gridContainer.innerHTML = ''; // 清空當前內容
        let content = contentTemplates[type];

        if (type === 'latest') {
            content = mergeAndSortContent(); // 合併和排序最新內容
        }

        // 計算開始和結束的項目索引
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = Math.min(content.length, startIndex + itemsPerPage);
        const pageContent = content.slice(startIndex, endIndex);

        // 生成九宮格項目
        pageContent.forEach(item => {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item-img');

            // 根據類型設置 tag 標籤
            const tagMap = {
                news: '新聞',
                announcement: '公告',
                live: '活動'
            };

            gridItem.innerHTML = `
                <a href="${item.link || '#'}" target="_blank">
                    <img src="${item.imgSrc}" alt="${item.description}">
                    <p class="new_info_txt"><span class="tag ${item.type}">${tagMap[item.type]}</span> ${item.date}</p>
                    <p class="new_info_de">${item.description}</p>
                </a>
            `;
            gridContainer.appendChild(gridItem);
        });

        // 生成分頁按鈕
        const totalPages = Math.ceil(content.length / itemsPerPage);
        generatePagination(totalPages, type);
    }

    // 生成分頁按鈕
    function generatePagination(totalPages, type) {
        const paginationContainer = document.getElementById('pagination');
        paginationContainer.innerHTML = ''; // 清空分頁按鈕

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.innerText = i;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                loadContent(type, currentPage); // 加載對應頁碼的內容
                scrollToTop(); // 切換頁面後滾動到頂部
            });

            paginationContainer.appendChild(pageButton);
        }
    }

    // 綁定按鈕點擊事件
    document.getElementById('latest-btn').addEventListener('click', () => {
        currentPage = 1; // 重置頁碼
        loadContent('latest', currentPage);
    });
    document.getElementById('news-btn').addEventListener('click', () => {
        currentPage = 1;
        loadContent('news', currentPage);
    });
    document.getElementById('announcement-btn').addEventListener('click', () => {
        currentPage = 1;
        loadContent('announcement', currentPage);
    });
    document.getElementById('live-btn').addEventListener('click', () => {
        currentPage = 1;
        loadContent('live', currentPage);
    });

    // 預設載入 "最新資訊"
    loadContent('latest', currentPage);
});



// ------------------角色介紹頭像切換資訊------------------

// 當 DOM 完全加載後執行代碼
document.addEventListener('DOMContentLoaded', function () {
    // 選擇所有角色圖標
    const characterIcons = document.querySelectorAll('.character_icon img');

    // 選擇要更新的 DOM 元素
    const characterName = document.getElementById('character-name');
    const characterInfo = document.getElementById('character-info');
    const characterQuote = document.getElementById('character-quote');
    const characterPhoto = document.getElementById('character-photo');

    // 為每個角色圖標添加點擊事件
    characterIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            // 更新角色名稱
            characterName.textContent = this.getAttribute('data-name');

            // 更新角色信息
            characterInfo.textContent = this.getAttribute('data-info');

            // 更新角色語錄
            characterQuote.innerHTML = this.getAttribute('data-quote');

            // 更新角色圖片
            characterPhoto.src = this.getAttribute('data-photo');
        });
    });
});

// -------------------角色資訊----------------------

const ethnicImages = [
    {
        background: "../material/Ethnic_background/Ethnic_Nighthawks_background.png",
        icon: "../material/Ethnic/Ethnic_Nighthawks.png",
        characters: [

            {
                name: "朱鳶",
                info: "都市秩序部刑偵組下屬分隊長朱鳶，隨時待命。",
                quote: `「我那個優秀的女兒啊，去菜市場都想帶著！」<br>——選自媽媽的第148條語音<br><br>「精益求精者，患在不變。」<br>——宛如後輩的前輩<br><br>「隊長搞不定的毛茸茸，統統交給我！」<br>——新晉治安巡查<br><br>「現在叫隊長，以後可是要叫局長哦~」<br>——夜班首席代表`,
                photo: "../material/character/character_Zhu Yuan.png",
                icon: "../material/character_icon/character_Zhu Yuan.png",

            },
            {

                name: "青衣",
                info: "邂逅相遇，適我願兮。",
                quote: `「前輩的從容是需要靠豐富的人生智慧堆砌的！」<br>——朱鳶<br>「青衣前輩嗎？坐在那裡。那縷灼熱的水汽，是她的狼煙。」<br>——治安局實習巡查員<br>「謝謝！是我丟的手……錶。您……舔這一下是正常流程嗎？」<br>——帶著失而復得喜悅（？）的民眾<br>「如此看來，閣下真是，既知公理，也識時務。」<br>——一部古裝武俠電影`,
                photo: "../material/character/character_Qingyi.png",
                icon: "../material/character_icon/character_Qingyi.png",

            },
            {

                name: "賽斯·洛威爾",
                info: "隊長，逮捕犯人就交給我吧！",
                quote: `「還需要一些時間，我相信賽斯有一天可以獨當一面。」<br>——朱鳶<br>「路漫漫其修遠兮。」<br>——一名「捕快」<br>「在咬牙不哭這件事上，小傢伙也是一樣努力啊~」<br> ——一位「罪犯」(？)<br>「啊……你不知道嗎？他可是出了名的關係戶……」<br> ——一個模糊而又刺眼的身影`,
                photo: "../material/character/Character_Seth.png",
                icon: "../material/character_icon/character_Seth.png",

            },
        ]
    },
    {
        background: "../material/Ethnic_background/Ethnic_HSOS6_background.png",
        icon: "../material/Ethnic/Ethnic_HSOS6.png",
        characters: [
            {

                name: "星見雅",
                info: "秩序，不可破。",
                quote: `對空洞事務特別行動部第六課課長，<br>也是新艾利都知名武家的繼承人。<br>秉承著強者的責任自覺性，以守護新艾利都的原則與秩序為己任，<br>期望建立一個牢不可破的城市運轉體系，並擁有豐富刀劍收藏（原話）。`,
                photo: "../material/character/character_Hoshimi.png",
                icon: "../material/character_icon/character_Hoshimi.png",

            },
            {

                name: "蒼角",
                info: "只要能一直吃飽肚子，蒼角就已經很幸福啦~",
                quote: `小蒼角，戰力強<br>既是對空六課的隊員，也是「財產」。敢小看她的敵人已消失不見。物理上。<br><br>不挑食，吃光光<br>貪吃，如果看到敵人浪費食物會很生氣。物理上。<br><br>冷僻字，不會講<br>因為一些原因，似乎沒有受過太多的教育，常常念錯字，因此還鬧出過一些可愛的笑話。物理上。<br><br>赤子之心顯純良<br>雖然只是個尚不成熟的孩子，但能如皇帝的新衣裡那位孩童般發現樸素的真理。物理上。`,
                photo: "../material/character/character_Soukaku.png",
                icon: "../material/character_icon/character_Soukaku.png",

            },
            {

                name: "月城柳",
                info: "對空六課副課長月城柳，向您問好。",
                quote: `「紅豆包有這麼好吃嗎？柳姐讓我把她那份便當吃了，自己又去吃紅豆包了。」<br>——蒼角<br><br>「真是拿月城沒辦法，她的字典裡就沒有『睜一隻眼閉一隻眼』吧。」<br>——淺羽悠真<br><br>「柳，報告真的只能課長來寫嗎…什麼，申請修改這個制度也要寫報告？」<br>——星見雅<br><br>「今天是月城副課長的生日嗎？」<br>——母親節當天看到柳桌上擺滿鮮花的新晉對空部人員`,
                photo: "../material/character/character_Tsukishiro.png",
                icon: "../material/character_icon/character_Tsukishiro.png",

            },
        ]
    },

    {
        background: "../material/Ethnic_background/Ethnic_Housekeeping_background.png",
        icon: "../material/Ethnic/Ethnic_Housekeeping.png",
        characters: [

            {

                name: "艾蓮·喬",
                info: "啊，又是麻煩的委託……果然該換個班表。",
                quote: `三言兩語，簡單一點<br>麻煩的事情在這裡是行不通的，一切從簡。<br><br>勞逸結合，輕鬆一點<br>適時休息，當然是為了工作……的時候不要那麼心煩。<br><br>全神貫注，小心一點<br>
                    怕她不認真，也怕她過於認真，好在受苦的是敵人。<br><br>剝開糖紙，甜蜜一點<br>把棒棒糖叼在嘴哩，把少女的心思藏在懷裡。`,
                photo: "../material/character/character_Ellen.png",
                icon: "../material/character_icon/character_Ellen.png",

            },
            {

                name: "亞歷山德麗娜",
                info: "您就是這次的主人嗎？維多利亞居家服務麗娜，為您效勞。",
                quote: `「仲夏夜之夢舞曲」<br>精緻柔和的曼妙旋律，在麗娜身上自然而然地流淌。<br><br>「命運交織協奏曲」<br>玩偶們演繹的附加樂章，最好豎起所有耳朵聽。<br><br>「新新世界交響曲」<br>激昂有力卻不失優雅，揍人也是一如既往地美麗。<br><br>「沉默悲愴奏鳴曲」<br>看到麗娜走進廚房時，很多人腦中會響起的配樂。`,
                photo: "../material/character/character_Alexandrina.png",
                icon: "../material/character_icon/character_Alexandrina.png",

            },
            {

                name: "馮·萊卡恩",
                info: "執事萊卡恩，感謝您的指名。",
                quote: `不管什麼事都能妥善解決，是顧客最信賴的執事，是團隊最堅實的後盾。<br>理性又明智，優雅如紳士，容不得一點污漬。<br><br>認定自己跟隨的人之後，會向其獻上絕對的忠誠。<br>雖然表面上優雅理性，但面對某些危險時會流露出與生俱來的野性。`,
                photo: "../material/character/character_Lycaon.png",
                icon: "../material/character_icon/character_Lycaon.png",

            },

            {

                name: "可琳·威克斯",
                info: "我、我這樣的人……真的可以嗎？",
                quote: `即使是居家服務以外的工作，也可以放心交給她！<br>（咦、咦咦？可、可琳並沒有這麼厲害！）<br><br>乖巧聽話、認真負責，不懼任何骯髒與勞累！<br>（請、請等一下！可琳並不是這樣的！）<br><br>永遠不會拖累合作者，任何事只要接手就會負責到底！<br>（拜託了，請好好聽可琳說話！這些誇大的宣傳會讓顧客誤會的！）<br><br>可琳，她是這個領域上最好的市場選擇！<br>（嗚嗚，請、請不要把這份報導發出去！這不是真正的可琳！）`,
                photo: "../material/character/character_Corin.png",
                icon: "../material/character_icon/character_Corin.png",

            },
        ]
    },
    {
        background: "../material/Ethnic_background/Ethnic_Calydonian_background.png",
        icon: "../material/Ethnic/Ethnic_Calydonian.png",
        characters: [


            {

                name: "凱撒·金",
                info: "我就是凱撒，卡吕冬之子的老大。",
                quote: `「人如其名，頭腦跟沙拉一樣簡單。」<br>——露西亞娜·奧克希斯·提奧多·德·蒙特夫<br><br>「大姐頭！！！介紹一下，這位是妮可老……呃……這位是安比！」<br>——比利·奇德<br><br>「她在等待一場加冕的烈火，我相信她會比她父親做得更好。」<br>——大老爹<br><br>「啊？」<br>——不小心被凱撒的小拇指撞碎的桌腳如果能開口說話`,
                photo: "../material/character/character_Caesar.png",
                icon: "../material/character_icon/character_Caesar.png",

            },
            {

                name: "柏妮思",
                info: "你看起來没什麽熱情呢，要「燃燒」起來嗎~",
                quote: `「柏妮思！你離大鋼牙的油箱遠一點！」<br>——派派·韋爾<br><br>「是個自來熟的傢伙，以骸來了都得先陪她喝兩杯再走。」<br>——萊特<br><br>「是我的錯覺嗎？柏妮思每次來了之後，小豬們都變得更……紅了？」<br><br>——露西亞娜·奧克希斯·提奧多·德·蒙特夫<br>「哈哈哈！痛快！柏妮思的特調從不讓人失望。」<br><br>——凱撒·金`,
                photo: "../material/character/character_Burnice.png",
                icon: "../material/character_icon/character_Burnice.png",

            },
            {

                name: "派派·韋爾",
                info: "要載你一程嗎？記得系好安全帶喔。",
                quote: `「本小姐不明白彩券有什麼好買的？輸贏完全不由自己控制不是嗎？」<br>——露西亞娜·奧克希斯·提奧多·德·蒙特夫<br><br>「她的業餘生活和她愛看的黑白報紙們一樣繽紛多彩。」<br>——一位暈血的(？)傭兵<br><br>「字字珠璣，篇篇精華，是一位真的懂車、愛車的好大哥！」<br>——某車迷論壇管理員<br><br>「滿……突然的。」<br>——驚魂未定的「大鋼牙」乘客`,
                photo: "../material/character/character_Piper.png",
                icon: "../material/character_icon/character_Piper.png",

            },
            {

                name: "露西",
                info: "有貴客登門，就讓本小姐來招待吧！",
                quote: `「年輕人的精神真好啊~」<br>——派派·韋爾<br><br>「很有品味！但是她看得上的特調，沒一點錢還真做不出來哈哈哈。」<br>——一位熱情的調飲師<br><br>「有遠見的父母，懂得使用以下幾種方法給孩子成長的自由。」<br>——《別讓親子關係成為伴生空洞》節選<br><br>「如有知其下落者請聯絡我們，必有重！重！重賞！」<br>——黃金時段的尋人啟事廣告`,
                photo: "../material/character/character_Luciana.png",
                icon: "../material/character_icon/character_Luciana.png",

            },
        ]
    },

    {

        background: "../material/Ethnic_background/Ethnic_Geatie-house_background.png",
        icon: "../material/Ethnic/Ethnic_Geatie-house.png",
        characters: [

            {

                name: "安比·德瑪拉",
                info: "目標確認，開始行動。",
                quote: `從不提起自己的故事，彷彿沒有過去，是個謎一般的少女。<br>性格沉著冷靜，戰鬥風格異常幹練高效，像是經歷過常年的訓練。<br>在一次意外中，<br>被妮可「撿」回了「狡兔屋」，從此對她產生了如同雛鳥情結般的情感依賴。<br>平時最喜歡做的事是看電影，但由於缺乏某些常識，似乎……總是會把故事當真。`,
                photo: "../material/character/character_Anby.png",
                icon: "../material/character_icon/character_Anby.png",

            },
            {

                name: "妮可·德瑪拉",
                info: "明智之選！不過先说好，我的出場費可不低哦！",
                quote: `萬能事務所「狡兔屋」的老大，<br>承接各種空洞調查相關的委託。<br>在新艾利都街頭混跡多年的「老江湖」，<br>在同行間享有「狡兔有三窟，妮可三百窟」的「美名」。<br>因作風圓滑狡黠、黑白通吃，也被很多委託人放進黑名單裡。<br>喜歡錢，理財能力卻出奇地離譜，<br>導致「狡兔屋」常年在赤字邊緣徘徊，還欠了不少債務。`,
                photo: "../material/character/character_Nicole.png",
                icon: "../material/character_icon/character_Nicole.png",

            },
            {

                name: "比利·奇德",
                info: "星徽騎士才不會輸呢哈——哈哈哈！",
                quote: `造型帥氣倜儻，個性吊兒郎當的智慧機器人。<br>是特攝劇《星徽騎士》的狂熱粉絲，<br>不僅自稱星徽騎士，還常把劇中台詞掛在嘴邊。<br>手持一對特殊訂製的高威力左輪槍，比利稱其為「姑娘們」，<br>似乎是故人所贈。<br>雖然看起來不太可靠，但一旦認真起來，比利應對任何挑戰都游刃有餘。`,
                photo: "../material/character/character_Billy.png",
                icon: "../material/character_icon/character_Billy.png",

            },
            {

                name: "猫宫又奈",
                info: "最好吃的鯖魚，永遠是還没吃到的那一條~",
                quote: `活潑調皮會搞怪，你的錢包她也愛。（不開玩笑，她真的愛）<br>身手矯健，行事大膽。再危險的空洞也敢進去探一探。<br>「貓愛吃魚」其實是一種不正確的刻板印象。但貓又確實愛吃魚。<br>經歷過許多「好奇心害死貓」的瞬間，也見識過不少不能說的秘密。`,
                photo: "../material/character/character_Nekomiya.png",
                icon: "../material/character_icon/character_Nekomiya.png",

            },
        ]
    },
    {

        background: "../material/Ethnic_background/Ethnic_Belobog_background.png",
        icon: "../material/Ethnic/Ethnic_Belobog.png",
        characters: [

            {

                name: "格莉絲·霍華德",
                info: "這冷峻硬朗的線條，真美啊……忍不住想拆開來看看呢。",
                quote: `你說格莉絲？扳手搶著答道：<br>噢，她可是我遇到第一個會幫我按摩的好心人。<br><br>她真的好溫柔，螺絲緊接著補充：<br>比起被鎖得緊到不行，我更喜歡她的恰到好處。<br><br>齒輪這時也加入了進來：<br>她聰明的大腦簡直就像精準咬合一樣性感美麗！<br><br>而且非常理性，機油小聲嘀咕著：<br>她的字典裡可沒有「少許」或「適中」，都是精確的「毫升」。`,
                photo: "../material/character/character_Grace.png",
                icon: "../material/character_icon/character_Grace.png",

            },
            {

                name: "珂蕾妲·貝洛伯格",
                info: "我就是白祇重工的社長，珂蕾妲。",
                quote: `可愛嬌小，但是戰力「兇惡」<br>個頭小是事實，但能把重工錘揮舞得虎虎生風也是事實。<br><br>「兇惡」少女，但是是社長<br>白祇重工的老大，年紀輕輕的掌舵人。<br><br>是社長，但是身先士卒<br>比起坐鎮管理，更喜歡投入到實地工作中，十分賣力。<br><br>身先士卒，但是本性可愛<br>強撐的成熟終究掩蓋不了偶爾流露的童真，率領眾人的同時也被眾人呵護。`,
                photo: "../material/character/character_Koleda.png",
                icon: "../material/character_icon/character_Koleda.png",

            },
            {

                name: "安東·伊萬諾夫",
                info: "有處理不了的工作？讓我來！",
                quote: `熱心工作，帶隊大哥<br>白祇重工的幹部之一，工程現場負責人，隨時整裝待發。<br><br>血氣方剛，中流砥柱<br>全身的90%都由「幹勁」組成，遇到困難，迎難而上型。<br><br>好心腸，不說破<br>刀子嘴豆腐心，遇到需要幫助的人很難說「不」。<br><br>漢大心實，光明磊落<br>為人坦蕩無心事，很少見他心煩意亂。`,
                photo: "../material/character/character_Anton.png",
                icon: "../material/character_icon/character_Anton.png",

            },
            {

                name: "本·比格",
                info: "我喜歡算術，但這不妨礙我一巴掌拍碎歹徒。",
                quote: `強橫的身體，敦厚的靈魂<br>巴掌力量足以拍碎骨頭，但這巴掌目前拍得最多的東西是計算機按鈕。<br><br>魚與熊掌可以兼得<br>進可提棒戰歹徒，退可安坐算財務……再來罐魚子醬慰勞一下就更好了。<br><br>匠心毛茸茸<br>對數字天生敏感，做賬認真仔細，甚至能背下辦公室的58本賬簿。<br><br>伯樂識熊之恩<br>入職1年321天後被珂蕾妲提拔為財務負責人，從此忠心追隨。`,
                photo: "../material/character/character_Ben.png",
                icon: "../material/character_icon/character_Ben.png",
            }
        ]
    }
]

let ethnicCurrentIndex = 0;
let characterCurrentIndex = 0;

function changeEthnicBackground(direction) {
    ethnicCurrentIndex += direction;

    // 循環更新索引
    if (ethnicCurrentIndex < 0) {
        ethnicCurrentIndex = ethnicImages.length - 1;
    } else if (ethnicCurrentIndex >= ethnicImages.length) {
        ethnicCurrentIndex = 0;
    }

    // 更新族群背景和圖標
    updateEthnicDisplay();
    // 更新角色圖標
    updateCharacterIcons(ethnicImages[ethnicCurrentIndex].characters);
    // 重置角色到第一個
    characterCurrentIndex = 0;
    updateCharacterInfo(ethnicImages[ethnicCurrentIndex].characters[characterCurrentIndex]);
}

function updateEthnicDisplay() {
    const currentEthnic = ethnicImages[ethnicCurrentIndex];
    document.getElementById('ethnicImage').src = currentEthnic.background;
    document.getElementById('ethnicIcon').src = currentEthnic.icon;
}

function updateCharacterIcons(characters) {
    const characterIconContainer = document.querySelector('.character_icon');
    characterIconContainer.innerHTML = '';  // 清空當前角色圖標

    characters.forEach((character, index) => {
        const img = document.createElement('img');
        img.src = character.icon;
        img.alt = character.name;
        img.setAttribute('data-name', character.name);
        img.setAttribute('data-info', character.info);
        img.setAttribute('data-quote', character.quote);
        img.setAttribute('data-photo', character.photo);

        // 為每個角色圖標添加點擊事件
        img.addEventListener('click', function () {
            characterCurrentIndex = index; // 更新當前角色索引
            updateCharacterInfo(character);
        });

        characterIconContainer.appendChild(img);
    });
}

function updateCharacterInfo(character) {
    document.getElementById('character-name').textContent = character.name;
    document.getElementById('character-info').textContent = character.info;
    document.getElementById('character-quote').innerHTML = character.quote;
    document.getElementById('character-photo').src = character.photo;
}

// 初始化
document.addEventListener('DOMContentLoaded', function () {
    updateEthnicDisplay(); // 初始化顯示當前族群
    updateCharacterIcons(ethnicImages[ethnicCurrentIndex].characters);
    updateCharacterInfo(ethnicImages[ethnicCurrentIndex].characters[characterCurrentIndex]);
});






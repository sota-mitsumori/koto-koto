export type Sentence = {
    id: string;
    display: string; // The visual text (Kanji/Mixed)
    reading: string; // The phonetic reading (Hiragana)
    meta?: {
        author?: string;
        title?: string;
        source?: "aozora" | "curated";
    };
};

const aozoraSentences: Sentence[] = [
    {
        id: "soseki_kokoro_01",
        display: "私はその人を常に先生と呼んでいた。",
        reading: "わたしはそのひとをつねにせんせいとよんでいた。",
        meta: { author: "夏目漱石", title: "こころ", source: "aozora" },
    },
    {
        id: "soseki_botchan_01",
        display: "親譲りの無鉄砲で小供の時から損ばかりしている。",
        reading: "おやゆずりのむてっぽうでこどものときからそんばかりしている。",
        meta: { author: "夏目漱石", title: "坊っちゃん", source: "aozora" },
    },
    {
        id: "soseki_kusamakura_01",
        display: "山路を登りながら、こう考えた。",
        reading: "やまみちをのぼりながら、こうかんがえた。",
        meta: { author: "夏目漱石", title: "草枕", source: "aozora" },
    },
    {
        id: "soseki_sorekara_01",
        display: "恋は罪悪ですか。",
        reading: "こいはざいあくですか。",
        meta: { author: "夏目漱石", title: "それから", source: "aozora" },
    },
    {
        id: "dazai_melos_01",
        display: "メロスは激怒した。",
        reading: "めろすはげきどした。",
        meta: { author: "太宰治", title: "走れメロス", source: "aozora" },
    },
    {
        id: "dazai_melos_02",
        display: "必ず、かの邪智暴虐の王を除かなければならぬと決意した。",
        reading:
            "かならず、かのじゃちぼうぎゃくのおうをのぞかなければならぬとけついした。",
        meta: { author: "太宰治", title: "走れメロス", source: "aozora" },
    },
    {
        id: "dazai_shikkaku_01",
        display: "恥の多い生涯を送ってきました。",
        reading: "はじのおおいしょうがいをおくってきました。",
        meta: { author: "太宰治", title: "人間失格", source: "aozora" },
    },
    {
        id: "dazai_shikkaku_02",
        display: "生まれて、すみません。",
        reading: "うまれて、すみません。",
        meta: { author: "太宰治", title: "人間失格", source: "aozora" },
    },
    {
        id: "miyazawa_ginga_01",
        display: "ジョバンニは、学校の帰りに活版所へ行きました。",
        reading: "じょばんには、がっこうのかえりにかっぱんじょへいきました。",
        meta: { author: "宮沢賢治", title: "銀河鉄道の夜", source: "aozora" },
    },
    {
        id: "miyazawa_cello_01",
        display: "ゴーシュは町の活動写真館でセロを弾く係でした。",
        reading:
            "ごーしゅはまちのかつどうしゃしんかんでせろをひくかかりでした。",
        meta: {
            author: "宮沢賢治",
            title: "セロ弾きのゴーシュ",
            source: "aozora",
        },
    },
    {
        id: "miyazawa_ame_01",
        display: "雨ニモマケズ、風ニモマケズ、雪ニモ夏ノ暑サニモマケヌ。",
        reading:
            "あめにもまけず、かぜにもまけず、ゆきにもなつのあつさにもまけぬ。",
        meta: { author: "宮沢賢治", title: "雨ニモマケズ", source: "aozora" },
    },
    {
        id: "miyazawa_yodaka_01",
        display:
            "よだかは、もう、どうしても空へ飛び上がらなければならないと思いました。",
        reading:
            "よだかは、もう、どうしてもそらへとびあがらなければならないとおもいました。",
        meta: { author: "宮沢賢治", title: "よだかの星", source: "aozora" },
    },
    {
        id: "miyazawa_matasaburo_01",
        display: "どっどど　どどうど　どどうど　どどう。",
        reading: "どっどど　どどうど　どどうど　どどう。",
        meta: { author: "宮沢賢治", title: "風の又三郎", source: "aozora" },
    },
];

const curatedSentences: Sentence[] = [
    {
        id: "curated_lit_01",
        display: "吾輩は猫である。名前はまだ無い。",
        reading: "わがはいはねこである。なまえはまだない。",
        meta: {
            author: "夏目漱石",
            title: "吾輩は猫である",
            source: "curated",
        },
    },
    {
        id: "curated_lit_02",
        display: "国境の長いトンネルを抜けると雪国であった。",
        reading: "こっきょうのながいとんねるをぬけるとゆきぐにであった。",
        meta: { author: "川端康成", title: "雪国", source: "curated" },
    },
    {
        id: "curated_lit_03",
        display: "雨ニモマケズ、風ニモマケズ。",
        reading: "あめにもまけず、かぜにもまけず。",
        meta: { author: "宮沢賢治", title: "雨ニモマケズ", source: "curated" },
    },
    {
        id: "curated_lit_04",
        display: "祇園精舎の鐘の声、諸行無常の響きあり。",
        reading:
            "ぎおんしょうじゃのかねのこえ、しょぎょうむじょうのひびきあり。",
        meta: { author: "鴨長明", title: "方丈記", source: "curated" },
    },
    {
        id: "curated_lit_05",
        display: "春はあけぼの。やうやう白くなりゆく山際。",
        reading: "はるはあけぼの。ようようしろくなりゆくやまぎわ。",
        meta: { author: "清少納言", title: "枕草子", source: "curated" },
    },
    {
        id: "curated_lit_06",
        display: "ゆく河の流れは絶えずして、しかももとの水にあらず。",
        reading: "ゆくかわのながれはたえずして、しかももとのみずにあらず。",
        meta: { author: "鴨長明", title: "方丈記", source: "curated" },
    },
    {
        id: "curated_lit_07",
        display: "蜘蛛の糸は、静かに垂れ下がっていた。",
        reading: "くものいとは、しずかにたれさがっていた。",
        meta: { author: "芥川龍之介", title: "蜘蛛の糸", source: "curated" },
    },
    {
        id: "curated_lit_08",
        display: "待てど暮らせど来ぬ人を。",
        reading: "まてどくらせどこぬひとを。",
        meta: { author: "和泉式部", source: "curated" },
    },
    {
        id: "curated_lit_09",
        display:
            "ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。",
        reading:
            "あるひのくれがたのことである。ひとりのげにんが、らしょうもんのしたであまやみをまっていた。",
        meta: { author: "芥川龍之介", title: "羅生門", source: "curated" },
    },
    {
        id: "curated_lit_10",
        display: "智に働けば角が立つ。情に棹させば流される。",
        reading: "ちにはたらけばかどがたつ。じょうにさおさせばながされる。",
        meta: { author: "夏目漱石", title: "草枕", source: "curated" },
    },
    {
        id: "curated_lit_11",
        display:
            "銀河の岸を、一列の光の柱が、どこまでも走って行くのが見えました。",
        reading:
            "ぎんがのきしを、いちれつのひかりのはしらが、どこまでもはしっていくのがみえました。",
        meta: { author: "宮沢賢治", title: "銀河鉄道の夜", source: "curated" },
    },
    {
        id: "curated_zen_01",
        display: "古い寺の鐘の音が、夕暮れの空に静かに響き渡っている。",
        reading:
            "ふるいてらのかねのねが、ゆうぐれのそらにしずかにひびきわたっている。",
        meta: { source: "curated" },
    },
    {
        id: "curated_zen_02",
        display: "静寂の中に、水の滴る音が響く。",
        reading: "せいじゃくのなかに、みずのしたたるおとがひびく。",
        meta: { source: "curated" },
    },
    {
        id: "curated_zen_03",
        display: "風が竹林を通り抜ける音が聞こえる。",
        reading: "かぜがちくりんをとおりぬけるおとがきこえる。",
        meta: { source: "curated" },
    },
    {
        id: "curated_zen_04",
        display: "心を無にして、ただ指先の動きに集中する。",
        reading: "こころをむにして、ただゆびさきのうごきにしゅうちゅうする。",
        meta: { source: "curated" },
    },
    {
        id: "curated_zen_05",
        display: "桜の花びらが、風に乗って舞い散る。",
        reading: "さくらのはなびらが、かぜにのってまいちる。",
        meta: { source: "curated" },
    },
    {
        id: "curated_zen_06",
        display: "秋の夜長に、虫の声が心地よく響く。",
        reading: "あきのよながに、むしのこえがここちよくひびく。",
        meta: { source: "curated" },
    },
    {
        id: "curated_zen_07",
        display: "雪が降り積もり、世界は白一色に染まる。",
        reading: "ゆきがふりつもり、せかいはしろいっしょくにそまる。",
        meta: { source: "curated" },
    },
    {
        id: "curated_zen_08",
        display: "波の音が、心を洗い流してくれる。",
        reading: "なみのおとが、こころをあらいながしてくれる。",
        meta: { source: "curated" },
    },
    {
        id: "curated_zen_09",
        display: "木漏れ日が、苔むした岩を照らしている。",
        reading: "こもれびが、こけむしたいわをてらしている。",
        meta: { source: "curated" },
    },
    {
        id: "curated_zen_10",
        display: "お茶の香りが、部屋いっぱいに広がる。",
        reading: "おちゃのかおりが、へやいっぱいにひろがる。",
        meta: { source: "curated" },
    },
    {
        id: "curated_zen_11",
        display: "遠くで聞こえる雷の音が、夏の訪れを告げる。",
        reading: "とおくできこえるかみなりのねが、なつのおとずれをつげる。",
        meta: { source: "curated" },
    },
    {
        id: "curated_zen_12",
        display: "枯山水の庭で、砂の模様を眺める。",
        reading: "かれさんすいのにわで、すなのもようをながめる。",
        meta: { source: "curated" },
    },
    {
        id: "curated_zen_13",
        display: "夜空を見上げると、満天の星が輝いていた。",
        reading: "よぞらをみあげると、まんてんのほしがかがやいていた。",
        meta: { source: "curated" },
    },
    {
        id: "curated_zen_14",
        display: "朝霧が晴れて、山々の稜線が姿を現す。",
        reading: "あさぎりがはれて、やまやまのりょうせんがすがたをあらわす。",
        meta: { source: "curated" },
    },
    {
        id: "curated_zen_15",
        display: "暖炉の火が、ぱちぱちと音を立てて燃えている。",
        reading: "だんろのひが、ぱちぱちとおとをたててもえている。",
        meta: { source: "curated" },
    },
    {
        id: "curated_long_01",
        display: "深い森の奥で、数百年も生き続ける大木に出会った。",
        reading:
            "ふかいもりのおくで、すうひゃくねんもいきつづけるたいぼくにであった。",
        meta: { source: "curated" },
    },
    {
        id: "curated_long_02",
        display: "静寂な湖面に、満月が鏡のように映し出されている。",
        reading:
            "せいじゃくなこめんに、まんげつがかがみのようにうつしだされている。",
        meta: { source: "curated" },
    },
    {
        id: "curated_long_03",
        display: "新しい知識を学ぶことは、未知の世界への扉を開くことだ。",
        reading:
            "あたらしいちしきをまなぶことは、みちのせかいへのとびらをひらくことだ。",
        meta: { source: "curated" },
    },
    {
        id: "curated_long_04",
        display: "創造性とは、既存の要素を新しい組み合わせで繋げる能力である。",
        reading:
            "そうぞうせいとは、きぞんのようそをあたらしいくみあわせでつなげるのうりょくである。",
        meta: { source: "curated" },
    },
    {
        id: "curated_long_05",
        display: "美しいコードは、まるで詩のように読むことができる。",
        reading: "うつくしいこーどは、まるでうたのようによむことができる。",
        meta: { source: "curated" },
    },
    {
        id: "curated_long_06",
        display: "困難に直面した時こそ、人間の真価が問われる。",
        reading:
            "こんなんにちょくめんしたときこそ、にんげんのしんかがとわれる。",
        meta: { source: "curated" },
    },
    {
        id: "curated_long_07",
        display: "過去にとらわれず、未来を恐れず、今この瞬間を生きる。",
        reading:
            "かこにとらわれず、みらいをおそれず、いまこのしゅんかんをいきる。",
        meta: { source: "curated" },
    },
    {
        id: "curated_long_08",
        display: "言葉は時として、刃物よりも鋭く心をえぐる。",
        reading: "ことばはときとして、はものよりもするどくこころをえぐる。",
        meta: { source: "curated" },
    },
    {
        id: "curated_long_09",
        display: "優しさとは、弱さではなく、強さの証明である。",
        reading: "やさしさとは、よわさではなく、つよさのしょうめいである。",
        meta: { source: "curated" },
    },
    {
        id: "curated_long_10",
        display: "真のリーダーは、フォロワーを鼓舞し、成長させる。",
        reading: "しんのりーだーは、ふぉろわーをこぶし、せいちょうさせる。",
        meta: { source: "curated" },
    },
];

export const sentences: Sentence[] = [...aozoraSentences, ...curatedSentences];

export function getRandomSentences(count: number): Sentence[] {
    const shuffled = [...sentences].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, sentences.length));
}

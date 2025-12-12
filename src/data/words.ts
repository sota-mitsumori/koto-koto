export type Sentence = {
  id: string;
  display: string; // The visual text (Kanji/Mixed)
  reading: string; // The phonetic reading (Pure Hiragana)
};

export const words: Sentence[] = [
  // --- Japanese Literature ---
  {
    id: "lit_1",
    display: "吾輩は猫である。名前はまだ無い。",
    reading: "わがはいはねこである。なまえはまだない。",
  },
  {
    id: "lit_2",
    display: "国境の長いトンネルを抜けると雪国であった。",
    reading: "こっきょうのながいとんねるをぬけるとゆきぐにであった。",
  },
  {
    id: "lit_3",
    display: "雨ニモマケズ、風ニモマケズ。",
    reading: "あめにもまけず、かぜにもまけず。",
  },
  {
    id: "lit_4",
    display: "祇園精舎の鐘の声、諸行無常の響きあり。",
    reading: "ぎおんしょうじゃのかねのこえ、しょぎょうむじょうのひびきあり。",
  },
  {
    id: "lit_5",
    display: "春はあけぼの。やうやう白くなりゆく山際。",
    reading: "はるはあけぼの。ようようしろくなりゆくやまぎわ。",
  },
  {
    id: "lit_6",
    display: "ゆく河の流れは絶えずして、しかももとの水にあらず。",
    reading: "ゆくかわのながれはたえずして、しかももとのみずにあらず。",
  },
  {
    id: "lit_7",
    display: "蜘蛛の糸は、静かに垂れ下がっていた。",
    reading: "くものいとは、しずかにたれさがっていた。",
  },
  {
    id: "lit_8_short",
    display: "待てど暮らせど来ぬ人を。",
    reading: "まてどくらせどこぬひとを。",
  },
  
  // --- New Additions (Zen / Nature / Philosophy) ---
  {
    id: "zen_new_1",
    display: "沈黙は金、雄弁は銀。",
    reading: "ちんもくはきん、ゆうべんはぎん。",
  },
  {
    id: "zen_new_2",
    display: "灯台下暗し。",
    reading: "とうだいもとくらし。",
  },
  {
    id: "zen_new_3",
    display: "急がば回れ。",
    reading: "いそがばまわれ。",
  },
  {
    id: "zen_new_4",
    display: "明日は明日の風が吹く。",
    reading: "あしたはあしたのかぜがふく。",
  },
  {
    id: "zen_new_5",
    display: "笑う門には福来る。",
    reading: "わらうかどにはふくきたる。",
  },
  {
    id: "zen_new_6",
    display: "聞くは一時の恥、聞かぬは一生の恥。",
    reading: "きくはいっときのはじ、きかぬはいっしょうのはじ。",
  },
  {
    id: "lit_new_1",
    display: "山路を登りながら、こう考えた。",
    reading: "やまみちをのぼりながら、こうかんがえた。",
  },
  {
    id: "lit_new_2",
    display: "精神的に向上心のない者は馬鹿だ。",
    reading: "せいしんてきにこうじょうしんのないものはばかだ。",
  },
  {
    id: "lit_new_3",
    display: "夢十夜。",
    reading: "ゆめじゅうや。",
  },
  {
    id: "lit_new_4",
    display: "草枕。",
    reading: "くさまくら。",
  },
  {
    id: "zen_new_7",
    display: "色即是空、空即是色。",
    reading: "しきそくぜくう、くうそくぜしき。",
  },
  {
    id: "zen_new_8",
    display: "諸行無常。",
    reading: "しょぎょうむじょう。",
  },
  {
    id: "zen_new_9",
    display: "一期一会。",
    reading: "いちごいちえ。",
  },
  {
    id: "zen_new_10",
    display: "和敬清寂。",
    reading: "わけいせいじゃく。",
  },
  {
    id: "phil_new_1",
    display: "我思う、故に我あり。",
    reading: "われおもう、ゆえにわれあり。",
  },
  {
    id: "phil_new_2",
    display: "人間は考える葦である。",
    reading: "にんげんはかんがえるあしである。",
  },
  {
    id: "phil_new_3",
    display: "万物は流転する。",
    reading: "ばんぶつはるてんする。",
  },
  {
    id: "phil_new_4",
    display: "知は力なり。",
    reading: "ちはちからなり。",
  },
  {
    id: "phil_new_5",
    display: "無知の知。",
    reading: "むちのち。",
  },
  {
    id: "tech_new_1",
    display: "ハロー・ワールド。",
    reading: "はろー・わーるど。",
  },
  {
    id: "tech_new_2",
    display: "オープンソースの精神。",
    reading: "おーぷんそーすのせいしん。",
  },
  {
    id: "tech_new_3",
    display: "アジャイル開発。",
    reading: "あじゃいるかいはつ。",
  },
  {
    id: "nature_new_1",
    display: "紅葉が山を彩る。",
    reading: "こうようがやまをいろどる。",
  },
  {
    id: "nature_new_2",
    display: "蛍の光、窓の雪。",
    reading: "ほたるのひかり、まどのゆき。",
  },
  {
    id: "nature_new_3",
    display: "静けさや岩にしみ入る蝉の声。",
    reading: "しずけさやいわにしみいるせみのこえ。",
  },
  {
    id: "nature_new_4",
    display: "古池や蛙飛びこむ水の音。",
    reading: "ふるいけやかわずとびこむみずのおと。",
  },
  {
    id: "nature_new_5",
    display: "菜の花や月は東に日は西に。",
    reading: "なのはなやつきはひがしにひはにしに。",
  },
  {
    id: "nature_new_6",
    display: "柿食へば鐘が鳴るなり法隆寺。",
    reading: "かきくえばかねがなるなりほうりゅうじ。",
  },
  {
    id: "misc_new_1",
    display: "猫に小判。",
    reading: "ねこにこばん。",
  },
  {
    id: "misc_new_2",
    display: "猿も木から落ちる。",
    reading: "さるもきからおちる。",
  },

  {
    id: "lit_9",
    display:
      "ある日の暮方の事である。一人の下人が、羅生門の下で雨やみを待っていた。",
    reading:
      "あるひのくれがたのことである。ひとりのげにんが、らしょうもんのしたであまやみをまっていた。",
  },
  {
    id: "lit_10",
    display: "智に働けば角が立つ。情に棹させば流される。",
    reading: "ちにはたらけばかどがたつ。じょうにさおさせばながされる。",
  },
  {
    id: "lit_11",
    display: "銀河の岸を、一列の光の柱が、どこまでも走って行くのが見えました。",
    reading:
      "ぎんがのきしを、いちれつのひかりのはしらが、どこまでもはしっていくのがみえました。",
  },

  // --- Scenery / Zen ---
  {
    id: "zen_1",
    display: "古い寺の鐘の音が、夕暮れの空に静かに響き渡っている。",
    reading:
      "ふるいてらのかねのねが、ゆうぐれのそらにしずかにひびきわたっている。",
  },
  {
    id: "zen_2",
    display: "静寂の中に、水の滴る音が響く。",
    reading: "せいじゃくのなかに、みずのしたたるおとがひびく。",
  },
  {
    id: "zen_3",
    display: "風が竹林を通り抜ける音が聞こえる。",
    reading: "かぜがちくりんをとおりぬけるおとがきこえる。",
  },
  {
    id: "zen_4",
    display: "心を無にして、ただ指先の動きに集中する。",
    reading: "こころをむにして、ただゆびさきのうごきにしゅうちゅうする。",
  },
  {
    id: "zen_5",
    display: "桜の花びらが、風に乗って舞い散る。",
    reading: "さくらのはなびらが、かぜにのってまいちる。",
  },
  {
    id: "zen_6",
    display: "秋の夜長に、虫の声が心地よく響く。",
    reading: "あきのよながに、むしのこえがここちよくひびく。",
  },
  {
    id: "zen_7",
    display: "雪が降り積もり、世界は白一色に染まる。",
    reading: "ゆきがふりつもり、せかいはしろいっしょくにそまる。",
  },
  {
    id: "zen_8",
    display: "波の音が、心を洗い流してくれる。",
    reading: "なみのおとが、こころをあらいながしてくれる。",
  },
  {
    id: "zen_9",
    display: "木漏れ日が、苔むした岩を照らしている。",
    reading: "こもれびが、こけむしたいわをてらしている。",
  },
  {
    id: "zen_10",
    display: "お茶の香りが、部屋いっぱいに広がる。",
    reading: "おちゃのかおりが、へやいっぱいにひろがる。",
  },
  {
    id: "zen_11",
    display: "遠くで聞こえる雷の音が、夏の訪れを告げる。",
    reading: "とおくできこえるかみなりのねが、なつのおとずれをつげる。",
  },
  {
    id: "zen_12",
    display: "枯山水の庭で、砂の模様を眺める。",
    reading: "かれさんすいのにわで、すなのもようをながめる。",
  },
  {
    id: "zen_13",
    display: "夜空を見上げると、満天の星が輝いていた。",
    reading: "よぞらをみあげると、まんてんのほしがかがやいていた。",
  },
  {
    id: "zen_14",
    display: "朝霧が晴れて、山々の稜線が姿を現す。",
    reading: "あさぎりがはれて、やまやまのりょうせんがすがたをあらわす。",
  },
  {
    id: "zen_15",
    display: "暖炉の火が、ぱちぱちと音を立てて燃えている。",
    reading: "だんろのひが、ぱちぱちとおとをたててもえている。",
  },

  // --- Tech / Philosophy ---
  {
    id: "tech_1",
    display: "複雑な問題を小さな要素に分解することで、解決の糸口が見えてくる。",
    reading:
      "ふくざつなもんだいをちいさなようそにぶんかいすることで、かいけつのいとぐちがみえてくる。",
  },
  {
    id: "tech_2",
    display: "終わりなき探求こそが、エンジニアの喜びである。",
    reading: "おわりなきたんきゅうこそが、えんじにあのよろこびである。",
  },
  {
    id: "tech_3",
    display: "完璧なコードなど存在しない。あるのは進化し続けるコードだけだ。",
    reading:
      "かんぺきなこーどなどそんざいしない。あるのはしんかしつづけるこーどだけだ。",
  },
  {
    id: "tech_4",
    display: "失敗は成功の母であり、バグは成長の種である。",
    reading: "しっぱいはせいこうのははであり、ばぐはせいちょうのたねである。",
  },
  {
    id: "tech_5",
    display: "ユーザー体験を最優先に考え、美しいインターフェースを創造する。",
    reading:
      "ゆーざーたいけんをさいゆうせんにかんがえ、うつくしいいんたーふぇーすをそうぞうする。",
  },
  {
    id: "tech_6",
    display: "論理と創造性が交差する場所で、新しい価値が生まれる。",
    reading:
      "ろんりとそうぞうせいがこうさするばしょで、あたらしいかちがうまれる。",
  },
  {
    id: "tech_7",
    display: "シンプルであることは、究極の洗練である。",
    reading: "しんぷるであることは、きゅうきょくのせんれんである。",
  },
  {
    id: "tech_8",
    display: "情報は自由になりたがっている。",
    reading: "じょうほうはじゆうになりたがっている。",
  },
  {
    id: "tech_9",
    display: "技術は魔法と区別がつかない。",
    reading: "ぎじゅつはまほうとくべつがつかない。",
  },
  {
    id: "tech_10",
    display: "未来を予測する最良の方法は、それを発明することだ。",
    reading:
      "みらいをよそくするさいりょうのほうほうは、それをはつめいすることだ。",
  },
  {
    id: "tech_11",
    display: "考える葦として、人間は尊厳を持つ。",
    reading: "かんがえるあしとして、にんげんはそんげんをもつ。",
  },
  {
    id: "tech_12",
    display:
      "一人の人間にとっては小さな一歩だが、人類にとっては偉大な飛躍である。",
    reading:
      "ひとりのにんげんにとってはちいさないっぽだが、じんるいにとってはいないなひやくである。",
  },

  // --- Proverbs / Flows ---
  {
    id: "prov_1",
    display: "明日は明日の風が吹く。",
    reading: "あしたはあしたのかぜがふく。",
  },
  {
    id: "prov_2",
    display: "石の上にも三年。",
    reading: "いしのうえにもさんねん。",
  },
  { id: "prov_3", display: "住めば都。", reading: "すめばみやこ。" },
  {
    id: "prov_4",
    display: "千里の道も一歩から。",
    reading: "せんりのみちもいっぽから。",
  },
  { id: "prov_5", display: "類は友を呼ぶ。", reading: "るいはともをよぶ。" },
  {
    id: "prov_6",
    display: "継続は力なり。",
    reading: "けいぞくはちからなり。",
  },
  {
    id: "prov_7",
    display: "初心忘るべからず。",
    reading: "しょしんわするべからず。",
  },
  {
    id: "prov_8",
    display: "一期一会の精神で、この瞬間を大切にする。",
    reading: "いちごいちえのせいしんで、このしゅんかんをたいせつにする。",
  },
  {
    id: "prov_9",
    display: "雨降って地固まる。",
    reading: "あめふってじかたまる。",
  },
  {
    id: "prov_10",
    display: "能ある鷹は爪を隠す。",
    reading: "のうあるたかはつめをかくす。",
  },
  {
    id: "prov_11",
    display: "量子力学の世界では、観測者が現実を決定する。",
    reading:
      "りょうしりきがくのせかいでは、かんそくしゃがげんじつをけっていする。",
  },
  {
    id: "prov_12",
    display: "クラウドコンピューティングの普及により、世界はより繋がった。",
    reading:
      "くらうどこんぴゅーてぃんぐのふきゅうにより、せかいはよりつながった。",
  },
  {
    id: "prov_13",
    display: "サステナビリティを追求し、地球環境を守る。",
    reading: "さすてなびりてぃをついきゅうし、ちきゅうかんきょうをまもる。",
  },
  {
    id: "prov_14",
    display: "デジタルトランスフォーメーションが、ビジネスを変革する。",
    reading: "でじたるとらんすふぉーめーしょんが、びじねすをへんかくする。",
  },

  // --- New Expansion (Literature / Soseki / Dazai) ---
  {
    id: "lit_ext_1",
    display: "智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。",
    reading:
      "ちにはたらけばかどがたつ。じょうにさおさせばながされる。いじをとおせばきゅうくつだ。",
  },
  {
    id: "lit_ext_2",
    display: "月が綺麗ですね。",
    reading: "つきがきれいですね。",
  },
  {
    id: "lit_ext_3",
    display: "富士山は、そこにあるだけで美しい。",
    reading: "ふじさんは、そこにあるだけでうつくしい。",
  },
  {
    id: "lit_ext_4",
    display: "恥の多い生涯を送って来ました。",
    reading: "はじのおおいしょうがいをおくってきました。",
  },
  {
    id: "lit_ext_5",
    display: "道化の華。",
    reading: "どうけのはな。",
  },
  {
    id: "lit_ext_6",
    display: "人間失格。",
    reading: "にんげんしっかく。",
  },
  {
    id: "lit_ext_7",
    display: "待つ身がつらいかね。待たせる身がつらいかね。",
    reading: "まつみがつらいかね。またせるみがつらいかね。",
  },
  {
    id: "lit_ext_8",
    display: "大人とは、裏切られた青年の姿である。",
    reading: "おとなとは、うらぎられたせいねんのすがたである。",
  },
  {
    id: "lit_ext_9",
    display: "精神の安定は、日々の習慣から生まれる。",
    reading: "せいしんのあんていは、ひびのしゅうかんからうまれる。",
  },
  {
    id: "lit_ext_10",
    display: "幸福は一夜遅れてやってくる。",
    reading: "こうふくはいちやおくれてやってくる。",
  },

  // --- New Expansion (Nature / Zen / Flow) ---
  {
    id: "zen_ext_1",
    display: "水は方円の器に従う。",
    reading: "みずはほうえんのうつわにしたがう。",
  },
  { id: "zen_ext_2", display: "明鏡止水。", reading: "めいきょうしすい。" },
  { id: "zen_ext_3", display: "行雲流水。", reading: "こううんりゅうすい。" },
  { id: "zen_ext_4", display: "花鳥風月。", reading: "かちょうふうげつ。" },
  { id: "zen_ext_5", display: "一汁一菜。", reading: "いちじゅういっさい。" },
  { id: "zen_ext_6", display: "晴耕雨読。", reading: "せいこううどく。" },
  {
    id: "zen_ext_7",
    display: "日々是好日。",
    reading: "にちにちこれこうじつ。",
  },
  { id: "zen_ext_8", display: "色即是空。", reading: "しきそくぜくう。" },
  { id: "zen_ext_9", display: "空即是色。", reading: "くうそくぜしき。" },
  { id: "zen_ext_10", display: "柳緑花紅。", reading: "りゅうりょくかこう。" },

  // --- Modern / Tech / "F" Sound Check ---
  {
    id: "f_test_1",
    display: "カフェオレを飲みながら、フェルマーの定理について考える。",
    reading: "かふぇおれをのみながら、ふぇるまーのていりについてかんがえる。",
  }, // 'fe' logic check
  {
    id: "f_test_2",
    display: "ユーザーインターフェースのデザインを洗練させる。",
    reading: "ゆーざーいんたーふぇーすのでざいんをせんれんさせる。",
  }, // 'fe'
  {
    id: "f_test_3",
    display: "ファイルシステムを最適化する。",
    reading: "ふぁいるしすてむをさいてきかする。",
  }, // 'fa'
  {
    id: "f_test_4",
    display: "フィードバックループを回して改善する。",
    reading: "ふぃーどばっくるーぷをまわしてかいぜんする。",
  }, // 'fi'
  {
    id: "f_test_5",
    display: "フォトグラメトリ技術の応用。",
    reading: "ふぉとぐらめとりぎじゅつのおうよう。",
  }, // 'fo'

  // --- More Long Sentences ---
  {
    id: "long_ext_1",
    display: "深い森の奥で、数百年も生き続ける大木に出会った。",
    reading:
      "ふかいもりのおくで、すうひゃくねんもいきつづけるたいぼくにであった。",
  },
  {
    id: "long_ext_2",
    display: "静寂な湖面に、満月が鏡のように映し出されている。",
    reading:
      "せいじゃくなこめんに、まんげつがかがみのようにうつしだされている。",
  },
  {
    id: "long_ext_3",
    display: "新しい知識を学ぶことは、未知の世界への扉を開くことだ。",
    reading:
      "あたらしいちしきをまなぶことは、みちのせかいへのとびらをひらくことだ。",
  },
  {
    id: "long_ext_4",
    display: "創造性とは、既存の要素を新しい組み合わせで繋げる能力である。",
    reading:
      "そうぞうせいとは、きぞんのようそをあたらしいくみあわせでつなげるのうりょくである。",
  },
  {
    id: "long_ext_5",
    display: "美しいコードは、まるで詩のように読むことができる。",
    reading: "うつくしいこーどは、まるでうたのようによむことができる。",
  },
  {
    id: "long_ext_6",
    display: "困難に直面した時こそ、人間の真価が問われる。",
    reading: "こんなんにちょくめんしたときこそ、にんげんのしんかがとわれる。",
  },
  {
    id: "long_ext_7",
    display: "過去にとらわれず、未来を恐れず、今この瞬間を生きる。",
    reading: "かこにとらわれず、みらいをおそれず、いまこのしゅんかんをいきる。",
  },
  {
    id: "long_ext_8",
    display: "言葉は時として、刃物よりも鋭く心をえぐる。",
    reading: "ことばはときとして、はものよりもするどくこころをえぐる。",
  },
  {
    id: "long_ext_9",
    display: "優しさとは、弱さではなく、強さの証明である。",
    reading: "やさしさとは、よわさではなく、つよさのしょうめいである。",
  },
  {
    id: "long_ext_10",
    display: "真のリーダーは、フォロワーを鼓舞し、成長させる。",
    reading: "しんのりーだーは、ふぉろわーをこぶし、せいちょうさせる。",
  },
  {
    id: "long_ext_11",
    display: "テクノロジーは人類を進歩させる道具であり、目的ではない。",
    reading:
      "てくのろじーはじんるいをしんぽさせるどうぐであり、もくてきではない。",
  },
  {
    id: "long_ext_12",
    display: "全てのバグは、修正されるのを待っている。",
    reading: "すべてのばぐは、しゅうせいされるのをまっている。",
  },
  {
    id: "long_ext_13",
    display: "リファクタリングは、コードに対する愛情表現だ。",
    reading: "りふぁくたりんぐは、こーどにたいするあいじょうひょうげんだ。",
  },
  {
    id: "long_ext_14",
    display: "完璧を目指すより、まず終わらせろ。",
    reading: "かんぺきをめざすより、まずおわらせろ。", // Done is better than perfect
  },
  {
    id: "long_ext_15",
    display: "早起きは三文の徳、夜更かしは百害あって一利なし。",
    reading: "はやおきはさんもんのとく、よふかしはひゃくがいあっていちりなし。",
  },
];

export function getRandomWords(count: number): Sentence[] {
  const shuffled = [...words].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

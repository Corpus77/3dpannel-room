const filenames = [
  { "3blue.jpg": 77, title: "Голубой кирпич 3мм" },
  { "3miata.jpg": 77, title: "Мятный кирпич 3мм" },
  { "3rose.jpg": 77, title: "Розовый кирпич 3мм" },
  { "3sand.jpg": 77, title: "Песочный кирпич 3мм" },
  { "3silver.jpg": 77, title: "Серебряный кирпич 3мм" },
  {
    "whitesilverbrick.webp": 77,
    title: "Белый кирпич с серебрянной полоской 5мм",
  },
  { "3white.jpg": 77, title: "Белый кирпич 3мм" },
  { "4rosemix.jpg": 77, title: "Розовый микс 4мм" },
  { "4seamix.jpg": 77, title: "Морской микс 4мм" },
  { "4white.jpg": 77, title: "Белый кирпич 4мм" },
  { "5birusa.jpg": 77, title: "Бирюзовый кирпич 5мм" },
  { "5black.jpg": 77, title: "Черный кирпич 5мм" },
  { "5blue+.jpg": 77, title: "Синий кирпич 5мм" },
  { "5blue.jpg": 77, title: "Голубой кирпич 5мм" },
  { "5bordo.jpg": 77, title: "Бордовый кирпич 5мм" },
  { "5brown.jpg": 77, title: "Коричневый кирпич 5мм" },
  { "5brus.jpg": 77, title: "Брус 5мм" },
  { "5cofee.jpg": 77, title: "Кофейный кирпич 5мм" },
  { "5bejstripe.jpeg": 77, title: "Бежевая полоска 5мм" },
  { "5greystripe.jpeg": 77, title: "Серая полоска 5мм" },
  { "5gold.jpg": 77, title: "Золотистый кирпич 5мм" },
  { "5graffity.jpg": 77, title: "Кирпич с граффити 5мм" },
  { "5graffity1.jpg": 77, title: "Кирпич с граффити1 5мм" },
  { "5graffity2.jpg": 77, title: "Кирпич с граффити2 5мм" },
  { "5green.jpg": 77, title: "Зеленый кирпич 5мм" },
  { "5greenmix.jpg": 77, title: "Зелёный микс 5мм" },
  { "5lightviolet.jpg": 77, title: "Св. фиолетовый кирпич 5мм" },
  { "5miata.jpg": 77, title: "Мятный кирпич 5мм" },
  { "5orange.jpg": 77, title: "Оранжевый кирпич 5мм" },
  { "5red.jpg": 77, title: "Красный кирпич 5мм" },
  { "5rose.jpg": 77, title: "Розовый кирпич 5мм" },
  { "5roseflowers.jpg": 77, title: "Розовые цветы 5мм" },
  { "5scale.jpg": 77, title: "Луска 5мм" },
  { "5silver.jpg": 77, title: "Серебряный кирпич 5мм" },
  { "5violet.jpg": 77, title: "Фиолетовый кирпич 5мм" },
  { "5white.jpg": 77, title: "Белый кирпич 5мм" },
  { "brokenwhitebrick5.webp": 77, title: "Белый разбитый кирпич 5мм" },
  { "comb_torn_stone.jpg": 77, title: "Комбинированый рваный камень 7мм" },
  { "whitebrick_different.jpg": 70, title: "Белый кирпич декор 5мм" },
  { "5yellow+.jpg": 77, title: "Желтый кирпич 5мм" },
  { "5yellow.jpg": 77, title: "Бежевый кирпич 5мм" },
  { "5tornwhite.jpeg": 77, title: "Рваный белый кирпич 5мм" },
  { "5tornbej.jpeg": 77, title: "Рваный бежевый кирпич 5мм" },
  { "5torngrey.jpeg": 77, title: "Рваный серый кирпич 5мм" },
  { "7birusa.jpg": 77, title: "Бирюзовый кирпич 7мм" },
  { "7black.jpg": 77, title: "Черный кирпич 7мм" },
  { "7blue.jpg": 77, title: "Голубой кирпич 7мм" },
  { "7brown.jpg": 77, title: "Коричневый кирпич 7мм" },
  { "7cofee.jpg": 77, title: "Кофейный кирпич 7мм" },
  { "7darkrose.jpg": 77, title: "Тёмно-розовый кирпич 7мм" },
  { "7gold.jpg": 77, title: "Золотистый кирпич 7мм" },
  { "7green.jpg": 77, title: "Зеленый кирпич 7мм" },
  { "7lightviolet.jpg": 77, title: "Св. фиолетовый кирпич 7мм" },
  { "7miata.jpg": 77, title: "Мятный кирпич 7мм" },
  { "7orange.jpg": 77, title: "Оранжевый кирпич 7мм" },
  { "7red.jpg": 77, title: "Красный кирпич 7мм" },
  { "7rose.jpg": 77, title: "Розовый кирпич 7мм" },
  { "7silver.jpg": 77, title: "Серебряный кирпич 7мм" },
  { "7violet.jpg": 77, title: "Фиолетовый кирпич 7мм" },
  { "7white.jpg": 77, title: "Белый кирпич 7мм" },
  { "7yellow+.jpg": 77, title: "Желтый кирпич 7мм" },
  { "7yellow.jpg": 77, title: "Бежевый кирпич 7мм" },
  { "firewood4.webp": 70, title: "Огненное дерево 4мм" },
  { "bamboocapuchino.jpg": 70, title: "Бамбук капучино 8мм" },
  { "bamboogrey.jpg": 70, title: "Бамбук серый 8мм" },
  { "bamboogreyred.jpg": 70, title: "Бамбук серо-красный 8мм" },
  { "bambook1.jpg": 70, title: "Бамбук микс 8мм" },
  { "bambookbrown.jpg": 70, title: "Бамбук коричневый 8мм" },
  { "bambookcolor.jpg": 70, title: "Бамбук цветной 8мм" },
  { "bambookyellow.jpg": 70, title: "Бамбук желтый 8мм" },
  { "bamboomiata.jpg": 70, title: "Бамбук мятный 8мм" },
  { "bamboomix.jpg": 70, title: "Бамбук микс1 8мм" },
  { "bambooorange.jpg": 70, title: "Бамбук оранжевый 8мм" },
  { "bamboorose.jpg": 70, title: "Бамбук розовый 8мм" },
  { "bambooviolet.jpg": 70, title: "Бамбук фиолетовый 8мм" },
  { "ekbejbrown.jpg": 77, title: "Екатиринославский бежево-коричневый 5мм" },
  { "ekbrown.jpg": 77, title: "Екатиринославский коричневый 5мм" },
  { "redwhite.webp": 77, title: "Красно-белый" },
  { "ekgrey.jpg": 77, title: "Екатиринославский серый 5мм" },
  { "ekgreyblue.jpg": 77, title: "Екатиринославский синий 5мм" },
  { "ekred.jpg": 77, title: "Екатиринославский красный 5мм" },
  { "ekbrightmat.jpeg": 77, title: "Екатиринославский яркий матовый 5мм" },
  { "ekroux.jpg": 77, title: "Екатиринославский рыжий 5мм" },
  { "ekviolet.jpg": 77, title: "Екатиринославский фиолетовый 5мм" },
  { "klinkersand.webp": 77, title: "Клинкер песочный 5мм" },
  { "klinkerorange.webp": 77, title: "Клинкер оранжевый 5мм" },
  { "klinkergrey.webp": 77, title: "Клинкер серый 5мм" },
  { "klinkerbrown.webp": 77, title: "Клинкер коричневый 6мм" },
  { "klinkerred.webp": 77, title: "Клинкер красный 6мм" },
  { "klblack.jpg": 77, title: "Кладка черная 7мм" },
  { "klblue.jpg": 77, title: "Кладка голубой 7мм" },
  { "klchokolate.jpg": 77, title: "Кладка шоколад 7мм" },
  { "klcofee.jpg": 77, title: "Кладка кофейная 7мм" },
  { "klsand.jpg": 77, title: "Кладка песочная 7мм" },
  { "klsilver.jpg": 77, title: "Кладка серебряная 7мм" },
  { "klwhite.jpg": 77, title: "Кладка белая 7мм" },
  { "klyellow.jpg": 77, title: "Кладка желтая 7мм" },
  { "klyell.webp": 77, title: "Кладка желтая мраморная 7мм" },
  { "mech.jpg": 77, title: "Шестеренки 5мм" },
  { "brown_mramor.jpg": 77, title: "Мрамор светло коричневый 5мм" },
  { "grey_mramor.jpg": 77, title: "Мрамор светло серый 5мм" },
  { "mrbegorange.jpg": 77, title: "Мрамор оранж-беж 5мм" },
  { "mrbej.jpg": 77, title: "Мрамор бежевый 5мм" },
  { "mrblack.jpg": 77, title: "Мрамор черный 5мм" },
  { "mrblackwhite.jpg": 77, title: "Мрамор черно-белый 5мм" },
  { "mrblue.jpg": 77, title: "Мрамор голубой 5мм" },
  { "mrbordo.jpg": 77, title: "Мрамор бордовый 5мм" },
  { "mrdeepsea.jpg": 77, title: "Мрамор глубокое море 5мм" },
  { "mrfire.jpg": 77, title: "Мрамор огненный 5мм" },
  { "mrgold.jpg": 77, title: "Мрамор золотой 5мм" },
  { "mrolive.jpg": 77, title: "Мрамор оливковый 5мм" },
  { "mrred.jpg": 77, title: "Мрамор красный 5мм" },
  { "mrsalad.jpg": 77, title: "Мрамор салатный 5мм" },
  { "mrbrownbej.jpg": 77, title: "Мрамор коричнево-бежевый 5мм" },
  { "mrplitka.jpg": 77, title: "Мраморная плитка 4мм" },
  { "seamramorplate4.webp": 77, title: "Мраморная плитка морская 4мм" },
  { "colormozaic4.webp": 77, title: "Цветная мозаика 4мм" },
  { "pot4conus.jpg": 70, title: "Потолочная белая роза 5мм" },
  { "potbigornament.jpg": 70, title: "Потолочная клевер 9мм" },
  { "potbigwave.jpg": 70, title: "Потолочная большие волны 7мм" },
  { "brown_wave.jpg": 70, title: "Коричневая волна 7мм" },
  { "goldwave.webp": 70, title: "Золотая волна 5мм" },
  { "blackwave.webp": 70, title: "Черно-белая волна 5мм" },
  { "potcrashdark.jpg": 70, title: "Потолочная серебрянная паутина 8мм" },
  { "potcrashed.jpg": 70, title: "Потолочная белая паутинка 5мм" },
  { "potflower.jpg": 70, title: "Белая лилия 5мм" },
  { "rings1.webp": 70, title: "Кольца 8мм 300x300" },
  { "rectangle.webp": 70, title: "Прямоугольники 8мм 300х300" },
  { "potflowerinromb.jpg": 70, title: "Белая вышиванка 5мм" },
  { "potmirror.jpg": 70, title: "Потолочная ромб с серебром 6мм" },
  { "potorigami.jpg": 70, title: "Потолочная белый ромб 6мм" },
  { "potornament.jpg": 70, title: "Потолочная лотос 5мм" },
  { "potornamentromb.jpg": 70, title: "Потолочная белая романтика 5мм" },
  { "potplitka.jpg": 70, title: "Потолочная пирамида 5мм" },
  { "potplitkayellow.jpg": 70, title: "Потолочная пирамида с желтым 5мм" },
  { "potromb+.jpg": 70, title: "Потолочная ромб 7мм" },
  { "potromb.jpg": 70, title: "Потолочная ромб1 7мм" },
  { "potroundornament.jpg": 70, title: "Потолочная солнце 7.5мм" },
  { "potsmallornament.jpg": 70, title: "Потолочная модерн 5мм" },
  { "potsmallwaves.jpg": 70, title: "Потолочная мелкая волна 7мм" },
  { "potsquare.jpg": 70, title: "Потолочная квадраты" },
  { "potsquaresilver.jpg": 70, title: "Потолочная квадраты серебро" },
  { "potplet.jpeg": 70, title: "Потолочная плетение 5мм" },
  { "potpletdark.jpg": 70, title: "Потолочная плетение темная 5мм" },
  { "potstar.jpg": 70, title: "Потолочная ромашка 5мм" },
  { "potstaryellow.jpg": 70, title: "Потолочная ромашка желтая 5мм" },
  { "potuzorromb.jpg": 70, title: "Потолочная узорный ромб 6мм" },
  { "potuzorsquare.jpg": 70, title: "Потолочная орнамент 5мм" },
  { "potornamentyellow.jpg": 70, title: "Потолочная орнамент желтая 5мм" },
  { "potornamentsilver.jpg": 70, title: "Потолочная орнамент серебро 5мм" },
  { "stone.jpg": 77, title: "Камень 6мм" },
  { "stoneblack.jpeg": 70, title: "Черный камень 5мм" },
  { "stonemat.jpeg": 70, title: "Матовый камень 7мм" },
  { "stoneblackwhite.jpg": 70, title: "Черный мраморный камень 7мм" },
  { "stoneyellow.jpg": 70, title: "Бежевый мраморный камень 7мм" },
  { "stonegrey.jpg": 70, title: "Серый камень 8мм" },
  { "newbrownsand4.webp": 77, title: "Коричневый песчаник 4мм" },
  { "stonesand.jpg": 77, title: "Песчаник 6мм" },
  { "stonesandgrey.jpg": 77, title: "Серый песчаник 6мм" },
  { "stonesandmat.jpeg": 77, title: "Песчаник матовый 6мм" },
  { "stonesandgreydark.jpg": 77, title: "Серый песчаник темный 5мм" },
  { "stonesandred.jpg": 77, title: "Бежево-серый песчаник 6мм" },
  { "woodbrown.jpg": 70, title: "Коричневое дерево 5мм" },
  { "woodbrownblue.jpg": 70, title: "Синее дерево 5мм" },
  { "woodgreybrown.webp": 70, title: "Серо-зеленое дерево 4мм" },
  { "palitra4.webp": 77, title: "Палитра 4мм" },
  { "youngtree4.webp": 77, title: "Молодое дерево 4мм" },
  { "woodcolor.jpg": 70, title: "Бежево-голубое 5мм" },
  { "woodflower.jpg": 70, title: "Цветущее дерево 5мм" },
  { "woodgold.jpg": 70, title: "Золотистое дерево 7мм" },
  { "woodgreybrown.jpg": 70, title: "Серо-коричневое дерево 7мм" },

  { "rosetree4.webp": 77, title: "Розовый микс" },
  { "woodlightouk.jpg": 70, title: "Светлый дуб 5мм" },
  { "woodmiata.jpg": 70, title: "Мятное дерево 5мм" },
  { "woodoakdark.jpg": 70, title: "Темный дуб 7мм" },
  { "woodolhadark.jpg": 70, title: "Ольха 5мм" },
  { "woodredoak.jpg": 70, title: "Красное дерево 7мм" },
  { "woodzebra.jpg": 70, title: "Дерево под зебру 7мм" },
  { "woodgrafit.jpg": 70, title: "Дерево под графит 4мм" },
  { "woodcaramel.jpg": 70, title: "Дерево под карамель 4мм" },
  { "whitewood.jpg": 70, title: "Белое дерево 6мм" },
  { "yellowromb+.jpg": 70, title: "Бежевые ромбы 7мм" },
  { "blueroses.webp": 70, title: "Розы на голубом 5мм" },
  { "greenroses.webp": 70, title: "Розы на зеленом 5мм" },
  { "grayroses.webp": 70, title: "Розы на сером 5мм" },
  { "roseroses.webp": 70, title: "Розы на розовом 5мм" },
  { "whitevintage.webp": 70, title: "Белый винтаж 5мм" },
  { "birvintage.webp": 70, title: "Бирюзовый винтаж 5мм" },
  { "bejvintage.webp": 70, title: "Бежевый винтаж 5мм" },
  { "blackvintage.webp": 70, title: "Черный винтаж 5мм" },
  { "venzelgreen.webp": 70, title: "Вензель зеленый 5мм" },
  { "venzelgold.webp": 70, title: "Вензель золотой 5мм" },
  { "venzelviolet.webp": 70, title: "Вензель фиолетовый 5мм" },
  { "venzelsilver.webp": 70, title: "Вензель серебро 5мм" },
];
export { filenames };

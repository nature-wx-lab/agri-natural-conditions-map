const PROTECTED_DATA_URL = "./data/protected-map-data.bin";
const WORLD_CONTEXT_URL = "./data/world-context.geojson";
const CLIMATE_MANIFEST_URL = "./data/climate/manifest.json";
const PROTECTED_MAGIC = "NWLAGRI1";
const KEY_DATABASE = "naturewxlab-agri-map-access";
const KEY_STORE = "unlock-keys";
const KEY_RECORD = "current";
const GSI_TILE_CACHE_LIMIT = 120;
const CLIMATE_RASTER_CACHE_LIMIT = 12;
const CLIMATE_POINT_CACHE_LIMIT = 24;
const MAX_MAP_SCALE = 1_200_000;
const NATIONAL_VIEW_DESKTOP_ZOOM = 1.55;
const NATIONAL_VIEW_MOBILE_ZOOM = 1.08;
const NATIONAL_VIEW_DESKTOP_CENTER = [137.2, 37.5];

const REGIONAL_PLACE_LABELS = [
  { name: "中国", lon: 116.4, lat: 39.9, rank: -1, minZoom: 0.65 },
  { name: "韓国", lon: 127.8, lat: 36.5, rank: -1, minZoom: 0.65 },
  { name: "北朝鮮", lon: 127.1, lat: 40.2, rank: -1, minZoom: 0.65 },
  { name: "ロシア", lon: 142.1, lat: 46.2, rank: -1, minZoom: 0.65 },
  { name: "台湾", lon: 121.0, lat: 23.8, rank: -1, minZoom: 0.65 },
];

const MAJOR_PLACE_LABELS = [
  { name: "稚内", lon: 141.67833, lat: 45.41500, rank: 0, minZoom: 0.85 },
  { name: "旭川", lon: 142.37167, lat: 43.75667, rank: 0, minZoom: 0.85 },
  { name: "札幌", lon: 141.32833, lat: 43.06000, rank: 0, minZoom: 0.85 },
  { name: "釧路", lon: 144.37667, lat: 42.98500, rank: 0, minZoom: 0.85 },
  { name: "青森", lon: 140.76833, lat: 40.82167, rank: 0, minZoom: 0.85 },
  { name: "盛岡", lon: 141.16500, lat: 39.69833, rank: 0, minZoom: 0.85 },
  { name: "秋田", lon: 140.09833, lat: 39.71667, rank: 0, minZoom: 0.85 },
  { name: "仙台", lon: 140.89667, lat: 38.26167, rank: 0, minZoom: 0.85 },
  { name: "山形", lon: 140.34500, lat: 38.25500, rank: 0, minZoom: 0.85 },
  { name: "福島", lon: 140.47000, lat: 37.75833, rank: 0, minZoom: 0.85 },
  { name: "新潟", lon: 139.01833, lat: 37.89333, rank: 0, minZoom: 0.85 },
  { name: "富山", lon: 137.20167, lat: 36.70833, rank: 0, minZoom: 0.85 },
  { name: "金沢", lon: 136.63333, lat: 36.58833, rank: 0, minZoom: 0.85 },
  { name: "福井", lon: 136.22167, lat: 36.05500, rank: 0, minZoom: 0.85 },
  { name: "宇都宮", lon: 139.86833, lat: 36.54833, rank: 0, minZoom: 0.85 },
  { name: "前橋", lon: 139.06000, lat: 36.40500, rank: 0, minZoom: 0.85 },
  { name: "水戸", lon: 140.46667, lat: 36.38000, rank: 0, minZoom: 0.85 },
  { name: "熊谷", lon: 139.38000, lat: 36.15000, rank: 0, minZoom: 0.85 },
  { name: "東京", lon: 139.75000, lat: 35.69167, rank: 0, minZoom: 0.85 },
  { name: "千葉", lon: 140.10333, lat: 35.60167, rank: 0, minZoom: 0.85 },
  { name: "横浜", lon: 139.65167, lat: 35.43833, rank: 0, minZoom: 0.85 },
  { name: "甲府", lon: 138.55333, lat: 35.66667, rank: 0, minZoom: 0.85 },
  { name: "長野", lon: 138.19167, lat: 36.66167, rank: 0, minZoom: 0.85 },
  { name: "岐阜", lon: 136.76167, lat: 35.40000, rank: 0, minZoom: 0.85 },
  { name: "静岡", lon: 138.40333, lat: 34.97500, rank: 0, minZoom: 0.85 },
  { name: "名古屋", lon: 136.96500, lat: 35.16667, rank: 0, minZoom: 0.85 },
  { name: "津", lon: 136.51833, lat: 34.73333, rank: 0, minZoom: 0.85 },
  { name: "彦根", lon: 136.24333, lat: 35.27500, rank: 0, minZoom: 0.85 },
  { name: "京都", lon: 135.73167, lat: 35.01333, rank: 0, minZoom: 0.85 },
  { name: "大阪", lon: 135.51833, lat: 34.68167, rank: 0, minZoom: 0.85 },
  { name: "神戸", lon: 135.21167, lat: 34.69667, rank: 0, minZoom: 0.85 },
  { name: "奈良", lon: 135.83667, lat: 34.67333, rank: 0, minZoom: 0.85 },
  { name: "和歌山", lon: 135.16333, lat: 34.22833, rank: 0, minZoom: 0.85 },
  { name: "鳥取", lon: 134.23833, lat: 35.48667, rank: 0, minZoom: 0.85 },
  { name: "松江", lon: 133.06500, lat: 35.45667, rank: 0, minZoom: 0.85 },
  { name: "岡山", lon: 133.92500, lat: 34.68500, rank: 0, minZoom: 0.85 },
  { name: "広島", lon: 132.46167, lat: 34.39833, rank: 0, minZoom: 0.85 },
  { name: "山口", lon: 131.46167, lat: 34.16167, rank: 0, minZoom: 0.85 },
  { name: "徳島", lon: 134.57333, lat: 34.06667, rank: 0, minZoom: 0.85 },
  { name: "高松", lon: 134.05333, lat: 34.31833, rank: 0, minZoom: 0.85 },
  { name: "松山", lon: 132.77667, lat: 33.84333, rank: 0, minZoom: 0.85 },
  { name: "高知", lon: 133.54833, lat: 33.56667, rank: 0, minZoom: 0.85 },
  { name: "福岡", lon: 130.37500, lat: 33.58167, rank: 0, minZoom: 0.85 },
  { name: "佐賀", lon: 130.30500, lat: 33.26500, rank: 0, minZoom: 0.85 },
  { name: "長崎", lon: 129.86667, lat: 32.73333, rank: 0, minZoom: 0.85 },
  { name: "熊本", lon: 130.70667, lat: 32.81333, rank: 0, minZoom: 0.85 },
  { name: "大分", lon: 131.61833, lat: 33.23500, rank: 0, minZoom: 0.85 },
  { name: "宮崎", lon: 131.41333, lat: 31.93833, rank: 0, minZoom: 0.85 },
  { name: "鹿児島", lon: 130.54667, lat: 31.55500, rank: 0, minZoom: 0.85 },
  { name: "那覇", lon: 127.68667, lat: 26.20667, rank: 0, minZoom: 0.85 },
  { name: "名瀬", lon: 129.49333, lat: 28.38500, rank: 0, minZoom: 0.85 },
  { name: "石垣島", lon: 124.16333, lat: 24.33667, rank: 0, minZoom: 0.85 },
  { name: "父島", lon: 142.19000, lat: 27.09167, rank: 0, minZoom: 0.85 },
];

const FIELD_LABELS = {
  rice: "水稲",
  vegetables: "露地野菜",
  orchard: "果樹",
  upland: "畑作",
  greenhouse: "施設園芸",
  overall: "4分野総合",
  warming: "温暖化による変化",
  soil: "土壌分類",
  climate: "気候ものさし",
};

const COMPARISON_FIELDS = {
  rice: "水稲",
  leafy: "葉茎菜",
  fruiting: "果菜",
  root: "根菜",
  orchard: "果樹",
  upland: "畑作",
  greenhouse: "施設園芸",
};
const VEGETABLE_LABELS = { leafy: "葉茎菜", fruiting: "果菜", root: "根菜" };
const ORCHARD_CROP_LABELS = {
  common: "果樹共通",
  apple: "りんご",
  mikan: "みかん",
  grape: "ぶどう",
  peach: "もも",
  pear: "なし",
  persimmon: "かき",
  ume: "うめ",
  cherry: "さくらんぼ",
  chestnut: "くり",
  kiwi: "キウイフルーツ",
};
const OVERALL_LABELS = { citywide: "市域全体平均", commonMesh: "同じ1kmメッシュ", bestAreas: "分野別好条件域" };
const WARMING_LABELS = { overall: "4分野総合", rice: "水稲", leafy: "露地野菜（葉茎菜）", orchard: "果樹", upland: "畑作" };
const VEGETABLE_NOTES = {
  leafy: "夏秋どり・秋冬どりの気象、平坦さ、農地位置で集計した土壌軸を組み合わせた葉茎菜の比較用指数です。個別品目専用の順位ではありません。",
  fruiting: "果菜類に広く共通する気温、無霜期間、猛暑、日照、平坦さ、農地位置で集計した土壌軸の指数です。品目で評価方向が割れる降水と夜温は主得点に含めていません。",
  root: "冷涼な夏どり・秋冬どり・高温多湿型の一般条件、平坦さ、農地位置で集計した土壌軸の指数です。品目別の耕土深、石礫、局地排水、圃場改良までは判定しません。",
};
const ORCHARD_CROP_NOTES = {
  common: "霜・低温、日照・寒暖差、傾斜、高温リスク、農地位置で集計した畑共通土壌軸を組み合わせた果樹共通の指数です。品目別の順位ではありません。",
  apple: "りんごの一般的な露地栽培を想定し、生育期の気温、冬の低温と低温要求、遅霜・猛暑、斜面、土壌を比べた指数です。品種、台木、着色管理、園地の微地形までは判定しません。",
  mikan: "温州みかんを中心とした一般条件として、年平均気温、冬の低温、遅霜・猛暑、斜面、土壌を比べた指数です。秋の霜、収穫期の雨、潮風、品種・系統差までは判定しません。",
  grape: "ぶどうのうち巨峰を代表条件とし、生育期の気温、低温要求、遅霜・猛暑と着色期の高温、斜面、土壌を比べた指数です。緑色品種や高温耐性品種、施設栽培では評価が変わります。",
  peach: "ももの一般的な露地栽培を想定し、生育期の気温、低温要求、遅霜・猛暑、斜面、土壌を比べた指数です。収穫前の雨、病害、品種ごとの成熟期までは判定しません。",
  pear: "なしのうち幸水を代表条件とし、生育期の気温、低温要求、遅霜・猛暑、斜面、土壌を比べた指数です。他品種の低温要求、開花期、黒星病などの差までは判定しません。",
  persimmon: "かきは甘柿系と渋柿系を別々に評価し、高い方を自治体の代表値としています。富有を手掛かりにした秋の着色温度は甘柿系だけに使い、品種、脱渋、剪定・着果管理までは判定しません。",
  ume: "うめの一般的な露地栽培を想定し、生育期の気温、冬の低温、幼果期の霜、斜面、土壌を比べた指数です。暖冬による開花前進や不完全花は数値基準がないため得点化していません。",
  cherry: "一般表示は「さくらんぼ」で、農水省の「おうとう」基準を用います。生育期の気温、冬の低温と低温要求、遅霜・高温、斜面、土壌を比べた指数です。",
  chestnut: "くりの一般的な露地栽培を想定し、生育期の気温、冬の低温、展葉期の霜、斜面、土壌を比べた指数です。品種、台木、剪定や病害までは判定しません。",
  kiwi: "キウイフルーツの一般的な露地栽培を想定し、生育期の気温、冬の低温、発芽・展葉期の霜、斜面、土壌を比べた指数です。強風リスクは得点化していません。",
};
const FIELD_NOTES = {
  rice: "水田位置で集計した気象・地形・土壌を組み合わせた比較用指数です。作付実績、生産量、収量、ブランドは得点に含めていません。",
  vegetables: VEGETABLE_NOTES.leafy,
  orchard: "霜・低温、日照・寒暖差、傾斜、高温リスク、農地位置で集計した畑共通土壌軸を組み合わせた指数です。果樹品目別の土壌適性ではありません。",
  upland: "生育の暖かさ、過湿・収穫期降雨、平坦さ、農地位置で集計した土壌軸を組み合わせた指数です。",
  greenhouse: "気象・地形と小さな比重の土壌軸を組み合わせた限定条件の指数です。培地・養液栽培、強風・台風・突風・雹、施設構造強度は評価していません。",
  overall: "水稲・露地野菜（葉茎菜モデル）・果樹・畑作の4分野を、3つの異なる方法で比較します。手法間の点数は直接比較しません。",
  warming: "水稲・露地野菜（葉茎菜モデル）・果樹・畑作と4分野総合について、感度分析と年の不確かさを踏まえた5段階の変化帯を表示します。厳密な上昇・下降順位は表示しません。",
  soil: "農耕地で面積が最も大きい土壌大群を市町村単位で示す参考レイヤーです。ランキングに使う土壌軸とは別の表示で、圃場ごとの土壌や作物適性を示す点数ではありません。",
  climate: "全国387,717陸域1kmメッシュの気候平均面です。農業適地の得点・順位へ加えず、地域差を読み解く参考表示として分離しています。",
};

const RANK_SCALE = [
  [0.05, "#0b5d2a", "上位5%"],
  [0.10, "#238443", "上位5〜10%"],
  [0.25, "#78c679", "上位10〜25%"],
  [0.50, "#c2e699", "上位25〜50%"],
  [0.75, "#fee8a6", "下位25〜50%"],
  [0.90, "#fdae61", "下位10〜25%"],
  [1.00, "#d6604d", "下位10%"],
];
const SCORE_SCALE = [
  [90, "#0b5d2a", "90〜100点"],
  [80, "#238443", "80〜90点未満"],
  [70, "#78c679", "70〜80点未満"],
  [60, "#c2e699", "60〜70点未満"],
  [50, "#fee8a6", "50〜60点未満"],
  [0, "#d6604d", "50点未満"],
];
const WARMING_SCALE = [
  ["頑健上昇・大", "#087f8c"],
  ["頑健上昇・中", "#79c9c5"],
  ["変化小", "#e4e1d8"],
  ["頑健下降・中", "#f4a582"],
  ["頑健下降・大", "#b2182b"],
];
const SOIL_SCALE = [
  ["A", "造成土", "#9e9e9e"],
  ["B", "有機質土", "#6b4a2f"],
  ["C", "ポドゾル", "#7d8f9b"],
  ["D", "黒ボク土", "#3f3431"],
  ["E", "暗赤色土", "#a64b3c"],
  ["F", "低地土", "#d3b56f"],
  ["G", "赤黄色土", "#df7f1d"],
  ["H", "停滞水成土", "#5ba3cf"],
  ["I", "褐色森林土", "#738a45"],
  ["J", "未熟土", "#c9a66b"],
];

const state = {
  layer: "rice",
  vegetableType: "leafy",
  orchardCrop: "common",
  majorCropSelections: { rice: "common", vegetables: "common", upland: "common", greenhouse: "common" },
  productionOverlayEnabled: false,
  productionOverlayOpacity: 60,
  showPlaceLabels: false,
  showDetailMap: false,
  detailMapOpacity: 70,
  showTerrain: false,
  terrainStyle: "mono",
  terrainOpacity: 35,
  overallMethod: "citywide",
  warmingIndicator: "overall",
  metric: "rank",
  climateElement: "201",
  climateMonth: 13,
  climateWindow: "1996_2025",
  climateOpacity: 84,
  center: [137.5, 37.5],
  scale: 1,
  selectedId: null,
  hoverId: null,
  climatePoint: null,
  climateHover: null,
  rankingSide: "top",
  ready: false,
};

const elements = {
  lockScreen: document.querySelector("#lockScreen"),
  protectedContent: document.querySelector("#protectedContent"),
  unlockForm: document.querySelector("#unlockForm"),
  unlockPassword: document.querySelector("#unlockPassword"),
  unlockButton: document.querySelector("#unlockButton"),
  unlockStatus: document.querySelector("#unlockStatus"),
  rememberDevice: document.querySelector("#rememberDevice"),
  forgetDevice: document.querySelector("#forgetDevice"),
  canvas: document.querySelector("#mapCanvas"),
  mapFrame: document.querySelector("#mapFrame"),
  mapTitle: document.querySelector("#mapTitle"),
  mapKicker: document.querySelector("#mapKicker"),
  mapStatus: document.querySelector("#mapStatus"),
  layerSelect: document.querySelector("#layerSelect"),
  zoomThumb: document.querySelector("#zoomThumb"),
  legend: document.querySelector("#legend"),
  vegetableControl: document.querySelector("#vegetableControl"),
  majorCropControl: document.querySelector("#majorCropControl"),
  majorCropLabel: document.querySelector("#majorCropLabel"),
  majorCropButtons: document.querySelector("#majorCropButtons"),
  orchardControl: document.querySelector("#orchardControl"),
  productionOverlayControl: document.querySelector("#productionOverlayControl"),
  productionOverlayToggle: document.querySelector("#productionOverlayToggle"),
  productionOverlayOpacity: document.querySelector("#productionOverlayOpacity"),
  productionOverlayOpacityValue: document.querySelector("#productionOverlayOpacityValue"),
  placeLabelsToggle: document.querySelector("#placeLabelsToggle"),
  detailMapToggle: document.querySelector("#detailMapToggle"),
  detailMapOpacity: document.querySelector("#detailMapOpacity"),
  detailMapOpacityValue: document.querySelector("#detailMapOpacityValue"),
  terrainToggle: document.querySelector("#terrainToggle"),
  terrainStyle: document.querySelector("#terrainStyle"),
  terrainOpacity: document.querySelector("#terrainOpacity"),
  terrainOpacityValue: document.querySelector("#terrainOpacityValue"),
  overallControl: document.querySelector("#overallControl"),
  warmingControl: document.querySelector("#warmingControl"),
  metricControl: document.querySelector("#metricControl"),
  climateControl: document.querySelector("#climateControl"),
  climateElement: document.querySelector("#climateElement"),
  climateMonth: document.querySelector("#climateMonth"),
  climateWindowControl: document.querySelector("#climateWindowControl"),
  climateOpacity: document.querySelector("#climateOpacity"),
  climateOpacityValue: document.querySelector("#climateOpacityValue"),
  climateControlNote: document.querySelector("#climateControlNote"),
  overallMethod: document.querySelector("#overallMethod"),
  warmingIndicator: document.querySelector("#warmingIndicator"),
  layerNote: document.querySelector("#layerNote"),
  detailsContent: document.querySelector("#detailsContent"),
  clearSelection: document.querySelector("#clearSelection"),
  search: document.querySelector("#municipalitySearch"),
  options: document.querySelector("#municipalityOptions"),
  tooltip: document.querySelector("#mapTooltip"),
  rankingTitle: document.querySelector("#rankingTitle"),
  rankingMode: document.querySelector("#rankingMode"),
  rankingContent: document.querySelector("#rankingContent"),
};

const ctx = elements.canvas.getContext("2d");
const baseCanvas = document.createElement("canvas");
const baseCtx = baseCanvas.getContext("2d");
let data;
let features = [];
let prefectures = [];
let worldContext = [];
let climateManifest;
let byId = new Map();
let featureById = new Map();
let dpr = 1;
let canvasSize = { width: 0, height: 0 };
let frameHandle = 0;
let baseDirty = true;
let projectedPathCache = new WeakMap();
let projectedPathCacheKey = "";
let nationalViewScale = 1;
const productionEntryCache = new Map();
const gsiTileCache = new Map();
const climateRasterCache = new Map();
const climatePointChunkCache = new Map();
const activePointers = new Map();
let gesture = null;
let climateHoverTimer = 0;
let climateHoverSequence = 0;
let climatePointSequence = 0;

function mercatorY(latitude) {
  const lat = Math.max(-85, Math.min(85, latitude)) * Math.PI / 180;
  return (1 - Math.log(Math.tan(Math.PI / 4 + lat / 2)) / Math.PI) / 2;
}

function worldPoint(lon, lat) {
  return [(lon + 180) / 360, mercatorY(lat)];
}

function worldToLonLat(x, y) {
  const lon = x * 360 - 180;
  const n = Math.PI - 2 * Math.PI * y;
  return [lon, 180 / Math.PI * Math.atan(Math.sinh(n))];
}

function centerWorld() {
  return worldPoint(state.center[0], state.center[1]);
}

function project(lon, lat) {
  const world = worldPoint(lon, lat);
  const center = centerWorld();
  return [(world[0] - center[0]) * state.scale + canvasSize.width / 2, (world[1] - center[1]) * state.scale + canvasSize.height / 2];
}

function unproject(x, y) {
  const center = centerWorld();
  return worldToLonLat(center[0] + (x - canvasSize.width / 2) / state.scale, center[1] + (y - canvasSize.height / 2) / state.scale);
}

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

function meshCodeFromLatLon(lat, lon) {
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || lat < 0 || lon < 100) return null;
  const p = Math.floor(lat * 1.5);
  const q = Math.floor(lon) - 100;
  const latSecond = (lat * 1.5 - p) * 8;
  const lonSecond = (lon - Math.floor(lon)) * 8;
  const r = clamp(Math.floor(latSecond), 0, 7);
  const s = clamp(Math.floor(lonSecond), 0, 7);
  const t = clamp(Math.floor((latSecond - r) * 10 + 1e-8), 0, 9);
  const u = clamp(Math.floor((lonSecond - s) * 10 + 1e-8), 0, 9);
  return `${String(p).padStart(2, "0")}${String(q).padStart(2, "0")}${r}${s}${t}${u}`;
}

function meshBounds(meshCode) {
  const code = String(meshCode).padStart(8, "0");
  if (!/^\d{8}$/.test(code)) return null;
  const p = Number(code.slice(0, 2));
  const q = Number(code.slice(2, 4));
  const r = Number(code[4]);
  const s = Number(code[5]);
  const t = Number(code[6]);
  const u = Number(code[7]);
  const south = p / 1.5 + r / 12 + t / 120;
  const west = q + 100 + s / 8 + u / 80;
  return {
    south,
    west,
    north: south + 1 / 120,
    east: west + 1 / 80,
    centerLat: south + 1 / 240,
    centerLon: west + 1 / 160,
  };
}

function binarySearchClimateCodes(codes, target) {
  let low = 0;
  let high = codes.length - 1;
  while (low <= high) {
    const middle = (low + high) >> 1;
    const value = codes[middle];
    if (value === target) return middle;
    if (value < target) low = middle + 1;
    else high = middle - 1;
  }
  return -1;
}

function climateTypedValues(buffer, offset, length, dtypeCode) {
  if (dtypeCode === 1) return new Int16Array(buffer, offset, length);
  if (dtypeCode === 2) return new Uint16Array(buffer, offset, length);
  if (dtypeCode === 3) return new Uint32Array(buffer, offset, length);
  throw new Error(`未対応の気候値形式です: ${dtypeCode}`);
}

function parseClimatePointChunk(buffer, pointElement) {
  if (buffer.byteLength < 24) throw new Error("地点値データのヘッダーが不完全です");
  const view = new DataView(buffer);
  const magic = new TextDecoder("ascii").decode(new Uint8Array(buffer, 0, 8)).replace(/\0+$/, "");
  const expected = pointElement.chunkFormat ?? {};
  let header;
  if (magic === "NWCBCH1") {
    header = {
      count: view.getUint32(12, true),
      windowCount: view.getUint16(16, true),
      monthCount: view.getUint16(18, true),
      scale: view.getUint16(20, true),
      nodata: view.getInt16(22, true),
      dtypeCode: 1,
      headerBytes: 24,
      version: view.getUint32(8, true),
    };
  } else if (magic === "NWCBCH2") {
    const dtypeCode = view.getUint8(22);
    const nodataBits = view.getUint32(24, true);
    const nodata = dtypeCode === 1
      ? ((nodataBits & 0xffff) >= 0x8000 ? (nodataBits & 0xffff) - 0x10000 : nodataBits & 0xffff)
      : dtypeCode === 2 ? nodataBits & 0xffff : nodataBits;
    header = {
      count: view.getUint32(12, true),
      windowCount: view.getUint16(16, true),
      monthCount: view.getUint16(18, true),
      scale: view.getUint16(20, true),
      nodata,
      dtypeCode,
      headerBytes: 28,
      version: view.getUint32(8, true),
      reserved: view.getUint8(23),
    };
  } else {
    throw new Error("地点値データの形式を確認できません");
  }
  if (
    expected.magic !== magic
    || Number(expected.version) !== header.version
    || Number(expected.header_bytes) !== header.headerBytes
    || Number(expected.dtype_code) !== header.dtypeCode
    || Number(expected.value_scale) !== header.scale
    || Number(expected.nodata) !== header.nodata
    || header.windowCount !== climateManifest.windows.length
    || ![12, 13].includes(header.monthCount)
    || header.reserved
  ) {
    throw new Error("地点値データの版を確認できません");
  }
  const codesOffset = header.headerBytes;
  const latsOffset = codesOffset + header.count * 4;
  const lonsOffset = latsOffset + header.count * 4;
  const valuesOffset = lonsOffset + header.count * 4;
  const valueCount = header.windowCount * header.monthCount * header.count;
  const bytesPerValue = header.dtypeCode === 3 ? 4 : 2;
  if (buffer.byteLength !== valuesOffset + valueCount * bytesPerValue) {
    throw new Error("地点値データの長さを確認できません");
  }
  return {
    ...header,
    codes: new Uint32Array(buffer, codesOffset, header.count),
    lats: new Float32Array(buffer, latsOffset, header.count),
    lons: new Float32Array(buffer, lonsOffset, header.count),
    values: climateTypedValues(buffer, valuesOffset, valueCount, header.dtypeCode),
  };
}

async function sha256Buffer(buffer) {
  return bytesToHex(new Uint8Array(await crypto.subtle.digest("SHA-256", buffer)));
}

function climatePointAssetUrl(relativePath) {
  if (!/^(?:elements\/\d{3}\/)?chunks\/mesh_\d{4}\.bin$/.test(String(relativePath))) {
    throw new Error("地点値データの参照先を確認できません");
  }
  const root = new URL(climateManifest.pointData.baseUrl, location.href);
  const url = new URL(relativePath, root);
  if (url.origin !== location.origin || !url.pathname.includes("/climate-outlook-navi/data/climate/")) {
    throw new Error("地点値データの配信元を確認できません");
  }
  return url;
}

async function loadClimatePointChunk(meshCode, elementCode) {
  const prefix = String(meshCode).slice(0, 4);
  const pointElement = climateManifest?.pointData?.elements?.[elementCode];
  const entry = pointElement?.chunks?.[prefix];
  if (!entry) return null;
  const cacheKey = `${elementCode}:${prefix}`;
  if (climatePointChunkCache.has(cacheKey)) return climatePointChunkCache.get(cacheKey);
  const promise = (async () => {
    const url = climatePointAssetUrl(entry.path);
    url.searchParams.set("v", entry.sha256.slice(0, 16));
    const response = await fetch(url, { cache: "force-cache" });
    if (!response.ok) throw new Error(`地点値データ HTTP ${response.status}`);
    const buffer = await response.arrayBuffer();
    if (buffer.byteLength !== entry.bytes || await sha256Buffer(buffer) !== entry.sha256) {
      throw new Error("地点値データの完全性を確認できません");
    }
    const chunk = parseClimatePointChunk(buffer, pointElement);
    if (chunk.count !== entry.count) throw new Error("地点値データの件数を確認できません");
    return chunk;
  })().catch((error) => {
    climatePointChunkCache.delete(cacheKey);
    throw error;
  });
  climatePointChunkCache.set(cacheKey, promise);
  while (climatePointChunkCache.size > CLIMATE_POINT_CACHE_LIMIT) {
    const oldestKey = climatePointChunkCache.keys().next().value;
    if (oldestKey === cacheKey) break;
    climatePointChunkCache.delete(oldestKey);
  }
  return promise;
}

async function climatePointRecord(meshCode, elementCode) {
  const chunk = await loadClimatePointChunk(meshCode, elementCode);
  if (!chunk) return null;
  const index = binarySearchClimateCodes(chunk.codes, Number(meshCode));
  if (index < 0) return null;
  const meta = climateManifest.elements[elementCode];
  const values = {};
  climateManifest.windows.forEach((window, windowIndex) => {
    values[window.id] = {};
    meta.months.forEach((month, monthIndex) => {
      const raw = chunk.values[(windowIndex * chunk.monthCount + monthIndex) * chunk.count + index];
      values[window.id][month.id] = raw === chunk.nodata ? null : raw / chunk.scale;
    });
  });
  return {
    elementCode,
    meshCode: String(meshCode),
    centerLat: chunk.lats[index],
    centerLon: chunk.lons[index],
    values,
  };
}

function geometryPath(geometry) {
  const cacheKey = `${state.center[0].toFixed(7)}:${state.center[1].toFixed(7)}:${state.scale.toFixed(3)}:${canvasSize.width.toFixed(1)}:${canvasSize.height.toFixed(1)}`;
  if (cacheKey !== projectedPathCacheKey) {
    projectedPathCache = new WeakMap();
    projectedPathCacheKey = cacheKey;
  }
  const cached = projectedPathCache.get(geometry);
  if (cached) return cached;
  const path = new Path2D();
  const polygons = geometry.type === "MultiPolygon" ? geometry.coordinates : [geometry.coordinates];
  for (const polygon of polygons) {
    for (const ring of polygon) {
      ring.forEach((point, index) => {
        const [x, y] = project(point[0], point[1]);
        if (index === 0) path.moveTo(x, y);
        else path.lineTo(x, y);
      });
      path.closePath();
    }
  }
  projectedPathCache.set(geometry, path);
  return path;
}

function selectedValue(row) {
  if (!row) return null;
  if (state.layer === "climate") return null;
  if (state.layer === "warming") return row.warming[state.warmingIndicator] ?? null;
  if (state.layer === "overall") return row.overall[state.overallMethod] ?? null;
  if (majorCropValueActive()) return row.majorCrops?.[state.layer]?.[state.majorCropSelections[state.layer]] ?? null;
  if (state.layer === "vegetables") return row.fields[state.vegetableType] ?? null;
  if (state.layer === "orchard" && state.orchardCrop !== "common") return row.orchardCrops?.[state.orchardCrop] ?? null;
  if (state.layer === "soil") return row.soil ?? null;
  return row.fields[state.layer] ?? null;
}

function climateElementMeta() {
  return climateManifest?.elements?.[state.climateElement] ?? null;
}

function climateMonthMeta() {
  return climateElementMeta()?.months?.find((item) => Number(item.id) === Number(state.climateMonth)) ?? null;
}

function climateWindowMeta() {
  return climateManifest?.windows?.find((item) => item.id === state.climateWindow) ?? null;
}

function climateLegendConfig() {
  const element = climateElementMeta();
  if (!element) return null;
  return Number(state.climateMonth) === 13 ? element.legends.annual : element.legends.monthly;
}

function climateRasterEntry() {
  return climateElementMeta()?.files?.[state.climateWindow]?.[String(state.climateMonth)] ?? null;
}

function climateDisplayTitle() {
  const element = climateElementMeta();
  const month = climateMonthMeta();
  const window = climateWindowMeta();
  if (!element || !month || !window) return "気候面を読み込み中";
  return `${element.shortName}の分布｜${month.label}｜${window.label}`;
}

function climateMapHeading() {
  const element = climateElementMeta();
  const month = climateMonthMeta();
  const window = climateWindowMeta();
  if (!element || !month || !window) return "気候面を読み込み中";
  return `${element.shortName}｜${month.label}｜${window.id.replace("_", "\u2060–\u2060")}`;
}

function climateDefinitionNote() {
  const element = climateElementMeta();
  if (!element) return FIELD_NOTES.climate;
  const annualDefinition = Number(state.climateMonth) === 13 ? element.annual?.definition : null;
  return `${element.definition}${annualDefinition ? ` ${annualDefinition}` : ""} ${element.qualityNote}`;
}

function majorCropFieldActive() {
  return ["rice", "vegetables", "upland", "greenhouse"].includes(state.layer) && Boolean(data?.layers?.[state.layer]?.crops);
}

function majorCropValueActive() {
  return majorCropFieldActive() && state.majorCropSelections[state.layer] !== "common";
}

function majorCropMeta() {
  return majorCropValueActive() ? data.layers[state.layer].crops[state.majorCropSelections[state.layer]] : null;
}

function cropRange(values, unit) {
  return Array.isArray(values) && values.length === 2 ? `${values[0]}〜${values[1]}${unit}` : "—";
}

function majorCropParameterSummary() {
  const parameters = majorCropMeta()?.modelParameters ?? {};
  if (state.layer === "rice") return `GDD ${cropRange(parameters.gdd, "℃日")}／6〜8月平均 ${cropRange(parameters.summer_temp, "℃")}／猛暑日 ${parameters.hot?.[0]}日で満点・${parameters.hot?.[1]}日で0点`;
  if (state.layer === "vegetables") return `6〜8月平均 ${cropRange(parameters.summer_temp, "℃")}／無霜 ${parameters.frost_free}日以上／5〜9月降水 ${cropRange(parameters.rain, "mm")}／猛暑日 ${parameters.hot?.[0]}日で満点・${parameters.hot?.[1]}日で0点`;
  if (state.layer === "upland") return `GDD ${cropRange(parameters.gdd, "℃日")}／6〜8月平均 ${cropRange(parameters.summer_temp, "℃")}／5〜9月降水 ${cropRange(parameters.rain, "mm")}／9〜10月降水 ${cropRange(parameters.harvest_rain, "mm")}`;
  return `夜温最低限界 ${parameters.night_min}℃／昼温最高限界 ${parameters.summer_max}℃`;
}

function majorCropParameterSummaryHtml() {
  return majorCropParameterSummary()
    .split("／")
    .map((part) => `<span>${escapeHtml(part)}</span>`)
    .join("");
}

function majorCropProvenanceLabel() {
  const provenance = majorCropMeta()?.thresholdProvenance ?? "";
  const thresholdLabel = provenance.startsWith("primary_source")
    ? "品目閾値：農水省マニュアル改定2版 表2"
    : "品目閾値：非査読・著者設定（一次資料未検証）";
  return state.layer === "greenhouse" ? `${thresholdLabel}／外気候変換：著者設定` : thresholdLabel;
}

function orchardCropValueActive() {
  return state.layer === "orchard" && state.orchardCrop !== "common";
}

function productionOverlayAvailable() {
  return orchardCropValueActive() && Boolean(data?.layers?.orchard?.productionOverlay);
}

function productionOverlayActive() {
  return productionOverlayAvailable() && state.productionOverlayEnabled && state.productionOverlayOpacity > 0;
}

function selectedProduction(row) {
  return orchardCropValueActive() ? row?.orchardCrops?.[state.orchardCrop]?.production ?? null : null;
}

function productionEntries() {
  if (!orchardCropValueActive()) return [];
  if (!productionEntryCache.has(state.orchardCrop)) {
    const entries = features
      .map((feature) => ({
        feature,
        production: byId.get(feature.properties.id)?.orchardCrops?.[state.orchardCrop]?.production ?? null,
      }))
      .filter(({ production }) => Number.isFinite(production?.intensity) && production.intensity > 0)
      .sort((a, b) => a.production.intensity - b.production.intensity);
    productionEntryCache.set(state.orchardCrop, entries);
  }
  return productionEntryCache.get(state.orchardCrop);
}

function colorFor(row) {
  const value = selectedValue(row);
  if (!value) return "#cfd5d1";
  if (state.layer === "warming") {
    return WARMING_SCALE.find(([label]) => label === value.band)?.[1] ?? "#cfd5d1";
  }
  if (state.layer === "soil") {
    return SOIL_SCALE.find(([code]) => code === value.dominantCode)?.[2] ?? "#cfd5d1";
  }
  if (state.metric === "score") {
    if (!Number.isFinite(value.score)) return "#cfd5d1";
    return SCORE_SCALE.find(([threshold]) => value.score >= threshold)?.[1] ?? "#cfd5d1";
  }
  if (!Number.isFinite(value.rank)) return "#cfd5d1";
  const fraction = Math.min(1, Math.max(0, value.rank / value.rankPopulation));
  return RANK_SCALE.find(([threshold]) => fraction <= threshold)?.[1] ?? "#cfd5d1";
}

function drawWorldContext(targetContext) {
  if (!worldContext.length) return;
  targetContext.save();
  targetContext.fillStyle = "rgba(248, 249, 246, 0.88)";
  targetContext.strokeStyle = "rgba(83, 96, 104, 0.48)";
  targetContext.lineWidth = 0.85;
  for (const feature of worldContext) {
    const path = geometryPath(feature.geometry);
    targetContext.fill(path, "evenodd");
    targetContext.stroke(path);
  }
  targetContext.restore();
}

function tileLon(x, z) {
  return x / (2 ** z) * 360 - 180;
}

function tileLat(y, z) {
  const n = Math.PI - 2 * Math.PI * y / (2 ** z);
  return 180 / Math.PI * Math.atan(Math.sinh(n));
}

function visibleLonLatBounds() {
  const [west, north] = unproject(0, 0);
  const [east, south] = unproject(canvasSize.width, canvasSize.height);
  return [Math.min(west, east), Math.min(south, north), Math.max(west, east), Math.max(south, north)];
}

function gsiZoomLevel() {
  return Math.max(5, Math.min(13, Math.round(Math.log2(Math.max(1, state.scale) / 256))));
}

function trimGsiTileCache() {
  if (gsiTileCache.size <= GSI_TILE_CACHE_LIMIT) return;
  for (const [url, entry] of gsiTileCache) {
    if (gsiTileCache.size <= GSI_TILE_CACHE_LIMIT) break;
    if (entry.status === "loading") continue;
    gsiTileCache.delete(url);
  }
}

function drawGsiTileLayer(targetContext, layerId, opacity) {
  if (opacity <= 0) return;
  const z = gsiZoomLevel();
  const bounds = visibleLonLatBounds();
  const n = 2 ** z;
  const lonToX = (lon) => Math.floor((Number(lon) + 180) / 360 * n);
  const latToY = (lat) => Math.floor((1 - Math.asinh(Math.tan(Number(lat) * Math.PI / 180)) / Math.PI) / 2 * n);
  const xMin = Math.max(0, lonToX(bounds[0]));
  const xMax = Math.min(n - 1, lonToX(bounds[2]));
  const yMin = Math.max(0, latToY(bounds[3]));
  const yMax = Math.min(n - 1, latToY(bounds[1]));
  targetContext.save();
  targetContext.globalAlpha = opacity;
  targetContext.globalCompositeOperation = "multiply";
  targetContext.imageSmoothingEnabled = true;
  for (let x = xMin; x <= xMax; x += 1) for (let y = yMin; y <= yMax; y += 1) {
    const [x0, y0] = project(tileLon(x, z), tileLat(y, z));
    const [x1, y1] = project(tileLon(x + 1, z), tileLat(y + 1, z));
    const left = Math.min(x0, x1);
    const top = Math.min(y0, y1);
    const width = Math.abs(x1 - x0) + 1;
    const height = Math.abs(y1 - y0) + 1;
    if (left > canvasSize.width + width || left + width < -width || top > canvasSize.height + height || top + height < -height) continue;
    const url = `https://cyberjapandata.gsi.go.jp/xyz/${layerId}/${z}/${x}/${y}.png`;
    let entry = gsiTileCache.get(url);
    if (!entry) {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.decoding = "async";
      entry = { image, status: "loading" };
      gsiTileCache.set(url, entry);
      image.onload = () => {
        entry.status = "loaded";
        trimGsiTileCache();
        requestDraw();
      };
      image.onerror = () => {
        entry.status = "missing";
        trimGsiTileCache();
      };
      image.src = url;
    } else {
      gsiTileCache.delete(url);
      gsiTileCache.set(url, entry);
    }
    if (entry.status === "loaded") targetContext.drawImage(entry.image, left, top, width, height);
  }
  targetContext.restore();
}

function drawReferenceLayers(targetContext) {
  if (state.showDetailMap) drawGsiTileLayer(targetContext, "std", state.detailMapOpacity / 100);
  if (state.showTerrain) {
    drawGsiTileLayer(targetContext, state.terrainStyle === "color" ? "relief" : "hillshademap", state.terrainOpacity / 100);
  }
}

function trimClimateRasterCache() {
  if (climateRasterCache.size <= CLIMATE_RASTER_CACHE_LIMIT) return;
  for (const [path, entry] of climateRasterCache) {
    if (climateRasterCache.size <= CLIMATE_RASTER_CACHE_LIMIT) break;
    if (entry.status === "loading" || path === climateRasterEntry()?.path) continue;
    climateRasterCache.delete(path);
  }
}

function climateRasterImage() {
  const raster = climateRasterEntry();
  if (!raster) return null;
  const path = `./data/climate/${raster.path}`;
  let entry = climateRasterCache.get(path);
  if (!entry) {
    const image = new Image();
    image.decoding = "async";
    entry = { image, status: "loading", path };
    climateRasterCache.set(path, entry);
    image.onload = () => {
      entry.status = "loaded";
      trimClimateRasterCache();
      if (state.layer === "climate" && climateRasterEntry()?.path && path.endsWith(climateRasterEntry().path)) {
        elements.mapStatus.textContent = `${climateManifest.source.meshCount.toLocaleString("ja-JP")}メッシュ・独自算出`;
      }
      requestDraw();
    };
    image.onerror = () => {
      entry.status = "error";
      if (state.layer === "climate") elements.mapStatus.textContent = "気候面を読み込めません";
      requestDraw();
    };
    image.src = path;
  } else {
    climateRasterCache.delete(path);
    climateRasterCache.set(path, entry);
  }
  return entry;
}

function drawClimateRaster(targetContext) {
  if (state.layer !== "climate" || state.climateOpacity <= 0 || !climateManifest) return;
  const entry = climateRasterImage();
  if (!entry || entry.status !== "loaded") return;
  const bounds = climateManifest.render.bounds;
  const [left, top] = project(bounds.west, bounds.north);
  const [right, bottom] = project(bounds.east, bounds.south);
  targetContext.save();
  targetContext.globalAlpha = state.climateOpacity / 100;
  targetContext.imageSmoothingEnabled = false;
  targetContext.drawImage(entry.image, left, top, right - left, bottom - top);
  targetContext.restore();
}

function renderBaseMap() {
  baseCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  baseCtx.clearRect(0, 0, canvasSize.width, canvasSize.height);
  baseCtx.fillStyle = "#e7f1f5";
  baseCtx.fillRect(0, 0, canvasSize.width, canvasSize.height);
  drawWorldContext(baseCtx);
  const municipalityPaths = features.map((feature) => geometryPath(feature.geometry));
  if (state.layer === "climate") {
    drawClimateRaster(baseCtx);
  } else {
    // Independent simplification leaves wider topology gaps only at extreme zoom.
    // Scale the under-stroke in screen pixels, then cap it to avoid visible bleed.
    const seamCoverWidth = Math.min(7, Math.max(0.8, state.scale / 65000));
    baseCtx.save();
    baseCtx.lineJoin = "round";
    baseCtx.lineCap = "round";
    for (let index = 0; index < features.length; index += 1) {
      const feature = features[index];
      const row = byId.get(feature.properties.id);
      const path = municipalityPaths[index];
      const fillColor = colorFor(row);
      baseCtx.fillStyle = fillColor;
      baseCtx.fill(path, "evenodd");
      // Simplified adjacent polygons can expose the pale land layer by a subpixel.
      // A same-color under-stroke closes that seam before boundary lines are redrawn.
      baseCtx.strokeStyle = fillColor;
      baseCtx.lineWidth = seamCoverWidth;
      baseCtx.stroke(path);
    }
    baseCtx.restore();
  }

  if (state.scale > 6000) {
    baseCtx.save();
    baseCtx.strokeStyle = "rgba(79, 91, 82, 0.34)";
    baseCtx.lineWidth = state.scale > 18000 ? 0.7 : 0.35;
    baseCtx.lineJoin = "round";
    baseCtx.lineCap = "round";
    for (const path of municipalityPaths) baseCtx.stroke(path);
    baseCtx.restore();
  }

  drawReferenceLayers(baseCtx);

  baseCtx.strokeStyle = "rgba(51, 69, 57, 0.70)";
  baseCtx.lineWidth = 0.85;
  for (const feature of prefectures) baseCtx.stroke(geometryPath(feature.geometry));
  baseDirty = false;
}

function strokeInsideMunicipality(path, color, width, alpha) {
  ctx.save();
  ctx.clip(path, "evenodd");
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = color;
  ctx.lineWidth = width * 2;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.stroke(path);
  ctx.restore();
}

function drawProductionBoundaries() {
  if (!productionOverlayActive()) return;
  const entries = productionEntries();
  const strength = state.productionOverlayOpacity / 100;
  const zoomEmphasis = Math.max(0, Math.min(1, (state.scale - 8000) / 28000));
  const styles = entries.map(({ feature, production }) => {
    const intensity = Math.max(0, Math.min(1, production.intensity));
    const size = Math.sqrt(intensity);
    return {
      feature,
      intensity,
      innerWidth: (0.38 + (1.45 + 1.85 * zoomEmphasis) * size) * 1.06,
      outerWidth: (1.45 + (1.85 + 2.45 * zoomEmphasis) * size) * 1.06,
      innerAlpha: Math.min(1, strength * (0.5 + 0.5 * size)),
      outerAlpha: Math.min(0.86, strength * (0.42 + 0.34 * size)),
      color: `hsl(${284 - 10 * intensity} 82% ${27 + 25 * intensity}%)`,
    };
  });

  for (const style of styles) {
    const path = geometryPath(style.feature.geometry);
    strokeInsideMunicipality(path, "#ffffff", style.outerWidth, style.outerAlpha);
  }
  for (const style of styles) {
    const path = geometryPath(style.feature.geometry);
    strokeInsideMunicipality(path, style.color, style.innerWidth, style.innerAlpha);
  }
}

function rectsOverlap(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function drawPlaceLabels() {
  if (!state.showPlaceLabels) return;
  const zoomRatio = Math.max(0.5, state.scale / Math.max(1, nationalViewScale));
  const labels = [...REGIONAL_PLACE_LABELS, ...MAJOR_PLACE_LABELS]
    .sort((a, b) => a.rank - b.rank || a.name.localeCompare(b.name, "ja"));
  const maxLabels = zoomRatio < 1.2 ? 32 : zoomRatio < 2.4 ? 48 : labels.length;
  const fontSize = zoomRatio < 1.4 ? 11 : zoomRatio < 3 ? 12 : 13;
  const visibleRects = [];
  let drawn = 0;
  ctx.save();
  ctx.textBaseline = "middle";
  ctx.textAlign = "left";
  ctx.font = `800 ${fontSize}px -apple-system, BlinkMacSystemFont, sans-serif`;
  ctx.lineJoin = "round";
  ctx.lineWidth = Math.max(3, fontSize * 0.3);
  ctx.strokeStyle = "rgba(255,255,255,0.78)";
  ctx.fillStyle = "rgba(31,43,50,0.78)";
  for (const label of labels) {
    if (label.minZoom > zoomRatio) continue;
    const [x, y] = project(label.lon, label.lat);
    if (x < -80 || x > canvasSize.width + 80 || y < -40 || y > canvasSize.height + 40) continue;
    const textWidth = ctx.measureText(label.name).width;
    const textX = x + 5;
    const rect = { x: textX - 3, y: y - fontSize * 0.68, w: textWidth + 8, h: fontSize * 1.35 };
    if (visibleRects.some((item) => rectsOverlap(rect, item))) continue;
    visibleRects.push(rect);
    ctx.globalAlpha = label.rank < 0 ? 0.72 : 0.9;
    ctx.beginPath();
    ctx.arc(x, y, label.rank < 0 ? 2.6 : 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeText(label.name, textX, y);
    ctx.fillText(label.name, textX, y);
    drawn += 1;
    if (drawn >= maxLabels) break;
  }
  ctx.restore();
}

function drawScene() {
  if (!state.ready) return;
  updateZoomControl();
  if (baseDirty) renderBaseMap();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, elements.canvas.width, elements.canvas.height);
  ctx.drawImage(baseCanvas, 0, 0);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  if (state.layer !== "climate") drawProductionBoundaries();

  const focusId = state.selectedId || state.hoverId;
  const focusFeature = featureById.get(focusId);
  if (focusFeature) {
    const path = geometryPath(focusFeature.geometry);
    ctx.save();
    ctx.strokeStyle = "#111d15";
    ctx.lineWidth = 1.8;
    ctx.setLineDash([6, 4]);
    ctx.stroke(path);
    ctx.restore();
  }
  if (state.layer === "climate" && state.climatePoint?.meshCode) {
    const bounds = meshBounds(state.climatePoint.meshCode);
    if (bounds) {
      const [west, north] = project(bounds.west, bounds.north);
      const [east, south] = project(bounds.east, bounds.south);
      const centerX = (west + east) / 2;
      const centerY = (north + south) / 2;
      ctx.save();
      ctx.strokeStyle = "#10291b";
      ctx.fillStyle = "rgba(255,255,255,.82)";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      const width = Math.max(8, east - west);
      const height = Math.max(8, south - north);
      ctx.fillRect(centerX - width / 2, centerY - height / 2, width, height);
      ctx.strokeRect(centerX - width / 2, centerY - height / 2, width, height);
      ctx.beginPath();
      ctx.arc(centerX, centerY, 2.6, 0, Math.PI * 2);
      ctx.fillStyle = "#c9572a";
      ctx.fill();
      ctx.restore();
    }
  }
  drawPlaceLabels();
}

function updateZoomControl() {
  if (!elements.zoomThumb || !nationalViewScale) return;
  const ratio = Math.max(0, Math.min(1, Math.log(state.scale / nationalViewScale) / Math.log(MAX_MAP_SCALE / nationalViewScale)));
  elements.zoomThumb.style.setProperty("--zoom-thumb-top", `${92 - ratio * 80}px`);
}

function renderFrame() {
  frameHandle = 0;
  drawScene();
}

function requestDraw() {
  baseDirty = true;
  if (!frameHandle) frameHandle = requestAnimationFrame(renderFrame);
}

function fitNationalView() {
  const bounds = [122.8, 20.3, 154.1, 45.8];
  const topLeft = worldPoint(bounds[0], bounds[3]);
  const bottomRight = worldPoint(bounds[2], bounds[1]);
  const widthScale = canvasSize.width * 0.91 / (bottomRight[0] - topLeft[0]);
  const heightScale = canvasSize.height * 0.91 / (bottomRight[1] - topLeft[1]);
  const zoomEmphasis = canvasSize.width >= 760 ? NATIONAL_VIEW_DESKTOP_ZOOM : NATIONAL_VIEW_MOBILE_ZOOM;
  state.scale = Math.min(widthScale, heightScale) * zoomEmphasis;
  nationalViewScale = state.scale;
  const center = [(topLeft[0] + bottomRight[0]) / 2, (topLeft[1] + bottomRight[1]) / 2];
  state.center = canvasSize.width >= 760
    ? [...NATIONAL_VIEW_DESKTOP_CENTER]
    : worldToLonLat(center[0], center[1]);
  requestDraw();
}

function fitFeature(feature) {
  const [minLon, minLat, maxLon, maxLat] = feature.properties.bbox;
  const a = worldPoint(minLon, maxLat);
  const b = worldPoint(maxLon, minLat);
  state.scale = Math.min(480000, Math.max(11000, Math.min(canvasSize.width * 0.66 / Math.max(0.0002, b[0] - a[0]), canvasSize.height * 0.66 / Math.max(0.0002, b[1] - a[1]))));
  state.center = worldToLonLat((a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
  requestDraw();
}

function pointInRing(lon, lat, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1];
    const xj = ring[j][0], yj = ring[j][1];
    if ((yi > lat) !== (yj > lat) && lon < (xj - xi) * (lat - yi) / (yj - yi || Number.EPSILON) + xi) inside = !inside;
  }
  return inside;
}

function pointInFeature(lon, lat, feature) {
  const bbox = feature.properties.bbox;
  if (lon < bbox[0] || lon > bbox[2] || lat < bbox[1] || lat > bbox[3]) return false;
  for (const polygon of feature.geometry.coordinates) {
    let inside = false;
    for (const ring of polygon) if (pointInRing(lon, lat, ring)) inside = !inside;
    if (inside) return true;
  }
  return false;
}

function hitTest(x, y) {
  const [lon, lat] = unproject(x, y);
  for (let i = features.length - 1; i >= 0; i -= 1) {
    if (pointInFeature(lon, lat, features[i])) return features[i].properties.id;
  }
  return null;
}

function formatRank(value) {
  return Number.isFinite(value?.rank) && Number.isFinite(value?.rankPopulation)
    ? `${value.rank.toLocaleString("ja-JP")}位 / ${value.rankPopulation.toLocaleString("ja-JP")}`
    : value?.statusLabel ?? "データなし";
}
function formatScore(value) { return Number.isFinite(value) ? `${value.toFixed(1)}点` : "データなし"; }
function escapeHtml(value) { return String(value ?? "").replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]); }

function detailMetric(label, value, suffix = "") {
  if (!Number.isFinite(value)) return "";
  return `<div><dt>${escapeHtml(label)}</dt><dd>${value.toLocaleString("ja-JP", { maximumFractionDigits: 1 })}${escapeHtml(suffix)}</dd></div>`;
}

function limitingFactorText(value) {
  if (value === "temperature") return "必須気温条件";
  if (value === "winter_cold_or_chilling") return "冬季低温・低温要求";
  if (value === "hazard_land_support") return "遅霜・高温・斜面・土壌";
  return value ?? "データなし";
}

function productionText(production) {
  if (!production) return "データなし";
  if (production.status === "reported" && Number.isFinite(production.areaHa)) {
    const rank = Number.isFinite(production.publicValueRank) ? `／公表値内 ${production.publicValueRank.toLocaleString("ja-JP")}位` : "";
    const rounding = production.areaHa === 0 ? "（ha単位の公表値）" : "";
    return `${production.areaHa.toLocaleString("ja-JP", { maximumFractionDigits: 1 })} ha${rounding}${rank}`;
  }
  if (production.status === "zero") return "該当なし（0 ha）";
  if (production.status === "suppressed") return "秘匿のため不明（ゼロではありません）";
  if (production.status === "boundary_mismatch") return "2020年統計と現行行政界の不一致により比較なし";
  return "データなし";
}

function compactValue(value) {
  if (!value) return "データなし";
  if (state.layer === "warming") return value.band ?? value.status ?? "比較不可";
  if (state.layer === "soil") return value.dominantLabel ? `${value.dominantLabel}（${value.dominantShare.toFixed(1)}％）` : "土壌図データなし";
  return state.metric === "score" ? (Number.isFinite(value.score) ? formatScore(value.score) : value.statusLabel ?? "データなし") : formatRank(value);
}

function climateValue(record, windowId, monthId) {
  return record?.values?.[windowId]?.[monthId] ?? null;
}

function formatClimateValue(value, element, includeUnit = true) {
  if (!Number.isFinite(value)) return "データなし";
  const decimals = Number.isInteger(element?.decimalPlaces) ? element.decimalPlaces : 2;
  const formatted = value.toLocaleString("ja-JP", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return includeUnit ? `${formatted} ${element?.unit ?? ""}`.trim() : formatted;
}

function formatClimateDifference(value, element) {
  if (!Number.isFinite(value)) return "—";
  const decimals = Number.isInteger(element?.decimalPlaces) ? element.decimalPlaces : 2;
  const formatted = Math.abs(value).toLocaleString("ja-JP", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return `${value > 0 ? "+" : value < 0 ? "−" : "±"}${formatted}`;
}

function climatePointRowsHtml(point) {
  return climateManifest.elementOrder.map((code) => {
    const element = climateManifest.elements[code];
    const record = point.records?.[code] ?? null;
    const monthAvailable = element.months.some((item) => Number(item.id) === Number(state.climateMonth));
    const older = monthAvailable ? climateValue(record, "1991_2020", state.climateMonth) : null;
    const newer = monthAvailable ? climateValue(record, "1996_2025", state.climateMonth) : null;
    const difference = Number.isFinite(older) && Number.isFinite(newer) ? newer - older : null;
    const unavailableLabel = Number(state.climateMonth) === 13 && !element.annual.available ? "年値なし" : "データなし";
    return `
      <div class="climate-point-row${code === state.climateElement ? " current" : ""}">
        <div class="climate-point-element"><strong>${escapeHtml(element.shortName)}</strong><span>${escapeHtml(element.unit)}</span></div>
        <div class="climate-point-values">
          <span><small>1991–2020</small><strong>${Number.isFinite(older) ? escapeHtml(formatClimateValue(older, element, false)) : escapeHtml(unavailableLabel)}</strong></span>
          <span><small>1996–2025</small><strong>${Number.isFinite(newer) ? escapeHtml(formatClimateValue(newer, element, false)) : escapeHtml(unavailableLabel)}</strong></span>
          <span><small>更新差</small><strong>${escapeHtml(formatClimateDifference(difference, element))}</strong></span>
        </div>
      </div>`;
  }).join("");
}

function climatePointDetailsHtml(row, point) {
  const place = row ? `${row.prefecture} ${row.municipality}` : "選択した地点";
  const element = climateElementMeta();
  const month = climateMonthMeta();
  const window = climateWindowMeta();
  const record = point.records?.[state.climateElement] ?? null;
  const current = climateValue(record, state.climateWindow, state.climateMonth);
  const center = meshBounds(point.meshCode);
  return `
    <h2>${escapeHtml(place)}</h2>
    <p>1kmメッシュ ${escapeHtml(point.meshCode)}${row ? ` / 自治体コード ${escapeHtml(row.id)}` : ""}</p>
    <div class="primary-value climate-point-primary">
      <span>${escapeHtml(element?.shortName ?? "気候値")}｜${escapeHtml(month?.label ?? "")}｜${escapeHtml(window?.label ?? "")}</span>
      <strong>${escapeHtml(formatClimateValue(current, element))}</strong>
    </div>
    <div class="climate-point-heading">
      <strong>${escapeHtml(month?.label ?? "")}の全8要素</strong>
      <span>2つの30年平均と更新差</span>
    </div>
    <div class="climate-point-grid">${climatePointRowsHtml(point)}</div>
    <dl class="detail-list climate-point-meta">
      <div><dt>メッシュ中心</dt><dd>${center?.centerLat.toFixed(4)}°N<br>${center?.centerLon.toFixed(4)}°E</dd></div>
      <div><dt>空間解像度</dt><dd>全国1kmメッシュ</dd></div>
    </dl>
    <p class="detail-note">更新差は、25年間が重なる2つの30年平均の差です。30年間の変化量そのものではありません。各値は観測値等をもとに独自算出・独自内挿した参考値で、市区町村平均や農業適地の得点・順位ではありません。</p>
  `;
}

function updateDetails(id = state.selectedId || state.hoverId) {
  const climateRow = byId.get(state.climatePoint?.municipalityId || state.selectedId);
  const row = state.layer === "climate" ? climateRow : byId.get(id);
  elements.clearSelection.hidden = !(state.selectedId || state.climatePoint);
  if (state.layer === "climate" && state.climatePoint) {
    const point = state.climatePoint;
    if (point.status === "loading") {
      elements.detailsContent.innerHTML = `
        <h2>${escapeHtml(climateRow ? `${climateRow.prefecture} ${climateRow.municipality}` : "選択した地点")}</h2>
        <p>1kmメッシュ ${escapeHtml(point.meshCode)}</p>
        <div class="primary-value climate-point-primary"><strong>全8要素を確認中…</strong><span>検証済み地点データを読み込んでいます</span></div>`;
      return;
    }
    if (point.status === "error") {
      elements.detailsContent.innerHTML = `
        <h2>${escapeHtml(climateRow ? `${climateRow.prefecture} ${climateRow.municipality}` : "選択した地点")}</h2>
        <p>1kmメッシュ ${escapeHtml(point.meshCode)}</p>
        <div class="primary-value climate-point-primary"><strong>地点値を表示できません</strong><span>${escapeHtml(point.message ?? "データの完全性を確認できませんでした")}</span></div>`;
      return;
    }
    elements.detailsContent.innerHTML = climatePointDetailsHtml(climateRow, point);
    return;
  }
  if (!row) {
    elements.detailsContent.innerHTML = state.layer === "climate"
      ? `<h2>気候面を読む</h2><p>地図上で値を知りたい場所へポインターを重ねると、選択中の気象要素の1km値を表示します。クリックまたはタップすると地点を固定し、右欄で全8要素を比較できます。</p>`
      : `<h2>地図から選択</h2><p>自治体をクリックまたはタップすると、順位・スコアと分野横断の比較を確認できます。</p>`;
    return;
  }
  if (state.layer === "climate") {
    const place = `${row.prefecture} ${row.municipality}`;
    const element = climateElementMeta();
    const month = climateMonthMeta();
    const window = climateWindowMeta();
    elements.detailsContent.innerHTML = `
      <h2>${escapeHtml(place)}</h2>
      <p>自治体コード ${escapeHtml(row.id)}${row.district ? ` / ${escapeHtml(row.district)}` : ""}</p>
      <div class="primary-value"><strong>自治体内の地点を選択</strong><span>${escapeHtml(element?.shortName ?? "気候面")}・${escapeHtml(month?.label ?? "")}・${escapeHtml(window?.label ?? "")}</span></div>
      <dl class="detail-list">
        <div class="detail-row-stacked"><dt>次の操作</dt><dd>地図をクリックまたはタップすると、その1kmメッシュの全8要素を表示します。</dd></div>
        <div><dt>空間解像度</dt><dd>全国1kmメッシュ</dd></div>
        <div><dt>地図の濃さ</dt><dd>${state.climateOpacity}％</dd></div>
      </dl>
      <p class="detail-note">選択境界は場所を確認する補助です。気候面は市区町村平均・順位ではなく、独自算出・独自内挿した1km分布です。${escapeHtml(element?.qualityNote ?? "")}</p>
    `;
    return;
  }
  const value = selectedValue(row);
  const place = `${row.prefecture} ${row.municipality}`;
  let primary;
  if (state.layer === "warming") primary = value?.band ?? value?.status ?? "比較不可";
  else if (state.layer === "soil") primary = value?.dominantLabel ?? "土壌図データなし";
  else primary = state.metric === "score" ? (Number.isFinite(value?.score) ? formatScore(value.score) : value?.statusLabel ?? "データなし") : formatRank(value);
  const fieldRows = Object.entries(COMPARISON_FIELDS).map(([key, label]) => {
    const item = row.fields[key];
    return `<div><dt>${label}</dt><dd>${formatRank(item)}<br><span>${Number.isFinite(item?.score) ? formatScore(item.score) : escapeHtml(item?.exclusionReason ?? "データなし")}</span></dd></div>`;
  }).join("");
  const cropDetailRows = orchardCropValueActive() ? [
    `<div><dt>代表条件</dt><dd>${escapeHtml(value?.representative ?? "一般条件")}${value?.persimmonSystem ? `<br><span>${escapeHtml(value.persimmonSystem)}</span>` : ""}</dd></div>`,
    `<div class="production-detail-row"><dt>産地分布 <span class="detail-year">2020年</span></dt><dd>${escapeHtml(productionText(value?.production))}</dd><p>販売目的栽培面積の参考値（収穫量ではありません）</p></div>`,
    detailMetric("局所上位20％の参考スコア", value?.potentialTop20Score, "点"),
    detailMetric("70点以上の対象農地割合", value?.scoreGe70AreaPercent, "％"),
    `<div><dt>主な制約要因</dt><dd>${escapeHtml(limitingFactorText(value?.dominantLimitingFactor))}</dd></div>`,
    detailMetric("気温帯スコア", value?.temperatureScore, "点"),
    detailMetric("冬季低温・低温要求スコア", value?.coldScore, "点"),
    detailMetric("遅霜・高温リスクスコア", value?.hazardScore, "点"),
    detailMetric("果樹斜面スコア", value?.slopeScore, "点"),
    detailMetric("実効土壌スコア", value?.soilScore, "点"),
    detailMetric("リスク・斜面・土壌の補助条件", value?.supportingScore, "点"),
    Number.isFinite(value?.sensitivityBestRank) && Number.isFinite(value?.sensitivityWorstRank)
      ? `<div><dt>9条件での感度順位</dt><dd>${value.sensitivityBestRank.toLocaleString("ja-JP")}〜${value.sensitivityWorstRank.toLocaleString("ja-JP")}位<br><span>順位幅 ${value.sensitivityRankSpan.toLocaleString("ja-JP")}</span></dd></div>`
      : "",
    detailMetric("年平均気温", value?.annualMeanTemperatureC, "℃"),
    detailMetric("4〜10月平均気温", value?.aprOctMeanTemperatureC, "℃"),
    detailMetric(`冬季最低極温${value?.winterExtremeStatistic ?? ""}`, value?.winterExtremeC, "℃"),
    detailMetric("推定7.2℃以下時間", value?.chillHoursProxy, "時間"),
    detailMetric("4/1〜5/15の霜日数", value?.lateFrostDays, "日/年"),
    detailMetric("6〜9月の35℃以上日数", value?.hotDays, "日/年"),
    value?.coloringWindowLabel ? detailMetric(`${value.coloringWindowLabel}平均気温`, value?.coloringWindowMeanTemperatureC, "℃") : "",
  ].filter(Boolean).join("") : "";
  const majorCropDetailRows = majorCropValueActive() ? [
    `<div><dt>品目選定</dt><dd>${escapeHtml(majorCropMeta()?.label ?? "品目別")}${Number.isFinite(majorCropMeta()?.selectionValue) ? `<br><span>${majorCropMeta().selectionValue.toLocaleString("ja-JP")} ${escapeHtml(majorCropMeta().selectionUnit)}</span>` : ""}</dd></div>`,
    `<div class="detail-row-stacked detail-row-conditions"><dt>試算条件</dt><dd class="detail-condition-list">${majorCropParameterSummaryHtml()}</dd></div>`,
    `<div class="detail-row-stacked"><dt>閾値の出典区分</dt><dd>${escapeHtml(majorCropProvenanceLabel())}</dd></div>`,
    ...(majorCropMeta()?.sharedClimateParameterGroup?.length > 1
      ? [`<div class="detail-row-stacked"><dt>同一外気候条件</dt><dd>${escapeHtml(majorCropMeta().sharedClimateParameterGroup.join("・"))}</dd></div>`]
      : []),
    detailMetric("局所上位20％の参考スコア", value?.potentialTop20Score, "点"),
    detailMetric("70点以上の対象農地割合", value?.scoreGe70AreaPercent, "％"),
    `<div class="detail-row-stacked detail-row-limiting"><dt>主な制約要因</dt><dd><strong>${escapeHtml(value?.dominantLimitingFactor ?? "データなし")}</strong><span class="detail-subnote">自治体内の3成分平均のうち最小。メッシュで最頻の要因ではありません。</span></dd></div>`,
    detailMetric("必須気温条件スコア", value?.temperatureScore, "点"),
    detailMetric("必須作期条件スコア", value?.seasonScore, "点"),
    detailMetric("補助条件スコア", value?.supportingScore, "点"),
    detailMetric("実効土壌スコア", value?.soilScore, "点"),
    Number.isFinite(value?.sensitivityBestRank) && Number.isFinite(value?.sensitivityWorstRank)
      ? `<div><dt>感度順位</dt><dd>${value.sensitivityBestRank.toLocaleString("ja-JP")}〜${value.sensitivityWorstRank.toLocaleString("ja-JP")}位<br><span>順位幅 ${value.sensitivityRankSpan.toLocaleString("ja-JP")}</span></dd></div>` : "",
    detailMetric("対象農地面積", value?.farmAreaKm2, " km²"),
  ].filter(Boolean).join("") : "";
  const soilRows = value?.status === "classified" ? `
    <div><dt>最多土壌大群の面積構成比</dt><dd>${value.dominantShare.toFixed(1)}％</dd></div>
    <div><dt>2番目の土壌大群</dt><dd>${value.secondaryLabel ? `${escapeHtml(value.secondaryLabel)}（${value.secondaryShare.toFixed(1)}％）` : "なし"}</dd></div>
    <div><dt>土壌図の集計対象面積</dt><dd>${value.mappedAreaKm2.toLocaleString("ja-JP", { maximumFractionDigits: 3 })} km²</dd></div>
  ` : `<div><dt>土壌図の集計</dt><dd>データなし</dd></div>`;
  const note = state.layer === "warming"
    ? "5段階の変化帯だけを表示しています。厳密な上昇・下降順位や指数値は公開していません。"
    : state.layer === "soil"
      ? "市町村内の農耕地土壌図を面積集計した最多分類です。個別圃場の土壌判定や土壌適性評価には使えません。"
      : orchardCropValueActive()
        ? value?.status !== "RANKED"
          ? value?.exclusionReason ?? value?.statusLabel ?? "データなし"
          : `${ORCHARD_CROP_NOTES[state.orchardCrop]} 主得点は対象農地全体を面積加重し、必須気候条件の不足を斜面・土壌で相殺しません。産地分布は適地得点と独立した事後比較です。`
      : majorCropValueActive()
        ? value?.status !== "RANKED"
          ? value?.exclusionReason ?? value?.statusLabel ?? "データなし"
          : `${data.layers[state.layer].cropScopeNote ?? "生産統計は品目選定だけに使用します。"} ${data.majorCropParameterDisclosure?.publication_label_ja ?? "著者設定の探索パラメータを含みます。"}。主得点は対象農地全体の面積加重平均で、必須条件不足を別条件で相殺しません。感度順位は変換幅±20％だけの3条件で、モデル全体の不確かさではありません。`
      : value?.status !== "RANKED"
        ? value?.exclusionReason ?? value?.statusLabel ?? "データなし"
        : Number.isFinite(value?.soilCoveragePercent)
          ? `土地条件には土壌軸を${value.soilWeight}％で反映。土壌図被覆率 ${value.soilCoveragePercent.toFixed(1)}％、実効土壌スコア ${value.soilEffectiveScore.toFixed(1)}点。被覆が低い地域は全国平均へ縮約しています。`
          : FIELD_NOTES[state.layer];
  const primaryLabel = state.layer === "overall"
    ? `${FIELD_LABELS[state.layer]}・${OVERALL_LABELS[state.overallMethod]}`
    : state.layer === "warming"
      ? `${FIELD_LABELS[state.layer]}・${WARMING_LABELS[state.warmingIndicator]}`
      : majorCropValueActive()
        ? `${FIELD_LABELS[state.layer]}・${majorCropMeta()?.label ?? "品目別"}`
        : state.layer === "vegetables"
          ? `${FIELD_LABELS[state.layer]}・${VEGETABLE_LABELS[state.vegetableType]}`
        : orchardCropValueActive()
          ? `${FIELD_LABELS[state.layer]}・${ORCHARD_CROP_LABELS[state.orchardCrop]}`
        : state.layer === "soil" && value?.dominantLabel
          ? `最多土壌大群・${value.dominantShare.toFixed(1)}％`
          : FIELD_LABELS[state.layer];
  elements.detailsContent.innerHTML = `
    <h2>${escapeHtml(place)}</h2>
    <p>自治体コード ${escapeHtml(row.id)}${row.district ? ` / ${escapeHtml(row.district)}` : ""}</p>
    <div class="primary-value"><strong>${escapeHtml(primary)}</strong><span>${escapeHtml(primaryLabel)}</span></div>
    <dl class="detail-list">${state.layer === "soil" ? soilRows : orchardCropValueActive() ? cropDetailRows + fieldRows : majorCropValueActive() ? majorCropDetailRows + fieldRows : fieldRows}</dl>
    ${note ? `<p class="detail-note">${escapeHtml(note)}</p>` : ""}
  `;
}

function updateRanking() {
  if (!state.ready) return;
  if (state.layer === "climate") {
    elements.rankingMode.hidden = true;
    elements.rankingTitle.textContent = "気候面の読み方";
    elements.rankingContent.innerHTML = `
      <div class="climate-reading-row"><strong>1km参考面</strong><span>自治体順位ではありません</span></div>
      <div class="climate-reading-row"><strong>2つの30年平均</strong><span>25年間が重なる期間です</span></div>
      <div class="climate-reading-row"><strong>独自算出・独自内挿</strong><span>公式1km平年値ではありません</span></div>
    `;
    return;
  }
  if (["warming", "soil"].includes(state.layer)) {
    elements.rankingMode.hidden = true;
    let rows;
    if (state.layer === "warming") {
      elements.rankingTitle.textContent = "変化帯の自治体数";
      const selected = data.municipalities.map((row) => row.warming[state.warmingIndicator]);
      rows = WARMING_SCALE.map(([label, color]) => [label, color, selected.filter((value) => value?.band === label).length]);
      const unavailable = selected.filter((value) => !value?.band).length;
      if (unavailable) rows.push(["比較不可", "#cfd5d1", unavailable]);
    } else {
      elements.rankingTitle.textContent = "最多土壌大群別の自治体数";
      const selected = data.municipalities.map((row) => row.soil);
      rows = SOIL_SCALE
        .map(([code, label, color]) => [label, color, selected.filter((value) => value?.dominantCode === code).length])
        .filter(([, , count]) => count > 0);
      const unavailable = selected.filter((value) => !value?.dominantCode).length;
      if (unavailable) rows.push(["土壌図データなし", "#cfd5d1", unavailable]);
    }
    elements.rankingContent.innerHTML = rows.map(([label, color, count]) => `<div class="band-count"><span class="band-dot ${legendSwatchClass(color)}"></span><span>${escapeHtml(label)}</span><strong>${count.toLocaleString("ja-JP")}</strong></div>`).join("");
    return;
  }
  elements.rankingMode.hidden = false;
  elements.rankingTitle.textContent = state.rankingSide === "top" ? "全国上位10" : "全国下位10";
  document.querySelectorAll("[data-ranking-side]").forEach((button) => button.classList.toggle("active", button.dataset.rankingSide === state.rankingSide));
  const rows = data.municipalities
    .map((row) => ({ row, value: selectedValue(row) }))
    .filter((item) => Number.isFinite(item.value?.rank))
    .sort((a, b) => state.rankingSide === "top" ? a.value.rank - b.value.rank : b.value.rank - a.value.rank)
    .slice(0, 10);
  elements.rankingContent.innerHTML = rows.map(({ row, value }, index) => `
    <button class="ranking-row" type="button" data-municipality-id="${row.id}">
      <span class="ranking-number">${index + 1}</span>
      <span class="ranking-place"><strong>${escapeHtml(row.municipality)}</strong><span>${escapeHtml(row.prefecture)}</span></span>
      <span class="ranking-value">${value.rank.toLocaleString("ja-JP")}位<br>${formatScore(value.score)}</span>
    </button>`).join("");
}

function syncUrl() {
  if (!state.ready) return;
  const params = new URLSearchParams();
  params.set("field", state.layer);
  if (state.layer === "vegetables") params.set("vegetable", state.vegetableType);
  if (state.layer === "orchard" && state.orchardCrop !== "common") params.set("crop", state.orchardCrop);
  if (majorCropValueActive()) params.set("item", state.majorCropSelections[state.layer]);
  if (productionOverlayAvailable() && state.productionOverlayEnabled) {
    params.set("productionOverlay", "1");
    params.set("productionOpacity", String(state.productionOverlayOpacity));
  }
  if (state.layer === "overall") params.set("method", state.overallMethod);
  if (state.layer === "warming") params.set("indicator", state.warmingIndicator);
  else if (state.layer === "climate") {
    params.set("climateElement", state.climateElement);
    params.set("climateMonth", String(state.climateMonth));
    params.set("climateWindow", state.climateWindow);
    params.set("climateOpacity", String(state.climateOpacity));
    if (state.climatePoint?.meshCode) params.set("climateMesh", state.climatePoint.meshCode);
  } else if (state.layer !== "soil") params.set("metric", state.metric);
  if (state.showPlaceLabels) params.set("labels", "1");
  if (state.showDetailMap) {
    params.set("detail", "1");
    params.set("detailOpacity", String(state.detailMapOpacity));
  }
  if (state.showTerrain) {
    params.set("terrain", "1");
    params.set("terrainStyle", state.terrainStyle);
    params.set("terrainOpacity", String(state.terrainOpacity));
  }
  if (state.selectedId) params.set("municipality", state.selectedId);
  if (localDevelopmentDataEnabled()) params.set("devData", "1");
  history.replaceState(null, "", `${location.pathname}?${params.toString()}`);
}

function selectMunicipality(id, fit = true) {
  const row = byId.get(id);
  const feature = featureById.get(id);
  if (!row || !feature) return;
  if (state.layer === "climate") {
    climatePointSequence += 1;
    state.climatePoint = null;
  }
  state.selectedId = id;
  elements.search.value = `${row.prefecture} ${row.municipality}`;
  if (fit) fitFeature(feature);
  updateDetails();
  syncUrl();
  requestDraw();
}

async function selectClimatePoint(lon, lat, municipalityId) {
  const meshCode = meshCodeFromLatLon(lat, lon);
  const bounds = meshBounds(meshCode);
  if (!meshCode || !bounds) return;
  const sequence = ++climatePointSequence;
  state.selectedId = municipalityId || null;
  const row = byId.get(municipalityId);
  if (row) elements.search.value = `${row.prefecture} ${row.municipality}`;
  state.climatePoint = {
    meshCode,
    municipalityId: municipalityId || null,
    status: "loading",
    records: null,
  };
  updateDetails();
  syncUrl();
  requestDraw();
  try {
    const entries = await Promise.all(climateManifest.elementOrder.map(async (code) => [code, await climatePointRecord(meshCode, code)]));
    if (sequence !== climatePointSequence || state.climatePoint?.meshCode !== meshCode) return;
    state.climatePoint = {
      ...state.climatePoint,
      status: "loaded",
      records: Object.fromEntries(entries),
    };
    elements.mapStatus.textContent = `${row ? `${row.prefecture} ${row.municipality}・` : ""}1kmメッシュ ${meshCode}`;
  } catch (error) {
    if (sequence !== climatePointSequence || state.climatePoint?.meshCode !== meshCode) return;
    state.climatePoint = {
      ...state.climatePoint,
      status: "error",
      message: error?.message || "地点値データを読み込めませんでした",
    };
    elements.mapStatus.textContent = "地点値データを確認できません";
  }
  updateDetails();
  syncUrl();
  requestDraw();
}

function positionTooltip(point) {
  elements.tooltip.style.left = `${Math.min(canvasSize.width - 255, point.x + 12)}px`;
  elements.tooltip.style.top = `${Math.max(8, point.y - 12)}px`;
}

function clearClimateHover() {
  climateHoverSequence += 1;
  clearTimeout(climateHoverTimer);
  climateHoverTimer = 0;
  state.climateHover = null;
}

function scheduleClimateTooltip(point, municipalityId) {
  const row = byId.get(municipalityId);
  const [lon, lat] = unproject(point.x, point.y);
  const meshCode = meshCodeFromLatLon(lat, lon);
  if (!row || !meshCode) {
    clearClimateHover();
    elements.tooltip.hidden = true;
    return;
  }
  positionTooltip(point);
  elements.tooltip.hidden = false;
  const existing = state.climateHover;
  if (existing?.meshCode === meshCode && existing.elementCode === state.climateElement) {
    const element = climateElementMeta();
    const value = climateValue(existing.record, state.climateWindow, state.climateMonth);
    const label = existing.status === "loaded" ? formatClimateValue(value, element) : existing.status === "error" ? "地点値を確認できません" : "地点値を確認中…";
    elements.tooltip.innerHTML = `
      <strong>${escapeHtml(row.prefecture)} ${escapeHtml(row.municipality)}</strong>
      <span class="tooltip-value">${escapeHtml(element?.shortName ?? "気候値")} ${escapeHtml(label)}</span>
      <span>${escapeHtml(climateMonthMeta()?.label ?? "")}・${escapeHtml(climateWindowMeta()?.label ?? "")}｜1km ${escapeHtml(meshCode)}</span>`;
    return;
  }
  const sequence = ++climateHoverSequence;
  const elementCode = state.climateElement;
  clearTimeout(climateHoverTimer);
  state.climateHover = {
    meshCode,
    elementCode,
    municipalityId,
    status: "loading",
    record: null,
  };
  elements.tooltip.innerHTML = `
    <strong>${escapeHtml(row.prefecture)} ${escapeHtml(row.municipality)}</strong>
    <span class="tooltip-value">${escapeHtml(climateElementMeta()?.shortName ?? "気候値")} 地点値を確認中…</span>
    <span>${escapeHtml(climateMonthMeta()?.label ?? "")}・${escapeHtml(climateWindowMeta()?.label ?? "")}｜1km ${escapeHtml(meshCode)}</span>`;
  climateHoverTimer = window.setTimeout(async () => {
    try {
      const record = await climatePointRecord(meshCode, elementCode);
      if (sequence !== climateHoverSequence || state.climateHover?.meshCode !== meshCode || state.climateHover?.elementCode !== elementCode) return;
      state.climateHover = { ...state.climateHover, status: "loaded", record };
    } catch (error) {
      if (sequence !== climateHoverSequence || state.climateHover?.meshCode !== meshCode || state.climateHover?.elementCode !== elementCode) return;
      state.climateHover = { ...state.climateHover, status: "error", message: error?.message };
    }
    if (!elements.tooltip.hidden) scheduleClimateTooltip(point, municipalityId);
  }, 80);
}

function updateLegend() {
  if (state.layer === "climate") {
    const config = climateLegendConfig();
    const element = climateElementMeta();
    if (!config || !element) {
      elements.legend.innerHTML = `<p class="legend-title">気候面を読み込み中</p>`;
      return;
    }
    const label = `${config.title}（${element.unit}）`;
    elements.legend.innerHTML = `<canvas id="climateLegendCanvas" class="climate-legend-canvas" width="132" height="224" role="img" aria-label="${escapeHtml(label)}。${escapeHtml(config.labels.low)}から${escapeHtml(config.labels.high)}"></canvas>`;
    drawClimateLegendCanvas(document.querySelector("#climateLegendCanvas"), config, label);
    return;
  }
  let rows;
  let title;
  if (state.layer === "warming") {
    title = "変化の分類";
    rows = WARMING_SCALE.map(([label, color]) => [color, label]);
  } else if (state.layer === "soil") {
    title = "最多土壌大群";
    rows = SOIL_SCALE.map(([, label, color]) => [color, label]);
  } else if (state.metric === "score") {
    title = "比較用スコア";
    rows = SCORE_SCALE.map(([, color, label]) => [color, label]);
  } else {
    title = "全国順位";
    rows = RANK_SCALE.map(([, color, label]) => [color, label]);
  }
  rows.push(["#cfd5d1", "データなし"]);
  const overlayLegend = productionOverlayActive() ? `
    <p class="legend-title overlay-legend-title">実際の産地境界</p>
    <div class="legend-row"><span class="legend-line production-line-low"></span><span>細く暗い＝面積小</span></div>
    <div class="legend-row"><span class="legend-line production-line-high"></span><span>太く明るい＝面積大</span></div>
    <div class="legend-row"><span class="production-none"></span><span>秘匿・境界不一致は強調なし</span></div>
  ` : "";
  elements.legend.innerHTML = `<p class="legend-title">${title}</p>${rows.map(([color, label]) => `<div class="legend-row"><span class="legend-swatch ${legendSwatchClass(color)}"></span><span>${label}</span></div>`).join("")}${overlayLegend}`;
}

function legendSwatchClass(color) {
  return /^#[0-9a-f]{6}$/i.test(color) ? `legend-color-${color.slice(1).toLowerCase()}` : "legend-color-cfd5d1";
}

function drawClimateLegendCanvas(canvas, config, title) {
  if (!canvas || !config?.colors?.length) return;
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#17261d";
  context.font = "700 11px -apple-system, BlinkMacSystemFont, sans-serif";
  const titleParts = context.measureText(title).width <= 122
    ? [title]
    : [config.title, title.slice(config.title.length)];
  titleParts.filter(Boolean).slice(0, 2).forEach((line, index) => context.fillText(line, 4, 13 + index * 13));
  const barTop = titleParts.length > 1 ? 36 : 26;
  const barBottom = 214;
  const barHeight = barBottom - barTop;
  const gradient = context.createLinearGradient(0, barBottom, 0, barTop);
  config.colors.forEach((color, index) => gradient.addColorStop(index / Math.max(1, config.colors.length - 1), color));
  context.fillStyle = gradient;
  context.fillRect(5, barTop, 28, barHeight);
  context.strokeStyle = "#52685a";
  context.lineWidth = 1;
  context.strokeRect(5.5, barTop + 0.5, 27, barHeight - 1);
  context.font = "700 10px -apple-system, BlinkMacSystemFont, sans-serif";
  context.fillStyle = "#30443a";
  context.textBaseline = "middle";
  [
    [barTop, config.labels.high],
    [barTop + barHeight / 2, config.labels.middle],
    [barBottom, config.labels.low],
  ].forEach(([y, label]) => {
    context.strokeStyle = "rgba(48,68,58,.68)";
    context.beginPath();
    context.moveTo(5, y);
    context.lineTo(39, y);
    context.stroke();
    context.fillText(label, 43, Math.max(barTop + 5, Math.min(barBottom - 5, y)));
  });
}

function updateUi() {
  elements.layerSelect.value = state.layer;
  document.querySelectorAll("[data-metric]").forEach((button) => button.classList.toggle("active", button.dataset.metric === state.metric));
  document.querySelectorAll("[data-vegetable-type]").forEach((button) => button.classList.toggle("active", button.dataset.vegetableType === state.vegetableType));
  document.querySelectorAll("[data-orchard-crop]").forEach((button) => button.classList.toggle("active", button.dataset.orchardCrop === state.orchardCrop));
  elements.vegetableControl.hidden = state.layer !== "vegetables";
  elements.climateControl.hidden = state.layer !== "climate";
  const climateElement = climateElementMeta();
  if (state.layer === "climate" && climateElement) {
    const availableMonths = climateElement.months.map((item) => Number(item.id));
    if (!availableMonths.includes(Number(state.climateMonth))) {
      const currentMonth = new Date().getMonth() + 1;
      state.climateMonth = availableMonths.includes(currentMonth) ? currentMonth : availableMonths[0];
    }
    elements.climateElement.value = state.climateElement;
    elements.climateMonth.innerHTML = climateElement.months
      .map((item) => `<option value="${item.id}">${escapeHtml(item.label)}</option>`)
      .join("");
    elements.climateMonth.value = String(state.climateMonth);
    elements.climateWindowControl.querySelectorAll("[data-climate-window]").forEach((button) => {
      button.classList.toggle("active", button.dataset.climateWindow === state.climateWindow);
    });
    elements.climateOpacity.value = String(state.climateOpacity);
    elements.climateOpacityValue.value = `${state.climateOpacity}％`;
    elements.climateControlNote.textContent = Number(state.climateMonth) === 13
      ? `${climateElement.annual.definition} 独自算出・独自内挿の参考面です。`
      : `${climateElement.definition} 独自算出・独自内挿の参考面です。`;
  }
  elements.majorCropControl.hidden = !majorCropFieldActive();
  if (majorCropFieldActive()) {
    const field = data.layers[state.layer];
    const cropIds = field.cropDisplayOrder.filter((cropId) => state.layer !== "vegetables" || field.crops[cropId].type === state.vegetableType);
    if (!cropIds.includes(state.majorCropSelections[state.layer])) state.majorCropSelections[state.layer] = "common";
    elements.majorCropLabel.textContent = state.layer === "vegetables" ? `${VEGETABLE_LABELS[state.vegetableType]}の表示` : `${FIELD_LABELS[state.layer]}の表示`;
    const commonLabel = state.layer === "vegetables" ? `${VEGETABLE_LABELS[state.vegetableType]}共通` : `${FIELD_LABELS[state.layer]}共通`;
    elements.majorCropButtons.innerHTML = [
      `<button class="wide${state.majorCropSelections[state.layer] === "common" ? " active" : ""}" type="button" data-major-crop="common">${escapeHtml(commonLabel)}</button>`,
      ...cropIds.map((cropId) => `<button class="${state.majorCropSelections[state.layer] === cropId ? "active" : ""}" type="button" data-major-crop="${escapeHtml(cropId)}">${escapeHtml(field.crops[cropId].label)}</button>`),
    ].join("");
  }
  elements.orchardControl.hidden = state.layer !== "orchard" || !data?.layers?.orchard?.crops;
  elements.productionOverlayControl.hidden = !productionOverlayAvailable();
  elements.productionOverlayToggle.classList.toggle("active", state.productionOverlayEnabled);
  elements.productionOverlayToggle.setAttribute("aria-pressed", String(state.productionOverlayEnabled));
  elements.productionOverlayOpacity.disabled = !state.productionOverlayEnabled;
  elements.productionOverlayOpacity.value = String(state.productionOverlayOpacity);
  elements.productionOverlayOpacityValue.value = `${state.productionOverlayOpacity}％`;
  elements.placeLabelsToggle.checked = state.showPlaceLabels;
  elements.detailMapToggle.checked = state.showDetailMap;
  elements.detailMapOpacity.disabled = !state.showDetailMap;
  elements.detailMapOpacity.value = String(state.detailMapOpacity);
  elements.detailMapOpacityValue.value = `${state.detailMapOpacity}％`;
  elements.terrainToggle.checked = state.showTerrain;
  elements.terrainStyle.disabled = !state.showTerrain;
  elements.terrainStyle.value = state.terrainStyle;
  elements.terrainOpacity.disabled = !state.showTerrain;
  elements.terrainOpacity.value = String(state.terrainOpacity);
  elements.terrainOpacityValue.value = `${state.terrainOpacity}％`;
  elements.overallControl.hidden = state.layer !== "overall";
  elements.warmingControl.hidden = state.layer !== "warming";
  elements.metricControl.hidden = ["warming", "soil", "climate"].includes(state.layer);
  elements.mapKicker.textContent = state.layer === "climate"
    ? "気候ものさし・1km参考面"
    : state.layer === "warming"
    ? `${WARMING_LABELS[state.warmingIndicator]}の変化`
    : state.layer === "overall"
      ? `${FIELD_LABELS[state.layer]}・${OVERALL_LABELS[state.overallMethod]}`
      : majorCropValueActive()
        ? `${FIELD_LABELS[state.layer]}・${majorCropMeta()?.label ?? "品目別"}`
        : state.layer === "vegetables"
          ? `${FIELD_LABELS[state.layer]}・${VEGETABLE_LABELS[state.vegetableType]}`
        : orchardCropValueActive()
          ? `${FIELD_LABELS[state.layer]}・${ORCHARD_CROP_LABELS[state.orchardCrop]}`
        : FIELD_LABELS[state.layer];
  elements.mapTitle.textContent = state.layer === "climate"
    ? climateMapHeading()
    : state.layer === "warming"
    ? "1981〜2000年 → 2006〜2025年"
    : state.layer === "soil"
      ? "農耕地で面積最多の土壌大群"
      : `${state.metric === "rank" ? "全国順位" : "比較用スコア"}${productionOverlayActive() ? " ＋ 実際の産地境界" : ""}`;
  elements.layerNote.textContent = state.layer === "climate"
    ? climateDefinitionNote()
    : majorCropValueActive()
    ? `${data.layers[state.layer].cropScopeNote} ${data.majorCropParameterDisclosure?.publication_label_ja ?? "著者設定の探索パラメータを含みます。"}。`
    : state.layer === "vegetables"
      ? VEGETABLE_NOTES[state.vegetableType]
    : orchardCropValueActive()
      ? ORCHARD_CROP_NOTES[state.orchardCrop]
      : FIELD_NOTES[state.layer];
  if (state.layer === "climate") {
    const raster = climateRasterImage();
    elements.mapStatus.textContent = raster?.status === "loaded"
      ? `${climateManifest.source.meshCount.toLocaleString("ja-JP")}メッシュ・独自算出`
      : raster?.status === "error"
        ? "気候面を読み込めません"
        : "気候面を読み込み中…";
  } else {
    elements.mapStatus.textContent = `${data.municipalityCount.toLocaleString("ja-JP")}自治体・2024年行政界`;
  }
  updateLegend();
  updateDetails();
  updateRanking();
  syncUrl();
  requestDraw();
}

function zoomAt(factor, x = canvasSize.width / 2, y = canvasSize.height / 2) {
  const before = unproject(x, y);
  state.scale = Math.max(2400, Math.min(MAX_MAP_SCALE, state.scale * factor));
  const after = unproject(x, y);
  state.center[0] += before[0] - after[0];
  state.center[1] += before[1] - after[1];
  requestDraw();
}

function pointerPosition(event) {
  const rect = elements.canvas.getBoundingClientRect();
  return { x: event.clientX - rect.left, y: event.clientY - rect.top };
}

elements.canvas.addEventListener("pointerdown", (event) => {
  elements.canvas.setPointerCapture(event.pointerId);
  const point = pointerPosition(event);
  activePointers.set(event.pointerId, point);
  elements.canvas.classList.add("dragging");
  if (activePointers.size === 1) {
    gesture = { type: "pan", start: point, last: point, moved: 0 };
  } else if (activePointers.size === 2) {
    const points = [...activePointers.values()];
    gesture = { type: "pinch", distance: Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y), scale: state.scale };
  }
});

elements.canvas.addEventListener("pointermove", (event) => {
  const point = pointerPosition(event);
  if (activePointers.has(event.pointerId)) activePointers.set(event.pointerId, point);
  if (activePointers.size === 1 && gesture?.type === "pan") {
    const dx = point.x - gesture.last.x;
    const dy = point.y - gesture.last.y;
    const center = centerWorld();
    state.center = worldToLonLat(center[0] - dx / state.scale, center[1] - dy / state.scale);
    gesture.moved += Math.hypot(dx, dy);
    gesture.last = point;
    requestDraw();
  } else if (activePointers.size === 2 && gesture?.type === "pinch") {
    const points = [...activePointers.values()];
    const distance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
    state.scale = Math.max(2400, Math.min(MAX_MAP_SCALE, gesture.scale * distance / Math.max(10, gesture.distance)));
    requestDraw();
  } else if (activePointers.size === 0 && matchMedia("(pointer: fine)").matches) {
    const id = hitTest(point.x, point.y);
    if (id !== state.hoverId) {
      state.hoverId = id;
      if (state.layer !== "climate") updateDetails();
      requestDraw();
    }
    if (id) {
      const row = byId.get(id);
      if (state.layer === "climate") {
        scheduleClimateTooltip(point, id);
      } else {
        elements.tooltip.hidden = false;
        elements.tooltip.style.left = `${Math.min(canvasSize.width - 235, point.x + 12)}px`;
        elements.tooltip.style.top = `${Math.max(8, point.y - 12)}px`;
        const production = selectedProduction(row);
        const tooltipValue = compactValue(selectedValue(row));
        elements.tooltip.innerHTML = `<strong>${escapeHtml(row.prefecture)} ${escapeHtml(row.municipality)}</strong><span>${escapeHtml(tooltipValue)}</span>${productionOverlayActive() ? `<span>産地分布：${escapeHtml(productionText(production))}</span>` : ""}`;
      }
    } else {
      clearClimateHover();
      elements.tooltip.hidden = true;
    }
  }
});

function endPointer(event) {
  const point = pointerPosition(event);
  const shouldSelect = activePointers.size === 1 && gesture?.type === "pan" && gesture.moved < 7;
  activePointers.delete(event.pointerId);
  if (shouldSelect) {
    const id = hitTest(point.x, point.y);
    if (id && state.layer === "climate") {
      const [lon, lat] = unproject(point.x, point.y);
      void selectClimatePoint(lon, lat, id);
    } else if (id) selectMunicipality(id, false);
  }
  if (activePointers.size === 0) {
    gesture = null;
    elements.canvas.classList.remove("dragging");
  } else if (activePointers.size === 1) {
    const remaining = [...activePointers.values()][0];
    gesture = { type: "pan", start: remaining, last: remaining, moved: 8 };
  }
  requestDraw();
}

elements.canvas.addEventListener("pointerup", endPointer);
elements.canvas.addEventListener("pointercancel", endPointer);
elements.canvas.addEventListener("pointerleave", () => {
  if (!activePointers.size) {
    state.hoverId = null;
    clearClimateHover();
    elements.tooltip.hidden = true;
    if (state.layer !== "climate") updateDetails();
    requestDraw();
  }
});
elements.canvas.addEventListener("wheel", (event) => {
  event.preventDefault();
  const point = pointerPosition(event);
  zoomAt(event.deltaY < 0 ? 1.22 : 1 / 1.22, point.x, point.y);
}, { passive: false });

elements.layerSelect.addEventListener("change", () => {
  state.layer = elements.layerSelect.value;
  clearClimateHover();
  elements.tooltip.hidden = true;
  updateUi();
});
elements.climateElement.addEventListener("change", () => {
  if (!climateManifest?.elements?.[elements.climateElement.value]) return;
  state.climateElement = elements.climateElement.value;
  clearClimateHover();
  elements.tooltip.hidden = true;
  updateUi();
});
elements.climateMonth.addEventListener("change", () => {
  const month = Number(elements.climateMonth.value);
  if (!climateElementMeta()?.months?.some((item) => Number(item.id) === month)) return;
  state.climateMonth = month;
  updateUi();
});
elements.climateWindowControl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-climate-window]");
  if (!button || !climateManifest?.windows?.some((item) => item.id === button.dataset.climateWindow)) return;
  state.climateWindow = button.dataset.climateWindow;
  updateUi();
});
elements.climateOpacity.addEventListener("input", () => {
  state.climateOpacity = Math.max(0, Math.min(100, Math.round(Number(elements.climateOpacity.value))));
  updateUi();
});
document.querySelector("#metricControl").addEventListener("click", (event) => {
  const button = event.target.closest("[data-metric]");
  if (!button) return;
  state.metric = button.dataset.metric;
  updateUi();
});
elements.vegetableControl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-vegetable-type]");
  if (!button) return;
  state.vegetableType = button.dataset.vegetableType;
  state.majorCropSelections.vegetables = "common";
  updateUi();
});
elements.majorCropControl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-major-crop]");
  if (!button || !majorCropFieldActive()) return;
  state.majorCropSelections[state.layer] = button.dataset.majorCrop;
  updateUi();
});
elements.orchardControl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-orchard-crop]");
  if (!button) return;
  state.orchardCrop = button.dataset.orchardCrop;
  updateUi();
});
elements.productionOverlayToggle.addEventListener("click", () => {
  state.productionOverlayEnabled = !state.productionOverlayEnabled;
  updateUi();
});
elements.productionOverlayOpacity.addEventListener("input", () => {
  state.productionOverlayOpacity = Math.max(0, Math.min(100, Number(elements.productionOverlayOpacity.value)));
  updateUi();
});
elements.placeLabelsToggle.addEventListener("change", () => {
  state.showPlaceLabels = elements.placeLabelsToggle.checked;
  updateUi();
});
elements.detailMapToggle.addEventListener("change", () => {
  state.showDetailMap = elements.detailMapToggle.checked;
  updateUi();
});
elements.detailMapOpacity.addEventListener("input", () => {
  state.detailMapOpacity = Math.max(0, Math.min(100, Math.round(Number(elements.detailMapOpacity.value))));
  updateUi();
});
elements.terrainToggle.addEventListener("change", () => {
  state.showTerrain = elements.terrainToggle.checked;
  updateUi();
});
elements.terrainStyle.addEventListener("change", () => {
  state.terrainStyle = elements.terrainStyle.value === "color" ? "color" : "mono";
  updateUi();
});
elements.terrainOpacity.addEventListener("input", () => {
  state.terrainOpacity = Math.max(0, Math.min(100, Math.round(Number(elements.terrainOpacity.value))));
  updateUi();
});
elements.overallMethod.addEventListener("change", () => { state.overallMethod = elements.overallMethod.value; updateUi(); });
elements.warmingIndicator.addEventListener("change", () => { state.warmingIndicator = elements.warmingIndicator.value; updateUi(); });
document.querySelector("#zoomIn").addEventListener("click", () => zoomAt(1.35));
document.querySelector("#zoomOut").addEventListener("click", () => zoomAt(1 / 1.35));
document.querySelector("#resetView").addEventListener("click", fitNationalView);
elements.clearSelection.addEventListener("click", () => {
  climatePointSequence += 1;
  state.selectedId = null;
  state.climatePoint = null;
  elements.search.value = "";
  updateDetails();
  syncUrl();
  requestDraw();
});

function searchMunicipality() {
  const query = elements.search.value.trim();
  if (!query) return;
  const row = data.municipalities.find((item) => `${item.prefecture} ${item.municipality}` === query || `${item.prefecture}${item.municipality}` === query.replace(/\s+/g, ""));
  if (!row) {
    elements.mapStatus.textContent = "自治体が見つかりません";
    return;
  }
  selectMunicipality(row.id, true);
  elements.mapStatus.textContent = `${row.prefecture} ${row.municipality}を表示`;
}
document.querySelector("#searchButton").addEventListener("click", searchMunicipality);
elements.search.addEventListener("keydown", (event) => { if (event.key === "Enter") searchMunicipality(); });
elements.rankingMode.addEventListener("click", (event) => {
  const button = event.target.closest("[data-ranking-side]");
  if (!button) return;
  state.rankingSide = button.dataset.rankingSide;
  updateRanking();
});
elements.rankingContent.addEventListener("click", (event) => {
  const button = event.target.closest("[data-municipality-id]");
  if (button) selectMunicipality(button.dataset.municipalityId, true);
});
document.querySelector("#copyLink").addEventListener("click", async () => {
  syncUrl();
  try {
    await navigator.clipboard.writeText(location.href);
    elements.mapStatus.textContent = "共有URLをコピーしました";
  } catch {
    elements.mapStatus.textContent = "URL欄からリンクをコピーしてください";
  }
});

function climateExportCanvas() {
  const output = document.createElement("canvas");
  output.width = elements.canvas.width;
  output.height = elements.canvas.height;
  const outputContext = output.getContext("2d");
  outputContext.drawImage(elements.canvas, 0, 0);
  outputContext.setTransform(dpr, 0, 0, dpr, 0, 0);
  const panelWidth = 154;
  const panelHeight = 248;
  const panelX = canvasSize.width - panelWidth - 10;
  const panelY = 10;
  outputContext.fillStyle = "rgba(255,255,255,.94)";
  outputContext.fillRect(panelX, panelY, panelWidth, panelHeight);
  outputContext.strokeStyle = "rgba(82,104,90,.64)";
  outputContext.lineWidth = 1;
  outputContext.strokeRect(panelX + 0.5, panelY + 0.5, panelWidth - 1, panelHeight - 1);
  const legendCanvas = document.createElement("canvas");
  legendCanvas.width = 132;
  legendCanvas.height = 224;
  const legend = climateLegendConfig();
  const element = climateElementMeta();
  drawClimateLegendCanvas(legendCanvas, legend, `${legend.title}（${element.unit}）`);
  outputContext.drawImage(legendCanvas, panelX + 11, panelY + 10);

  const titleHeight = 42;
  outputContext.fillStyle = "rgba(18,63,40,.91)";
  outputContext.fillRect(0, canvasSize.height - titleHeight, canvasSize.width, titleHeight);
  outputContext.fillStyle = "#fff";
  const fitExportText = (text, weight, initialSize, minimumSize, maxWidth) => {
    let size = initialSize;
    do {
      outputContext.font = `${weight} ${size}px -apple-system, BlinkMacSystemFont, sans-serif`;
      if (outputContext.measureText(text).width <= maxWidth || size <= minimumSize) break;
      size -= 0.5;
    } while (size >= minimumSize);
    return text;
  };
  const maxTextWidth = Math.max(120, canvasSize.width - 24);
  outputContext.fillText(
    fitExportText(climateDisplayTitle(), 700, 13, 8.5, maxTextWidth),
    12,
    canvasSize.height - 23,
    maxTextWidth,
  );
  outputContext.fillText(
    fitExportText(
      "NatureWxLab独自算出・独自内挿の1km参考面｜農業適地の得点・順位には不使用",
      600,
      10,
      7,
      maxTextWidth,
    ),
    12,
    canvasSize.height - 8,
    maxTextWidth,
  );
  return output;
}

document.querySelector("#saveImage").addEventListener("click", () => {
  drawScene();
  if (state.layer === "climate" && climateRasterImage()?.status !== "loaded") {
    elements.mapStatus.textContent = "気候面の読込後に保存してください";
    return;
  }
  const exportCanvas = state.layer === "climate" ? climateExportCanvas() : elements.canvas;
  exportCanvas.toBlob((blob) => {
    if (blob) {
      const link = document.createElement("a");
      const layerName = state.layer === "climate"
        ? `climate-${state.climateElement}-${state.climateWindow}-m${String(state.climateMonth).padStart(2, "0")}`
        : state.layer === "vegetables"
        ? `vegetables-${state.vegetableType}${majorCropValueActive() ? `-${state.majorCropSelections.vegetables}` : ""}`
        : orchardCropValueActive()
          ? `orchard-${state.orchardCrop}`
          : majorCropValueActive()
            ? `${state.layer}-${state.majorCropSelections[state.layer]}`
          : state.layer;
      link.download = `agri-map-${layerName}.png`;
      link.href = URL.createObjectURL(blob);
      link.click();
      setTimeout(() => URL.revokeObjectURL(link.href), 1000);
      elements.mapStatus.textContent = "静止画を保存しました";
    }
  }, "image/png");
});

function resizeCanvas() {
  const rect = elements.mapFrame.getBoundingClientRect();
  dpr = Math.min(2, window.devicePixelRatio || 1);
  canvasSize = { width: Math.max(1, rect.width), height: Math.max(1, rect.height) };
  elements.canvas.width = Math.round(canvasSize.width * dpr);
  elements.canvas.height = Math.round(canvasSize.height * dpr);
  baseCanvas.width = elements.canvas.width;
  baseCanvas.height = elements.canvas.height;
  baseDirty = true;
  if (state.ready && state.scale === 1) fitNationalView();
  else requestDraw();
}

new ResizeObserver(resizeCanvas).observe(elements.mapFrame);

function setUnlockStatus(message, isError = false) {
  elements.unlockStatus.textContent = message;
  elements.unlockStatus.classList.toggle("error", isError);
}

function setUnlockBusy(busy) {
  elements.unlockPassword.disabled = busy;
  elements.unlockButton.disabled = busy;
  elements.unlockButton.textContent = busy ? "確認中…" : "地図を開く";
}

function bytesToHex(bytes) {
  return [...bytes].map((value) => value.toString(16).padStart(2, "0")).join("");
}

function parseProtectedEnvelope(buffer) {
  const bytes = new Uint8Array(buffer);
  if (bytes.length < 57) throw new Error("暗号化データが不完全です");
  const magic = new TextDecoder("ascii").decode(bytes.subarray(0, 8));
  if (magic !== PROTECTED_MAGIC) throw new Error("暗号化データの形式を確認できません");
  const iterations = new DataView(buffer, 8, 4).getUint32(0, false);
  if (iterations < 300_000) throw new Error("暗号鍵の生成条件が安全基準を満たしません");
  const salt = bytes.slice(12, 28);
  const iv = bytes.slice(28, 40);
  const ciphertext = bytes.slice(40);
  return {
    iterations,
    salt,
    iv,
    ciphertext,
    fingerprint: `${PROTECTED_MAGIC}:${iterations}:${bytesToHex(salt)}`,
  };
}

async function deriveKey(password, envelope) {
  const baseKey = await window.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveKey"],
  );
  return window.crypto.subtle.deriveKey(
    { name: "PBKDF2", hash: "SHA-256", salt: envelope.salt, iterations: envelope.iterations },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"],
  );
}

async function gunzip(bytes) {
  if (!("DecompressionStream" in window)) {
    throw new Error("このブラウザは地図データの展開に対応していません。最新版のChrome、Safari、Edgeで開いてください");
  }
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function decryptPayload(key, envelope) {
  const compressed = await window.crypto.subtle.decrypt(
    { name: "AES-GCM", iv: envelope.iv, tagLength: 128 },
    key,
    envelope.ciphertext,
  );
  const jsonBytes = await gunzip(compressed);
  const payload = JSON.parse(new TextDecoder().decode(jsonBytes));
  if (payload.schemaVersion !== "naturewxlab.agri-natural-conditions-map.protected-payload.v1") {
    throw new Error("地図データの版を確認できません");
  }
  return payload;
}

function openKeyDatabase() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("ブラウザ保存を利用できません"));
      return;
    }
    const request = indexedDB.open(KEY_DATABASE, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(KEY_STORE)) request.result.createObjectStore(KEY_STORE, { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("ブラウザ保存を開けません"));
  });
}

async function withKeyStore(mode, operation) {
  const database = await openKeyDatabase();
  try {
    return await new Promise((resolve, reject) => {
      const transaction = database.transaction(KEY_STORE, mode);
      const store = transaction.objectStore(KEY_STORE);
      const request = operation(store);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("ブラウザ保存を更新できません"));
      transaction.onabort = () => reject(transaction.error || new Error("ブラウザ保存を更新できません"));
    });
  } finally {
    database.close();
  }
}

async function getSavedKey(fingerprint) {
  try {
    const record = await withKeyStore("readonly", (store) => store.get(KEY_RECORD));
    if (!record || record.fingerprint !== fingerprint) return null;
    if (record.key instanceof CryptoKey) return record.key;
    if (!record.keyBytes) return null;
    const migratedKey = await window.crypto.subtle.importKey(
      "raw",
      new Uint8Array(record.keyBytes),
      { name: "AES-GCM" },
      false,
      ["decrypt"],
    );
    await saveKey(fingerprint, migratedKey);
    return migratedKey;
  } catch {
    return null;
  }
}

async function saveKey(fingerprint, key) {
  try {
    await withKeyStore("readwrite", (store) => store.put({ id: KEY_RECORD, fingerprint, key }));
    return true;
  } catch {
    return false;
  }
}

async function clearSavedKey() {
  try {
    await withKeyStore("readwrite", (store) => store.delete(KEY_RECORD));
  } catch {
    // Unlocking still works when persistent browser storage is unavailable.
  }
}

async function loadWorldContext() {
  try {
    const response = await fetch(WORLD_CONTEXT_URL, { cache: "no-cache" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const collection = await response.json();
    if (collection?.type !== "FeatureCollection" || !Array.isArray(collection.features)) throw new Error("GeoJSON形式が不正です");
    worldContext = collection.features.filter((feature) => ["Polygon", "MultiPolygon"].includes(feature?.geometry?.type));
  } catch (error) {
    worldContext = [];
    console.warn("周辺国の地図境界を読み込めませんでした", error);
  }
}

async function loadClimateManifest() {
  const response = await fetch(CLIMATE_MANIFEST_URL, { cache: "no-cache" });
  if (!response.ok) throw new Error(`気候面manifest HTTP ${response.status}`);
  const manifest = await response.json();
  const expectedElements = ["201", "202", "203", "101", "401", "501", "503", "610"];
  if (
    manifest?.schemaVersion !== "naturewxlab.agri-climate-reference.v2"
    || manifest?.source?.meshCount !== 387717
    || manifest?.assetCount !== 206
    || JSON.stringify(manifest?.elementOrder) !== JSON.stringify(expectedElements)
    || manifest?.render?.projection !== "EPSG:3857"
    || manifest?.pointData?.baseUrl !== "../climate-outlook-navi/data/climate/"
    || manifest?.pointData?.meshCount !== 387717
    || manifest?.pointData?.assetCount !== 1408
    || manifest?.pointData?.totalBytes !== 257482808
    || manifest?.pointData?.delivery !== "same_origin_on_demand_sha256_verified"
  ) {
    throw new Error("気候面のデータ契約を確認できません");
  }
  if (manifest.elements?.["610"]?.annual?.available !== false || manifest.elements?.["610"]?.months?.length !== 12) {
    throw new Error("全天日射量の月別契約を確認できません");
  }
  for (const code of expectedElements.slice(0, -1)) {
    if (manifest.elements?.[code]?.annual?.available !== true || manifest.elements?.[code]?.months?.length !== 13) {
      throw new Error(`気候面の年値契約を確認できません: ${code}`);
    }
  }
  for (const code of expectedElements) {
    const pointElement = manifest.pointData?.elements?.[code];
    if (
      !pointElement?.chunkFormat
      || Object.keys(pointElement?.chunks ?? {}).length !== 176
      || !Number.isInteger(manifest.elements?.[code]?.decimalPlaces)
    ) {
      throw new Error(`気候面の地点値契約を確認できません: ${code}`);
    }
  }
  climateManifest = manifest;
}

async function initializeMap(payload) {
  await Promise.all([loadWorldContext(), loadClimateManifest()]);
  data = payload.data;
  features = payload.boundaries.features;
  prefectures = payload.prefectures.features;
  byId = new Map(data.municipalities.map((row) => [row.id, row]));
  featureById = new Map(features.map((feature) => [feature.properties.id, feature]));
  if (byId.size !== data.municipalityCount || featureById.size !== data.municipalityCount || data.municipalityCount !== 1892) {
    throw new Error("自治体データと行政界の件数が一致しません");
  }
  elements.options.innerHTML = data.municipalities.map((row) => `<option value="${escapeHtml(row.prefecture)} ${escapeHtml(row.municipality)}"></option>`).join("");
  const params = new URLSearchParams(location.search);
  const requestedField = params.get("field");
  if (["leafy", "fruiting", "root"].includes(requestedField)) {
    state.layer = "vegetables";
    state.vegetableType = requestedField;
  } else if (FIELD_LABELS[requestedField]) state.layer = requestedField;
  if (VEGETABLE_LABELS[params.get("vegetable")]) state.vegetableType = params.get("vegetable");
  const requestedCrop = params.get("crop");
  if (ORCHARD_CROP_LABELS[requestedCrop] && data?.layers?.orchard?.crops?.[requestedCrop]) state.orchardCrop = requestedCrop;
  else state.orchardCrop = "common";
  const requestedItem = params.get("item");
  if (data?.layers?.[state.layer]?.crops?.[requestedItem]) {
    const itemType = data.layers[state.layer].crops[requestedItem].type;
    if (state.layer !== "vegetables" || !itemType || itemType === state.vegetableType) state.majorCropSelections[state.layer] = requestedItem;
  }
  state.productionOverlayEnabled = params.get("productionOverlay") === "1";
  const requestedProductionOpacityParam = params.get("productionOpacity");
  const requestedProductionOpacity = Number(requestedProductionOpacityParam);
  if (requestedProductionOpacityParam !== null && Number.isFinite(requestedProductionOpacity)) {
    state.productionOverlayOpacity = Math.max(0, Math.min(100, Math.round(requestedProductionOpacity)));
  }
  if (OVERALL_LABELS[params.get("method")]) state.overallMethod = params.get("method");
  if (WARMING_LABELS[params.get("indicator")]) state.warmingIndicator = params.get("indicator");
  if (["rank", "score"].includes(params.get("metric"))) state.metric = params.get("metric");
  if (climateManifest.elements?.[params.get("climateElement")]) state.climateElement = params.get("climateElement");
  if (climateManifest.windows.some((item) => item.id === params.get("climateWindow"))) state.climateWindow = params.get("climateWindow");
  const requestedClimateMonth = Number(params.get("climateMonth"));
  if (climateManifest.elements[state.climateElement].months.some((item) => Number(item.id) === requestedClimateMonth)) {
    state.climateMonth = requestedClimateMonth;
  }
  const requestedClimateOpacity = Number(params.get("climateOpacity"));
  if (params.has("climateOpacity") && Number.isFinite(requestedClimateOpacity)) {
    state.climateOpacity = Math.max(0, Math.min(100, Math.round(requestedClimateOpacity)));
  }
  state.showPlaceLabels = params.get("labels") === "1";
  state.showDetailMap = params.get("detail") === "1";
  const requestedDetailOpacity = Number(params.get("detailOpacity"));
  if (params.has("detailOpacity") && Number.isFinite(requestedDetailOpacity)) {
    state.detailMapOpacity = Math.max(0, Math.min(100, Math.round(requestedDetailOpacity)));
  }
  state.showTerrain = params.get("terrain") === "1";
  if (["mono", "color"].includes(params.get("terrainStyle"))) state.terrainStyle = params.get("terrainStyle");
  const requestedTerrainOpacity = Number(params.get("terrainOpacity"));
  if (params.has("terrainOpacity") && Number.isFinite(requestedTerrainOpacity)) {
    state.terrainOpacity = Math.max(0, Math.min(100, Math.round(requestedTerrainOpacity)));
  }
  const requestedMunicipality = params.get("municipality");
  if (byId.has(requestedMunicipality)) state.selectedId = requestedMunicipality;
  const requestedClimateMesh = /^\d{8}$/.test(params.get("climateMesh") ?? "") ? params.get("climateMesh") : null;
  elements.overallMethod.value = state.overallMethod;
  elements.warmingIndicator.value = state.warmingIndicator;

  elements.lockScreen.hidden = true;
  elements.protectedContent.hidden = false;
  document.body.classList.remove("locked");
  state.ready = true;
  elements.mapStatus.textContent = `${data.municipalityCount.toLocaleString("ja-JP")}自治体・2024年行政界`;
  await new Promise((resolve) => requestAnimationFrame(resolve));
  resizeCanvas();
  if (state.selectedId) {
    const selected = byId.get(state.selectedId);
    elements.search.value = `${selected.prefecture} ${selected.municipality}`;
    fitFeature(featureById.get(state.selectedId));
  } else fitNationalView();
  updateUi();
  if (state.layer === "climate" && requestedClimateMesh) {
    const bounds = meshBounds(requestedClimateMesh);
    if (bounds) {
      const municipalityId = state.selectedId
        || features.find((feature) => pointInFeature(bounds.centerLon, bounds.centerLat, feature))?.properties?.id
        || null;
      await selectClimatePoint(bounds.centerLon, bounds.centerLat, municipalityId);
    }
  }
}

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) requestDraw();
});
let protectedEnvelope = null;

function localDevelopmentDataEnabled() {
  return ["127.0.0.1", "localhost"].includes(location.hostname)
    && new URLSearchParams(location.search).get("devData") === "1";
}

async function loadLocalDevelopmentPayload() {
  const sourceRoot = "../../private/agri-natural-conditions-map-source/data";
  const [dataResponse, boundariesResponse, prefecturesResponse] = await Promise.all([
    fetch(`${sourceRoot}/municipal_data.json`, { cache: "no-cache" }),
    fetch(`${sourceRoot}/municipal_boundaries.geojson`, { cache: "no-cache" }),
    fetch(`${sourceRoot}/prefectures.geojson`, { cache: "no-cache" }),
  ]);
  if (![dataResponse, boundariesResponse, prefecturesResponse].every((response) => response.ok)) {
    throw new Error("ローカル検証用の地図データを取得できませんでした");
  }
  return {
    data: await dataResponse.json(),
    boundaries: await boundariesResponse.json(),
    prefectures: await prefecturesResponse.json(),
  };
}

async function unlockWithKey(key, remember) {
  const payload = await decryptPayload(key, protectedEnvelope);
  if (remember) await saveKey(protectedEnvelope.fingerprint, key);
  else await clearSavedKey();
  elements.unlockPassword.value = "";
  await initializeMap(payload);
}

elements.unlockForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const password = elements.unlockPassword.value;
  if (!protectedEnvelope || !password) return;
  setUnlockBusy(true);
  setUnlockStatus("パスワードを確認しています…");
  try {
    const key = await deriveKey(password, protectedEnvelope);
    await unlockWithKey(key, elements.rememberDevice.checked);
  } catch (error) {
    if (error?.name === "OperationError") setUnlockStatus("パスワードが違います。note有料部分の文字列をコピーして、もう一度お試しください。", true);
    else setUnlockStatus(error?.message || "地図を開けませんでした。", true);
  } finally {
    setUnlockBusy(false);
  }
});

elements.forgetDevice.addEventListener("click", async () => {
  await clearSavedKey();
  location.reload();
});

async function start() {
  setUnlockBusy(true);
  try {
    if (localDevelopmentDataEnabled()) {
      setUnlockStatus("ローカル検証データを読み込んでいます…");
      await initializeMap(await loadLocalDevelopmentPayload());
      return;
    }
    if (!window.isSecureContext || !window.crypto?.subtle) throw new Error("安全な接続で開き直してください");
    const response = await fetch(PROTECTED_DATA_URL, { cache: "no-cache" });
    if (!response.ok) throw new Error("暗号化された地図データを取得できませんでした");
    protectedEnvelope = parseProtectedEnvelope(await response.arrayBuffer());
    const savedKey = await getSavedKey(protectedEnvelope.fingerprint);
    if (savedKey) {
      setUnlockStatus("このブラウザに保存された鍵で開いています…");
      try {
        await unlockWithKey(savedKey, true);
        return;
      } catch {
        await clearSavedKey();
      }
    }
    setUnlockStatus("パスワードを入力してください。");
    elements.unlockPassword.focus();
  } catch (error) {
    console.error(error);
    setUnlockStatus(error?.message || "地図データを読み込めませんでした。", true);
  } finally {
    setUnlockBusy(false);
  }
}

start();

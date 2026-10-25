/**
 * Ürün kataloğunun tek veri kaynağı.
 *
 * Bu liste bir başlangıç kataloğudur. Ürünler, firmanın faaliyet gösterdiği ürün gruplarını
 * temsil eder. Marka, ölçü, gramaj, stok veya fiyat bilgisi doğrulanmadığı için yazılmamıştır.
 * Doğrulanmış teknik bilgiler `specifications` alanına eklendiğinde ürün detay sayfasında görünür.
 */

export type CategorySlug = "ambalaj" | "temizlik" | "ofis-kirtasiye" | "gida";

export interface ProductGroup {
  slug: string;
  name: string;
  description: string;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  /** Menülerde ve kartlarda kullanılan kısa açıklama */
  cardDescription: string;
  /** Kategori sayfası üst açıklaması */
  description: string;
  seoTitle: string;
  seoDescription: string;
  icon: "package" | "spray" | "pen" | "coffee";
  /** Kartlarda kullanılan marka rengi */
  accent: "bordo" | "navy";
  /** Kategori sayfasının ürün listeleme düzeni */
  layout: "grid" | "list" | "groups";
  groups: ProductGroup[];
}

export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  group: string;
  shortDescription: string;
  description: string;
  /** Yalnızca doğrulanmış teknik bilgiler */
  specifications?: Specification[];
}

export const categories: Category[] = [
  {
    slug: "ambalaj",
    name: "Ambalaj Ürünleri",
    cardDescription: "Koli, streç film, bant, çember ve koruyucu ambalaj ürünleri.",
    description:
      "Ürünlerin korunması, paketlenmesi, taşınması ve depolanması için ambalaj ürünlerini inceleyin.",
    seoTitle: "Ambalaj Ürünleri | Cedid Ambalaj",
    seoDescription:
      "Koli ve karton kutular, streç film, koli bantları, çemberleme ürünleri, balonlu naylon ve poşet çeşitlerini Cedid Ambalaj kataloğunda inceleyin.",
    icon: "package",
    accent: "bordo",
    layout: "grid",
    groups: [
      { slug: "koli-ve-kutular", name: "Koli ve Kutular", description: "Sevkiyat ve depolama için karton ambalajlar." },
      { slug: "strec-filmler", name: "Streç Filmler", description: "Palet ve yük sabitleme için streç film çeşitleri." },
      { slug: "bantlar", name: "Bantlar", description: "Koli kapama ve paketleme bantları." },
      { slug: "cemberleme", name: "Çemberleme", description: "Yüklerin bağlanması için çember ve tokalar." },
      { slug: "koruyucu-ambalaj", name: "Koruyucu Ambalaj ve Paketleme", description: "Ürünleri taşıma sırasında koruyan malzemeler." },
      { slug: "poset-ve-torbalar", name: "Poşet ve Torbalar", description: "Poşet, torba ve gıda ambalajına uygun ürünler." },
    ],
  },
  {
    slug: "temizlik",
    name: "Temizlik Ürünleri",
    cardDescription: "Temizlik kimyasalları, hijyen, ekipman ve kağıt ürünleri.",
    description:
      "İşletmelerin genel temizlik, hijyen ve bakım ihtiyaçlarına yönelik ürün gruplarını keşfedin.",
    seoTitle: "Temizlik Ürünleri | Cedid Ambalaj",
    seoDescription:
      "Genel temizlik ürünleri, el hijyeni, dezenfeksiyon, temizlik ekipmanları, çöp kovaları ve kağıt ürünlerini Cedid Ambalaj kataloğunda inceleyin.",
    icon: "spray",
    accent: "navy",
    layout: "grid",
    groups: [
      { slug: "temizlik-ve-hijyen", name: "Temizlik ve Hijyen Ürünleri", description: "Yüzey, bulaşık, çamaşır ve el hijyeni ürünleri." },
      { slug: "temizlik-ekipmanlari", name: "Temizlik Malzemeleri ve Ekipmanları", description: "Bez, sünger, fırça, mop, kova ve temizlik arabaları." },
      { slug: "atik-yonetimi", name: "Çöp ve Atık Kovaları", description: "İç ve dış alanlar için atık toplama ürünleri." },
      { slug: "kagit-urunleri", name: "Kağıt Ürünleri", description: "Kağıt havlu, tuvalet kağıdı ve peçete." },
    ],
  },
  {
    slug: "ofis-kirtasiye",
    name: "Ofis ve Kırtasiye Ürünleri",
    cardDescription: "Kağıt, kalem, dosya, klasör ve ofis sarf ürünleri.",
    description:
      "Ofislerin, kurumların ve çalışma alanlarının günlük ihtiyaçlarına yönelik kırtasiye ve ofis ürünlerini inceleyin.",
    seoTitle: "Ofis ve Kırtasiye Ürünleri | Cedid Ambalaj",
    seoDescription:
      "A4 fotokopi kağıdı, kalemler, defterler, dosya ve klasörler, zımba ve ofis sarf ürünlerini Cedid Ambalaj kataloğunda inceleyin.",
    icon: "pen",
    accent: "bordo",
    layout: "list",
    groups: [
      { slug: "kagit-urunleri", name: "Kağıt ve Not Ürünleri", description: "Fotokopi kağıdı, defter, bloknot ve zarflar." },
      { slug: "yazim-gerecleri", name: "Yazım Gereçleri", description: "Tükenmez, kurşun ve fosforlu kalemler." },
      { slug: "dosyalama", name: "Dosyalama ve Arşiv", description: "Dosya, klasör ve poşet dosyalar." },
      { slug: "masaustu", name: "Masaüstü Gereçleri", description: "Zımba, makas, ataş, bant ve düzenleyiciler." },
      { slug: "sarf", name: "Ofis ve Yazıcı Sarf Malzemeleri", description: "Günlük ofis kullanımı için sarf ürünleri." },
    ],
  },
  {
    slug: "gida",
    name: "Gıda Ürünleri",
    cardDescription: "Çay, kahve ve şeker ürün grupları.",
    description:
      "Ofis, fabrika, restoran ve diğer işletmelerin temel içecek ve ikram ihtiyaçları için ürün gruplarımızı inceleyin.",
    seoTitle: "Gıda Ürünleri: Çay, Kahve ve Şeker | Cedid Ambalaj",
    seoDescription:
      "İşletmelerin içecek ve ikram ihtiyaçları için çay, kahve ve şeker ürün gruplarını Cedid Ambalaj kataloğunda inceleyin.",
    icon: "coffee",
    accent: "navy",
    layout: "groups",
    groups: [
      { slug: "cay", name: "Çay", description: "Dökme ve poşet çay türleri; ofis, kurum ve işletme ikramı için." },
      { slug: "kahve", name: "Kahve", description: "Türk kahvesi, filtre kahve, hazır kahve ve çekirdek kahve türleri." },
      { slug: "seker", name: "Şeker", description: "Çay ve kahve servisi için küp ve toz şeker." },
    ],
  },
];

type ProductInput = Omit<Product, "id" | "category">;

function defineProducts(category: CategorySlug, items: ProductInput[]): Product[] {
  return items.map((item) => ({ ...item, category, id: `${category}-${item.slug}` }));
}

const ambalaj = defineProducts("ambalaj", [
  {
    slug: "koli-ve-karton-kutular",
    name: "Koli ve Karton Kutular",
    group: "koli-ve-kutular",
    shortDescription: "Ürünlerin paketlenmesi, sevkiyatı ve depolanması için karton ambalajlar.",
    description:
      "Koli ve karton kutular, ürünlerin düzenli biçimde paketlenmesi, taşınması ve depolanması için kullanılan temel ambalaj ürünleridir. Farklı ürün türleri ve sevkiyat ihtiyaçları için uygun kutu seçenekleri hakkında bilgi alabilirsiniz.",
  },
  {
    slug: "palet-strec-filmi",
    name: "Palet Streç Filmi",
    group: "strec-filmler",
    shortDescription: "Paletli yüklerin sarılması ve sabitlenmesi için streç film.",
    description:
      "Palet streç filmi, palet üzerindeki kolilerin ve ürünlerin bir arada tutulması, tozdan ve nemden korunması için kullanılır. Depolama ve sevkiyat sırasında yükün dağılmasını önlemeye yardımcı olur.",
  },
  {
    slug: "el-tipi-strec-film",
    name: "El Tipi Streç Film",
    group: "strec-filmler",
    shortDescription: "Elle sarım yapılan paketleme işlemleri için streç film.",
    description:
      "El tipi streç film, makine kullanılmadan elle yapılan sarım işlemleri için tercih edilir. Daha küçük hacimli yüklerin ve tekil ürünlerin paketlenmesinde kullanılabilir.",
  },
  {
    slug: "makine-tipi-strec-film",
    name: "Makine Tipi Streç Film",
    group: "strec-filmler",
    shortDescription: "Streç sarma makineleriyle kullanılan streç film.",
    description:
      "Makine tipi streç film, palet sarma makinelerinde kullanılmak üzere hazırlanan streç film türüdür. Yoğun paketleme yapılan üretim ve lojistik alanlarında düzenli sarım sağlar.",
  },
  {
    slug: "balonlu-naylon",
    name: "Balonlu Naylon",
    group: "koruyucu-ambalaj",
    shortDescription: "Kırılabilir ürünleri darbelere karşı koruyan ambalaj malzemesi.",
    description:
      "Balonlu naylon, taşıma ve depolama sırasında ürünleri darbe ve çizilmelere karşı korumak için kullanılır. Kırılabilir ve hassas ürünlerin paketlenmesinde yaygın olarak tercih edilir.",
  },
  {
    slug: "bant-cesitleri",
    name: "Bant Çeşitleri",
    group: "bantlar",
    shortDescription: "Paketleme ve genel kullanım için farklı bant türleri.",
    description:
      "Bant çeşitleri; koli kapama, etiketleme, işaretleme ve genel paketleme işlemlerinde kullanılan farklı yapışkan bant türlerini kapsar. İhtiyacınıza uygun bant türü hakkında bilgi alabilirsiniz.",
  },
  {
    slug: "koli-bantlari",
    name: "Koli Bantları",
    group: "bantlar",
    shortDescription: "Kolilerin kapatılması ve sevkiyata hazırlanması için bantlar.",
    description:
      "Koli bantları, karton kutuların güvenli şekilde kapatılması ve sevkiyata hazırlanması için kullanılır. Bant kesme aparatlarıyla birlikte hızlı paketleme imkânı sağlar.",
  },
  {
    slug: "ambalaj-bantlari",
    name: "Ambalaj Bantları",
    group: "bantlar",
    shortDescription: "Paketleme hatlarında ve depolarda kullanılan ambalaj bantları.",
    description:
      "Ambalaj bantları, paketleme, işaretleme ve ürün gruplarının bir arada tutulması gibi farklı ambalaj işlemlerinde kullanılan bant ürünleridir.",
  },
  {
    slug: "cemberleme-urunleri",
    name: "Çemberleme Ürünleri",
    group: "cemberleme",
    shortDescription: "Yüklerin ve kolilerin bağlanması için çemberleme malzemeleri.",
    description:
      "Çemberleme ürünleri, koli ve paletli yüklerin bir arada tutulması ve taşıma sırasında sabit kalması için kullanılır. Çember ve toka seçenekleri birlikte değerlendirilebilir.",
  },
  {
    slug: "plastik-cember",
    name: "Plastik Çember",
    group: "cemberleme",
    shortDescription: "Koli ve hafif yüklerin bağlanmasında kullanılan plastik çember.",
    description:
      "Plastik çember, kolilerin ve hafif-orta ağırlıktaki yüklerin bağlanmasında kullanılan çemberleme malzemesidir. Elle veya çemberleme makineleriyle uygulanabilir.",
  },
  {
    slug: "polyester-cember",
    name: "Polyester Çember",
    group: "cemberleme",
    shortDescription: "Ağır yüklerin sabitlenmesi için polyester çember.",
    description:
      "Polyester çember, daha ağır ve hacimli yüklerin sabitlenmesinde tercih edilen çemberleme malzemesidir. Paletli sevkiyatlarda yükün bir arada kalmasına yardımcı olur.",
  },
  {
    slug: "cember-tokalari",
    name: "Çember Tokaları",
    group: "cemberleme",
    shortDescription: "Çemberleme işlemlerinde çemberin sabitlenmesi için tokalar.",
    description:
      "Çember tokaları, çemberin uçlarının birleştirilerek sabitlenmesini sağlar. Kullanılan çember türüne uygun toka seçimi için bilgi alabilirsiniz.",
  },
  {
    slug: "ambalaj-kagitlari",
    name: "Ambalaj Kâğıtları",
    group: "koruyucu-ambalaj",
    shortDescription: "Sarma, dolgu ve paketleme için ambalaj kâğıtları.",
    description:
      "Ambalaj kâğıtları; ürünlerin sarılması, koli içi dolgu ve yüzey koruması gibi paketleme işlemlerinde kullanılır.",
  },
  {
    slug: "paketleme-urunleri",
    name: "Paketleme Ürünleri",
    group: "koruyucu-ambalaj",
    shortDescription: "Paketleme masası ve sevkiyat hazırlığı için yardımcı ürünler.",
    description:
      "Paketleme ürünleri, siparişlerin ve sevkiyatların hazırlanmasında kullanılan yardımcı malzemeleri kapsar. Koli, bant ve koruyucu malzemelerle birlikte düzenli bir paketleme süreci oluşturulabilir.",
  },
  {
    slug: "paletleme-malzemeleri",
    name: "Paletleme Malzemeleri",
    group: "koruyucu-ambalaj",
    shortDescription: "Yüklerin palet üzerinde düzenlenmesi ve taşınması için malzemeler.",
    description:
      "Paletleme malzemeleri, ürünlerin palet üzerinde düzenli şekilde istiflenmesi, korunması ve taşınması için kullanılan ürünleri kapsar.",
  },
  {
    slug: "koruyucu-ambalaj-urunleri",
    name: "Koruyucu Ambalaj Ürünleri",
    group: "koruyucu-ambalaj",
    shortDescription: "Taşıma ve depolamada ürün yüzeylerini koruyan malzemeler.",
    description:
      "Koruyucu ambalaj ürünleri, ürünlerin taşıma ve depolama sırasında darbe, toz ve çizilmelere karşı korunmasına yardımcı olur.",
  },
  {
    slug: "poset-cesitleri",
    name: "Poşet Çeşitleri",
    group: "poset-ve-torbalar",
    shortDescription: "Farklı kullanım alanları için poşet türleri.",
    description:
      "Poşet çeşitleri; ürün taşıma, paketleme ve saklama gibi farklı ihtiyaçlar için kullanılan poşet türlerini kapsar. Kullanım amacınıza uygun seçenekler hakkında bilgi alabilirsiniz.",
  },
  {
    slug: "naylon-torbalar",
    name: "Naylon Torbalar",
    group: "poset-ve-torbalar",
    shortDescription: "Taşıma ve saklama için naylon torbalar.",
    description:
      "Naylon torbalar, ürünlerin taşınması, ayrıştırılması ve saklanması için kullanılan ambalaj ürünleridir.",
  },
  {
    slug: "gida-ambalajina-uygun-urunler",
    name: "Gıda Ambalajına Uygun Ürünler",
    group: "poset-ve-torbalar",
    shortDescription: "Gıda işletmelerinin paketleme ihtiyaçlarına yönelik ambalajlar.",
    description:
      "Gıda ambalajına uygun ürünler, restoran, kafe ve gıda işletmelerinin paket servis ve saklama ihtiyaçlarına yönelik ambalaj ürünlerini kapsar. Ürünlerin gıda ile temas uygunluğu hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
  },
]);

const temizlik = defineProducts("temizlik", [
  {
    slug: "genel-temizlik-urunleri",
    name: "Genel Temizlik Ürünleri",
    group: "temizlik-ve-hijyen",
    shortDescription: "İşletmelerin günlük temizlik ihtiyaçları için ürünler.",
    description:
      "Genel temizlik ürünleri, ofis, üretim alanı, mutfak ve ortak kullanım alanlarının günlük temizliğinde kullanılan ürün gruplarını kapsar.",
  },
  {
    slug: "yuzey-temizleyiciler",
    name: "Yüzey Temizleyiciler",
    group: "temizlik-ve-hijyen",
    shortDescription: "Masa, tezgâh ve farklı yüzeyler için temizleyiciler.",
    description:
      "Yüzey temizleyiciler; masa, tezgâh, cam ve benzeri yüzeylerin temizliğinde kullanılır. Yüzey türüne uygun ürün seçimi için bilgi alabilirsiniz.",
  },
  {
    slug: "bulasik-yikama-urunleri",
    name: "Bulaşık Yıkama Ürünleri",
    group: "temizlik-ve-hijyen",
    shortDescription: "Elde ve makinede bulaşık yıkama için ürünler.",
    description:
      "Bulaşık yıkama ürünleri, mutfaklarda elde veya makinede yapılan bulaşık yıkama işlemleri için kullanılan ürün gruplarını kapsar.",
  },
  {
    slug: "camasir-temizlik-urunleri",
    name: "Çamaşır Temizlik Ürünleri",
    group: "temizlik-ve-hijyen",
    shortDescription: "Tekstil ürünlerinin yıkanması için temizlik ürünleri.",
    description:
      "Çamaşır temizlik ürünleri, iş kıyafetleri, havlu ve diğer tekstil ürünlerinin yıkanmasında kullanılan ürün gruplarını kapsar.",
  },
  {
    slug: "sivi-sabunlar",
    name: "Sıvı Sabunlar",
    group: "temizlik-ve-hijyen",
    shortDescription: "Lavabo ve ortak alanlar için sıvı sabunlar.",
    description:
      "Sıvı sabunlar, lavabolar, mutfaklar ve ortak kullanım alanlarında el temizliği için kullanılır. Dispenserlerle birlikte kullanılabilir.",
  },
  {
    slug: "el-hijyeni-urunleri",
    name: "El Hijyeni Ürünleri",
    group: "temizlik-ve-hijyen",
    shortDescription: "Çalışanlar ve ziyaretçiler için el hijyeni ürünleri.",
    description:
      "El hijyeni ürünleri, işletmelerde çalışanların ve ziyaretçilerin el temizliğini desteklemek için kullanılan ürünleri kapsar.",
  },
  {
    slug: "dezenfeksiyon-urunleri",
    name: "Dezenfeksiyon Ürünleri",
    group: "temizlik-ve-hijyen",
    shortDescription: "Yüzey ve alan hijyeni için dezenfeksiyon ürünleri.",
    description:
      "Dezenfeksiyon ürünleri, yüzeylerin ve ortak kullanım alanlarının hijyenine yönelik ürün gruplarını kapsar. Ürünlerin kullanım alanları ve uygunlukları hakkında bilgi alabilirsiniz.",
  },
  {
    slug: "tuvalet-ve-banyo-temizlik-urunleri",
    name: "Tuvalet ve Banyo Temizlik Ürünleri",
    group: "temizlik-ve-hijyen",
    shortDescription: "Islak alanların temizliği için ürünler.",
    description:
      "Tuvalet ve banyo temizlik ürünleri, ıslak alanların ve sıhhi tesisatların düzenli temizliği için kullanılan ürün gruplarını kapsar.",
  },
  {
    slug: "temizlik-bezleri",
    name: "Temizlik Bezleri",
    group: "temizlik-ekipmanlari",
    shortDescription: "Yüzey silme ve kurulama için temizlik bezleri.",
    description:
      "Temizlik bezleri, yüzeylerin silinmesi, kurulanması ve parlatılması için kullanılır. Farklı alanlar için ayrı bez kullanımı hijyen düzenine katkı sağlar.",
  },
  {
    slug: "sungerler",
    name: "Süngerler",
    group: "temizlik-ekipmanlari",
    shortDescription: "Bulaşık ve yüzey temizliği için süngerler.",
    description:
      "Süngerler, bulaşık yıkama ve yüzey temizliği gibi günlük temizlik işlerinde kullanılan temel temizlik malzemeleridir.",
  },
  {
    slug: "fircalar",
    name: "Fırçalar",
    group: "temizlik-ekipmanlari",
    shortDescription: "Farklı temizlik işleri için fırça çeşitleri.",
    description:
      "Fırçalar; zemin, yüzey, ıslak alan ve ekipman temizliği gibi farklı temizlik işlerinde kullanılan ekipmanlardır.",
  },
  {
    slug: "mop-ve-paspaslar",
    name: "Mop ve Paspaslar",
    group: "temizlik-ekipmanlari",
    shortDescription: "Zemin temizliği için mop ve paspas ürünleri.",
    description:
      "Mop ve paspaslar, geniş zeminlerin ve koridorların temizliğinde kullanılır. Temizlik kovaları ve arabalarıyla birlikte kullanılabilir.",
  },
  {
    slug: "temizlik-kovalari",
    name: "Temizlik Kovaları",
    group: "temizlik-ekipmanlari",
    shortDescription: "Zemin temizliğinde kullanılan kovalar.",
    description:
      "Temizlik kovaları, mop ve paspaslarla yapılan zemin temizliğinde su ve temizlik solüsyonunun taşınması için kullanılır.",
  },
  {
    slug: "temizlik-arabalari",
    name: "Temizlik Arabaları",
    group: "temizlik-ekipmanlari",
    shortDescription: "Temizlik malzemelerinin taşınması için arabalar.",
    description:
      "Temizlik arabaları, temizlik personelinin malzeme ve ekipmanları tek noktada taşımasını sağlar. Otel, hastane, ofis ve büyük işletmelerde tercih edilir.",
  },
  {
    slug: "cop-kovalari",
    name: "Çöp Kovaları",
    group: "atik-yonetimi",
    shortDescription: "İç ve dış alanlar için çöp kovaları.",
    description:
      "Çöp kovaları, ofis, mutfak, koridor ve ortak alanlarda atıkların düzenli şekilde toplanması için kullanılır.",
  },
  {
    slug: "atik-kovalari",
    name: "Atık Kovaları",
    group: "atik-yonetimi",
    shortDescription: "Atıkların ayrıştırılarak toplanması için kovalar.",
    description:
      "Atık kovaları, farklı atık türlerinin ayrı toplanmasına yardımcı olur. İşletmelerin atık ayrıştırma düzenine uygun seçenekler hakkında bilgi alabilirsiniz.",
  },
  {
    slug: "temizlik-ekipmanlari",
    name: "Temizlik Ekipmanları",
    group: "temizlik-ekipmanlari",
    shortDescription: "Profesyonel temizlik için yardımcı ekipmanlar.",
    description:
      "Temizlik ekipmanları, işletmelerdeki düzenli temizlik çalışmalarında kullanılan yardımcı ekipman ve aksesuarları kapsar.",
  },
  {
    slug: "kagit-havlular",
    name: "Kağıt Havlular",
    group: "kagit-urunleri",
    shortDescription: "Mutfak, lavabo ve genel kullanım için kağıt havlular.",
    description:
      "Kağıt havlular; mutfak, lavabo ve genel temizlik alanlarında el ve yüzey kurulama için kullanılır.",
  },
  {
    slug: "tuvalet-kagitlari",
    name: "Tuvalet Kağıtları",
    group: "kagit-urunleri",
    shortDescription: "İşletme ve ortak alan tuvaletleri için tuvalet kağıtları.",
    description:
      "Tuvalet kağıtları, işletmelerin ve ortak kullanım alanlarının günlük hijyen ihtiyaçları için kullanılan kağıt ürünleridir.",
  },
  {
    slug: "peceteler",
    name: "Peçeteler",
    group: "kagit-urunleri",
    shortDescription: "Servis ve ikram alanları için peçeteler.",
    description:
      "Peçeteler, restoran, kafe, ofis ve ikram alanlarında servis sırasında kullanılan kağıt ürünleridir.",
  },
  {
    slug: "endustriyel-temizlik-urunleri",
    name: "Endüstriyel Temizlik Ürünleri",
    group: "temizlik-ve-hijyen",
    shortDescription: "Üretim ve geniş alanların temizliğine yönelik ürünler.",
    description:
      "Endüstriyel temizlik ürünleri, fabrika, depo ve geniş kullanım alanlarının temizliğine yönelik ürün gruplarını kapsar. Alanınıza uygun ürünler hakkında bilgi alabilirsiniz.",
  },
]);

const ofisKirtasiye = defineProducts("ofis-kirtasiye", [
  {
    slug: "a4-fotokopi-kagidi",
    name: "A4 Fotokopi Kağıdı",
    group: "kagit-urunleri",
    shortDescription: "Yazıcı ve fotokopi makineleri için A4 kağıt.",
    description:
      "A4 fotokopi kağıdı, ofislerde ve kurumlarda yazıcı ve fotokopi makinelerinde günlük olarak kullanılan temel kırtasiye ürünüdür.",
  },
  {
    slug: "fotokopi-ve-yazici-kagitlari",
    name: "Fotokopi ve Yazıcı Kağıtları",
    group: "kagit-urunleri",
    shortDescription: "Farklı baskı ihtiyaçları için kağıt ürünleri.",
    description:
      "Fotokopi ve yazıcı kağıtları, ofislerin farklı baskı ve çoğaltma ihtiyaçlarına yönelik kağıt ürünlerini kapsar.",
  },
  {
    slug: "kalemler",
    name: "Kalemler",
    group: "yazim-gerecleri",
    shortDescription: "Ofis ve kurumlar için kalem çeşitleri.",
    description:
      "Kalemler, ofis, okul ve kurumların günlük yazım ihtiyaçları için kullanılan farklı kalem türlerini kapsar.",
  },
  {
    slug: "tukenmez-kalemler",
    name: "Tükenmez Kalemler",
    group: "yazim-gerecleri",
    shortDescription: "Günlük yazım için tükenmez kalemler.",
    description:
      "Tükenmez kalemler, ofislerde ve kurumlarda en sık kullanılan yazım gereçlerindendir.",
  },
  {
    slug: "kursun-kalemler",
    name: "Kurşun Kalemler",
    group: "yazim-gerecleri",
    shortDescription: "Not alma, çizim ve okul kullanımı için kurşun kalemler.",
    description:
      "Kurşun kalemler; not alma, çizim ve eğitim alanlarında kullanılan yazım gereçleridir.",
  },
  {
    slug: "fosforlu-kalemler",
    name: "Fosforlu Kalemler",
    group: "yazim-gerecleri",
    shortDescription: "Metin işaretleme için fosforlu kalemler.",
    description:
      "Fosforlu kalemler, belge ve notlarda önemli bölümlerin işaretlenmesi için kullanılır.",
  },
  {
    slug: "defterler",
    name: "Defterler",
    group: "kagit-urunleri",
    shortDescription: "Not alma ve kayıt tutma için defterler.",
    description:
      "Defterler, toplantı notları, kayıtlar ve günlük çalışma notları için kullanılan kırtasiye ürünleridir.",
  },
  {
    slug: "bloknotlar",
    name: "Bloknotlar",
    group: "kagit-urunleri",
    shortDescription: "Hızlı not alma için bloknotlar.",
    description:
      "Bloknotlar, masa başında ve toplantılarda hızlı not almak için kullanılan pratik kağıt ürünleridir.",
  },
  {
    slug: "dosyalar",
    name: "Dosyalar",
    group: "dosyalama",
    shortDescription: "Evrakların düzenlenmesi için dosyalar.",
    description:
      "Dosyalar, belgelerin düzenli şekilde saklanması, taşınması ve sınıflandırılması için kullanılır.",
  },
  {
    slug: "klasorler",
    name: "Klasörler",
    group: "dosyalama",
    shortDescription: "Arşivleme ve evrak saklama için klasörler.",
    description:
      "Klasörler, evrakların arşivlenmesi ve raflarda düzenli şekilde saklanması için kullanılan ofis ürünleridir.",
  },
  {
    slug: "poset-dosyalar",
    name: "Poşet Dosyalar",
    group: "dosyalama",
    shortDescription: "Belgelerin korunması için poşet dosyalar.",
    description:
      "Poşet dosyalar, belgelerin korunarak klasörlerde saklanması veya taşınması için kullanılır.",
  },
  {
    slug: "zarf-ve-evrak-urunleri",
    name: "Zarf ve Evrak Ürünleri",
    group: "kagit-urunleri",
    shortDescription: "Yazışma ve evrak gönderimi için zarflar.",
    description:
      "Zarf ve evrak ürünleri, resmi yazışmalar ve belge gönderimleri için kullanılan kırtasiye ürünlerini kapsar.",
  },
  {
    slug: "yapiskan-not-kagitlari",
    name: "Yapışkan Not Kağıtları",
    group: "kagit-urunleri",
    shortDescription: "Hatırlatma ve işaretleme için yapışkan notlar.",
    description:
      "Yapışkan not kağıtları, kısa notlar, hatırlatmalar ve belge işaretleme için kullanılır.",
  },
  {
    slug: "bant-ve-yapistiricilar",
    name: "Bant ve Yapıştırıcılar",
    group: "masaustu",
    shortDescription: "Ofis kullanımı için bant ve yapıştırıcılar.",
    description:
      "Bant ve yapıştırıcılar, kağıt ve evrak işlerinde, dosyalama ve günlük ofis kullanımında ihtiyaç duyulan ürünlerdir.",
  },
  {
    slug: "makaslar",
    name: "Makaslar",
    group: "masaustu",
    shortDescription: "Ofis ve kırtasiye kullanımı için makaslar.",
    description:
      "Makaslar, kağıt kesme ve paket açma gibi günlük ofis işlerinde kullanılan masaüstü gereçleridir.",
  },
  {
    slug: "zimbalar-ve-zimba-telleri",
    name: "Zımbalar ve Zımba Telleri",
    group: "masaustu",
    shortDescription: "Evrak birleştirme için zımba ve teller.",
    description:
      "Zımbalar ve zımba telleri, belgelerin bir arada tutulması için kullanılan temel ofis ürünleridir.",
  },
  {
    slug: "atas-ve-raptiyeler",
    name: "Ataş ve Raptiyeler",
    group: "masaustu",
    shortDescription: "Belge tutturma ve pano kullanımı için ürünler.",
    description:
      "Ataşlar belgelerin geçici olarak bir arada tutulması, raptiyeler ise pano ve duyuru alanlarında kullanılır.",
  },
  {
    slug: "masaustu-duzenleyiciler",
    name: "Masaüstü Düzenleyiciler",
    group: "masaustu",
    shortDescription: "Çalışma alanını düzenli tutan masaüstü ürünleri.",
    description:
      "Masaüstü düzenleyiciler, kalem, not ve evrakların çalışma masasında düzenli şekilde tutulmasına yardımcı olur.",
  },
  {
    slug: "ofis-sarf-urunleri",
    name: "Ofis Sarf Ürünleri",
    group: "sarf",
    shortDescription: "Ofislerin günlük kullanımı için sarf ürünleri.",
    description:
      "Ofis sarf ürünleri, çalışma alanlarında düzenli olarak tüketilen ve yenilenen kırtasiye ürünlerini kapsar.",
  },
  {
    slug: "yazici-sarf-malzemeleri",
    name: "Yazıcı Sarf Malzemeleri",
    group: "sarf",
    shortDescription: "Yazıcı ve fotokopi makineleri için sarf malzemeleri.",
    description:
      "Yazıcı sarf malzemeleri, ofislerde kullanılan yazıcı ve fotokopi makinelerinin baskı için ihtiyaç duyduğu sarf ürünlerini kapsar. Cihazınıza uygun ürün için bilgi alabilirsiniz.",
  },
]);

const gida = defineProducts("gida", [
  {
    slug: "dokme-cay",
    name: "Dökme Çay",
    group: "cay",
    shortDescription: "Demlik kullanımı için dökme siyah çay.",
    description:
      "Dökme çay, ofis, fabrika ve işletmelerde demlikte hazırlanan çay servisi için kullanılır.",
  },
  {
    slug: "demlik-poset-cay",
    name: "Demlik Poşet Çay",
    group: "cay",
    shortDescription: "Demlikte pratik çay hazırlığı için poşet çay.",
    description:
      "Demlik poşet çay, demlikte ölçülü ve pratik çay hazırlamak için kullanılan poşet çay türüdür.",
  },
  {
    slug: "bardak-poset-cay",
    name: "Bardak Poşet Çay",
    group: "cay",
    shortDescription: "Tek kullanımlık bardak poşet çay.",
    description:
      "Bardak poşet çay, toplantı, ikram ve self servis alanlarında tek bardak çay hazırlamak için kullanılır.",
  },
  {
    slug: "turk-kahvesi",
    name: "Türk Kahvesi",
    group: "kahve",
    shortDescription: "Geleneksel ikram için Türk kahvesi.",
    description:
      "Türk kahvesi, misafir ikramı ve geleneksel kahve servisi için tercih edilen kahve türüdür.",
  },
  {
    slug: "filtre-kahve",
    name: "Filtre Kahve",
    group: "kahve",
    shortDescription: "Filtre kahve makineleri için öğütülmüş kahve.",
    description:
      "Filtre kahve, kahve makinelerinde hazırlanan servisler için kullanılan öğütülmüş kahve türüdür.",
  },
  {
    slug: "hazir-kahve",
    name: "Hazır Kahve",
    group: "kahve",
    shortDescription: "Pratik servis için hazır kahve.",
    description:
      "Hazır kahve, sıcak su ile hızlıca hazırlanabilen ve self servis alanlarında tercih edilen kahve türüdür.",
  },
  {
    slug: "cekirdek-kahve",
    name: "Çekirdek Kahve",
    group: "kahve",
    shortDescription: "Kahve makineleri için çekirdek kahve.",
    description:
      "Çekirdek kahve, öğütücülü kahve makinelerinde taze öğütülerek kullanılan kahve türüdür.",
  },
  {
    slug: "kup-seker",
    name: "Küp Şeker",
    group: "seker",
    shortDescription: "Çay ve kahve servisi için küp şeker.",
    description:
      "Küp şeker, çay ve kahve servisinde ölçülü kullanım için tercih edilen şeker türüdür.",
  },
  {
    slug: "toz-seker",
    name: "Toz Şeker",
    group: "seker",
    shortDescription: "Mutfak ve ikram alanları için toz şeker.",
    description:
      "Toz şeker, mutfak, ikram ve servis alanlarında kullanılan temel şeker türüdür.",
  },
]);

export const products: Product[] = [...ambalaj, ...temizlik, ...ofisKirtasiye, ...gida];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: CategorySlug): Product[] {
  return products.filter((product) => product.category === slug);
}

export function getProduct(category: string, slug: string): Product | undefined {
  return products.find((product) => product.category === category && product.slug === slug);
}

export function getProductsByGroup(category: CategorySlug, group: string): Product[] {
  return products.filter((product) => product.category === category && product.group === group);
}

export function categoryHref(slug: CategorySlug): string {
  return `/urunlerimiz/${slug}`;
}

export function productHref(product: Pick<Product, "category" | "slug">): string {
  return `/urunlerimiz/${product.category}/${product.slug}`;
}

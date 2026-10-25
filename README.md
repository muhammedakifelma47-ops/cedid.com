# Cedid Ambalaj web sitesi

Cedid Ambalaj Tic. Ltd. Şti. için kurumsal ürün kataloğu ve firma tanıtım sitesi. Astro ve Tailwind CSS ile
geliştirilmiş statik bir sitedir. E-ticaret, sepet, ödeme, üyelik veya form bulunmaz. Ziyaretçiler ürün gruplarını
inceler ve firmaya telefon, e-posta ya da Instagram üzerinden ulaşır.

## Gereksinimler

- Node.js **22.23.4 veya üstü** (Astro 7 bu sürümü zorunlu tutar)
- pnpm 11 (`packageManager` alanında tanımlı). pnpm kurulu değilse `corepack pnpm ...` ile çalıştırılabilir.

## Kurulum ve çalıştırma

```sh
pnpm install
pnpm dev        # http://localhost:4321
```

## Kontrol ve derleme

```sh
pnpm check      # Astro ve TypeScript kontrolleri
pnpm build      # dist/ klasörüne statik site üretir
pnpm preview    # derlenmiş siteyi yerelde sunar
```

Canonical, Open Graph ve sitemap bağlantıları varsayılan olarak `https://cedid.com.tr` alan adını kullanır.
Farklı bir alan adı için derlemeden önce `SITE_URL` ortam değişkenini ayarlayın.

## Sayfalar

| Adres | İçerik |
| --- | --- |
| `/` | Ana sayfa (referans tasarıma göre) |
| `/urunlerimiz` | Dört ürün grubunun katalog giriş sayfası |
| `/urunlerimiz/ambalaj`, `/temizlik`, `/ofis-kirtasiye`, `/gida` | Kategori sayfaları |
| `/urunlerimiz/<kategori>/<urun>` | Paylaşılabilir ürün detay sayfaları |
| `/fabrikalar-icin`, `/restoranlar-icin` | Sektörel tanıtım sayfaları |
| `/hakkimizda`, `/e-katalog`, `/iletisim`, `/gizlilik` | Kurumsal sayfalar |
| `/404`, `/robots.txt`, `/sitemap.xml` | Hata sayfası ve arama motoru dosyaları |

## Proje yapısı

- `src/data/site.ts`: firma bilgileri, telefonlar, e-posta, Instagram, menü, sektörler ve avantajlar
- `src/data/catalog.ts`: kategoriler, alt gruplar ve tüm ürünler (tek veri kaynağı)
- `src/lib/images.ts`: ürün, kategori ve sahne görsellerinin eşleştirilmesi; logo, mağaza fotoğrafı ve PDF tespiti
- `src/components/`: Header, TopBar, Footer, ProductCard, CategoryNavigation, Breadcrumbs ve diğer bileşenler
- `src/components/home/`: ana sayfa bölümleri
- `src/pages/`: sayfa yönlendirmeleri
- `src/assets/images/`: derleme sırasında optimize edilen görseller (WebP, duyarlı boyutlar)
- `docs/gorsel-kaynaklari.tsv`: temsili görsellerin kaynak listesi

## İçerik güncelleme

**Yeni ürün eklemek:** `src/data/catalog.ts` içinde ilgili kategorinin listesine bir kayıt ekleyin. Ürün sayfası,
kategori listesi ve sitemap otomatik güncellenir. Doğrulanmış teknik bilgiler `specifications` alanına yazılırsa ürün
sayfasında tablo olarak görünür.

**Ürün görseli eklemek veya değiştirmek:** görseli `src/assets/images/products/<kategori>/<urun-slug>.jpg`
(veya `.png`, `.webp`) olarak kaydedin. Görseli olmayan ürünlerde kategori ikonlu bir yedek alan gösterilir.

**İletişim bilgileri ve adres:** `src/data/site.ts` dosyasındaki `companyInfo` alanından güncellenir. Adres alanı
boştur; doğrulanmış adres yazıldığında iletişim, hakkımızda ve footer bölümlerinde otomatik görünür.

## Firma tarafından eklenecek dosyalar

Aşağıdaki dosyalar eklendiğinde bir sonraki derlemede otomatik olarak kullanılır. Kodda değişiklik gerekmez.

| Dosya | Kullanıldığı yer |
| --- | --- |
| `public/images/brand/cedid-logo.svg` (veya `.png`, `.webp`) | Navbar ve genel logo. Dosya yokken metin yer tutucu görünür. |
| `public/images/brand/cedid-logo-beyaz.svg` (isteğe bağlı) | Footer ve koyu zeminler. Yoksa normal logo beyaz kutu içinde gösterilir. |
| `public/images/kurumsal/magaza.jpg` | Hakkımızda sayfasındaki gerçek mağaza fotoğrafı. Yoksa marka paneli gösterilir. |
| `public/katalog/cedid-e-katalog.pdf` | E-Katalog sayfasında görüntüleme, yeni sekmede açma ve indirme. Yoksa bilgilendirme gösterilir. |

## Eksik gerçek bilgi ve görseller

- **Orijinal logo dosyası** projede yoktu. Logo yeniden çizilmedi. Şu an firma adını gösteren sade bir metin yer tutucu kullanılıyor ve favicon basit bir "C" işaretidir.
- **Gerçek mağaza fotoğrafı** projede yoktu. Hakkımızda sayfası fotoğraf eklenene kadar marka panelini gösterir.
- **E-katalog PDF dosyası** yok.
- **Doğrulanmış şirket adresi** yok; adres ve harita alanı gösterilmiyor.
- **Ürün fotoğrafları** temsilidir. Unsplash lisansıyla kullanılan stok fotoğraflardır ve sitede "temsili görsel" olarak belirtilir. Kaynaklar `docs/gorsel-kaynaklari.tsv` dosyasındadır. Firmanın kendi ürün fotoğraflarıyla değiştirilmesi önerilir.
- **Görseli olmayan ürünler:** El Tipi Streç Film, Çemberleme Ürünleri, Plastik Çember, Polyester Çember ve Çember Tokaları için uygun temsili fotoğraf bulunamadı.
- **Ürün detayları:** marka, ölçü, gramaj, stok ve fiyat bilgileri doğrulanmadığı için yazılmadı.
- **Doğrulanmamış iddialar kullanılmadı:** referans tasarımdaki "30+ yıl", "1000+ müşteri", "5000+ ürün" ve "7/24 destek" istatistikleri, adres ve "Fiyat Talep Et" alanları bilinçli olarak çıkarıldı.
- **Hukuki metinler:** `/gizlilik` sayfası yalnızca sitenin teknik işleyişini anlatan bir bilgilendirmedir. Resmî KVKK aydınlatma metni firma tarafından hazırlanmalıdır. Siteye analiz veya çerez aracı eklenirse bu sayfa güncellenmelidir.
- **Alan adı:** `https://cedid.com.tr` varsayıldı.

## Notlar

- Kök dizindeki `index.html` önceki "Çok yakında" sayfasıdır. Astro derlemesi bu dosyayı kullanmaz; yayın ortamı bu dosyayı sunuyorsa `dist/` klasörüyle değiştirilmelidir.
- Roboto yazı tipi derleme sırasında indirilir ve siteyle birlikte sunulur. Ziyaretçi tarayıcısı Google sunucularına istek göndermez.

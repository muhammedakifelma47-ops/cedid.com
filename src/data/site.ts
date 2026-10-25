/**
 * Firma bilgileri, navigasyon, sektörler ve kurumsal avantajlar.
 * Sitede gösterilen tüm kurumsal metinler bu dosyadan yönetilir.
 */

export interface Phone {
  /** Ekranda gösterilen biçim */
  display: string;
  /** tel: bağlantısı için uluslararası biçim */
  href: string;
}

export const companyInfo = {
  name: "Cedid Ambalaj",
  legalName: "Cedid Ambalaj Tic. Ltd. Şti.",
  slogan: "İşletmenizin Tedarik Gücü",
  shortDescription:
    "Ambalaj, temizlik, ofis ve kırtasiye ile çay, kahve ve şeker ürün gruplarında işletmelerin tedarik ihtiyaçlarına yönelik ürünleri tek noktada bir araya getiriyoruz.",
  phones: [
    { display: "0552 799 2056", href: "tel:+905527992056" },
    { display: "0539 727 0954", href: "tel:+905397270954" },
    { display: "0530 527 0183", href: "tel:+905305270183" },
  ] satisfies Phone[],
  email: "info@cedid.com.tr",
  instagram: {
    username: "@cedidambalaj",
    url: "https://www.instagram.com/cedidambalaj/",
  },
  /**
   * Doğrulanmış adres bilgisi olmadığı için adres gösterilmez.
   * Adres doğrulandığında buraya yazılması yeterlidir; iletişim sayfası otomatik olarak gösterir.
   */
  address: null as string | null,
} as const;

export interface NavItem {
  label: string;
  href: string;
  /** Ürün kategorileri açılır menüsü */
  hasDropdown?: boolean;
}

export const navigationItems: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Ürünlerimiz", href: "/urunlerimiz", hasDropdown: true },
  { label: "Fabrikalar İçin", href: "/fabrikalar-icin" },
  { label: "Restoranlar İçin", href: "/restoranlar-icin" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "E-Katalog", href: "/e-katalog" },
  { label: "İletişim", href: "/iletisim" },
];

export const legalLinks = [{ label: "Gizlilik Bilgilendirmesi", href: "/gizlilik" }];

export type IconName =
  | "factory"
  | "utensils"
  | "landmark"
  | "hotel"
  | "building"
  | "school";

export interface Sector {
  slug: string;
  name: string;
  icon: IconName;
  description: string;
  /** Yalnızca gerçek detay sayfası olan sektörler için */
  href?: string;
}

export const sectors: Sector[] = [
  {
    slug: "fabrikalar",
    name: "Fabrikalar",
    icon: "factory",
    description:
      "Üretim, paketleme ve sevkiyat süreçlerinde kullanılan ambalaj, temizlik ve ofis ürün grupları.",
    href: "/fabrikalar-icin",
  },
  {
    slug: "restoranlar",
    name: "Restoranlar",
    icon: "utensils",
    description:
      "Paket servis ambalajları, hijyen ürünleri ve çay, kahve, şeker gibi günlük işletme ihtiyaçları.",
    href: "/restoranlar-icin",
  },
  {
    slug: "kamu-kurumlari",
    name: "Kamu Kurumları",
    icon: "landmark",
    description:
      "Kurum binalarının temizlik, kırtasiye ve ikram ihtiyaçlarına yönelik ürün grupları.",
  },
  {
    slug: "oteller",
    name: "Oteller",
    icon: "hotel",
    description:
      "Kat hizmetleri, genel alan temizliği ve misafir ikramı için kullanılan ürün grupları.",
  },
  {
    slug: "ofisler",
    name: "Ofisler",
    icon: "building",
    description:
      "Kırtasiye, kağıt ürünleri, temizlik malzemeleri ve çay-kahve köşesi ihtiyaçları.",
  },
  {
    slug: "okullar",
    name: "Okullar",
    icon: "school",
    description:
      "Eğitim kurumlarının kırtasiye, temizlik ve hijyen ihtiyaçlarına yönelik ürün grupları.",
  },
];

export interface Advantage {
  title: string;
  description: string;
  icon: "boxes" | "shield" | "truck" | "headset" | "catalog" | "phone";
}

/** Hero altındaki hizmet avantajları şeridi */
export const benefits: Advantage[] = [
  {
    title: "Geniş Ürün Yelpazesi",
    description: "İşletmelerin farklı ürün ihtiyaçları için çeşitli kategoriler.",
    icon: "boxes",
  },
  {
    title: "Güvenilir Tedarik",
    description: "İşletmelere yönelik düzenli ve profesyonel tedarik yaklaşımı.",
    icon: "shield",
  },
  {
    title: "Hızlı ve Planlı Teslimat",
    description: "İhtiyaçlara uygun teslimat planlaması.",
    icon: "truck",
  },
  {
    title: "Kurumsal Destek",
    description: "Ürün seçimi ve tedarik sürecinde iletişim desteği.",
    icon: "headset",
  },
];

/** Footer öncesi kurumsal avantajlar (doğrulanmamış istatistik yerine) */
export const companyAdvantages: Advantage[] = [
  {
    title: "Geniş Ürün Yelpazesi",
    description: "Dört ana ürün grubu tek katalogda",
    icon: "boxes",
  },
  {
    title: "Güvenilir Tedarik",
    description: "Düzenli ve profesyonel yaklaşım",
    icon: "shield",
  },
  {
    title: "Planlı Teslimat",
    description: "İhtiyaca uygun teslimat planlaması",
    icon: "truck",
  },
  {
    title: "Kurumsal İletişim",
    description: "Telefon ve e-posta ile doğrudan ulaşım",
    icon: "phone",
  },
];

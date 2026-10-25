# Proje ve kullanıcı çalışma notu

## Kullanıcıya destek

- Kullanıcı temel düzeyde kodlama bilgisine sahip ve siteyi vibe coding yaklaşımıyla geliştiriyor. Teknik açıklamaları sade, adım adım ve uygulanabilir yaz; dosya yollarını ve çalıştırılacak komutları açıkça belirt.
- Kullanıcının hedefi Cedid Ambalaj için statik bir kurumsal web sitesi. Altyapı Astro ve Tailwind CSS; backend kullanılmıyor.
- Geliştirme sunucusu proje kök dizininde `pnpm dev` ile başlatılır. `pnpm` kurulu değilse Windows PowerShell'de `corepack pnpm ...` veya `pnpm.cmd ...` seçeneklerini açıkla; hangi klasörde çalıştıracağını da belirt.
- Kullanıcı bir değişiklik istediğinde uygun dosyaları düzenle, yapılanı kısa ve anlaşılır biçimde özetle, ardından yerelde nasıl göreceğini söyle. İstenen işi kullanıcıya gereksiz teknik seçimler yüklemeden tamamla.
- Kullanıcının GitHub ve Cloudflare akışını anlaşılır tut: değişiklikler GitHub'a push edilince Cloudflare Pages/Workers dağıtımı otomatik tetiklenebilir. Kullanıcıya commit ve push'un farklı işlemler olduğunu açıkla; canlıya çıkıp çıkmadığını gerekiyorsa dağıtım durumundan doğrula.
- Kullanıcı daha önce push'unu kendisi daha sonra yapmak istediğini söyledi. Açıkça “push et” demediği sürece GitHub'a push yapma. Commit de açıkça istenmedikçe oluşturma. Önce mevcut Git değişikliklerini kontrol et ve ilgisiz kullanıcı değişikliklerini koru.

## Proje geliştirme

- Mevcut sayfa ve bileşen düzenini inceleyip ona uyum sağla; yeni bir framework veya backend ekleme.
- Kullanıcıya kod gösterirken her adımda tam olarak hangi dosyayı düzenleyeceğini ve gerekirse hangi komutu çalıştıracağını belirt.
- Her görev sonunda değişen dosyaları, yerel ön izleme adresini (genellikle `http://localhost:4321/`) ve varsa Git durumunu kısa biçimde bildir.

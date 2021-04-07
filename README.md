# CarRentalDemoProject

## Projenin backendi için https://github.com/dRcmd/CarRentalDemoProject

#### Aynı Projeyi geliştiriyoruz,
-------------------------------------------------------------------------------------------------------------------------------------------
### Engin Demiroğ Kamp Kurs 19. Gün Ödev 3

#### Yapılanlar;
* Car, Brand ve Color için filterpipe'lar oluşturuldu.
* Car sayfasına açılır kutu ile Brand ve Color detaylı arama yeteneği getirildi.
* Araba Detay sayfasına 'Kirala' butonu eklendi ve route yazıldı.
* Kiralama yeteneği kuralları ile yazıldı.
* Kredi kartı ödeme desteği getirildi.
* Tüm işlemler için Toastr desteği eklendi.

#### Ödev içeriği;
* Car, Brand, Color için pipe ile arama desteği ekleyiniz.
* Car sayfasına 2 adet açılır kutu ekleyiniz. Html-Select Option. Bu açılır kutularda sırasıyla Marka ve Renk listeleyiniz.
* Açılır kutuların yanına "Filtrele" butonu ekleyiniz.
* Filtrele butonuna tıklandığında apiden ilgili filtreye uygun arabaları listeleyiniz.
* Araba detay sayfasında "Kirala" butonu ekleyiniz. Bu aracı kiralayabilecek sistemi yazınız. Araba hali hazırda başkası tarafından seçilen tarih aralığında kiralanmışsa, kiralama işlemi yapmayınız.
* Kiralama işleminde tarihler seçildikten sonra, yeni bir sayfada kredi kartıyla ödeme desteği getiriniz.
* Ödeme işlemi için api'de sahte bir banka servisi yazınız.
* Tüm işlemler için Toastr desteği ekleyiniz.


-------------------------------------------------------------------------------------------------------------------------------------------
### Engin Demiroğ Kamp Kurs 18. Gün Ödev 1

#### Yapılanlar;
* Marka listesi oluşturuldu.
* Renk filtresi oluşturuldu.
* Kelime ile arama pipe oluşturuldu.
* Car detail sayfası oluşturuldu.

#### Ödev içeriği;
* Brand listesinde herhangi bir marka seçildiğinde, o markaya ait arabaları listeleyiniz.
* Color listesinde herhangi bir renk seçildiğinde, o renge ait arabaları listeleyiniz.
* Car listesinde bir arabaya tıklandığında o arabaya ait detay sayfası oluşturunuz. Bu sayfada bu araca ait resimleri de gösteriniz.


-------------------------------------------------------------------------------------------------------------------------------------------
### Engin Demiroğ Kamp Kurs 17. Gün Ödev 1

#### Yapılanlar;
* Bootstrap entegre edildi.
* Markalar, Renkler, Müşteriler, Araçlar ve Kiralamalar detaylı listelendi
* Görsel düzen oluşturuldu.

#### Ödev içeriği;
* Angular Projesi oluşturun. 
* Bootstrap entegrasyonu yapınız
* Markaları listeleyiniz
* Renkleri listeleyiniz
* Müşterileri listeleyiniz
* Arabaları listeleyiniz. (Arabaları listelerken BrandId yerine BrandName, ColorId yerine ColorName şeklinde gösteriniz)
* Kiralamaları listeleyiniz (Rentals) CarId yerine BrandName, CustomerId yerine FirstName + LastName şeklinde gösteriniz.

-------------------------------------------------------------------------------------------------------------------------------------------
# Projenin Kurulumu İçin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

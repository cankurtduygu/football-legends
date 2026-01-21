## 1. React Nedir?

React, kullanıcı arayüzleri (UI) oluşturmak için kullanılan bir JavaScript kütüphanesidir. Sadece görünüm katmanına odaklanır, tam bir framework değildir.

### Önemli Noktalar:

- **Facebook (Meta) tarafından geliştirildi**
- Single Page Application (SPA) yapmak için kullanılır
- Arayüzler component (bileşen) mantığıyla kurulur
- Virtual DOM sayesinde ekranı verimli şekilde günceller


> React, hızlı ve tekrar kullanılabilir arayüz bileşenleri oluşturmayı sağlar ve sayfa yenilemeden ekranı günceller.

---

## 2. Neden React'e İhtiyacımız Var?

### Vanilla JavaScript Problemleri:

- ❌ DOM ile uğraşmak yavaş ve karmaşık
- ❌ Uygulama büyüdükçe kod kontrolden çıkar
- ❌ Aynı UI kodları sürekli tekrar edilir
- ❌ State (durum) yönetimi zorlaşır

### React Ne Çözer?

- ✅ **Component tabanlı yapı** - Kod tekrarını azaltır
- ✅ **Declarative yaklaşım** - Ne görmek istediğini söylersin
- ✅ **Virtual DOM** - Performanslı güncellemeler
- ✅ **Tek yönlü veri akışı** - Hata ayıklamak kolaylaşır
- ✅ **Büyük ekosistem** - İş piyasası çok güçlü


Küçük projelerde React şart değildir. Ancak gerçek projelerde vanilla JavaScript ölçeklenmez.

---

## 3. Component (Bileşen) Nedir?

Component şunlardır:

- Genelde bir fonksiyon
- JSX döndürür
- Kendi state ve mantığını barındırır

### Örnek:

```javascript
function Welcome() {
  return <h1>Merhaba React</h1>;
}
```

- Component'ler tekrar kullanılabilir
- Arayüz, component'lerin birleşimidir
- Her component kendi dosyasında olmalı

---

## 4. JSX (Çok Önemli)

JSX, HTML değildir. JavaScript'in bir uzantısıdır.

### Temel Kurallar:

1. Tek bir parent (kapsayıcı) olmalı
2. `class` yerine `className` kullanılır
3. JavaScript `{}` içinde yazılır

### Örnek:

```javascript
const name = "lee";
return <h1>Merhaba {name}</h1>;
```

> JSX aslında JavaScript'tir. Arka planda `React.createElement()` fonksiyonuna çevrilir.

---

## 5. React'te Modül (Module) Nedir?

### JavaScript Modülleri:

- Her dosya bir modüldür
- `export` ve `import` kullanılır

### Örnek:

```javascript
// Button.js
export default function Button() {
  return <button>Tıkla</button>;
}

// App.js
import Button from "./Button";
```

- React projeleri çok sayıda küçük dosyadan oluşur
- Her component kendi dosyasında olur
- Kod düzenli ve ölçeklenebilir olur

---

## 6. React'te Modül Sistemi

React, eski script tag mantığıyla çalışmaz.

### Kullanılan Yapı:

- ES Modules
- `import` / `export`
- Vite, Webpack gibi bundler'lar
- Node.js ortamı


> React modern JavaScript ortamında çalışır. Bu yüzden import/export kullanırız.

---

## 7. React Ne Değildir?

Bunu baştan söylemek gerekir:

- ❌ React framework değildir
- ❌ Routing'i tek başına yapmaz
- ❌ API çağrılarını kendi başına yönetmez
- ❌ Global state'i tek başına çözmez

### Eklenen Araçlar:

- **React Router** - Yönlendirme için
- **Axios / Fetch** - API çağrıları için
- **Redux, Zustand, Context** - Global state yönetimi için

---

## 8. Virtual DOM (Gerçek DOM Problemi)

### Gerçek DOM Problemi:

Tarayıcıda gördüğümüz her şey DOM'dur. DOM pahalıdır, değiştirmek yavaştır.

### Örnek:

- 1000 satırlık bir liste düşün
- Sadece 1 satır değişiyor
- Vanilla JS ile çoğu zaman tüm listeyi etkilersin

>  Gerçek DOM'a her dokunuş performans maliyetidir.

### Virtual DOM Nedir? 

> Virtual DOM, gerçek DOM'un hafızadaki (memory) kopyasıdır.

### Önemli Noktalar:

- Tarayıcıya değil, JavaScript objesine dokunur
- Hızlıdır çünkü memory'de çalışır

---

## 9. React Nasıl Çalışır?

1. **State değişir**
2. **React yeni bir Virtual DOM oluşturur**
3. **Eski Virtual DOM ile karşılaştırır (diffing)**
4. **Sadece değişen kısmı bulur**
5. **Gerçek DOM'da minimum güncelleme yapar**

>  React DOM'u komple yenilemez. Sadece gerekli yeri günceller.

Müşteri sadece çorbanın tuzunu değiştiriyor. Mutfakta her şey yeniden pişmez, sadece çorbaya müdahale edilir.

>  React, mutfağı dağıtmaz. Sadece gerekli yere dokunur.

---

## 11. Proje Yapısı (my-first-app)

### Klasör Yapısı:

```
rc-1/
├── my-first-app/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── .gitignore
│   ├── package.json
│   └── README.md
└── readme.md
```

### Public Klasörü:

- **index.html** - Ana HTML dosyası. React, `<div id="root">` içinde render edilir
- **manifest.json** - PWA (Progressive Web App) metadata'sı
- **robots.txt** - Arama motorları için crawler bilgileri

### Src Klasörü (Kodun Yazıldığı Yer):

- **index.js** - Giriş noktası. React uygulamasını DOM'a monte eder
- **App.js** - Ana component. Uygulamanın UI'ını barındırır
- **App.css** - App component'inin stilleri
- **index.css** - Küresel stiller
- **App.test.js** - App component'i için birim testleri
- **setupTests.js** - Jest test konfigürasyonu
- **reportWebVitals.js** - Performans metrikleri

### Kök Dosyaları:

- **package.json** - Proje metadata'sı ve bağımlılıklar
- **.gitignore** - Git'e yoksayılacak dosyalar
- **README.md** - Proje dokümantasyonu

---

## 12. Nasıl Çalışır?

1. **package.json** → `yarn start` komutu çalıştırılır
2. **Geliştirme sunucusu başlatılır** → public/index.html yüklenir
3. **src/index.js çalışır** → `App.js` render edilir
4. **Uygulama tarayıcıda görünür** → `http://localhost:3000`

---

## 13. Temel Komutlar

### Projeyi Başlatmak:

```bash
yarn start
```

### Production Build Almak:

```bash
yarn run build
```

---



## 📁 Proje Yapısı

```
my-app/
├── public/           # Statik dosyalar (index.html, resimler)
├── src/              # Kaynak kodlar
│   ├── App.js        # Ana component
│   ├── index.js      # Giriş noktası
│   └── components/   # Diğer componentler
├── package.json      # Proje bağımlılıkları
└── README.md         # Proje açıklaması
```

---

## 🧩 Component Nedir?

Component, kullanıcı arayüzünün yeniden kullanılabilir parçalarıdır. React'ta her şey componentlerden oluşur.

### Component Türleri:

#### 1️⃣ Function Component (Modern Yaklaşım - Önerilen):
```jsx
function Merhaba() {
  return <h1>Merhaba Dünya!</h1>;
}
```

#### 2️⃣ Arrow Function Component:
```jsx
const Merhaba = () => {
  return <h1>Merhaba Dünya!</h1>;
}
```

### 📦 Component Kullanımı:
```jsx
import Merhaba from './Merhaba';

function App() {
  return (
    <div>
      <Merhaba />
    </div>
  );
}
```

---

## 🎨 JSX (JavaScript XML) Nedir?

JSX, JavaScript içinde HTML yazmamızı sağlayan bir sözdizimi uzantısıdır.

### ✅ JSX Kuralları:

1. **Tek Kapsayıcı Element**: Tüm elementler tek bir parent element içinde olmalıdır
```jsx
// ❌ YANLIŞ
return (
  <h1>Başlık</h1>
  <p>Paragraf</p>
);

// ✅ DOĞRU
return (
  <div>
    <h1>Başlık</h1>
    <p>Paragraf</p>
  </div>
);

// ✅ Fragment kullanımı (boş tag)
return (
  <>
    <h1>Başlık</h1>
    <p>Paragraf</p>
  </>
);
```

2. **JavaScript Kullanımı**: Süslü parantez {} içinde JavaScript kodu yazabilirsiniz
```jsx
const isim = "Ahmet";
const yas = 25;

return (
  <div>
    <h1>Benim adım {isim}</h1>
    <p>Yaşım: {yas}</p>
    <p>5 yıl sonra: {yas + 5} yaşında olacağım</p>
  </div>
);
```

3. **className Kullanımı**: HTML'deki `class` yerine `className` kullanılır
```jsx
// ❌ YANLIŞ
<div class="container">

// ✅ DOĞRU
<div className="container">
```

4. **CamelCase Yazım**: HTML attribute'ları camelCase ile yazılır
```jsx
<button onClick={tiklama}>Tıkla</button>
<input onChange={degisim} />
<label htmlFor="input-id">Label</label>
```

---

## 🎨 React'ta Styling (Stil Verme)

### 1️⃣ Inline Styling:
```jsx
const App = () => {
  return (
    <h1 style={{ 
      color: 'blue', 
      fontSize: '24px',
      backgroundColor: 'yellow'
    }}>
      Merhaba React!
    </h1>
  );
}
```

### 2️⃣ Internal/Object Styling:
```jsx
const App = () => {
  const stilim = {
    color: 'red',
    fontSize: '30px',
    fontFamily: 'Arial',
    border: '2px solid blue'
  };

  return <h1 style={stilim}>Styled Text</h1>;
}
```

### 3️⃣ External CSS (En Yaygın Kullanım):
```jsx
// App.css
import './App.css';

function App() {
  return <h1 className="baslik">Başlık</h1>;
}
```

```css
/* App.css */
.baslik {
  color: red;
  font-size: 24px;
}
```

---

### ⚠️ Dikkat Edilmesi Gerekenler:

1. **Component isimleri büyük harfle başlamalı**: `App`, `Navbar`, `Footer`
2. **Bir component sadece bir element döndürebilir** (parent element gerekli)
3. **JSX içinde JavaScript kullanmak için** süslü parantez `{}` kullanın
4. **Self-closing taglar** slash ile kapatılmalı: `<img />`, `<br />`, `<hr />`
5. **HTML class** yerine **className** kullanın
6. **Yorum satırı** JSX içinde: `{/* yorum */}`

### 🎯 Best Practices (En İyi Uygulamalar):

- Her component için ayrı dosya oluşturun
- Component isimlerini açıklayıcı yapın
- Dosya ismi ile component ismi aynı olsun: `Navbar.jsx` → `Navbar`
- CSS dosyalarını componentlerin yanında tutun
- Yeniden kullanılabilir componentler oluşturun

---

## 🔗 Faydalı Kaynaklar

- [React Resmi Dokümantasyonu](https://react.dev/)
- [React Tutorial](https://react.dev/learn)
- [Create React App](https://create-react-app.dev/)

---
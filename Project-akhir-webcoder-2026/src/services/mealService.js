/**
 * ============================================================================
 * SERVICE API: TheMealDB (src/services/mealService.js)
 * ============================================================================
 * File ini memisahkan logika pengambilan data (fetch API) dari komponen UI,
 * sesuai struktur folder yang disarankan di Bagian 9 Modul Project Akhir.
 *
 * Konsep yang dipakai dari Pertemuan 5 & 6:
 * - Base URL: https://www.themealdb.com/api/json/v1/1
 * - HTTP Method: GET (untuk Read / mengambil data dari server)
 * - Format Respons: JSON (JavaScript Object Notation)
 * - Pengecekan Status: res.ok (memastikan status code 200-299)
 */

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Data cadangan lokal sesuai Tips Bagian 18 FAQ Modul:
// "Siapkan data cadangan (file JSON lokal) supaya aplikasi tetap bisa didemokan jika internet bermasalah."
export const FALLBACK_MEALS = [
  {
    idMeal: '52803',
    strMeal: 'Beef Rendang (Rendang Sapi Nusantara)',
    strCategory: 'Beef',
    strArea: 'Malaysian / Indonesian',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/bc8v651619789840.jpg',
    strTags: 'Spicy,Curry,Halal',
    strYoutube: 'https://www.youtube.com/watch?v=d-BS5hc6760',
    strInstructions:
      '1. Haluskan bumbu bawang merah, bawang putih, cabai merah, jahe, dan lengkuas menggunakan blender dengan sedikit minyak.\n\n2. Tumis bumbu halus bersama serai, daun jeruk, dan daun kunyit hingga harum dan matang.\n\n3. Masukkan potongan daging sapi, aduk hingga berubah warna.\n\n4. Tuangkan santan kental dan air asam jawa. Masak dengan api kecil sambil sesekali diaduk hingga kuah menyusut, berminyak, dan bumbu meresap sempurna.',
    strIngredient1: 'Daging Sapi',
    strMeasure1: '500g',
    strIngredient2: 'Santan Kental',
    strMeasure2: '400ml',
    strIngredient3: 'Cabai Merah',
    strMeasure3: '10 buah',
    strIngredient4: 'Bawang Merah',
    strMeasure4: '8 siung',
    strIngredient5: 'Bawang Putih',
    strMeasure5: '4 siung',
    strIngredient6: 'Serai',
    strMeasure6: '2 batang',
  },
  {
    idMeal: '52795',
    strMeal: 'Chicken Congee (Bubur Ayam Hangat Kost)',
    strCategory: 'Chicken',
    strArea: 'Chinese',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/1529446352.jpg',
    strTags: 'Soup,Breakfast,Comfort',
    strYoutube: 'https://www.youtube.com/watch?v=VLl26_C6W7s',
    strInstructions:
      '1. Cuci bersih beras, lalu rebus bersama kaldu ayam dan potongan jahe geprek di dalam panci.\n\n2. Masukkan dada ayam utuh, masak dengan api kecil selama 40 menit sambil sesekali diaduk agar bagian bawah tidak gosong.\n\n3. Angkat ayam, suwir-suwir dagingnya, lalu masukkan kembali ke dalam bubur.\n\n4. Bumbui dengan garam, lada putih, dan kecap asin. Sajikan hangat dengan taburan daun bawang dan bawang goreng.',
    strIngredient1: 'Beras Putih',
    strMeasure1: '1 cup',
    strIngredient2: 'Dada Ayam',
    strMeasure2: '250g',
    strIngredient3: 'Jahe Geprek',
    strMeasure3: '2 cm',
    strIngredient4: 'Daun Bawang',
    strMeasure4: '2 batang',
    strIngredient5: 'Kaldu Ayam',
    strMeasure5: '1.5 Liter',
  },
  {
    idMeal: '52951',
    strMeal: 'General Tso Chicken (Ayam Saus Manis Pedas)',
    strCategory: 'Chicken',
    strArea: 'Chinese',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/1529444113.jpg',
    strTags: 'Sweet,Spicy,MainMeal',
    strYoutube: 'https://www.youtube.com/watch?v=w7P1U3e7PDs',
    strInstructions:
      '1. Potong dadu paha ayam fillet, baluri dengan tepung maizena, sedikit garam, dan kocokan telur.\n\n2. Goreng ayam di minyak panas hingga kuning keemasan dan renyah. Tiriskan.\n\n3. Buat saus dengan mencampurkan kecap asin, saus tomat, saus sambal, sedikit gula, dan air maizena.\n\n4. Tumis bawang putih dan cabai kering, tuang campuran saus hingga mengental, lalu masukkan ayam goreng dan aduk rata.',
    strIngredient1: 'Paha Ayam Fillet',
    strMeasure1: '400g',
    strIngredient2: 'Tepung Maizena',
    strMeasure2: '4 sdm',
    strIngredient3: 'Kecap Asin',
    strMeasure3: '3 sdm',
    strIngredient4: 'Bawang Putih',
    strMeasure4: '3 siung',
    strIngredient5: 'Cabai Kering',
    strMeasure5: '5 buah',
  },
  {
    idMeal: '52944',
    strMeal: 'Escovitch Fish (Ikan Goreng Sambal Acar Segar)',
    strCategory: 'Seafood',
    strArea: 'Jamaican',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/1520084413.jpg',
    strTags: 'Seafood,Spicy,Quick',
    strYoutube: 'https://www.youtube.com/watch?v=nF6DO2C3R08',
    strInstructions:
      '1. Bersihkan ikan, lumuri dengan perasan jeruk nipis, garam, dan lada.\n\n2. Goreng ikan dalam minyak panas hingga garing di kedua sisi, lalu angkat dan tiriskan.\n\n3. Tumis irisan bawang bombay, wortel korek api, paprika, dan cabai rawit dengan sedikit cuka dan gula.\n\n4. Siramkan tumisan sayur asam-pedas di atas ikan goreng hangat.',
    strIngredient1: 'Ikan Laut Segar',
    strMeasure1: '2 ekor',
    strIngredient2: 'Jeruk Nipis',
    strMeasure2: '1 buah',
    strIngredient3: 'Wortel',
    strMeasure3: '1 buah',
    strIngredient4: 'Bawang Bombay',
    strMeasure4: '1 buah',
    strIngredient5: 'Cabai Rawit',
    strMeasure5: '4 buah',
  },
  {
    idMeal: '52814',
    strMeal: 'Thai Green Curry (Kari Hijau Ayam Sayur)',
    strCategory: 'Chicken',
    strArea: 'Thai',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/sstssx1487349585.jpg',
    strTags: 'Curry,Asian,Dinner',
    strYoutube: 'https://www.youtube.com/watch?v=LIbKVpXXKNg',
    strInstructions:
      '1. Tumis pasta kari hijau hingga wangi, lalu tuangkan santan sedikit demi sedikit.\n\n2. Masukkan potongan daging ayam dan masak hingga setengah matang.\n\n3. Tambahkan potongan terong, buncis, kecap ikan, dan gula aren.\n\n4. Masak hingga sayuran empuk, tambahkan daun kemangi segar sesaat sebelum diangkat.',
    strIngredient1: 'Dada Ayam',
    strMeasure1: '300g',
    strIngredient2: 'Santan',
    strMeasure2: '400ml',
    strIngredient3: 'Buncis & Terong',
    strMeasure3: '150g',
    strIngredient4: 'Daun Kemangi',
    strMeasure4: '1 genggam',
  },
  {
    idMeal: '52771',
    strMeal: 'Spicy Arrabiata Penne (Pasta Pedas Anak Kost)',
    strCategory: 'Vegetarian',
    strArea: 'Italian',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    strTags: 'Pasta,Curry,Vegetarian,Budget',
    strYoutube: 'https://www.youtube.com/watch?v=1IszT_guI08',
    strInstructions:
      '1. Rebus pasta penne atau makaroni di dalam air mendidih yang sudah diberi sedikit garam hingga al dente (sekitar 8-10 menit), lalu tiriskan.\n\n2. Panaskan minyak di wajan, tumis bawang putih cincang dan cabai kering (chili flakes) hingga harum.\n\n3. Masukkan saus tomat / potongan tomat segar, bumbui dengan garam, lada hitam, dan daun basil/oregano.\n\n4. Masukkan pasta yang sudah direbus ke dalam saus, aduk rata selama 2 menit, dan sajikan.',
    strIngredient1: 'Pasta Penne / Makaroni',
    strMeasure1: '200g',
    strIngredient2: 'Bawang Putih',
    strMeasure2: '3 siung',
    strIngredient3: 'Saus Tomat',
    strMeasure3: '250g',
    strIngredient4: 'Cabai Bubuk / Rawit',
    strMeasure4: '1 sdt',
    strIngredient5: 'Minyak Goreng / Zaitun',
    strMeasure5: '2 sdm',
  },
];

/**
 * 1. Mencari resep berdasarkan kata kunci (Search)
 * Endpoint: GET /search.php?s={query}
 */
export async function searchMealsByName(query = 'chicken') {
  const res = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
  if (!res.ok) {
    throw new Error(`HTTP Error ${res.status}: Gagal mengambil data resep dari server.`);
  }
  const json = await res.json();
  return json.meals || [];
}

/**
 * 2. Mengambil daftar resep berdasarkan Kategori (Filter)
 * Endpoint: GET /filter.php?c={category}
 */
export async function getMealsByCategory(category) {
  const res = await fetch(`${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`);
  if (!res.ok) {
    throw new Error(`HTTP Error ${res.status}: Gagal memfilter kategori ${category}.`);
  }
  const json = await res.json();
  // Endpoint filter.php hanya mengembalikan idMeal, strMeal, strMealThumb.
  // Kita tambahkan properti strCategory agar badge di MealCard tetap tampil rapi.
  return (json.meals || []).map((meal) => ({
    ...meal,
    strCategory: category,
  }));
}

/**
 * 3. Mengambil daftar seluruh kategori yang tersedia di API
 * Endpoint: GET /categories.php
 */
export async function getMealCategories() {
  const res = await fetch(`${BASE_URL}/categories.php`);
  if (!res.ok) {
    throw new Error(`HTTP Error ${res.status}: Gagal memuat daftar kategori.`);
  }
  const json = await res.json();
  return json.categories || [];
}

/**
 * 4. Mengambil detail lengkap 1 resep berdasarkan ID (Halaman Detail)
 * Endpoint: GET /lookup.php?i={id}
 */
export async function getMealById(id) {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${encodeURIComponent(id)}`);
  if (!res.ok) {
    throw new Error(`HTTP Error ${res.status}: Gagal mengambil detail resep #${id}.`);
  }
  const json = await res.json();
  if (!json.meals || json.meals.length === 0) {
    // Jika tidak ditemukan di API, cek di data cadangan lokal
    const fallback = FALLBACK_MEALS.find((m) => m.idMeal === String(id));
    if (fallback) return fallback;
    throw new Error('404 Not Found: Resep yang kamu cari tidak ditemukan.');
  }
  return json.meals[0];
}

/**
 * 5. Mengambil 1 resep acak untuk fitur "Kocok Menu Anak Kost Hari Ini"
 * Endpoint: GET /random.php
 */
export async function getRandomMeal() {
  const res = await fetch(`${BASE_URL}/random.php`);
  if (!res.ok) {
    throw new Error(`HTTP Error ${res.status}: Gagal mengambil menu acak.`);
  }
  const json = await res.json();
  return json.meals ? json.meals[0] : FALLBACK_MEALS[0];
}

/**
 * Helper untuk mengekstrak daftar bahan (strIngredient1..20) & takaran (strMeasure1..20)
 * dari object JSON TheMealDB menjadi Array of Objects yang rapi (Materi Pertemuan 3 Slide 9)
 */
export function extractIngredients(meal) {
  if (!meal) return [];
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (name && name.trim() !== '') {
      ingredients.push({
        no: i,
        name: name.trim(),
        measure: measure && measure.trim() !== '' ? measure.trim() : 'Secukupnya',
      });
    }
  }
  return ingredients;
}

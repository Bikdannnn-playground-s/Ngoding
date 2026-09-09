const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express()
const port = 3000

app.set('view engine', 'ejs');

//third party middleware
app.use(expressLayouts);
app.use(morgan('dev'));

//build-in middleware
app.use(express.static('public'));

//application level middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.get('/', (req, res) => {

  const mahasiswa = [
    {
      nama: 'wildan',
      email: 'wildann@gmail.com',
    },
    {
      nama: 'aisy',
      email: 'aisy@gmail.com',
    },
    {
      nama: 'amar',
      email: 'amar@gmail.com',
    },
    {
      nama: 'fahrul',
      email: 'fahrul@gmail.com',
    },
    {
      nama: 'alif',
      email: 'alif@gmail.com',
    },
    {
      nama: 'imam',
      email: 'imam@gmail.com',
    },
    {
      nama: 'habib',
      email: 'habib@gmail.com',
    },
    {
      nama: 'faiz',
      email: 'faiz@gmail.com',
    },
    {
      nama: 'ikki',
      email: 'ikki@gmail.com',
    },
    {
      nama: 'issan',
      email: 'issan@gmail.com',
    },
    {
      nama: 'maul',
      email: 'maul@gmail.com',
    },
    {
      nama: 'ayu',
      email: 'ayu@gmail.com',
    },
    {
      nama: 'baim',
      email: 'baim@gmail.com',
    },
    {
      nama: 'affan',
      email: 'affan@gmail.com',
    },
    {
      nama: 'adib',
      email: 'adib@gmail.com',
    },
    {
      nama: 'mute',
      email: 'mute@gmail.com',
    },
    {
      nama: 'anis',
      email: 'anse@gmail.com',
    },
    {
      nama: 'tisa',
      email: 'tisa@gmail.com',
    }
  ]

  res.render('index', {
    nama: 'Wildan Humaidi',
    title: 'Home Page',
    mahasiswa,
    layout: 'Layout/main-layout'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page',
    layout: 'Layout/main-layout'
  });
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Page',
    layout: 'Layout/main-layout'
  });
})

app.get('/product/:id', (req, res) => {
  res.send(`Product ID: ${req.params.id} <br> Category: ${req.query.category}`);
})

app.use('/', (req, res) => {
  res.status(404);
  res.send('Halaman tidak ditemukan: 404');
});

app.listen(port, () => {
  console.log(`Server berjalan di port http://localhost: ${port}`)
})
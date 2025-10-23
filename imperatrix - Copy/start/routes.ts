/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/login')
router.on('/home').render('pages/home')
router.on('/products').render('pages/products')
router.on('/about').render('pages/about')
router.on('/cart').render('pages/cart')
router.on('/wishlist').render('pages/wishlist')
router.on('/seller').render('pages/seller')

router.get('/search', async ({ request, response, view }) => {
  const query = request.input('q')?.toLowerCase()

  if (!query) {
    return response.redirect().back()
  }

  const REVENANTS = [
    {
      id: 'productTribbie',
      name: 'Tribbie',
      axis: 'Creation',
      top: '0%',
      left: '20%',
      width: '350%',
      height: '350%',
      filter: 'brightness(1)',
      img: 'assets/Character_Tribbie_Portrait.png',
    },
    {
      id: 'productHyacine',
      name: 'Hyacine',
      axis: 'Dedication',
      top: '100%',
      left: '-30%',
      width: '630%',
      height: '630%',
      filter: 'brightness(1)',
      img: 'assets/Character_Hyacine_Portrait.png',
    },
    {
      id: 'productMydei',
      name: 'Mydei',
      axis: 'Execution',
      top: '15%',
      left: '57%',
      width: '850%',
      height: '850%',
      filter: 'brightness(1)',
      img: 'assets/Character_Mydei_Portrait.png',
    },
    {
      id: 'productCipher',
      name: 'Cipher',
      axis: 'Vengeance',
      top: '-50%',
      left: '80%',
      width: '440%',
      height: '440%',
      filter: 'brightness(1)',
      img: 'assets/Character_Cipher_Portrait.png',
    },
    {
      id: 'productHysilens',
      name: 'Hysilens',
      axis: 'Contemplation',
      top: '47%',
      left: '275%',
      width: '520%',
      height: '520%',
      filter: 'brightness(1)',
      img: 'assets/Character_Hysilens_Portrait.png',
    },
    {
      id: 'productCastorice',
      name: 'Castorice',
      axis: 'Despondency',
      top: '260%',
      left: '45%',
      width: '650%',
      height: '650%',
      filter: 'brightness(1)',
      img: 'assets/Character_Castorice_Portrait.png',
    },
    {
      id: 'productAnaxa',
      name: 'Anaxa',
      axis: 'Escapism',
      top: '320%',
      left: '130%',
      width: '600%',
      height: '600%',
      filter: 'brightness(1)',
      img: 'assets/Character_Anaxa_Portrait.png',
    },
    {
      id: 'productCerydra',
      name: 'Cerydra',
      axis: 'Determination',
      top: '150%',
      left: '175%',
      width: '620%',
      height: '620%',
      filter: 'brightness(1)',
      img: 'assets/Character_Cerydra_Portrait.png',
    },
    {
      id: 'productAglaea',
      name: 'Aglaea',
      axis: 'Optimism',
      top: '380%',
      left: '200%',
      width: '1000%',
      height: '1000%',
      filter: 'brightness(1)',
      img: 'assets/Character_Aglaea_Portrait.png',
    },
    {
      id: 'productPhainon',
      name: 'Phainon',
      axis: 'Conclusion',
      top: '99%',
      left: '250%',
      width: '750%',
      height: '750%',
      filter: 'brightness(1)',
      img: 'assets/Character_Phainon_Portrait.png',
    },
    {
      id: 'productCyrene',
      name: '???',
      axis: '???',
      top: '90%',
      left: '75%',
      width: '700%',
      height: '700%',
      filter: 'brightness(0)',
      img: 'assets/Character_Cyrene_Splash_Art.png',
    },
  ]

  const results = REVENANTS.filter((revenant) => revenant.name.toLowerCase().includes(query))

  return view.render('pages/search', { results, query })
})

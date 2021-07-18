import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
  state: {    
    userProfile: {
      userID: 1,
      username: 'nana',
      userImgURL: 'https://www.matrix.com/~/media/matrix%20us%20media%20library/blogs/2018may/pink-hair/pink-hair-color-ideas.jpg',
      likedFoundation: [
        {
            _id: "6062debbd318f9caf9a3be65",
            brand: "nyx",
            serie: "#NOFILTER Finishing Powder",
            price: "12.0",
            image_link: "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwd7e25eb8/ProductImages/2016/Face/No_Filter_Finishing_Powder/nofilterfinishingpowder_main.jpg?sw=390&sh=390&sm=fit",
            product_link: "https://www.nyxcosmetics.com/no-filter-finishing-powder/NYX_358.html?cgid=powder",
            category: "powder",
            color_name: "Deep Golden",
            rgb_value: "(207, 139, 104)",
            deltaE: 5.194,
            api_image_link: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/936/original/open-uri20171224-4-h5gd5x?1514082686"
        },
        {
            _id: "6062debbd318f9caf9a3be64",
            brand: "nyx",
            serie: "#NOFILTER Finishing Powder",
            price: "12.0",
            image_link: "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwd7e25eb8/ProductImages/2016/Face/No_Filter_Finishing_Powder/nofilterfinishingpowder_main.jpg?sw=390&sh=390&sm=fit",
            product_link: "https://www.nyxcosmetics.com/no-filter-finishing-powder/NYX_358.html?cgid=powder",
            category: "powder",
            color_name: "Sand",
            rgb_value: "(217, 157, 123)",
            deltaE: 5.722,
            api_image_link: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/936/original/open-uri20171224-4-h5gd5x?1514082686"
        },
        {
            _id: "6062dec2d318f9caf9a3bea7",
            brand: "fenty",
            serie: "MATCH STIX - Matte Skinstick",
            price: "25.0",
            image_link: "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FENTY/default/dw50617083/hi-res/FB30003_FB3009.jpg?sw=550 550w",
            product_link: "https://www.fentybeauty.com/match-stix/matte-skinstick/FB30003.html?dwvar_FB30003_color=FB3009",
            category: "concealer",
            color_name: "Mocha - Cool",
            rgb_value: "(197, 144, 114)",
            deltaE: 6.127,
            api_image_link: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/847/original/open-uri20171224-4-1se9mcb?1514074989"
        },
        {
            _id: "6062decfd318f9caf9a3bf22",
            brand: "nyx",
            serie: "Tinted Moisturizer",
            price: "10.0",
            image_link: "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw8cbca26c/ProductImages/Face/Tinted_Moisturizer/tintedmoisturizer_main.jpg?sw=390&sh=390&sm=fit",
            product_link: "https://www.nyxcosmetics.com/tinted-moisturizer/NYX_131.html?cgid=foundation",
            category: null,
            color_name: "Buff",
            rgb_value: "(229, 169, 144)",
            deltaE: 6.248,
            api_image_link: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/904/original/open-uri20171224-4-afx6c?1514082602"
        },
        {
            _id: "6062dec1d318f9caf9a3be97",
            brand: "nyx",
            serie: "HD Studio Photogenic Foundation",
            price: "18.0",
            image_link: "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw37943ebb/ProductImages/2017/Face/High_Definition_Foundation/800897051822_highdefinitionfoundation_chestnut_main.jpg?sw=390&sh=390&sm=fit",
            product_link: "https://www.nyxcosmetics.com/hd-studio-photogenic-foundation/NYX_185.html?cgid=foundation",
            category: null,
            color_name: "Natural Beige",
            rgb_value: "(194, 135, 105)",
            deltaE: 6.341,
            api_image_link: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/897/original/data?1514082585"
        },
        {
            _id: "6062ded3d318f9caf9a3bf48",
            brand: "clinique",
            serie: "Stay-Matte Sheer Pressed Powder",
            price: "26.0",
            image_link: "https://www.clinique.com/media/export/cms/products/181x209/clq_645J_181x209.png",
            product_link: "https://www.clinique.com/product/1599/6069/makeup/foundations/stay-matte-sheer-pressed-powder",
            category: null,
            color_name: "17 Stay Golden",
            rgb_value: "(200, 151, 122)",
            deltaE: 6.471,
            api_image_link: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/834/original/open-uri20171223-4-1b6qpa2?1514072593"
        },
        {
          _id: "6062debbd318f9caf9a3be64",
          brand: "Channel",
          serie: "#NOFILTER Finishing Powder",
          price: "12.0",
          image_link: "https://www.davidjones.com/productimages/medium/1/1568345_18608986_1359874.jpg",
          product_link: "https://www.nyxcosmetics.com/no-filter-finishing-powder/NYX_358.html?cgid=powder",
          category: "eyeshadow",
          color_name: "Sand",
          rgb_value: "(1, 65, 111)",
          deltaE: 5.722,
          api_image_link: ""
      },
      ],likedEyeshadow: [
        {
            _id: "6062debbd318f9caf9a3be65",
            brand: "Channel",
            serie: "Longwear Powder Eyeshadow",
            price: "52",
            image_link: "https://www.davidjones.com/productimages/medium/1/1568345_18608984_1359869.jpg",
            product_link: "https://www.davidjones.com/ombre-premi%C3%A8re-longwear-powder-eyeshadow-21030795",
            category: "eyeshadow",
            color_name: "Rose Synthetique",
            rgb_value: "(233, 166, 166)",
            deltaE: 5.194,
            api_image_link: ""
        },
        {
            _id: "6062debbd318f9caf9a3be64",
            brand: "Channel",
            serie: "#NOFILTER Finishing Powder",
            price: "12.0",
            image_link: "https://www.davidjones.com/productimages/medium/1/1568345_18608986_1359874.jpg",
            product_link: "https://www.nyxcosmetics.com/no-filter-finishing-powder/NYX_358.html?cgid=powder",
            category: "eyeshadow",
            color_name: "Sand",
            rgb_value: "(1, 65, 111)",
            deltaE: 5.722,
            api_image_link: ""
        },
        {
            _id: "6062dec2d318f9caf9a3bea7",
            brand: "ISMINE",
            serie: "09",
            price: "5.0",
            image_link: "https://images-na.ssl-images-amazon.com/images/I/41XXPdTNFTL._SX300_SY300_QL70_FMwebp_.jpg",
            product_link: "https://www.amazon.com/ISMINE-Single-Eyeshadow-Powder-Palette/dp/B07C78L2WG",
            category: "eyeshadow",
            color_name: "Rosered",
            rgb_value: "(215, 46, 42)",
            deltaE: 6.127,
            api_image_link: ""
        },
        {
            _id: "6062decfd318f9caf9a3bf22",
            brand: "SHANY",
            serie: "Bold Effect Eye Shadow",
            price: "9.95",
            image_link: "https://m.media-amazon.com/images/I/61JpOqdd1DL._SL1000_.jpg",
            product_link: "https://www.amazon.com/SHANY-Effect-Shadow-Paraben-Warning/dp/B00OQAS8RC/ref=pd_lpo_194_t_2/143-2346636-4379449?_encoding=UTF8&pd_rd_i=B00OQAS84A&pd_rd_r=333a526c-dae6-489b-ac66-e15b39946084&pd_rd_w=mzW2r&pd_rd_wg=bSefM&pf_rd_p=a0d6e967-6561-454c-84f8-2ce2c92b79a6&pf_rd_r=MZGENW1NDGK6MBRV7CV7&refRID=MZGENW1NDGK6MBRV7CV7&th=1",
            category: "eyeshaodw",
            color_name: "Fable",
            rgb_value: "(190, 70, 125)",
            deltaE: 6.248,
            api_image_link: ""
        },
        {
            _id: "6062dec1d318f9caf9a3be97",
            brand: "ISMINE",
            serie: "05",
            price: "5.0",
            image_link: "https://images-na.ssl-images-amazon.com/images/I/41JWzLutfuL._SX466_.jpg",
            product_link: "https://www.amazon.com/ISMINE-Single-Eyeshadow-Powder-Palette/dp/B07C746JB5?th=1",
            category: null,
            color_name: "Beige",
            rgb_value: "(123, 45, 28)",
            deltaE: 6.341,
            api_image_link: ""
        },

      ],
      likedLip: [

        {
          _id: '600010e404026944b4ad18c2',
          brand: "burt's bees",
          serie: "Burt's Bees Lip Crayon",
          price: '9.99',
          l_type: 'soft',
          gloss: false,
          image_link:
            'https://d3t32hsnjxo7q6.cloudfront.net/i/ab45997fcda6fc649959ea74507c28e3_ra,w158,h184_pa,w158,h184.jpg',
          product_link: 'https://well.ca/products/burts-bees-lip-crayon_101173.html',
          category: 'lipstick',
          color_name: 'Napa Vineyard ',
          rgb_value: '(183, 2, 30)',
          deltaE: 2.012,
          api_image_link:
            '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/062/original/data?1514062259',
        },

        {
          _id: '600010e404026944b4ad18c2',
          brand: "Maybeline",
          serie: "Lip Gloss",
          price: '9.99',
          l_type: 'soft',
          gloss: true,
          image_link:
            'https://www.maybelline.co.uk/~/media/mny/uk/lip-make-up/lip-gloss/lifter-gloss/amber/maybelline-lip-color-sensational-lifter-gloss-007-amber-041554583915-o.jpg',
          product_link: 'https://well.ca/products/burts-bees-lip-crayon_101173.html',
          category: 'lipstick',
          color_name: 'Napa Vineyard ',
          rgb_value: '(217, 132, 112)',
          deltaE: 2.012,
          api_image_link:
            '',
        },


        {
          _id: '600010e404026944b4ad1867',
          brand: 'clinique',
          serie: 'Long Last Lipstick',
          price: '17.0',
          l_type: 'hard',
          gloss: false,
          image_link:
            'https://www.clinique.com/media/export/cms/products/181x209/clq_63N2_181x209.png',
          product_link:
            'https://www.clinique.com/product/1605/5404/makeup/lipsticks/long-last-lipstick',
          category: 'lipstick',
          color_name: 'Red Red Red',
          rgb_value: '(177, 69, 85)',
          deltaE: 2.473,
          api_image_link:
            '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/762/original/data?1514072329',
        },
        {
          _id: '600010e404026944b4ad186f',
          brand: 'clinique',
          serie: 'Clinique Pop™ Matte Lip Colour + Primer',
          price: '18.5',
          l_type: 'hard',
          gloss: false,
          image_link:
            'https://www.clinique.com/media/export/cms/products/181x209/clq_ZTPH01_181x209.png',
          product_link:
            'https://www.clinique.com/product/1605/42767/makeup/lipsticks/clinique-poptm-matte-lip-colour-primer',
          category: 'lipstick',
          color_name: 'Peppermint Pop',
          rgb_value: '(150, 78, 74)',
          deltaE: 3.211,
          api_image_link:
            '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/754/original/data?1514072331',
        },
        {
          _id: '600010e404026944b4ad1864',
          brand: 'clinique',
          serie: 'High Impact&trade; Lip Colour',
          price: '17.5',
          image_link:
            'https://www.clinique.com/media/export/cms/products/181x209/clq_6LX5_181x209.png',
          product_link:
            'https://www.clinique.com/product/1605/5778/makeup/lipsticks/high-impact-lip-colour',
          category: 'lipstick',
          color_name: 'Red-y To Wear',
          rgb_value: '(112, 50, 80)',
          deltaE: 3.64,
          api_image_link:
            '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/765/original/data?1514072330',
        },

      ],
      likedConcealer: [
        {
          _id: "6000105304026944b4ad1754",
          brand: "dior",
          serie: "Diorblush",
          price: "32.5",
          image_link: "https://www.dior.com/beauty/version-5.1432748111912/resize-image/ep/0/390/100/0/packshots%252FPDG_Y0715255.jpg",
          product_link: "https://www.dior.com/beauty/en_gb/fragrance-beauty/makeup/face/blush/pr-blush-y0715255_f071525556-vibrant-colour-powder-blush.html",
          category: null,
          color_name: "896 Redissimo",
          rgb_value: "(235, 92, 84)",
          deltaE: 2.462,
          api_image_link: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/684/original/open-uri20171223-4-14490w0?1514062728"
        },
        {
          _id: '6000105304026944b4ad1741',
          brand: 'nyx',
          serie: 'Cheek Contour Duo Palette',
          price: '9.0',
          image_link:
            'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwb9e0511a/ProductImages/2016/Face/Cheek_Contour_Duo_Palette/800897012007_cheekcontourduopalette_doubledate_main.jpg?sw=390&sh=390&sm=fit',
          product_link:
            'https://www.nyxcosmetics.com/cheek-contour-duo-palette/NYX_309.html?cgid=blush',
          category: null,
          color_name: 'Perfect Match',
          rgb_value: '(143, 77, 61)',
          deltaE: 6.239,
          api_image_link:
            '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/923/original/open-uri20171224-4-13zuxu4?1514082646',
        },
        {
          _id: '6000105304026944b4ad1741',
          brand: 'nyx',
          serie: 'Cheek Contour Duo Palette',
          price: '9.0',
          image_link:
            'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwb9e0511a/ProductImages/2016/Face/Cheek_Contour_Duo_Palette/800897012007_cheekcontourduopalette_doubledate_main.jpg?sw=390&sh=390&sm=fit',
          product_link:
            'https://www.nyxcosmetics.com/cheek-contour-duo-palette/NYX_309.html?cgid=blush',
          category: null,
          color_name: 'Cheek On Cheek',
          rgb_value: '(122, 76, 50)',
          deltaE: 6.846,
          api_image_link:
            '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/923/original/open-uri20171224-4-13zuxu4?1514082646',
        },
        {
          _id: '6000105304026944b4ad1741',
          brand: 'nyx',
          serie: 'Cheek Contour Duo Palette',
          price: '9.0',
          image_link:
            'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwb9e0511a/ProductImages/2016/Face/Cheek_Contour_Duo_Palette/800897012007_cheekcontourduopalette_doubledate_main.jpg?sw=390&sh=390&sm=fit',
          product_link:
            'https://www.nyxcosmetics.com/cheek-contour-duo-palette/NYX_309.html?cgid=blush',
          category: null,
          color_name: 'Wine & Dine',
          rgb_value: '(107, 69, 48)',
          deltaE: 7.738,
          api_image_link:
            '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/923/original/open-uri20171224-4-13zuxu4?1514082646',
        },
        {
          _id: '6000105304026944b4ad176a',
          brand: 'e.l.f.',
          serie: 'e.l.f. Studio Blush Palette Dark',
          price: '9.99',
          image_link:
            'https://d3t32hsnjxo7q6.cloudfront.net/i/73da123512d4ca1f2aebf5149e065d86_ra,w158,h184_pa,w158,h184.jpg',
          product_link: 'https://well.ca/products/elf-studio-blush-palette-dark_99359.html',
          category: 'powder',
          color_name: 'color 4',
          rgb_value: '(153, 80, 77)',
          deltaE: 8.222,
          api_image_link:
            '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/454/original/data?1514062281',
        },
        {
          _id: '6000105304026944b4ad1741',
          brand: 'nyx',
          serie: 'Cheek Contour Duo Palette',
          price: '9.0',
          image_link:
            'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwb9e0511a/ProductImages/2016/Face/Cheek_Contour_Duo_Palette/800897012007_cheekcontourduopalette_doubledate_main.jpg?sw=390&sh=390&sm=fit',
          product_link:
            'https://www.nyxcosmetics.com/cheek-contour-duo-palette/NYX_309.html?cgid=blush',
          category: null,
          color_name: 'Ginger & Pepper',
          rgb_value: '(109, 61, 59)',
          deltaE: 8.635,
          api_image_link:
            '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/923/original/open-uri20171224-4-13zuxu4?1514082646',
        },
        {
          _id: '6000105304026944b4ad1777',
          brand: 'pure anada',
          serie: 'Pure Anada Loose Mineral Velvet Matte Blush ',
          price: '12.0',
          image_link:
            'https://d3t32hsnjxo7q6.cloudfront.net/i/47169d3a86232fa7eec3a0c43ed1ad06_ra,w158,h184_pa,w158,h184.jpeg',
          product_link: 'https://well.ca/products/pure-anada-loose-mineral-velvet_83216.html',
          category: 'powder',
          color_name: 'Twig Blush (Neutral Tones) ',
          rgb_value: '(155, 89, 62)',
          deltaE: 8.688,
          api_image_link:
            '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/440/original/data?1514063325',
        },
        {
          _id: '6000105304026944b4ad1749',
          brand: 'clinique',
          serie: 'Sculptionary&trade; Cheek Contouring Palette',
          price: '34.0',
          image_link:
            'https://www.clinique.com/media/export/cms/products/181x209/clq_ZAMN_181x209.png',
          product_link:
            'https://www.clinique.com/product/1593/34892/makeup/blushers/sculptionary-cheek-contouring-palette',
          category: null,
          color_name: 'Defining Roses',
          rgb_value: '(154, 95, 98)',
          deltaE: 9.637,
          api_image_link:
            '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/778/original/data?1514072606',
        },
      ],
      likedBlush: [
        {
          _id: "6000105304026944b4ad1754",
          brand: "dior",
          serie: "Diorblush",
          price: "32.5",
          image_link: "https://www.dior.com/beauty/version-5.1432748111912/resize-image/ep/0/390/100/0/packshots%252FPDG_Y0715255.jpg",
          product_link: "https://www.dior.com/beauty/en_gb/fragrance-beauty/makeup/face/blush/pr-blush-y0715255_f071525556-vibrant-colour-powder-blush.html",
          category: null,
          color_name: "896 Redissimo",
          rgb_value: "(235, 92, 84)",
          deltaE: 2.462,
          api_image_link: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/684/original/open-uri20171223-4-14490w0?1514062728"
        },
        
        
        {
          _id: '6000105304026944b4ad176a',
          brand: 'e.l.f.',
          serie: 'e.l.f. Studio Blush Palette Dark',
          price: '9.99',
          image_link:
            'https://d3t32hsnjxo7q6.cloudfront.net/i/73da123512d4ca1f2aebf5149e065d86_ra,w158,h184_pa,w158,h184.jpg',
          product_link: 'https://well.ca/products/elf-studio-blush-palette-dark_99359.html',
          category: 'powder',
          color_name: 'color 4',
          rgb_value: '(153, 80, 77)',
          deltaE: 8.222,
          api_image_link:
            '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/454/original/data?1514062281',
        },
        
        {
          _id: '6000105304026944b4ad1777',
          brand: 'pure anada',
          serie: 'Pure Anada Loose Mineral Velvet Matte Blush ',
          price: '12.0',
          image_link:
            'https://d3t32hsnjxo7q6.cloudfront.net/i/47169d3a86232fa7eec3a0c43ed1ad06_ra,w158,h184_pa,w158,h184.jpeg',
          product_link: 'https://well.ca/products/pure-anada-loose-mineral-velvet_83216.html',
          category: 'powder',
          color_name: 'Twig Blush (Neutral Tones) ',
          rgb_value: '(155, 89, 62)',
          deltaE: 8.688,
          api_image_link:
            '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/440/original/data?1514063325',
        },
        {
          _id: '6000105304026944b4ad1749',
          brand: 'clinique',
          serie: 'Sculptionary&trade; Cheek Contouring Palette',
          price: '34.0',
          image_link:
            'https://www.clinique.com/media/export/cms/products/181x209/clq_ZAMN_181x209.png',
          product_link:
            'https://www.clinique.com/product/1593/34892/makeup/blushers/sculptionary-cheek-contouring-palette',
          category: null,
          color_name: 'Defining Roses',
          rgb_value: '(154, 95, 98)',
          deltaE: 9.637,
          api_image_link:
            '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/778/original/data?1514072606',
        },
      ],
      likedEyeliner: [
        {
          _id: "6000105304026944b4ad1754",
          brand: "Beauty Creation",
          serie: "LIQUID EYELINER",
          price: "32.5",
          image_link: "https://cdn.shopify.com/s/files/1/1406/2336/products/Serenity-Swatch_1500x.jpg?v=1599061179",
          product_link: "https://www.beautycreationscosmetics.com/products/dare-to-be-bright-eyeliner-serenity",
          category: null,
          color_name: "Pink",
          rgb_value: '(186, 34, 96)',
          deltaE: 2.462,
          api_image_link: ""
        },
        {
          _id: '6000105304026944b4ad1741',
          brand: 'IPSY',
          serie: 'High Line Liquid Eyeliner in Runway',
          price: '22.0',
          image_link:
            'https://static-cms.ipsy.com/contentAsset/image/e1d73530-c763-46df-9558-87d3243608b8/fileAsset?byInode=1',
          product_link:
            'https://www.ipsy.com/product/p-jyyx1tpm5sqskr7',
          category: null,
          color_name: 'Black',
          rgb_value: '(10, 10, 10)',
          deltaE: 6.239,
          api_image_link:
            '',
        },


        
      ],

      likedLens: [
        {
          _id: "6000105304026944b4ad1754",
          brand: "Beauty Creation",
          serie: "LIQUID EYELINER",
          price: "32.5",
          image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/600px-Ski_trail_rating_symbol-green_circle.svg.png",
          product_link: "https://www.beautycreationscosmetics.com/products/dare-to-be-bright-eyeliner-serenity",
          category: null,
          color_name: "Green",
          rgb_value: '(17, 173, 75)',
          deltaE: 2.462,
          api_image_link: ""
        },
        {
          _id: '6000105304026944b4ad1741',
          brand: 'IPSY',
          serie: 'High Line Liquid Eyeliner in Runway',
          price: '22.0',
          image_link:
            'https://images-na.ssl-images-amazon.com/images/I/31%2BdfjVAunL._AC_.jpg',
          product_link:
            'https://www.ipsy.com/product/p-jyyx1tpm5sqskr7',
          category: null,
          color_name: 'Blue',
          rgb_value: '(29, 122, 194)',
          deltaE: 6.239,
          api_image_link:
            '',
        },

     
        
      ],
    }
  },
  getters: {
    getUserInfo: state => {
      return state.userProfile;
    },
    addLikedLip: state => item =>{
      return state.userProfile.likedLip.push(item);
    },
  },
  mutations: {
    setUserProfile(state, payload) {
      state.userProfile = payload;
    },
  },
  actions: {
    updateUserProfile({ commit }, payload) {
      commit('setUserProfile', payload);
    },
  },
  modules: {

  },
};

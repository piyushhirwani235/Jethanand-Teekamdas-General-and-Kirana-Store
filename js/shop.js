const categories = [
  {
    name: "Groceries-Aata",
    items: [
      { name: "Aashirvaad 10kg", price: 450, image: "images/Groceries-aata/aashirvad10kg.jpg" },
      { name: "Aashirvaad 5kg", price: 230, image: "images/Groceries-aata/aashirvad10kg.jpg" },
      { name: "Fortune 9kg", price: 380, image: "images/Groceries-aata/fortune9kg.jpg" },
      { name: "Mahak 10kg", price: 370, image: "images/Groceries-aata/mahak10kg.jpg" },
      { name: "Mann Mohak 10kg", price: 360, image: "images/Groceries-aata/mannmohak10kg.jpg" },
      { name: "Mann Mohak 5kg", price: 190, image: "images/Groceries-aata/mannmohak10kg.jpg" },
      { name: "Amul 10kg", price: 380, image: "images/Groceries-aata/amul10kg.jpg" },
      { name: "Parle-G 10kg", price: 400, image: "images/Groceries-aata/parleg10kg.jpg" },
    ]
  },
  {
    name: "Groceries-Pulses/Daal",
    items: [
      { name: "Toor Daal 1kg", price: 120, image: "images/toordaal1kg.jpg" },
      { name: "Toor Daal 1/2kg", price: 60, image: "images/toordaal1_2kg.jpg" },
      { name: "Moong Daal 1kg", price: 105, image: "images/moongdaal1kg.jpg" },
      { name: "Moong Daal 1/2kg", price: 53, image: "images/moongdaal1_2kg.jpg" },
      { name: "Mogar Daal 1kg", price: 115, image: "images/mogardaal1kg.jpg" },
      { name: "Mogar Daal 1/2kg", price: 58, image: "images/mogardaal1_2kg.jpg" },
      { name: "Masoor Daal 1kg", price: 85, image: "images/masoordaal1kg.jpg" },
      { name: "Masoor Daal 1/2kg", price: 43, image: "images/masoordaal1_2kg.jpg" },
      { name: "Urad Daal 1/2kg", price: 58, image: "images/uradda1_2kg.jpg" },
      { name: "Urad Mogar Daal 1/2kg", price: 60, image: "images/uradmogardaal1_2kg.jpg" },
      { name: "Chana Daal 1kg", price: 85, image: "images/chanadaal1kg.jpg" },
      { name: "Chana Daal 1/2kg", price: 43, image: "images/chanadaal1_2kg.jpg" },
      { name: "Mix Daal 1/2kg", price: 58, image: "images/mixdaal1_2kg.jpg" },
      { name: "Moth Daal 1/2kg", price: 50, image: "images/mothdaal1_2kg.jpg" },
      { name: "Moth Mogar Daal 1/2kg", price: 55, image: "images/mothmogardaal1_2kg.jpg" },
      { name: "Kali Masoor Daal 1/2kg", price: 50, image: "images/kalimasoordaal1_2kg.jpg" },
    ]
  },
  {
    name: "Groceries-Masale",
    items: [
      { name: "Tata Namak 1kg", price: 28, image: "images/Groceries-Masale/tatasalt1kg.png" },
      { name: "Tata Namak 2kg", price: 55, image: "images/Groceries-Masale/tatasalt1kg.png" },
      { name: "Tata Himalayan Rock Salt 1kg", price: 95, image: "images/Groceries-Masale/tatahimalyanrocksalt.png" },
      { name: "Tata Rock Salt 1kg", price: 60, image: "images/Groceries-Masale/tatarocksalt.png" },
      { name: "Tata Lite Salt 1kg", price: 50, image: "images/Groceries-Masale/tatalitesalt.png" },
      { name: "Tata I Shakti Salt 1kg", price: 10, image: "images/Groceries-Masale/tataishaktisalt1kg.png" },
      { name: "Aashirvaad Salt 1kg", price: 25, image: "images/Groceries-Masale/aashirvaadsalt1kg.png" },
      { name: "Rock Salt 1kg", price: 50, image: "images/Groceries-Masale/rocksalt1kg.png" },
      { name: "Rock Salt 200g", price: 15, image: "images/Groceries-Masale/rocksalt200g.png" },
      { name: "Black Salt 1kg", price: 15, image: "images/Groceries-Masale/blacksalt1kg.jpg" },
      { name: "Black Salt 200g", price: 15, image: "images/Groceries-Masale/blacksalt1kg.jpg" },
      { name: "Amchur 250g", price: 80, image: "images/Groceries-Masale/amchur250g.png" },
      { name: "Sonu Amchur 100g", price: 25, image: "images/Groceries-Masale/sonuamchur100g.png" },
      { name: "Annkoot Amchur 100g", price: 40, image: "images/Groceries-Masale/annkootamchur100g.png" },
      { name: "Everest Tikhalal 500gm", price: 230, image: "images/Groceries-Masale/everesttikhalal500g.png" },
      { name: "Everest Tikhalal 200gm", price: 110, image: "images/Groceries-Masale/everesttikhalal500g.png" },
      { name: "Everest Dhania 500gm", price: 170, image: "images/Groceries-Masale/everestdhania500g.png" },
      { name: "Everest Dhania 200gm", price: 70, image: "images/Groceries-Masale/everestdhania500g.png" },
      { name: "Everest Haldi 500gm", price: 200, image: "images/Groceries-Masale/everesthaldi500g.png" },
      { name: "Everest Haldi 500gm", price: 85, image: "images/Groceries-Masale/everesthaldi500g.png" },
      { name: "Hatadi Mirch 500gm", price: 120, image: "images/Groceries-Masale/hatadimirch500g.png" },
      { name: "Hatadi Mirch 200gm", price: 50, image: "images/Groceries-Masale/hatadimirch500g.png" },
      { name: "Hatadi Haldi 500gm", price: 125, image: "images/Groceries-Masale/hatadihaldi500g.png" },
      { name: "Hatadi Haldi 200gm", price: 55, image: "images/Groceries-Masale/hatadihaldi500g.png" },
      { name: "Hatadi Dhania 500gm", price: 80, image: "images/Groceries-Masale/hatadidhania500gm.png" },
      { name: "Hatadi Dhania 200gm", price: 40, image: "images/Groceries-Masale/hatadidhania500gm.png" },
      { name: "Everest Kasuri Methi 100gm", price: 95, image: "images/Groceries-Masale/everestkasurimethi100g.png" },
      { name: "Everest Kasuri Methi 50gm", price: 55, image: "images/Groceries-Masale/everestkasurimethi100g.png" },
      { name: "Everest Kasuri Methi 25gm", price: 30, image: "images/Groceries-Masale/everestkasurimethi25g.png" },
      { name: "Gandhi Aachar Masala 250gm", price: 40, image: "images/Groceries-Masale/gandhiaacharmasala.png" },
      { name: "Sabut Garam Masala 100gm", price: 100, image: "images/Groceries-Masale/sabutgarammasala.png" },
      { name: "Sambhar Masala 100gm", price: 75, image: "images/Groceries-Masale/everestsambharmasala100g.png" },
      { name: "Sambhar Masala 50gm", price: 40, image: "images/Groceries-Masale/everestsambharmasala100g.png" },
      { name: "Pav Bhaji Masala 100gm", price: 85, image: "images/Groceries-Masale/everestpavbhajimasala100g.png" },
      { name: "Pav Bhaji Masala 50gm", price: 45, image: "images/Groceries-Masale/everestpavbhajimasala100g.png" },
      { name: "Chicken Masala 100gm", price: 85, image: "images/Groceries-Masale/everestchickenmasala100g.png" },
      { name: "Chicken Masala 50gm", price: 45, image: "images/Groceries-Masale/everestchickenmasala100g.png" },
      { name: "Meat Masala 100gm", price: 86, image: "images/Groceries-Masale/everestmeatmasala100g.png" },
      { name: "Meat Masala 50gm", price: 45, image: "images/Groceries-Masale/everestmeatmasala100g.png" },
      { name: "Garam Masala 100gm", price: 90, image: "images/Groceries-Masale/everestgarammasala100gm.png" }, 
      { name: "Garam Masala 50gm", price: 50, image: "images/Groceries-Masale/everestgarammasala100gm.png" }, 
      { name: "Chat Masala 100gm", price: 75, image: "images/Groceries-Masale/everestchatmasala100g.png" }, 
      { name: "Chat Masala 50gm", price: 40, image: "images/Groceries-Masale/everestchatmasala100g.png" }, 
      { name: "Kitchen King Masala 100gm", price: 90, image: "images/Groceries-Masale/everestkitchenkingmasala100g.png" }, 
      { name: "Kitchen King Masala 50gm", price: 45, image: "images/Groceries-Masale/everestkitchenkingmasala100g.png" }, 
      { name: "Chole Masala 100gm", price: 83, image: "images/Groceries-Masale/everestcholemasala100g.png" }, 
      { name: "Chole Masala 50gm", price: 45, image: "images/Groceries-Masale/everestcholemasala100g.png" }, 
      { name: "Shahi Paneer Masala 100gm", price: 92, image: "images/Groceries-Masale/everestshahipaneermasala100g.png" }, 
      { name: "Shahi Paneer Masala 50gm", price: 48, image: "images/Groceries-Masale/everestshahipaneermasala100g.png" }, 
      { name: "Shahi Biryani Masala 100gm", price: 160, image: "images/Groceries-Masale/everestshahibiryanimasala100g.png" }, 
      { name: "Shahi Biryani Masala 50gm", price: 75, image: "images/Groceries-Masale/everestshahibiryanimasala100g.png" }, 
      { name: "Rajma Masala 100gm", price: 77, image: "images/Groceries-Masale/everestrajmamasala100g.png" }, 
      { name: "Rajma Masala 50gm", price: 40, image: "images/Groceries-Masale/everestrajmamasala100g.png" }, 
      { name: "Kashmiri Lal Mirch 100gm", price: 95, image: "images/Groceries-Masale/everestkashmirilal100g.png" },
      { name: "Sabji Masala 100gm", price: 65, image: "images/Groceries-Masale/everestsabjimasala100g.png" }, 
      { name: "Sabji Masala 50gm", price: 35, image: "images/Groceries-Masale/everestsabjimasala100g.png" }, 
      { name: "Cumin Powder 100gm", price: 95, image: "images/Groceries-Masale/everestcuminpowder50g.png" }, 
      { name: "Cumin Powder 50gm", price: 50, image: "images/Groceries-Masale/everestcuminpowder50g.png" }, 
      { name: "Tea Masala 100gm", price: 120, image: "images/Groceries-Masale/everestteamasala100g.png" },
      { name: "Pani Puri Masala 50gm", price: 38, image: "images/Groceries-Masale/everestpanipurimasala50g.png" }, 
      { name: "Aalo Sabji Masala 50gm", price: 42, image: "images/Groceries-Masale/everestaalosabjimasala50g.jpg" }, 
      { name: "Dry ginger(sonth) Powder 50gm", price: 45, image: "images/Groceries-Masale/everestsonthpowder50g.png" },
      { name: "Black Pepper Powder 50gm", price: 75, image: "images/Groceries-Masale/everestblackpepperpowder50g.png" },
      { name: "Jalani Too Good Masala(pack of 10)", price: 50, image: "images/Groceries-Masale/jalanitoogoodmasala.png" },
      { name: "Meggi Masala", price: 5, image: "images/Groceries-Masale/meggimasala.png" },
      { name: "Pasta Masala", price: 5, image: "images/Groceries-Masale/pastamasala.png" },
      { name: "Peri Peri Masala", price: 5, image: "images/Groceries-Masale/periperimasala.png" },
      { name: "Fried Rice Masala", price: 10, image: "images/Groceries-Masale/friedricemasala.png" },
      { name: "Chouwmien Masala", price: 10, image: "images/Groceries-Masale/chouwmienmasala.png" },
      { name: "Veg Manchurian Masala", price: 10, image: "images/Groceries-Masale/vegmanchurianmasala.png" },
    ]
  },
  {
    name: "Groceries-Oil",
    items:[
      { name: "Fortune Soya 5ltr", price: 760, image: "images/Groceries-Oil/fortunesoya5ltr.jpg" },
      { name: "Fortune Sunflower 5ltr", price: 860, image: "images/Groceries-Oil/fortunesunflower5ltr.jpg" },
      { name: "Oleev Gold(5+1) 6ltr", price: 1020, image: "images/Groceries-Oil/oleevgold6ltr.jpg" },
      { name: "Oleev Active(5+1) 6ltr", price: 1470, image: "images/Groceries-Oil/oleevactive6ltr.jpg" },
      { name: "Safola Gold(5+1) 6ltr", price: 1080, image: "images/Groceries-Oil/safolagold6ltr.jpg" },
      { name: "Nutrela Soya 5ltr", price: 650, image: "images/Groceries-Oil/nutrelasoya5ltr.jpg" },
      { name: "Postline Refined 5ltr", price: 880, image: "images/Groceries-Oil/postlinerefined5ltr.jpg" },
      { name: "Fortune Soya 1ltr", price: 145, image: "images/Groceries-Oil/fortunesoya1ltr.jpg" },
      { name: "Fortune Sunflower 1ltr", price: 165, image: "images/Groceries-Oil/fortunesunflower1ltr.jpg" },
      { name: "Janmay Soya (Amul) 1ltr", price: 140, image: "images/Groceries-Oil/janmaysoya1ltr.jpg" },
      { name: "King 99 Soya Pouch (Shortweight)", price: 115, image: "images/Groceries-Oil/king99pouchshortweight.jpg" },
      { name: "Fortune Mustard(Sarso) 1ltr", price: 190, image: "images/Groceries-Oil/fortunemustard1ltr.jpg" },
      { name: "Fortune Mustard(Sarso) 500ml", price: 95, image: "images/Groceries-Oil/fortunemustard1ltr.jpg" },
      { name: "Engine Mustard(Sarso) 1ltr", price: 200, image: "images/Groceries-Oil/enginemustard1ltr.jpg" },
      { name: "Engine Mustard(Sarso) 500ml", price: 100, image: "images/Groceries-Oil/enginemustard1ltr.jpg" },
      { name: "Mustard(Sarso) 200ml", price: 40, image: "images/Groceries-Oil/enginemustard1ltr.jpg" },
      { name: "Sonasikka Refined 1ltr", price: 215, image: "images/Groceries-Oil/sonasikkarefined1ltr.jpg" },
      { name: "Sonasikka Filtered 1ltr", price: 220, image: "images/Groceries-Oil/sonasikkafiltered1ltr.jpg" },
      { name: "Postline Refined 1ltr", price: 175, image: "images/Groceries-Oil/postlinerefined1ltr.jpg" },
    ]
  },
  {
    name: "Groceries-Ghee",
    items:[
      { name: "Amul Cow(Refill)1ltr", price: 645, image: "images/Groceries-ghee/amulcowrefill1ltr.jpg" },
      { name: "Amul Cow(Tin/Jar) 1ltr", price: 650, image: "images/Groceries-ghee/amulcowtin1ltr.jpg" },
      { name: "Amul Cow 1/2ltr", price: 340, image: "images/Groceries-ghee/amulcowtin1ltr.jpg" }, 
      { name: "Amul Cow 200ml", price: 148, image: "images/Groceries-ghee/amulcow200ml.jpg" }, 
      { name: "Amul White(Refill) 1ltr", price: 635, image: "images/Groceries-ghee/amulwhiterefill1ltr.jpg" }, 
      { name: "Amul White(Tin) 1ltr", price: 630, image: "images/Groceries-ghee/amulwhitetin1ltr.jpg" }, 
      { name: "Amul White 1/2ltr", price: 330, image: "images/Groceries-ghee/amulwhiterefill1ltr.jpg" }, 
      { name: "Amul White 200ml", price: 140, image: "images/Groceries-ghee/amulwhite200ml.jpg" }, 
      { name: "Amul High Aroma 1ltr", price: 650, image: "images/Groceries-ghee/amulhigharoma.jpg" }, 
      { name: "Amul High Aroma 1/2ltr", price: 340, image: "images/Groceries-ghee/amulhigharoma.jpg" }, 
      { name: "Amul High Aroma 200ml", price: 148, image: "images/Groceries-ghee/amulhigharoma.jpg" }, 
      { name: "Amul Buffalo 1ltr", price: 650, image: "images/Groceries-ghee/amulnuffalo.jpg" },
      { name: "Dabur 1ltr", price: 640, image: "images/Groceries-ghee/dabur.jpg" }, 
      { name: "Gowardhan 1ltr", price: 710, image: "images/Groceries-ghee/govardhan1ltr.jpg" }, 
      { name: "Vishwa Cow 1ltr", price: 460, image: "images/Groceries-ghee/vishwa1ltr.jpg" }, 
      { name: "Vishwa Cow 1/2ltr", price: 240, image: "images/Groceries-ghee/viswa1_2ltr.jpg" },
      { name: "Vishwa Cow 200ml", price: 110, image: "images/Groceries-ghee/vishwa200ml.jpg" },
      { name: "Govind Cow 1ltr", price: 630, image: "images/Groceries-ghee/govind1ltr.jpg" }, 
      { name: "Govind Cow 1/2ltr", price: 320, image: "images/Groceries-ghee/govind1ltr.jpg" }, 
      { name: "Krishna 1ltr", price: 570, image: "images/Groceries-ghee/krishna1ltr.jpg" }, 
      { name: "Krishna 1/2ltr", price: 285, image: "images/Groceries-ghee/krishna1ltr.jpg" }, 
      { name: "Ksheer 1ltr", price: 580, image: "images/Groceries-ghee/Ksheer1ltr.jpg" },
      { name: "Ghee Pouch 29ml", price: 20, image: "images/Groceries-ghee/gheepouch.jpg" },
    ]
  },
  {
    name: "Groceries-Rice",
    items:[
      { name: "Fortune Rozana Gold 1kg", price: 95, image: "images/Groceries-Rice/fortunerozana1kg.png" },
      { name: "Fortune Biryani 1kg", price: 140, image: "images/Groceries-Rice/fortunebiryani1kg.png" },
      { name: "Fortune Super(offer:1+1) 2kg", price: 199, image: "images/Groceries-Rice/fortunesuper2kg.png" },
      { name: "Fortune Mogra 5kg", price: 300, image: "images/Groceries-Rice/fortunemogra5kg.png" },
      { name: "Fortune Mini Mogra 10kg", price: 490, image: "images/Groceries-Rice/fortuneminimogra5kg.png" },
      { name: "Fortune Mini Mogra II 10kg", price: 450, image: "images/Groceries-Rice/fortuneminimogra25kg.png" },
      { name: "Fortune Mogra 10kg", price: 590, image: "images/Groceries-Rice/fortunemogra5kg.png" },
      { name: "Kohinoor Rozana 1kg", price: 80, image: "images/Groceries-Rice/kohinoorrozana.png" },
      { name: "Kohinoor Super(offer:1+1) 2kg", price: 199, image: "images/Groceries-Rice/kohinoorsuper2kg.png" },
      { name: "Kohinoor Mogra 5kg", price: 290, image: "images/Groceries-Rice/kohinoormogra5kg.png" },
      { name: "Kohinoor Mini Mogra 5kg", price: 250, image: "images/Groceries-Rice/kohinoorminimogra5kg.png" },
      { name: "Kohinoor Mogra 10kg", price: 580, image: "images/Groceries-Rice/kohinoormogra10kg.png" },
      { name: "Kohinoor  Mini Mogra 10kg", price: 480, image: "images/Groceries-Rice/kohinoorminimogra10kg.png" },
      { name: "High King(loose) 1kg", price: 100, image: "images/Groceries-Rice/highkingloose1kg.jpg" },
      { name: "High King(packing) 10kg", price: 920, image: "images/Groceries-Rice/highkingpacking10kg.jpg" },
      { name: "Full Grain(loose) 1kg", price: 100, image: "images/Groceries-Rice/fullgrainloose1kg.jpg" },
    ]
  },
  {
    name: "Groceries-Tea",
    items:[
      { name: "Hatadi 250g", price: 75 },
      { name: "Lal Ghoda 250g", price: 90 },
      { name: "Lal Ghoda 1kg", price: 310 },
      { name: "Tata Agni 250g", price: 60 },
      { name: "Tata Agni 1kg", price: 235 },
      { name: "Tata Agni Elaichi 250g", price: 90 },
      { name: "Taaza 250g", price: 60 },
      { name: "Red Label 250g", price: 130 },
      { name: "Wagh Bakri 250g", price: 145 },
      { name: "Taj Mahal 250g", price: 170 },
      { name: "Liptop Green Tea Honey & Lemon(10 bag)", price: 75 },
      { name: "Liptop Green Tea Honey & Lemon(25 bag)", price: 170 },
      { name: "Tetley Green Tea 100g", price: 160 },
      { name: "Organic India Green Tea Tulsi (25 bag)", price: 190 },
      { name: "Organic India Green Tea Lemon & Honey (25 bag)", price: 220 },
      { name: "Organic India Green Tea Lemon & Ginger (25 bag)", price: 210 },
      { name: "Organic India Green Tea Classic (25 bag)", price: 210 },
    ]
  },
  {
    name: "Groceries-Others",
    items:[
      { name: "Fortune Suji 1kg", price: 55, image: "images/fortunesuji1kg.jpg" },
      { name: "Fortune Suji 1/2kg", price: 30, image: "images/fortunesuji1_2kg.jpg" },
      { name: "Fortune Maida 1/2kg", price: 27, image: "images/fortunemaida1_2kg.jpg" },
      { name: "Fortune Besan 1kg", price: 98, image: "images/fortunebesan1kg.jpg" },
      { name: "Fortune Besan 1/2kg", price: 50, image: "images/fortunebesan1_2kg.jpg" },
      { name: "Tata Besan 1kg", price: 120, image: "images/tatabesan1kg.jpg" },
      { name: "Tata Besan 1/2kg", price: 60, image: "images/tatabesan1_2kg.jpg" },
      { name: "Aashirvaad Besan 1kg", price: 98, image: "images/aashirvaadbesan1kg.jpg" },
      { name: "Aashirvaad Besan 1/2kg", price: 50, image: "images/aashirvaadbesan1_2kg.jpg" },
      { name: "Sonu Besan 1kg", price: 90, image: "images/sonubesan1kg.jpg" },
      { name: "Sonu Besan 1/2kg", price: 45, image: "images/sonubesan1_2kg.jpg" },
      { name: "Mung Fali 1/2kg", price: 80, image: "images/mungfali1_2kg.jpg" },
      { name: "Mung Fali 1/4kg", price: 40, image: "images/mungfali1_4kg.jpg" },
      { name: "Jeera 1kg", price: 340, image: "images/jeera1kg.jpg" },
      { name: "Jeera 1/4kg", price: 90, image: "images/jeera1_4kg.jpg" },
      { name: "Fortune Soya Been 200g", price: 55, image: "images/fortunesoyabeen200g.jpg" },
      { name: "Jalani Soya Been(Chunks) 200g", price: 50, image: "images/jalanisoyabeenchunks200g.jpg" },
      { name: "Jalani Soya Been(Mini) 200g", price: 50, image: "images/jalanisoyabeenmini200g.jpg" },
      { name: "Jalani Soya Been(Chura) 200g", price: 50, image: "images/jalanisoyabeenchura200g.jpg" },
      { name: "Hira Soya Been 200g", price: 25, image: "images/hirasoyabeen200g.jpg" },
      { name: "Rai 1/2kg", price: 55, image: "images/rai1_2kg.jpg" },
      { name: "Rai 1/4kg", price: 30, image: "images/rai1_4kg.jpg" },
      { name: "Saunf 1/4kg", price: 60, image: "images/saunf1_4kg.jpg" },
      { name: "Mishri Cutting 1/2kg", price: 40, image: "images/mishricutting1_2kg.jpg" },
      { name: "Mishri Cutting 1/4kg", price: 20, image: "images/mishricutting1_4kg.jpg" },
      { name: "Mishri Dora(loose) 1/2kg", price: 40, image: "images/mishridoralose1_2kg.jpg" }, 
      { name: "Mishri Dora(loose) 1/4kg", price: 20, image: "images/mishridoralose1_4kg.jpg" }, 
      { name: "Moong 1/2kg", price: 55, image: "images/moong1_2kg.jpg" }, 
      { name: "Moth 1/2kg", price: 45, image: "images/moth1_2kg.jpg" }, 
      { name: "Kale Chane Desi 1/2kg", price: 43, image: "images/kalechanedesi1_2kg.jpg" }, 
      { name: "Kale Chane Mausmi 1/2kg", price: 45, image: "images/kalechanemausmi1_2kg.jpg" }, 
      { name: "Kabuli Chane Medium 1/2kg", price: 70, image: "images/kabulichanemedium1_2kg.jpg" }, 
      { name: "Kabuli Chane Big 1/2kg", price: 75, image: "images/kabulichanebig1_2kg.jpg" }, 
      { name: "Rajma Black Big 1/2kg", price: 80, image: "images/rajmablackbig1_2kg.jpg" },
      { name: "Rajma Black Small 1/2kg", price: 70, image: "images/rajmablacksmall1_2kg.jpg" },
      { name: "Rajma Chitra 1/2kg", price: 90, image: "images/rajmachitra1_2kg.jpg" },
      { name: "Chawla 1/2kg", price: 55, image: "images/chawla1_2kg.jpg" },
      { name: "Dana Methi 1/2kg", price: 45, image: "images/danamethi1_2kg.jpg" },
      { name: "Imli 1/2kg", price: 85, image: "images/imli1_2kg.jpg" },
      { name: "Imli 200g", price: 35, image: "images/imli200g.jpg" },
      { name: "Ajwain 1/4kg", price: 75, image: "images/ajwain1_4kg.jpg" },
      { name: "Tata Pohe 1kg", price: 90, image: "images/tatapohe1kg.jpg" },
      { name: "Tata Pohe 1/2kg", price: 45, image: "images/tatapohe1_2kg.jpg" },
      { name: "Fortune Pohe 1kg", price: 70, image: "images/fortunepohe1kg.jpg" },
      { name: "Fortune Pohe 1/2kg", price: 35, image: "images/fortunepohe1_2kg.jpg" },
      { name: "Swastik Pohe 1kg", price: 68, image: "images/swastikpohe1kg.jpg" },
      { name: "Pawan Pohe 800g", price: 55, image: "images/pawanpohe800g.jpg" },
      { name: "Til White 1/2kg", price: 120, image: "images/tilwhite1_2kg.jpg" },
      { name: "Til White 1/4kg", price: 60, image: "images/tilwhite1_4kg.jpg" },
      { name: "Til Brown 1/2kg", price: 115, image: "images/tilbrown1_2kg.jpg" },
      { name: "Til Brown 1/4kg", price: 58, image: "images/tilbrown1_4kg.jpg" },
      { name: "Til Black 1/4kg", price: 50, image: "images/tilblack1_4kg.jpg" },
      { name: "Dalia Baarik 1/2kg", price: 25, image: "images/daliabaarik1_2kg.jpg" },
      { name: "Dalia Mota 1/2kg", price: 25, image: "images/daliamota1_2kg.jpg" },
      { name: "Meetha Soda Pouch", price: 20, image: "images/meethasodapouch.jpg" },
      { name: "Meetha Soda 1kg", price: 80, image: "images/meethasoda1kg.jpg" },
      { name: "Naariyal Burada 200g", price: 90, image: "images/meethasoda1kg.jpg" },
      { name: "Naariyal Burada 1kg", price: 430, image: "images/meethasoda1kg.jpg" },
    ]
  },
  {
    name: "Groceries-Sugar",
    items:[
      { name: "Sugar(loose) 1kg", price: 44 },
      { name: "Fortune Sugar 1kg", price: 52 },
      { name: "Sugar(loose) 5kg", price: 220 },
      { name: "Fortune Sugar 5kg", price: 255 },
      { name: "Desi Sugar 1/2kg", price: 35 },
      { name: "Desi Sugar 1kg", price: 70 },
      { name: "Gud 1/2kg", price: 28 },
    ]
  },
  {
    name: "Groceries-Falahari",
    items:[
      { name: "Sachamoti Sabudana 1/2kg(pkt)", price: 40 },
      { name: "Sonpari Sama 1/2kg(pkt)", price: 65 },
      { name: "Hira Sabudana Fry 1/2kg(pkt)", price: 60 },
      { name: "Falari Aata 1/2kg(pkt)", price: 50 },
      { name: "Rajgira Aata 1/2kg(pkt)", price: 75 },
      { name: "Singhara Aata 1/2kg(pkt)", price: 70 },
      { name: "Sabudana Papad (pkt)", price: 20 },
      { name: "Sabudana Chips 200gm(pkt)", price: 40 },
      { name: "Sabudana Flakes 200gm(pkt)", price: 40 },
      { name: "Aalu Chips 200gm(pkt)", price: 40 },
    ]
  },
  {
    name: "Groceries-Fry Items",
    items:[
      { name: "Jhakaas Papad 1/2kg (pkt)", price: 60 },
      { name: "Kheeche 1/2kg (pkt)", price: 80 },
      { name: "Mix Frymes 1/4kg (pkt)", price: 20 },
      { name: "Yellow Fingers 1/4kg (pkt)", price: 20 },
      { name: "Nobel Frymes 1/4kg (pkt)", price: 25 },
    ]
  },
  {
    name: "Bathing Soaps",
    items:[
      { name: "Dove (50g psc)", price: 25 },
      { name: "Dove (100g psc)", price: 65 },
      { name: "Dove (3 x 75g set)", price: 150 },
      { name: "Dove (3 x 125g set)", price: 230 },
      { name: "Pears Original(60g psc)", price: 24 },
      { name: "Pears Original(100g psc)", price: 56 },
      { name: "Pears Original(3 x 125g psc)", price: 200 },
      { name: "Pears Oil-Clear(75g psc)", price: 63 },
      { name: "Pears Soft & Fresh(100g psc)", price: 56 },
      { name: "Dettol Original(4 x 150g set)", price: 215 },
      { name: "Dettol Original(5 x 100g set)", price: 180 },
      { name: "Dettol Icy Cool(4 x 150g set)", price: 215 },
      { name: "Dettol Skincare(4 x 100g set)", price: 150 },
      { name: "Dettol Original(psc)", price: 10 },
      { name: "Lifeboy Original(5 x 125g set)", price: 170 },
      { name: "Lifeboy Original(psc)", price: 10 },
      { name: "Alife Lily(5 x 100g set)", price: 90 },
      { name: "Alife Rose(5 x 100g set)", price: 90 },
      { name: "Alife Lemon(5 x 100g set)", price: 90 },
      { name: "Alife Chadan(5 x 100g set)", price: 90 },
      { name: "Alife Badam(5 x 100g set)", price: 90 },
      { name: "Fresh Up Rose(5 x 100g set)", price: 100 },
      { name: "Fresh Up Haldi & Chandan(5 x 100g set)", price: 100 },
      { name: "Fresh Up Lemon(5 x 100g set)", price: 100 },
      { name: "Fresh Up Badam(5 x 100g set)", price: 100 },
      { name: "Godrej No.1 Lime Aloevera(4 x 125g set)", price: 140 },
      { name: "Godrej No.1 Kesar Milk(5 x 100g set)", price: 125 },
      { name: "Godrej No.1 Chandan(4 x 125g set)", price: 140 },
      { name: "Godrej No.1 Rose(5 x 100g set)", price: 125 },
      { name: "Godrej No.1 Lavender(5 x 100g set)", price: 125 },
      { name: "Lux Rose(3 x 150g set)", price: 160 },
      { name: "Lux Rose(5 x 100g set)", price: 160 },
      { name: "Lux Rose(psc)", price: 10 },
      { name: "Lux Jasmine(3 x 150g set)", price: 170 },
      { name: "Lux Jasmine(5 x 100g set)", price: 170 },
      { name: "Lux Jasmine(psc)", price: 10 },
      { name: "Patanjali Haldi Chandan(3 x 150g set)", price: 125 },
      { name: "Patanjali Neem(3 x 150g set)", price: 110 },
      { name: "Patanjali Aloevera(3 x 150g set)", price: 110 },
      { name: "Patanjali Honey Kesar(125g psc)", price: 75 },
      { name: "Cinthol Cool(4 x 100g set)", price: 160 },
      { name: "Cinthol Active Deo(3 x 100g set)", price: 150 },
      { name: "Cinthol Lime(5 x 100g set)", price: 180 },
      { name: "Margo Neem & Lime(5 x 100g set)", price: 170 },
      { name: "Margo Neem(5 x 100g set)", price: 150 },
      { name: "Margo Neem & Glycerine(3 x 75g set)", price: 100 },
      { name: "Fiama (5 x 125g set)", price: 350 },
      { name: "Liril (4 x 125g set)", price: 200 },
      { name: "Medimix (3 x 125g set)", price: 145 },
    ]
  },
  {
    name: "Washing Soaps",
    items:[
      { name: "Surf Excel Bar", price: 10 },
      { name: "Surf Excel Bar 250g", price: 38 },
      { name: "Surf Excel (4 x 200g set)", price: 125 },
      { name: "Rin bar", price: 10 },
      { name: "Rin bar 250g", price: 25 },
      { name: "Rin (4 x 250g set)", price: 100 },
      { name: "Nirma Super", price: 10 },
      { name: "Rachna 250g", price: 25 },
      { name: "Ghadi ", price: 5 },
      { name: "Ghadi ", price: 10 },
      { name: "Oswal 1kg(4 x 250g)", price: 100 },
      { name: "Raj Soap 1kg(4 x 250g)", price: 130 },
      { name: "Raj Soap 600g", price: 90 },
    ]
  },
  {
    name: "Detergent Powder/Liquid",
    items:[
      { name: "Surf Excel Pouch", price: 10 },
      { name: "Surf Excel Easy Wash 1/2kg", price: 68 },
      { name: "Surf Excel Easy Wash 1kg", price: 132 },
      { name: "Surf Excel Easy Wash 3kg", price: 370 },
      { name: "Surf Excel Quick Wash 1/2kg", price: 113 },
      { name: "Surf Excel Quick Wash 1kg", price: 225 },
      { name: "Surf Excel Matic(Top Load) Surf 1kg", price: 265 },
      { name: "Surf Excel Matic(Top Load) Liquid 1ltr", price: 149 },
      { name: "Surf Excel Matic(Front Load)Liquid 1ltr", price: 169 },
      { name: "Henko 1kg", price: 110 },
      { name: "Henko Matic(Top Load) Liquid Pouch", price: 10 },
      { name: "Henko Matic(Front Load) Liquid Pouch", price: 10 },
      { name: "Henko Matic(Top Load) Liquid 1ltr", price: 140 },
      { name: "Rin 1kg", price: 97 },
      { name: "Rin Aala ", price: 87 },
      { name: "Ariel Pouch", price: 10 },
      { name: "Ariel Perfect Wash 1/2kg", price: 68 },
      { name: "Ariel Perfect Wash 1kg", price: 135 },
      { name: "Wheel 1/2kg", price: 37 },
      { name: "Wheel 1kg", price: 70 },
      { name: "Wheel 2kg", price: 135 },
      { name: "Wheel 4kg", price: 250 },
      { name: "Ghadi Detergent 1/2kg", price: 35 },
      { name: "Ghadi Detergent 1kg", price: 67 },
      { name: "Ghadi Machine Wash 1kg", price: 110 },
      { name: "Tide Double Power 1/2kg", price: 63 },
      { name: "Tide Double Power 1kg", price: 127 },
      { name: "Tide Lemon 1kg", price: 83 },
      { name: "Tide Double Power(offer: Bucket Free) 6kg", price: 660 },
      { name: "Mr.White 7kg", price: 520 },
      { name: "Ezee pouch", price: 10 },
      { name: "Ezee Bottle 250g", price: 67 },
      { name: "Ezee Bottle 500g", price: 130 },
      { name: "Ezee Bottle 1kg", price: 225 },
      { name: "Ezee Bottle 2kg", price: 440 },
      { name: "Ujala(offer:Exo Soap Worth 10rs) 75ml", price: 35 },
      { name: "Ujala 250ml", price: 80 },
      { name: "Comfort Green 210ml", price: 60 },
      { name: "Comfort Pink 210ml", price: 60 },
      { name: "Comfort Blue 210ml", price: 58 },
      { name: "Comfort Green 750ml", price: 230 },
      { name: "Comfort Pink 750ml", price: 230 },
      { name: "Comfort Blue 750ml", price: 230 },
    ]
  },
  {
    name: "Dishwasher Bar/Liquid",
    items:[
      { name: "Vim bar", price: 10 },
      { name: "Vim bar 300g", price: 30 },
      { name: "Vim bar (4 psc set)", price: 30 },
      { name: "Vim bar (3 x 200g set)", price: 65 },
      { name: "Vim Tub ", price: 60 },
      { name: "Vim Liquid pouch", price: 20 },
      { name: "Vim Liquid Bottle 250ml", price: 60 },
      { name: "Vim Liquid Pouch 500ml", price: 109 },
      { name: "Vim Liquid Bottle 500ml", price: 130 },
      { name: "Vim Liquid Bottle 750ml", price: 180 },
      { name: "Exo Bar", price: 10 },
      { name: "Exo Bar 300g", price: 30 },
      { name: "Exo Bar (4 psc set)", price: 30 },
      { name: "Exo Bar (4 x 300g set)", price: 90 },
      { name: "Exo Tub ", price: 60 },
      { name: "Xpert bar", price: 30 },
      { name: "Emami Emasol bar", price: 10 },
      { name: "Farata Tub", price: 40 },
      { name: "Prill Liquid 250ml", price: 55 },
      { name: "Prill Liquid 750ml", price: 200 },
      { name: "Swash Liquid Bottle 1ltr", price: 100 },
    ]
  },
  {
    name: "Cleaners",
    items:[
      { name: "Black Phenyl 500ml", price: 85 },
      { name: "Swash Orange Phenyl 1ltr", price: 90 },
      { name: "Swash Jasmine Phenyl 1ltr", price: 90 },
      { name: "Swash Rose Phenyl 1ltr", price: 90 },
      { name: "Swash Neem & Pine Phenyl 1ltr", price: 90 },
      { name: "Lizol Neem 500ml", price: 113 },
      { name: "Lizol Floral 500ml", price: 113 },
      { name: "Lizol Lime 500ml", price: 113 },
      { name: "Blue Harpic 200ml", price: 44 },
      { name: "Blue Harpic 500ml", price: 107 },
      { name: "Red Harpic 200ml", price: 45 },
      { name: "Red Harpic 500ml", price: 112 },
      { name: "Colin 200ml", price: 10 },
      { name: "Colin 500ml", price: 10 },
      { name: "Drainex Pouch", price: 30 },
    ]
  },
  {
    name: "Room Spray/Bathroom Freshners",
    items:[
      { name: "Odonil Set", price: 85 },
      { name: "Odonil Set", price: 85 },
      { name: "Odonil Spray Room Freshner", price: 85 },
      { name: "Odonil Spray Room Freshner", price: 85 },
      { name: "Godrej Air Pocket ", price: 85 },
      { name: "Godrej Air Pocket ", price: 85 },
      { name: "Godrej Air Pocket ", price: 85 },
      { name: "Godrej Air Room Freshner", price: 85 },
    ]
  },
  {
    name: "Mosquito Repellent",
    items:[
      { name: "Black Hit Spray", price: 50 },
      { name: "Black Hit 200ml", price: 85 },
      { name: "Black Hit 400ml", price: 85 },
      { name: "Black Hit 600ml", price: 85 },
      { name: "Black Hit Lime 200ml", price: 85 },
      { name: "Black Hit Lime 400ml", price: 85 },
      { name: "Black Hit Lime 600ml", price: 85 },
      { name: "Red Hit 200ml", price: 85 },
      { name: "Red Hit 400ml", price: 85 },
      { name: "Red Hit 600ml", price: 85 },
      { name: "Mortien Spray 400ml", price: 85 },
      { name: "Maxo Coil 8hr", price: 85 },
      { name: "Maxo Coil 12hr", price: 85 },
      { name: "Maxo Set(Machine + Refill)", price: 85 },
      { name: "Maxo Refill", price: 85 },
      { name: "All Out Set(Machine + Refill)", price: 85 },
      { name: "All Out Refill", price: 85 },
    ]
  },
  {
    name: "HandWash",
    items:[
      { name: "Dettol Combo(Refill + Bottle) Sensitive", price: 50 },
      { name: "Dettol Combo(Refill + Bottle) Original", price: 50 },
      { name: "Dettol Powder Handwash", price: 10 },
      { name: "Dettol Sensitive 750ml", price: 50 },
      { name: "Dettol Skincare750ml", price: 50 },
      { name: "Dettol original 750ml", price: 50 },
      { name: "Santoor Classic 750ml", price: 50 },
      { name: "Lifeboy 750ml", price: 50 },
      { name: "Godrej Magic Powder Handwash Yellow", price: 10 },
      { name: "Godrej Magic Powder Handwash Green", price: 10 },
    ]
  },
  {
    name: "Sanitry Pads",
    items:[
      { name: "Stayfree Regular 6pcs", price: 37 },
      { name: "Stayfree Regular 18pcs", price: 105 },
      { name: "Stayfree XL 6pcs", price: 42 },
      { name: "Stayfree XL 18pcs", price: 120 },
      { name: "Whisper Regular 6pcs", price: 37 },
      { name: "Whisper XL 6pcs", price: 42 },
      { name: "Whisper Ultra 6pcs", price: 50 },
      { name: "Whisper Ultra Aloevera 7pcs", price: 95 },
      { name: "Whisper Ultra Aloevera 14pcs", price: 190 },
      { name: "Whisper Ultra Aloevera 48pcs", price: 500 },
      { name: "Sofy Aloevera XL 6pcs", price: 42 },
      { name: "Sofy Aloevera XL 14pcs", price: 140 },
      { name: "Sofy Aloevera XL+ 15pcs", price: 185 },
    ]
  },
  {
    name: "Diapers",
    items:[
      { name: "Mamy Poko Pants Extra Absorb NB 4pcs", price: 50 },
      { name: "Mamy Poko Pants Extra Absorb NB 8pcs", price: 50 },
      { name: "Mamy Poko Pants S 4pcs", price: 50 },
      { name: "Mamy Poko Pants S 10pcs", price: 50 },
      { name: "Mamy Poko Pants S 38pcs", price: 50 },
      { name: "Mamy Poko Pants M 4pcs", price: 50 },
      { name: "Mamy Poko Pants M 8pcs", price: 50 },
      { name: "Mamy Poko Pants M 30pcs", price: 50 },
      { name: "Mamy Poko Pants L 4pcs", price: 50 },
      { name: "Mamy Poko Pants L 7pcs", price: 50 },
      { name: "Mamy Poko Pants L 28pcs", price: 50 },
      { name: "Mamy Poko Pants XL 4pcs", price: 50 },
      { name: "Mamy Poko Pants XL 6pcs", price: 50 },
      { name: "Mamy Poko Pants XL 22pcs", price: 50 },
      { name: "Babyhug S 10pcs", price: 50 },
      { name: "Babyhug S 42pcs", price: 50 },
      { name: "Babyhug M 16pcs", price: 50 },
      { name: "Babyhug M 16pcs", price: 50 },
      { name: "Babyhug XL 11pcs", price: 50 },
    ]
  },
];

const container = document.getElementById("shop-categories");

function renderCategories(filterText = "") {
  container.innerHTML = "";

  categories.forEach((category, catIdx) => {
    const categoryMatches = category.name.toLowerCase().includes(filterText.toLowerCase());
    const filteredItems = category.items.filter(item =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );
    if (categoryMatches || filteredItems.length > 0) {
      const catDiv = document.createElement("div");
      catDiv.className = "category";
      catDiv.innerHTML = `
        <h2 class="category-header" data-index="${catIdx}">${category.name}</h2>
        <div class="category-items" id="items${catIdx}" style="display: none;"></div>
      `;
      container.appendChild(catDiv);

      const itemsContainer = catDiv.querySelector(`#items${catIdx}`);
      const itemsToShow = categoryMatches ? category.items : filteredItems;

      itemsToShow.forEach((item, idx) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
        itemDiv.innerHTML = `
          <div class="item-content">
            <div class="item-details">
              <h3>${item.name}</h3>
              <p>₹${item.price}</p>
              <input type="number" id="qty${catIdx}_${idx}" min="1" value="1">
              <button onclick="addToCart(${catIdx}, ${idx})">Add to Cart</button>
            </div>
            <img src="${item.image}" alt="${item.name}" class="item-image" onclick="expandImage('${item.image}')">
          </div>
        `;
        itemsContainer.appendChild(itemDiv);
      });
    }
  });
  document.querySelectorAll('.category-header').forEach(header => {
    header.addEventListener('click', () => {
      const index = header.dataset.index;
      const itemsDiv = document.getElementById(`items${index}`);
      const isHidden = itemsDiv.style.display === 'none';
      itemsDiv.style.display = isHidden ? 'block' : 'none';

      if (isHidden) {
        header.classList.add('expanded');
      } else {
        header.classList.remove('expanded');
      }
    });
  });
}
renderCategories();
window.addToCart = (catIdx, itemIdx) => {
  const qty = parseInt(document.getElementById(`qty${catIdx}_${itemIdx}`).value);
  if (qty < 1) return showNotification("Invalid quantity");

  const item = categories[catIdx].items[itemIdx];
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push({ ...item, quantity: qty });
  localStorage.setItem("cart", JSON.stringify(cart));
  showNotification("Item added to cart");
};
window.expandImage = (src) => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = src;
};

document.getElementById("closeModal").onclick = function() {
  document.getElementById("imageModal").style.display = "none";
};

window.onclick = function(event) {
  const modal = document.getElementById("imageModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
document.getElementById("searchBar").addEventListener("input", (e) => {
  renderCategories(e.target.value);
});
function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
  }, 2000);
}
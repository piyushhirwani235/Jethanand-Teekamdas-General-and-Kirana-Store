const categories = [
  {
    name: "Groceries-Atta",
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
      { name: "Tata Namak 1kg", price: 28, image: "images/tatanamak1kg.jpg" },
      { name: "Tata Namak 2kg", price: 55, image: "images/tatanamak2kg.jpg" },
      { name: "Tata Himalayan Rock Salt 1kg", price: 95, image: "images/tatarocksalt1kg.jpg" },
      { name: "Tata Rock Salt 1kg", price: 60, image: "images/tatarocksalt1kg.jpg" },
      { name: "Tata Lite Salt 1kg", price: 50, image: "images/tatalitesalt1kg.jpg" },
      { name: "Tata I Shakti Salt 1kg", price: 10, image: "images/tataishaktisalt1kg.jpg" },
      { name: "Goyal Salt 1kg", price: 10, image: "images/goaylsalt1kg.jpg" },
      { name: "Aashirvaad Salt 1kg", price: 25, image: "images/aashirvaadsalt1kg.jpg" },
      { name: "Rock Salt 1kg", price: 50, image: "images/rocksalt1kg.jpg" },
      { name: "Rock Salt 200g", price: 15, image: "images/rocksalt200g.jpg" },
      { name: "Black Salt 200g", price: 15, image: "images/blacksalt200g.jpg" },
      { name: "Amchur 250g", price: 80, image: "images/amchur250g.jpg" },
      { name: "Sonu Amchur 100g", price: 25, image: "images/sonuamchur100g.jpg" },
      { name: "Annkoot Amchur 100g", price: 40, image: "images/annkootamchur100g.jpg" },
      { name: "Everest Tikhalal 500gm", price: 230, image: "images/everesttikhalal500gm.jpg" },
      { name: "Everest Tikhalal 200gm", price: 110, image: "images/everesttikhalal200gm.jpg" },
      { name: "Everest Dhania 500gm", price: 170, image: "images/everestdhania500gm.jpg" },
      { name: "Everest Dhania 200gm", price: 70, image: "images/everestdhania200gm.jpg" },
      { name: "Everest Haldi 500gm", price: 200, image: "images/everesthaldi500gm.jpg" },
      { name: "Everest Haldi 500gm", price: 85, image: "images/everesthaldi200gm.jpg" },
      { name: "Hatadi Mirch 500gm", price: 120, image: "images/hatadimirch500gm.jpg" },
      { name: "Hatadi Mirch 200gm", price: 50, image: "images/hatadimirch200gm.jpg" },
      { name: "Hatadi Haldi 500gm", price: 125, image: "images/hatadihaldi500gm.jpg" },
      { name: "Hatadi Haldi 200gm", price: 55, image: "images/hatadihaldi200gm.jpg" },
      { name: "Hatadi Dhania 500gm", price: 80, image: "images/hatadidhania500gm.jpg" },
      { name: "Hatadi Dhania 200gm", price: 40, image: "images/hatadidhania200gm.jpg" },
      { name: "Kasuri Methi 100gm", price: 95, image: "images/kasurimethi100gm.jpg" },
      { name: "Kasuri Methi 50gm", price: 55, image: "images/kasurimethi50gm.jpg" },
      { name: "Kasuri Methi 20gm", price: 30, image: "images/kasurimethi20gm.jpg" },
      { name: "Gandhi Aachar Masala 250gm", price: 40, image: "images/gandhiaacharmasala250gm.jpg" },
      { name: "Sabut Garam Masala 100gm", price: 100, image: "images/sabutgarammasala100gm.jpg" },
      { name: "Sambhar Masala 100gm", price: 75, image: "images/sambharmasala100gm.jpg" },
      { name: "Sambhar Masala 50gm", price: 40, image: "images/sambharmasala50gm.jpg" },
      { name: "Pav Bhaji Masala 100gm", price: 85, image: "images/pavbhajimasala100gm.jpg" },
      { name: "Pav Bhaji Masala 50gm", price: 45, image: "images/pavbhajimasala50gm.jpg" },
      { name: "Chicken Masala 100gm", price: 85, image: "images/chickenmasala100gm.jpg" },
      { name: "Chicken Masala 50gm", price: 45, image: "images/chickenmasala50gm.jpg" },
      { name: "Meat Masala 100gm", price: 86, image: "images/meatmasala100gm.jpg" },
      { name: "Meat Masala 50gm", price: 45, image: "images/meatmasala50gm.jpg" },
      { name: "Garam Masala 100gm", price: 90, image: "images/garammasala100gm.jpg" }, 
      { name: "Garam Masala 50gm", price: 50, image: "images/garammasala50gm.jpg" }, 
      { name: "Chat Masala 100gm", price: 75, image: "images/chatmasala100gm.jpg" }, 
      { name: "Chat Masala 50gm", price: 40, image: "images/chatmasala50gm.jpg" }, 
      { name: "Kitchen King Masala 100gm", price: 90, image: "images/kitchenkingmasala100gm.jpg" }, 
      { name: "Kitchen King Masala 50gm", price: 45, image: "images/kitchenkingmasala50gm.jpg" }, 
      { name: "Chole Masala 100gm", price: 83, image: "images/cholemasala100gm.jpg" }, 
      { name: "Chole Masala 50gm", price: 45, image: "images/cholemasala50gm.jpg" }, 
      { name: "Shahi Paneer Masala 100gm", price: 92, image: "images/shahipaneermasala100gm.jpg" }, 
      { name: "Shahi Paneer Masala 50gm", price: 48, image: "images/shahipaneermasala50gm.jpg" }, 
      { name: "Shahi Biryani Masala 100gm", price: 160, image: "images/shahibiryanimasala100gm.jpg" }, 
      { name: "Shahi Biryani Masala 50gm", price: 75, image: "images/shahibiryanimasala50gm.jpg" }, 
      { name: "Rajma Masala 100gm", price: 77, image: "images/rajmamasala100gm.jpg" }, 
      { name: "Rajma Masala 50gm", price: 40, image: "images/rajmamasala50gm.jpg" }, 
      { name: "Kashmiri Lal Mirch 100gm", price: 95, image: "images/kashmirilalmirch100gm.jpg" },
      { name: "Sabji Masala 100gm", price: 65, image: "images/sabjimasala100gm.jpg" }, 
      { name: "Sabji Masala 50gm", price: 35, image: "images/sabjimasala50gm.jpg" }, 
      { name: "Cumin Powder 100gm", price: 95, image: "images/cuminpowder100gm.jpg" }, 
      { name: "Cumin Powder 50gm", price: 50, image: "images/cuminpowder50gm.jpg" }, 
      { name: "Tea Masala 100gm", price: 120, image: "images/teamasala100gm.jpg" },
      { name: "Pani Puri Masala 50gm", price: 38, image: "images/panipurimasala50gm.jpg" }, 
      { name: "Aalo Sabji Masala 50gm", price: 42, image: "images/aalosabjimasala50gm.jpg" }, 
      { name: "Dry ginger(sonth) Powder 50gm", price: 45, image: "images/drygingerpowder50gm.jpg" },
      { name: "Black Pepper Powder 50gm", price: 75, image: "images/blackpepperpowder50gm.jpg" },
      { name: "Jalani Too Good Masala(pack of 10)", price: 50, image: "images/blackpepperpowder50gm.jpg" },
      { name: "Meggi Masala", price: 5, image: "images/meggimasala.jpg" },
      { name: "Pasta Masala", price: 5, image: "images/pastamasala.jpg" },
      { name: "Peri Peri Masala", price: 5, image: "images/periperimasala.jpg" },
      { name: "Fried Rice Masala", price: 10, image: "images/friedricemasala.jpg" },
      { name: "Chouwmien Masala", price: 10, image: "images/chouwmienmasala.jpg" },
      { name: "Veg Manchurian Masala", price: 10, image: "images/vegmanchurianmasala.jpg" },
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
      { name: "Fortune Rozana 1kg", price: 95, image: "images/fortunerozana1kg.jpg" },
      { name: "Fortune Biryani 1kg", price: 140, image: "images/fortunebiryani1kg.jpg" },
      { name: "Fortune Super(offer:1+1) 2kg", price: 199, image: "images/fortunesuper2kg.jpg" },
      { name: "Fortune Mogra 5kg", price: 300, image: "images/fortunemogra5kg.jpg" },
      { name: "Fortune Mini Mogra 10kg", price: 490, image: "images/fortuneminimogra10kg.jpg" },
      { name: "Fortune Mini Mogra II 10kg", price: 450, image: "images/fortuneminimogra2_10kg.jpg" },
      { name: "Fortune Mogra 10kg", price: 590, image: "images/fortunemogra10kg.jpg" },
      { name: "Kohinoor Rozana 1kg", price: 80, image: "images/kohinoorozana1kg.jpg" },
      { name: "Kohinoor Super(offer:1+1) 2kg", price: 199, image: "images/kohinoorsuper2kg.jpg" },
      { name: "Kohinoor Mogra 5kg", price: 290, image: "images/kohinoormogra5kg.jpg" },
      { name: "Kohinoor Mini Mogra 5kg", price: 250, image: "images/kohinoorminimogra5kg.jpg" },
      { name: "Kohinoor Mogra 10kg", price: 580, image: "images/kohinoormogra10kg.jpg" },
      { name: "Kohinoor  Mini Mogra 10kg", price: 480, image: "images/kohinoorminimogra10kg.jpg" },
      { name: "High King(loose) 1kg", price: 100, image: "images/highkingloose1kg.jpg" },
      { name: "High King(packing) 10kg", price: 920, image: "images/highkingpacking10kg.jpg" },
      { name: "Full Grain(loose) 1kg", price: 100, image: "images/fullgrainloose1kg.jpg" },
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
    name: "Bathing-Soaps",
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
    name: "Detergent"
    items: [
  {name: "Henko",price: 200}
  {name: "Surf Excel",price: 220}
  {name: "Wheel",price: 300}
    ]
  }
];

const container = document.getElementById("shop-categories");

function renderCategories(filterText = "") {
  container.innerHTML = "";

  categories.forEach((category, catIdx) => {
    const filteredItems = category.items.filter(item =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filteredItems.length > 0) {
      const catDiv = document.createElement("div");
      catDiv.className = "category";
      catDiv.innerHTML = `
        <h2 class="category-header" data-index="${catIdx}">${category.name}</h2>
        <div class="category-items" id="items${catIdx}" style="display: none;"></div>
      `;
      container.appendChild(catDiv);

      const itemsContainer = catDiv.querySelector(`#items${catIdx}`);
      filteredItems.forEach((item, idx) => {
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
  if (qty < 1) return alert("Invalid quantity");

  const item = categories[catIdx].items[itemIdx];
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push({ ...item, quantity: qty });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
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

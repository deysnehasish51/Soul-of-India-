document.addEventListener("DOMContentLoaded", () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const state = urlParams.get("state");
  
    console.log(`You Have selected: ${state}`);
  
    // Make sure the element exists before modifying it
    const headerElement = document.getElementById("header");
    if (headerElement) {
        headerElement.innerHTML = state;
    }
  
    var festivals;
    if(state == "Karnataka"){

        festivals = {
            data:[
                {
                    image: "assets/img/festivals/vijayadashami.jpg",
                    title: "VIJAYADASHAMI",
                    topic: "KARNATAKA",
                    des: "Vijayadashami, also known as Dussehra, is one of the most important festivals in Karnataka. Celebrated with grand processions, cultural performances, and rituals, the festival marks the victory of good over evil. The city of Mysore is especially known for its royal celebrations, including the Mysore Dasara procession."
                },
                {
                    image: "assets/img/festivals/ugadi.jpg",
                    title: "UGADI",
                    topic: "KARNATAKA",
                    des: "Ugadi marks the New Year for the people of Karnataka and Andhra Pradesh. Celebrated with traditional rituals, Ugadi signifies new beginnings. People clean their houses, prepare traditional sweets like 'obattu,' and visit temples for blessings. It is also a time to reflect on the past year and look forward to the future."
                }
            ]
        };
    } else if(state == "Tamil Nadu"){
    
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/pongal.webp",
                    title: "PONGAL",
                    topic: "TAMIL NADU",
                    des: "Pongal is a four-day harvest festival celebrated with immense enthusiasm in Tamil Nadu. It is dedicated to the Sun God, and people thank nature for the bountiful harvest. The main festivities include cooking 'Pongal,' a special dish made from newly harvested rice, and celebrating with family and friends."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "TAMIL NADU",
                    des: "Diwali, the Festival of Lights, is widely celebrated in Tamil Nadu. It signifies the victory of light over darkness and good over evil. People decorate their homes with oil lamps, burst fireworks, and enjoy a variety of sweets and snacks. It is a time for family gatherings and religious observances."
                }
            ]
        };
    } else if(state == "Kerala"){
    
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/onam.jpg",
                    title: "ONAM",
                    topic: "KERALA",
                    des: "Onam is the most important festival of Kerala, celebrating the homecoming of the mythical King Mahabali. The festival is marked by elaborate feasts (Onam Sadhya), boat races, traditional dance forms like Thiruvathira, and the famous Onam pookalam (floral carpet) decorations."
                },
                {
                    image: "assets/img/festivals/vishu.jpg",
                    title: "VISHU",
                    topic: "KERALA",
                    des: "Vishu marks the Kerala New Year and is celebrated with joy and reverence. People begin the day by arranging a Vishu Kani (a ceremonial display of auspicious items), followed by feasts and fireworks. It is a time of new beginnings and prosperity for Keralites."
                }
            ]
        };
    } else if(state == "Maharashtra"){
    
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/ganesh_chaturthi.webp",
                    title: "GANESH CHATURTHI",
                    topic: "MAHARASHTRA",
                    des: "Ganesh Chaturthi is a grand festival in Maharashtra that celebrates the birth of Lord Ganesha. It involves the installation of Ganesha idols in homes and public spaces, followed by vibrant processions, music, and the immersion of idols in water. The festival is a time for devotion, celebration, and community spirit."
                },
                {
                    image: "assets/img/festivals/gudi_padwa.jpg",
                    title: "GUDI PADWA",
                    topic: "MAHARASHTRA",
                    des: "Gudi Padwa marks the Marathi New Year and is celebrated with zeal. The day starts with hoisting a Gudi (a decorated flag) at homes to symbolize victory and prosperity. The festival also includes wearing new clothes, feasting on traditional dishes, and offering prayers for a prosperous year ahead."
                }
            ]
        };
    } else if(state == "West Bengal"){
    
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/durga_puja.jpg",
                    title: "DURGA PUJA",
                    topic: "WEST BENGAL",
                    des: "Durga Puja is the most important and widely celebrated festival in West Bengal. It honors Goddess Durga’s victory over the buffalo demon Mahishasura. The festival is marked by vibrant processions, artistic idol displays, cultural programs, and elaborate rituals. It is the epitome of Bengali culture and devotion."
                },
                {
                    image: "assets/img/festivals/poila_boishakh.jpg",
                    title: "POILA BOISHAKH",
                    topic: "WEST BENGAL",
                    des: "Poila Boishakh is the Bengali New Year, a time for new beginnings. The day is celebrated with traditional food, wearing new clothes, and visiting friends and family. It marks the start of the agricultural season and is a significant occasion in Bengali households."
                }
            ]
        };
    } else if(state == "Uttar Pradesh"){

        festivals = {
            data:[
                {
                    image: "assets/img/festivals/krishna_janmashtami.jpg",
                    title: "KRISHNA JANMASHTAMI",
                    topic: "UTTAR PRADESH",
                    des: "Krishna Janmashtami celebrates the birth of Lord Krishna. In Uttar Pradesh, especially in Mathura and Vrindavan, this festival is celebrated with grand devotion, with temple processions, devotional songs, dances, and reenactments of Krishna’s childhood miracles."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "UTTAR PRADESH",
                    des: "Diwali, the Festival of Lights, is widely celebrated in Uttar Pradesh, with Ayodhya being the focal point of the celebrations. People illuminate their homes with lamps, burst fireworks, and participate in religious rituals to mark the return of Lord Rama to Ayodhya after his exile."
                }
            ]
        };
    } else if(state == "Rajasthan"){
    
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "RAJASTHAN",
                    des: "In Rajasthan, Diwali is celebrated with great enthusiasm and pomp. The festival signifies the triumph of good over evil, and people celebrate by lighting oil lamps, decorating their homes with rangoli, and indulging in fireworks. The royal cities like Jaipur are known for their spectacular celebrations."
                },
                {
                    image: "assets/img/festivals/teej.jpeg",
                    title: "TEEJ",
                    topic: "RAJASTHAN",
                    des: "Teej is a traditional festival in Rajasthan dedicated to the worship of Goddess Parvati. It is celebrated with much fervor, with women dressing in traditional clothes, applying henna, and fasting for the well-being of their husbands. The festival is marked by dancing, singing, and processions."
                }
            ]
        };
    } else if(state == "Gujarat"){
    
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/navratri.webp",
                    title: "NAVRATRI",
                    topic: "GUJARAT",
                    des: "Navratri is one of the most important festivals in Gujarat, celebrated over nine nights. The festival is marked by fasting, prayers, and the famous Garba and Dandiya dances. The festival culminates in Vijayadashami, when people celebrate the triumph of good over evil."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "GUJARAT",
                    des: "In Gujarat, Diwali is celebrated with a grand family gathering. People clean their homes, decorate with colorful rangolis, and light oil lamps. The day is marked with prayers, the bursting of crackers, and the preparation of traditional sweets like 'farsan' and 'shakarpara.'"
                }
            ]
        };
    } else if(state == "Andhra Pradesh"){
    
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/ugadi.jpg",
                    title: "UGADI",
                    topic: "ANDHRA PRADESH",
                    des: "Ugadi marks the New Year for people of Andhra Pradesh. Celebrated with family gatherings, prayers, and feasts, the festival signifies new beginnings. People prepare traditional dishes and visit temples for blessings. Ugadi is a time of joy, reflection, and renewal."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "ANDHRA PRADESH",
                    des: "Diwali in Andhra Pradesh is celebrated with grandeur, with families lighting oil lamps and bursting crackers. People worship Goddess Lakshmi and Lord Ganesha for prosperity and wealth. The festival brings families together to enjoy delicious sweets and festive meals."
                }
            ]
        };
    } else if(state == "Bihar"){
    
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/chhath.jpg",
                    title: "CHHATH PUJA",
                    topic: "BIHAR",
                    des: "Chhath Puja is one of the most significant festivals in Bihar, dedicated to the Sun God and his wife, Usha. People fast, offer prayers on riverbanks, and worship the Sun God for blessings of health, wealth, and prosperity."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "BIHAR",
                    des: "Diwali is a major festival in Bihar, especially in Patna, where people celebrate with grand processions, bursting of crackers, and lighting oil lamps. It is believed that Lord Rama's return to Ayodhya was celebrated with light, and thus, Biharis also illuminate their homes with diyas."
                }
            ]
        };
    } else if(state == "Punjab"){
    
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/lohri.jpg",
                    title: "LOHRI",
                    topic: "PUNJAB",
                    des: "Lohri is a popular festival in Punjab, marking the end of winter and the arrival of the harvest season. It is celebrated by lighting bonfires, singing traditional songs, and dancing the Bhangra and Gidda. Lohri is a celebration of abundance and community spirit."
                },
                {
                    image: "assets/img/festivals/baisakhi.webp",
                    title: "BAISAKHI",
                    topic: "PUNJAB",
                    des: "Baisakhi marks the beginning of the harvest season and is also significant for Sikhs as it commemorates the formation of the Khalsa in 1699. People celebrate with processions, dancing, and singing. In Punjab, Vaisakhi is also the day for thanking the almighty for a good harvest."
                }
            ]
        };
    } else if(state == "Tamil Nadu"){

        festivals = {
            data:[
                {
                    image: "assets/img/festivals/pongal.jpg",
                    title: "PONGAL",
                    topic: "TAMIL NADU",
                    des: "Pongal is the harvest festival celebrated with enthusiasm in Tamil Nadu. The festival spans four days and is marked by preparing the traditional dish 'Pongal.' It is a time of thanksgiving for the bountiful harvest, with family gatherings, traditional dances, and cultural performances."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "TAMIL NADU",
                    des: "Diwali is widely celebrated in Tamil Nadu with people lighting oil lamps, bursting crackers, and performing prayers for wealth and prosperity. It is celebrated as the victory of light over darkness and good over evil. Traditional sweets like 'adhirasam' are prepared during the festival."
                }
            ]
        };
    }  else if(state == "Odisha"){
    
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/ratha_yatra.jpg",
                    title: "RATH YATRA",
                    topic: "ODISHA",
                    des: "The Rath Yatra in Puri is one of the most famous festivals in Odisha, dedicated to Lord Jagannath. The deities of Lord Jagannath, his brother Balabhadra, and sister Subhadra are taken in grand chariots around the city in a procession that attracts millions of devotees."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "ODISHA",
                    des: "Diwali in Odisha is celebrated with immense fervor, marking the victory of Lord Rama. Odisha’s unique Diwali traditions include the worship of Goddess Lakshmi and Ganesha, and homes are adorned with oil lamps and colorful rangolis."
                }
            ]
        };
    } else if(state == "Madhya Pradesh"){
    
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/khajuraho_dance_festival.jpg",
                    title: "KHAJURAHO DANCE FESTIVAL",
                    topic: "MADHYA PRADESH",
                    des: "The Khajuraho Dance Festival is an annual event in Madhya Pradesh held at the UNESCO World Heritage site of Khajuraho. This cultural festival showcases classical dance forms like Bharatanatyam, Odissi, and Kathak against the backdrop of ancient temples. It celebrates Indian art and culture."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "MADHYA PRADESH",
                    des: "Diwali in Madhya Pradesh is marked with a combination of traditional customs and regional variations. People celebrate with lighting oil lamps, bursting crackers, and preparing sweets. Special rituals are performed in temples dedicated to Lord Rama and Goddess Lakshmi."
                }
            ]
        };
    } else if(state == "Chhattisgarh"){
    
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/tribal_festival.jpg",
                    title: "TRIBAL FESTIVALS",
                    topic: "CHHATTISGARH",
                    des: "Chhattisgarh celebrates various tribal festivals, such as the Bastar Dussehra, which is different from the rest of India. The festival celebrates the worship of the local deities with traditional rituals, dances, and music. It is a unique blend of tribal culture and devotion."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "CHHATTISGARH",
                    des: "In Chhattisgarh, Diwali is celebrated with joy and devotion. People decorate their homes with oil lamps, prepare traditional sweets, and perform rituals to seek the blessings of Goddess Lakshmi. The festival also marks the victory of good over evil."
                }
            ]
        };
    } else if(state == "Haryana"){

        festivals = {
            data:[
                {
                    image: "assets/img/festivals/baisakhi.webp",
                    title: "BAISAKHI",
                    topic: "HARYANA",
                    des: "Baisakhi in Haryana marks the harvest season and is celebrated with much fanfare. It is a time of joy, with people participating in traditional dance forms like Bhangra and Gidda, enjoying seasonal foods, and offering thanks for the successful harvest."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "HARYANA",
                    des: "Diwali in Haryana is celebrated with much enthusiasm, with homes being decorated with oil lamps, rangolis, and colorful lights. People celebrate by performing Lakshmi Puja, bursting crackers, and sharing sweets with friends and family."
                }
            ]
        };
    } else if(state == "Uttarakhand"){
    
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/mahashivaratri.jpg",
                    title: "MAHASHIVARATRI",
                    topic: "UTTARAKHAND",
                    des: "Mahashivaratri is a major Hindu festival in Uttarakhand, celebrated with great devotion. Devotees offer prayers to Lord Shiva, fasting and performing rituals at temples across the state. The festival is marked by night-long vigils and chanting of mantras."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "UTTARAKHAND",
                    des: "In Uttarakhand, Diwali is celebrated with rituals and cultural events, particularly in the cities of Haridwar and Rishikesh. Devotees worship Goddess Lakshmi and light up temples and homes with earthen lamps, creating a magical atmosphere."
                }
            ]
        };
    } else if(state == "Assam"){
    
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/bihu.jpg",
                    title: "BIHU",
                    topic: "ASSAM",
                    des: "Bihu is the most important festival in Assam, marking the Assamese New Year and the harvest season. The festival is celebrated with traditional Bihu dance, music, feasts, and community gatherings. It is a celebration of prosperity and the agricultural cycle."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "ASSAM",
                    des: "In Assam, Diwali is celebrated with lighting oil lamps, bursting crackers, and offering prayers to Goddess Lakshmi for prosperity. Assamese families clean and decorate their homes and celebrate the festival with traditional foods and sweets."
                }
            ]
        };
    } else if(state == "Jammu and Kashmir") {
        festivals = {
            data: [
                {
                    image: "assets/img/festivals/lorhi.jpg",
                    title: "LOHRI",
                    topic: "JAMMU AND KASHMIR",
                    des: "Lohri is celebrated in Jammu and Kashmir to mark the end of winter and the beginning of the harvest season. The festival is observed with traditional bonfires, singing, dancing, and feasting."
                },
                {
                    image: "assets/img/festivals/eid.jpg",
                    title: "EID",
                    topic: "JAMMU AND KASHMIR",
                    des: "Eid al-Fitr is an important religious festival celebrated by Muslims in Jammu and Kashmir. It marks the end of Ramadan, the month of fasting. The festival is marked by prayers, feasts, and giving of Zakat (charity)."
                }
            ]
        };
    } else if(state == "Himachal Pradesh"){
    
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/lohri.jpg",
                    title: "LOHRI",
                    topic: "HIMACHAL PRADESH",
                    des: "Lohri is celebrated in Himachal Pradesh to mark the end of winter and the arrival of the harvest season. People gather around bonfires, sing traditional songs, dance to the beat of drums, and share sweets made from sesame seeds, jaggery, and peanuts."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "HIMACHAL PRADESH",
                    des: "Diwali is celebrated with great zeal in Himachal Pradesh, where homes are decorated with diyas (oil lamps) and rangolis. The celebration includes prayers for prosperity, feasting on traditional sweets, and participating in community events."
                }
            ]
        };
    } else if(state == "Goa"){
    
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/carnival.jpg",
                    title: "CARNIVAL",
                    topic: "GOA",
                    des: "The Goa Carnival is a grand event celebrated with much enthusiasm in the coastal state. It includes vibrant parades, music, dance performances, and feasts, and is a major attraction for both locals and tourists. The festival is a mix of Portuguese influence and local culture."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "GOA",
                    des: "Diwali in Goa is celebrated with fervor, with homes and temples illuminated by thousands of diyas. The celebration includes traditional prayers, the preparation of sweets, and the bursting of crackers. The coastal state adds its unique flair to the festival with beachside celebrations."
                }
            ]
        };
    } else if(state == "Nagaland"){
    
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/hornbill.jpg",
                    title: "HORNBILL FESTIVAL",
                    topic: "NAGALAND",
                    des: "The Hornbill Festival is the most famous festival of Nagaland, held in the first week of December. It celebrates the rich cultural heritage of the state’s indigenous tribes, featuring traditional dances, music, crafts, and local cuisine."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "NAGALAND",
                    des: "In Nagaland, Diwali is celebrated with the lighting of lamps, bursting of crackers, and traditional prayers. The festival is marked with joy and a sense of unity as people come together to celebrate the victory of light over darkness."
                }
            ]
        };
    } else if(state == "Jharkhand"){
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/karma.webp",
                    title: "KARMA",
                    topic: "JHARKHAND",
                    des: "Karma is an important tribal festival in Jharkhand. It marks the beginning of the harvest season and is dedicated to the worship of Karma Devta, the God of forests and agriculture. People celebrate it with folk dances, music, and rituals, especially in rural areas."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "JHARKHAND",
                    des: "Diwali is widely celebrated in Jharkhand. People decorate their homes with lamps and rangolis, perform prayers for prosperity, and enjoy sweets and crackers. The festival marks the victory of light over darkness."
                }
            ]
        };
    }  else if(state == "Telangana"){
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/sankranti.jpeg",
                    title: "SANKRANTI",
                    topic: "TELANGANA",
                    des: "Sankranti is one of the most important festivals in Telangana, marking the harvest season. The festival is celebrated with kite flying, bonfires, traditional dances, and feasts. It is also a time to honor the harvest and give thanks for the abundance."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "TELANGANA",
                    des: "Diwali in Telangana is marked by lighting lamps, bursting crackers, and performing rituals for wealth and prosperity. It is celebrated with family gatherings, where people prepare traditional sweets and offer prayers."
                }
            ]
        };
    } else if(state == "Sikkim"){
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/lhosar.jpg",
                    title: "LHOSAR",
                    topic: "SIKKIM",
                    des: "Lhosar is the Sikkimese New Year, celebrated by the indigenous Bhutia and Lepcha communities. It is marked with religious rituals, cultural performances, traditional feasts, and family gatherings. The festival symbolizes the arrival of a new year and the hope for prosperity."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "SIKKIM",
                    des: "Diwali in Sikkim is celebrated with a blend of local traditions and Hindu rituals. People decorate their homes with oil lamps, burst crackers, and offer prayers to Goddess Lakshmi. It is a time for new beginnings, cleaning homes, and seeking prosperity."
                }
            ]
        };
    }  else if(state == "Meghalaya"){
        festivals = {
            data:[
                {
                    image: "assets/img/festivals/seed_sowing.webp",
                    title: "SEED SOWING FESTIVAL",
                    topic: "MEGHALAYA",
                    des: "The Seed Sowing Festival is a significant festival in Meghalaya that celebrates the agricultural practices of the indigenous Khasi people. It involves rituals for good harvest, traditional dances, and feasting. The festival also highlights the close bond between the people and nature."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "MEGHALAYA",
                    des: "In Meghalaya, Diwali is celebrated with customary rituals, lighting oil lamps, and family reunions. The festival is marked by religious observances and cultural traditions, with many people offering prayers for prosperity and good fortune."
                }
            ]
        };
    } else if(state == "Tripura") {
        festivals = {
            data: [
                {
                    image: "assets/img/festivals/tripura_hill.jpg",
                    title: "TRIPURA HILL FESTIVAL",
                    topic: "TRIPURA",
                    des: "The Tripura Hill Festival celebrates the unique traditions and cultures of the indigenous tribes in the region. The festival includes folk dances, traditional music, and cultural performances."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "TRIPURA",
                    des: "In Tripura, Diwali is celebrated with much enthusiasm by lighting diyas and performing prayers to Goddess Lakshmi for wealth and prosperity. The celebrations include family gatherings and feasts."
                }
            ]
        };
    } else if(state == "Arunachal Pradesh") {
        festivals = {
            data: [
                {
                    image: "assets/img/festivals/solung.webp",
                    title: "SOLUNG FESTIVAL",
                    topic: "ARUNACHAL PRADESH",
                    des: "The Solung Festival of Arunachal Pradesh is celebrated by the Adi tribe to mark the harvest season. The festival involves rituals, animal sacrifices, dances, and feasts, thanking the gods for the harvest."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "ARUNACHAL PRADESH",
                    des: "Diwali is celebrated in Arunachal Pradesh by various communities, including the Hindus, with prayers for wealth and happiness. The festival is marked by lighting diyas and offering prayers to Goddess Lakshmi."
                }
            ]
        };
    } else if(state == "Mizoram") {
        festivals = {
            data: [
                {
                    image: "assets/img/festivals/christmas.jpg",
                    title: "CHRISTMAS",
                    topic: "MIZORAM",
                    des: "Christmas is one of the most celebrated festivals in Mizoram. It is marked with church services, feasts, and social gatherings. The Mizo people decorate their homes with Christmas trees and lights."
                },
                {
                    image: "assets/img/festivals/chapchar.png",
                    title: "CHAPCHAR KUT",
                    topic: "MIZORAM",
                    des: "Chapchar Kut is a harvest festival celebrated by the Mizo people. It involves traditional dances, music, and feasts to mark the end of the bamboo cutting season and the beginning of the harvest."
                }
            ]
        };
    } else if(state == "Andaman and Nicobar Islands") {
        festivals = {
            data: [
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "ANDAMAN AND NICOBAR ISLANDS",
                    des: "Diwali in Andaman and Nicobar Islands is celebrated with much zeal, with families lighting diyas, bursting crackers, and enjoying family meals. The island’s unique cultural mix makes the festival especially vibrant."
                },
                {
                    image: "assets/img/festivals/holi.jpg",
                    title: "HOLI",
                    topic: "ANDAMAN AND NICOBAR ISLANDS",
                    des: "Holi is celebrated with a lot of enthusiasm, with people from various ethnic groups coming together to celebrate with colors, dance, and music, marking the victory of good over evil."
                }
            ]
        };
    } else if(state == "Dadra and Nagar Haveli") {
        festivals = {
            data: [
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "DADRA AND NAGAR HAVELI",
                    des: "Diwali is a major festival in Dadra and Nagar Haveli, with homes lit up with oil lamps and fireworks filling the sky. The community celebrates with prayers to Goddess Lakshmi for prosperity."
                },
                {
                    image: "assets/img/festivals/holi.jpg",
                    title: "HOLI",
                    topic: "DADRA AND NAGAR HAVELI",
                    des: "Holi is celebrated with traditional fervor, marked by dancing, music, and playing with colors. The festival brings together people of all backgrounds to celebrate unity and the arrival of spring."
                }
            ]
        };
    } else if(state == "Delhi") {
        festivals = {
            data: [
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "DELHI",
                    des: "In Delhi, Diwali is celebrated with grandiosity, where the city is lit with lights, homes decorated with rangolis, and fireworks fill the skies. It’s a time for family reunions and feasts."
                },
                {
                    image: "assets/img/festivals/holi.jpg",
                    title: "HOLI",
                    topic: "DELHI",
                    des: "Holi is celebrated with intense enthusiasm, as people throw colored powders, sing songs, and dance in the streets, celebrating the triumph of good over evil."
                }
            ]
        };
    } else if(state == "Ladakh") {
        festivals = {
            data: [
                {
                    image: "assets/img/festivals/lhosar.jpg",
                    title: "LOSAR",
                    topic: "LADAKH",
                    des: "Losar, the Tibetan New Year, is a major festival in Ladakh. The celebration involves prayers, dancing, and feasting, marking the beginning of a new year according to the lunar calendar."
                },
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "LADAKH",
                    des: "In Ladakh, Diwali is celebrated by the Buddhist community with prayers, lighting of butter lamps, and enjoying the festive atmosphere in the monasteries and homes."
                }
            ]
        };
    } else if(state == "Lakshadweep") {
        festivals = {
            data: [
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "LAKSHADWEEP",
                    des: "Diwali in Lakshadweep is celebrated with lights, crackers, and family gatherings. The festive spirit is contagious as families come together to celebrate the festival of lights."
                },
                {
                    image: "assets/img/festivals/eid.jpg",
                    title: "EID",
                    topic: "LAKSHADWEEP",
                    des: "Eid is a time of celebration and unity in Lakshadweep, where the Muslim community comes together for prayers, feasts, and giving charity to those less fortunate."
                }
            ]
        };
    } else if(state == "Puducherry") {
        festivals = {
            data: [
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "PUDUCHERRY",
                    des: "Diwali is a grand celebration in Puducherry, where people light oil lamps, decorate their homes with rangolis, and celebrate with friends and family."
                }
            ]
        };
    } else if(state == "Daman and Diu") {
        festivals = {
            data: [
                {
                    image: "assets/img/festivals/diwali.jpeg",
                    title: "DIWALI",
                    topic: "DAMAN AND DIU",
                    des: "Diwali is celebrated in Daman and Diu with traditional rituals, lighting of lamps, and vibrant festivities. It is a time for family gatherings and feasts, marked by joy and devotion."
                },
                {
                    image: "assets/img/festivals/carnival.jpg",
                    title: "CARNIVAL",
                    topic: "DAMAN AND DIU",
                    des: "The Carnival in Daman and Diu is a lively and colorful celebration, with street parades, dancing, and music. The festival brings together people from all communities for a grand celebration."
                }
            ]
        };
    } else if(state == "Manipur") {
        festivals = {
            data: [
                {
                    image: "assets/img/festivals/yaoshang.jpeg",
                    title: "YAOSHANG",
                    topic: "MANIPUR",
                    des: "Yaoshang, also known as the 'Holi of Manipur,' is a five-day festival celebrated with music, dance, and cultural activities. It combines the vibrant colors of Holi with local traditions, including Thabal Chongba (a traditional Manipuri folk dance)."
                },
                {
                    image: "assets/img/festivals/ningolchakouba.webp",
                    title: "NINGOL CHAKOUBA",
                    topic: "MANIPUR",
                    des: "Ningol Chakouba is a family-oriented festival where married daughters are invited back to their parental homes for a grand feast. It symbolizes familial bonds and showcases the rich cultural traditions of Manipur."
                }
            ]
        };
    }
    
    
   
  
    // Ensure that the 'festivals' data exists and is processed
    const festivalsContainer = document.getElementById("restaurant"); // Ensure 'restaurant' exists
    if (festivalsContainer) {
        for (let i of festivals.data) {
            let card = document.createElement("div");
            card.classList.add("card");
  
            let imgContainer = document.createElement("div");
            imgContainer.classList.add("image-container");
  
            let image = document.createElement("img");
            image.setAttribute("src", i.image);
            imgContainer.appendChild(image);
            card.appendChild(imgContainer);
  
            let container = document.createElement("div");
            container.classList.add("container");
  
            let name = document.createElement("h4");
            name.classList.add("rest-name");
            name.innerText = i.title.toUpperCase();
            container.appendChild(name);
  
            let sname = document.createElement("h4");
            sname.classList.add("rest-name");
            sname.innerText = i.topic.toUpperCase();
            container.appendChild(sname);
  
            let description = document.createElement("h5");
            description.innerText = i.des;
            container.appendChild(description);
  
            card.appendChild(container);
            festivalsContainer.appendChild(card);
        }
    }
  
    // Search functionality
    document.getElementById("search").addEventListener("click", () => {
        let searchInput = document.getElementById("search-input").value.toUpperCase();
        let elements = document.querySelectorAll(".rest-name");
        let cards = document.querySelectorAll(".card");
  
        elements.forEach((element, index) => {
            if (element.innerText.includes(searchInput)) {
                cards[index].classList.remove("hide");
            } else {
                cards[index].classList.add("hide");
            }
        });
    });
  });
  
const notes = [
    {
        id: 1,
        title: "How to Make Maggi at Home",
        details: "Maggi is a popular instant noodle brand that can be easily prepared at home. To make delicious Maggi, follow these steps:\n\n1. Boil 2 cups of water in a pot. You can add a pinch of salt for flavor.\n2. Add the Maggi noodles to the boiling water and let them cook for about 2 minutes, stirring occasionally to prevent sticking.\n3. In a separate pan, heat a teaspoon of oil. Add chopped onions, tomatoes, and green chilies. Sauté them until they are tender and slightly caramelized.\n4. Once the Maggi noodles are cooked, drain the water and add them to the pan with the sautéed vegetables.\n5. Mix the Maggi masala (included in the packet) into the noodles and vegetables. You can adjust the amount of masala as per your taste preference.\n6. Toss everything together and let it cook for an additional 2 minutes, allowing the flavors to meld.\n7. Your homemade Maggi is now ready to be served! You can garnish it with chopped cilantro and a squeeze of lemon juice for added freshness.\n\nEnjoy your homemade Maggi, a quick and satisfying meal that's perfect for any time of the day.",
        date: "2023-08-15"
    },
    {
        id: 2,
        title: "Morning Yoga Routine",
        details: "Starting your day with a yoga routine can set a positive tone for the rest of the day. Here's a simple 20-minute morning yoga routine to get you energized:\n\n1. Begin in a comfortable seated position, close your eyes, and take a few deep breaths to center yourself.\n2. Transition to Cat-Cow pose, moving with your breath for a few rounds.\n3. Move into Downward Facing Dog to stretch and awaken your entire body.\n4. Flow through a few rounds of Sun Salutations to warm up your muscles.\n5. Practice standing poses like Warrior I and Warrior II to build strength and focus.\n6. Move to the mat for seated poses like Seated Forward Fold and Cobbler's Pose to open up your hips and stretch your hamstrings.\n7. End with a brief meditation in Corpse Pose, focusing on your breath and setting intentions for the day.\n\nRemember, consistency is key. Practicing this routine regularly can improve your flexibility, balance, and overall well-being. Have a wonderful day!",
        date: "2023-08-14"
    },
    {
        id: 3,
        title: "Book Recommendations",
        details: "If you're an avid reader, here are three captivating books to consider adding to your reading list:\n\n1. 'The Alchemist' by Paulo Coelho: This philosophical novel follows the journey of a shepherd named Santiago as he seeks his personal legend and discovers the importance of following one's dreams.\n2. 'To Kill a Mockingbird' by Harper Lee: A classic exploration of racial injustice and moral growth, told through the eyes of young Scout Finch in the 1930s South.\n3. 'Sapiens: A Brief History of Humankind' by Yuval Noah Harari: Dive into the fascinating history of our species, from the emergence of Homo sapiens to the modern world's complex societies.\n\nThese books offer diverse perspectives, deep insights, and compelling storytelling that will keep you engaged from start to finish. Happy reading!",
        date: "2023-08-13"
    },
    {
        id: 4,
        title: "Travel Bucket List",
        details: "Exploring new destinations can be a source of inspiration and adventure. Here are a few dream destinations to consider adding to your travel bucket list:\n\n1. Paris, France: Immerse yourself in art, culture, and iconic landmarks like the Eiffel Tower and Louvre Museum.\n2. Tokyo, Japan: Experience a blend of traditional and modern, from historic temples to futuristic technology.\n3. Santorini, Greece: Enjoy stunning sunsets, white-washed buildings, and crystal-clear waters in this beautiful island paradise.\n4. Machu Picchu, Peru: Embark on a journey to the ancient Incan ruins nestled high in the Andes Mountains.\n\nWhile travel may require planning and preparation, the experiences and memories gained are priceless. Research these destinations, save up, and embark on your next adventure when the time is right!",
        date: "2023-08-12"
    },
    {
        id: 5,
        title: "Grocery Shopping",
        details: "Planning your grocery shopping can lead to healthier eating habits and more efficient meal preparation. Here's a list of essential items to consider:\n\n1. Fruits: Apples, bananas, berries, and citrus fruits are great choices for snacking and adding to breakfast.\n2. Vegetables: Stock up on leafy greens, tomatoes, bell peppers, and onions to add color and nutrition to your meals.\n3. Protein: Chicken, lean meats, fish, tofu, and legumes are excellent sources of protein.\n4. Grains: Whole grains like brown rice, quinoa, and whole wheat pasta provide sustained energy.\n5. Dairy: Opt for low-fat milk, Greek yogurt, and cheese for calcium and protein.\n6. Pantry Staples: Don't forget items like olive oil, herbs and spices, canned beans, and whole-grain bread.\n\nCreating a grocery list and sticking to it can help you make healthier choices and reduce food waste. Happy shopping!",
        date: "2023-08-11"
    },
    {
        id: 6,
        title: "Coding Project Ideas",
        details: "Embarking on coding projects can enhance your skills and creativity. Here are a few project ideas to consider:\n\n1. Personal Website: Create a portfolio website to showcase your projects, skills, and resume.\n2. Mobile App: Develop a mobile app that solves a common problem or provides entertainment.\n3. Open-Source Contribution: Contribute to open-source projects on platforms like GitHub to collaborate with the community.\n4. Blog Platform: Build a platform for writing and sharing blog posts on topics you're passionate about.\n5. E-Commerce Website: Create an online store with features like product listings, shopping cart, and secure payments.\n\nThese projects offer valuable learning opportunities and a chance to apply your coding knowledge to real-world applications. Choose a project that aligns with your interests and start coding!",
        date: "2023-08-10"
    },
    {
        id: 7,
        title: "Gardening Tips",
        details: "Maintaining a garden can be a rewarding and therapeutic experience. Here are some gardening tips to help you cultivate healthy plants:\n\n1. Watering: Water your plants early in the morning to minimize evaporation and prevent fungal growth.\n2. Soil Preparation: Use well-draining soil enriched with compost for optimal plant growth.\n3. Sunlight: Place sun-loving plants in areas with ample sunlight and shade-loving plants in shaded spots.\n4. Pruning: Regularly prune dead or yellowing leaves to encourage new growth and improve air circulation.\n5. Fertilizing: Apply balanced fertilizer according to plant needs during the growing season.\n\nGardening requires patience and experimentation. As you tend to your plants, you'll witness the beauty of growth and blooming. Happy gardening!",
        date: "2023-08-09"
    },
    {
        id: 8,
        title: "Fitness Goals",
        details: "Setting and achieving fitness goals can improve your physical health and overall well-being. Consider the following tips to help you stay motivated:\n\n1. Set Specific Goals: Define clear and achievable fitness goals, such as running a certain distance or completing a specific number of push-ups.\n2. Create a Routine: Establish a consistent workout routine that includes cardiovascular exercise, strength training, and flexibility work.\n3. Track Progress: Keep a workout journal or use fitness apps to track your progress and celebrate milestones.\n4. Stay Hydrated: Drink plenty of water before, during, and after your workouts to stay hydrated.\n5. Rest and Recovery: Allow your body to recover with adequate sleep and rest days between intense workouts.\n\nRemember that fitness is a journey, and small steps can lead to significant improvements over time. Stay committed and enjoy the benefits of an active lifestyle!",
        date: "2023-08-08"
    },
    {
        id: 9,
        title: "Language Learning",
        details: "Embarking on a journey to learn a new language can be enriching and rewarding. Here's a language learning plan to help you progress:\n\n1. Start with Basics: Begin with essential phrases, greetings, and vocabulary.\n2. Practice Daily: Dedicate a specific time each day to practice listening, speaking, reading, and writing in the new language.\n3. Use Language Apps: Utilize language learning apps that offer interactive lessons and exercises.\n4. Watch Movies and Shows: Watch movies, TV shows, and videos in the target language to improve listening comprehension.\n5. Join Language Exchange: Connect with native speakers for language exchange to practice speaking and improve fluency.\n6. Read Books and Articles: Gradually progress to reading books, articles, and news in the new language.\n\nLearning a new language takes time and effort, but the ability to communicate in a different tongue opens up new opportunities and perspectives.",
        date: "2023-08-07"
    },
    {
        id: 10,
        title: "Home DIY Projects",
        details: "Engaging in DIY projects can transform your living space and provide a sense of accomplishment. Consider these home improvement ideas:\n\n1. Paint the Living Room: Change the color scheme to create a fresh and inviting atmosphere.\n2. Build a Bookshelf: Construct a custom bookshelf to showcase your book collection and decorative items.\n3. Fix Leaky Faucets: Repair plumbing issues to save water and prevent further damage.\n4. Create a Gallery Wall: Arrange framed photos and artwork for a personalized and creative wall display.\n5. Upgrade Lighting: Install new light fixtures or add decorative lamps to enhance the ambiance.\n\nDIY projects offer the chance to unleash your creativity and enhance your home environment. Start small and gradually tackle more complex projects.",
        date: "2023-08-06"
    },
    {
        id: 11,
        title: "Healthy Snack Ideas",
        details: "Choosing nutritious snacks can support your health goals and provide sustained energy throughout the day. Here are some wholesome snack ideas:\n\n1. Carrot Sticks with Hummus: Enjoy the crunch of fresh carrots paired with protein-rich hummus.\n2. Trail Mix: Create a mix of nuts, seeds, dried fruits, and dark chocolate for a satisfying blend of flavors.\n3. Greek Yogurt with Honey: Combine creamy Greek yogurt with a drizzle of honey and a sprinkle of nuts.\n4. Rice Cakes with Nut Butter: Spread almond or peanut butter on rice cakes for a balanced and tasty snack.\n5. Veggie Slices with Guacamole: Dip sliced cucumbers, bell peppers, and cherry tomatoes in homemade guacamole.\n\nMaking healthy snack choices can contribute to your overall well-being and keep you energized throughout the day.",
        date: "2023-08-05"
    },
    {
        id: 12,
        title: "Bucket List",
        details: "Creating a bucket list allows you to set and achieve meaningful goals. Here are a few bucket list ideas to consider:\n\n1. Skydiving: Experience the thrill of freefalling from an airplane while securely attached to a parachute.\n2. Learn to Play the Piano: Take up piano lessons to master this beautiful musical instrument.\n3. Visit the Great Wall of China: Embark on a journey to explore the breathtaking historical site.\n4. Write a Book: Channel your creativity into writing a novel, memoir, or collection of short stories.\n5. Volunteer Abroad: Make a positive impact by volunteering in a foreign country.\n\nYour bucket list is a reflection of your passions and aspirations. Set aside time to work toward these goals and savor the sense of accomplishment as you check items off your list.",
        date: "2023-08-04"
    }
    // Add more notes here if needed
];


export default notes;
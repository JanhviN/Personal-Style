const chatBox = document.getElementById("chat-box");
const inputField = document.getElementById("user-input");

function sendMessage() {
  const userText = inputField.value.trim();
  if (userText === "") return;

  addMessage(userText, "user");

  setTimeout(() => {
    const botReply = getCustomReply(userText.toLowerCase());
    addMessage(botReply, "bot");
  }, 500);

  inputField.value = "";
}

function addMessage(text, type) {
  const message = document.createElement("div");
  message.classList.add("message", type);
  message.innerText = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getCustomReply(userMessage) {
  const replies = {
    "hi": "Hello gorgeous! 💁‍♀️ Ready to find your perfect look?",
    "hello": "Hey there! 👗 StyleMe is here to glam up your day!",
    "how are you": "Stylishly fabulous! Ready to help you shine! ✨",
    "what is your name": "I’m StyleMe – your personal stylist and fashion BFF 👠",
    "who created you": "I was crafted with love by Janhvi 💖 as her smart fashion assistant.",
    "what can you do": "I can suggest outfits, give beauty tips, and help you slay every look 💃",

    "suggest an outfit": "What’s the occasion? Party, casual, formal, or college vibes? 🧥👖👗",
    "outfit for interview": "Go with a solid-colored blazer, white shirt, fitted trousers, and classic pumps 👩‍💼✨",
    "outfit for college": "Try mom jeans, a tucked-in tee, and white sneakers. Add a tote bag for extra flair 🎒👟",
    "outfit for party": "A sparkly bodycon dress, heels, and clutch will turn heads all night 🔥👠",
    "outfit for casual day": "Pair joggers with a crop hoodie and chunky sneakers for a chill vibe 🧢",
    "outfit for date night": "How about a satin midi dress, delicate necklace, and soft curls? 💘",
    "outfit for brunch": "Floral dress + denim jacket + wedges = perfect brunch look ☕🍳🌸",
    "outfit for wedding": "An embellished lehenga or saree with matching jewelry and clutch 💍🎉",
    "outfit for summer": "Go light! A-line cotton dress, flats, and a straw hat 🌞👒",
    "outfit for winter": "Layer up with a turtle neck, trench coat, and ankle boots 🧣🧥❄️",
    "outfit for gym": "Try high-waisted leggings, sports bra, and a zip hoodie 💪🏋️‍♀️",
    "outfit for airport": "Comfy joggers, oversized sweatshirt, and sliders. Don’t forget sunglasses 😎✈️",
    "outfit for formal event": "Elegant maxi dress, low bun, and pearl accessories 👗🪞",
    "outfit for shopping": "Relaxed fit jeans, graphic tee, and crossbody bag. Easy & cute! 🛍️",
    "outfit for beach": "Breezy kaftan or shorts with tank top and flip-flops 🏖️🩴",
    "outfit for night out": "Go bold! Leather pants, shimmer top, and heels 🎉💃",
    "outfit for photoshoot": "Choose pastel tones or monochrome fits with minimal accessories 📸🌈",

    "i have a party tonight": "Ooh! Try a shimmer dress with heels and statement earrings ✨👠",
    "what should i wear to college": "Go for high-waisted jeans, a cute crop top & sneakers 🎒",
    "help me choose lipstick": "For daytime, go with nude pink 💄. For evening, bold red rocks! 🔥",
    "any haircare tips": "Yes! Use sulfate-free shampoo, oil once a week & avoid heat daily 💇‍♀️",
    "skincare advice": "Drink water, cleanse twice a day, and don’t skip SPF 🌞🧴",

    "how to look taller": "Go for high-waist pants, vertical stripes & heels. Posture matters too! 📏👠",
    "best color for dark skin": "Jewel tones like emerald, royal blue, and mustard are stunning! 💎",
    "how to accessorize": "Layered necklaces, hoops or studs, and a cute sling bag do wonders! 👜",
    "what shoes go with jeans": "White sneakers, ankle boots or casual loafers rock with jeans! 👟",
    "how to style a kurti": "Pair it with leggings or palazzos, jhumkas, and juttis 💫",

    "bye": "Stay stylish! 💋 Catch you later!",
    "thank you": "Always here to style you! 💖",
    "i love you": "Aww, I love you more, fashionista! 💌"
  };

  return replies[userMessage] || "Hmm... I didn’t get that. Try asking me something else! 💬";
}

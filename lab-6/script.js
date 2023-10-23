document.addEventListener('DOMContentLoaded', function () {
  const emojiGallery = document.getElementById('emoji-gallery');

  emoji.forEach((emoji) => {
    const emojiDiv = document.createElement('div');
    emojiDiv.classList.add('emojiBox');

    const emojiSymbol = document.createElement('span');
    emojiSymbol.textContent = emoji.char;
    emojiSymbol.classList.add('emojiSymbol');
    emojiDiv.appendChild(emojiSymbol);

    const emojiName = document.createElement('p');
    emojiName.textContent = emoji.name;
    emojiName.classList.add('emojiName');
    emojiDiv.appendChild(emojiName);

    emojiGallery.appendChild(emojiDiv);
  });
});

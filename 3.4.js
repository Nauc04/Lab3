function findHexColor(text) {
    const match = text.match(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/);
    return match ? match[0] : null;
}

console.log(findHexColor("Це текст із кольором #ABC."));         // 👉 #ABC
console.log(findHexColor("Колір: #A1B2C3"));                      // 👉 #A1B2C3
console.log(findHexColor("Тут немає кольору"));                  // 👉 null
console.log(findHexColor("Неправильний #12G або #12345"));       // 👉 null

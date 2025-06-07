function findDates(text) {
    // Регулярний вираз для пошуку потенційних дат формату РРРР-ММ-ДД
    const regex = /\b(\d{4})-(\d{2})-(\d{2})\b/g;
    let match;
    const validDates = [];

    while ((match = regex.exec(text)) !== null) {
        const [_, year, month, day] = match.map(Number);

        // Створюємо дату
        const date = new Date(year, month - 1, day);

        // Перевіряємо, чи дата дійсно існує (наприклад, 2023-02-30 — неіснуюча)
        if (
            date.getFullYear() === year &&
            date.getMonth() === month - 1 &&
            date.getDate() === day
        ) {
            validDates.push(match[0]);
        }
    }

    return validDates;
}

const sampleText = `
  Деякі дати: 2023-05-17, 2024-02-29, 2024-13-01, 2022-11-31, 2021-07-20.
`;

console.log(findDates(sampleText));
// 👉 Виведе: ["2023-05-17", "2024-02-29", "2021-07-20"]

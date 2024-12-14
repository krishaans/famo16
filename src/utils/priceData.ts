export const generateRandomPriceData = () => {
  const data = [];
  const today = new Date();
  for (let i = 30; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    data.push({
      date: date.toLocaleDateString(),
      price: Math.floor(Math.random() * 300) + 100
    });
  }
  return data;
};
const API_KEY = import.meta.env.VITE_APP_API_KEY;

export async function fetchCrypto(coin) {
  const url = `/api/v1/cryptocurrency/quotes/latest?symbol=${coin}`;
  try {
    const response = await fetch(url, {
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error('Erro na busca...');
    }

    const data = await response.json();
    console.log(data);
    return data.data[coin].quote;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
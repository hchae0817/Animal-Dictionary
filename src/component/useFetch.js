const api = `http://localhost:3001/content`;

function useFetch() {
    const response = fetch(api);
    const data = response.json();
    return data;
}

export default useFetch;
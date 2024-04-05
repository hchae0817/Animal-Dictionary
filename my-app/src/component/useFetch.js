const api = `http://localhost:3001/content`;

function useFetch() {

    const response = fetch(api);
    const data = response.json();
    console.log('my:',data);
    return data;

}

export default useFetch;
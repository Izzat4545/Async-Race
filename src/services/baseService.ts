const BASE_URL = 'http://127.0.0.1:3000/';

export async function fetchData<T>(method: string, relativeUrl: string, body = null, headers: HeadersInit = { 'Content-Type': 'application/json' }): Promise<T> {
 // Combine the base URL with the relative URL
 const url = BASE_URL + relativeUrl;

 // Default options for fetch, explicitly typed with RequestInit
 const options: RequestInit = {
    method: method, // GET, POST, PUT, DELETE
    headers: headers
 };

 // If the method is POST or PUT, include the body in the options
 if (method === 'POST' || method === 'PUT') {
    options.body = JSON.stringify(body);
 }

 // Make the fetch request
 try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response as JSON and cast it to the expected type T
    return await response.json() as T;
 } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error; // Rethrow the error to be handled by the caller
 }
}
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'f759a1ff09msh8f8d1508482b28ap1422edjsnb1c0881102c8',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers,
    })

    const result = await response.json();

    return result;
}
export async function getSearchResults(arg: any = {}){
    const data = [];
    for (let i = 1; i <= 20; i++) {
        data.push({ id: i, data: `data${i}` });
    }

    return data;
}
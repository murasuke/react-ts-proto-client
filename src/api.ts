import axios from "axios";

async function request( path: string, config={} ){
    // const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;
    const response = await axios.get(path, config);
    return response.data;
}

export async function getSearchResults(arg: any = {}){
    return request(`/search?key=${arg.key}`);

    // const data = [];
    // for( let i = 1; i <= 20; i++){
    //     data.push({id: i, data: `data${i}`});
    // }

    // const filteredData = [];
    // for( const item of data){
    //     if( item.data.includes(arg.key)){
    //         filteredData.push(item);
    //     }
    // }

    // return filteredData;
}

export async function postPage1( postData: { [index: string]: string}) {
    const response = await axios.post("page1", postData);
    return response;
}


//TODO: expand this to provide more options for fetching
export const httpGet = async (url, options) => {

    return await new Promise((resolve, reject) => {

        let response = await fetch(url, options);
        let responseOK = response && response.ok;
        debugger;
        if (responseOK) {
           
            resolve(response.json())
        } else {
            reject(response)
        }

    })
}
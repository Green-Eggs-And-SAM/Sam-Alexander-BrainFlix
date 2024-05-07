import axios from 'axios';

class ApiVideoThumnbails {
    constructor(key) {
        this.apiKey = key;
        this.baseUrl = 'https://unit-3-project-api-0a5620414506.herokuapp.com/';
    }
    //get all shows from API
    async getVideos() {
        let targetURL = `${this.baseUrl}videos/?api_key=${this.apiKey}`;
        console.log(targetURL);
        try {
            let response = await axios.get(targetURL);

            // response.data.sort(function (a, b) {
            //     return b.timestamp - a.timestamp;
            // });
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default ApiVideoThumnbails;

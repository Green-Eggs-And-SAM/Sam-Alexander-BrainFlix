import axios from 'axios';

class ApiVideoThumnbails {
    constructor(key) {
        this.apiKey = key;
        this.baseUrl = 'https://unit-3-project-api-0a5620414506.herokuapp.com/';
    }
    //get all shows from API
    async getAllVideos() {
        let targetURL = `${this.baseUrl}videos/?api_key=${this.apiKey}`;
        try {
            let response = await axios.get(targetURL);

            response.data.sort(function (a, b) {
                return b.timestamp - a.timestamp;
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getVideo(id) {
        if (!id) {
            console.log('ERROR NO ID');
            //set to default id
            id = '84e96018-4022-434e-80bf-000ce4cd12b8';
        }

        let targetURL = `${this.baseUrl}videos/${id}?api_key=${this.apiKey}`;
        try {
            let response = await axios.get(targetURL);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default ApiVideoThumnbails;

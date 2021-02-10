import axios from 'axios';

const KEY = 'AIzaSyBNoqfGrXHNjsxULAl-5drdSYkaG7Ibp9w';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});
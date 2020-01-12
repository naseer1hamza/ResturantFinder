import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer JAXW-DgDkxD62qKOxMyg4kbmsVam_bJGspGCOkwatMVwEB_1nnJH5d2gVA4veK-6Nals0ioaZvqtxRcnKgeStHvEv4JtejLvYSnPS1ItDUlY9h5sJb73xKzLp-XWXXYx'
    }
});


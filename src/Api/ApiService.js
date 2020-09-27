import instance from './axios';

const getData=(url)=>{
    return instance.get(url);
}
export default getData;
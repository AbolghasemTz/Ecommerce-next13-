import axios from 'axios';

const app = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials:true
})
// withCredentials:true کوکی از جنس httponly هستن رو همرا رکوست ما فرستاده میشه 

app.interceptors.request.use(
    (res) => res,
    (err) => Promise.reject(err)
);

app.interceptors.response.use(
(res) => res,
async (err) => {
const orginalConfig = err.config;
if(err?.response?.status === 401 && !orginalConfig._retry) {
    orginalConfig._retry = true;

    try {
       const {data} =  await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/refresh-token`, {
        withCredentials: true,
    })
    if(data) return app(orginalConfig)
    } catch (error) {
        return Promise.reject(error)
    }

}
// 401
return Promise.reject(err)
}
)

const http = {
    get: app.get,
    post: app.post,
    delete: app.delete,
    put: app.put,
    patch: app.patch
}

export default http; 
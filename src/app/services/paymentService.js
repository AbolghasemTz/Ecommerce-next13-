import http from "./httpService";

export function ceratedPayment () {
    return http.post("/payment/create").then(({data}) => data.data)

}
import http from "./httpService";

export function ceratedPayment () {
    return http.post("/payment/create").then(({data}) => data.data)

}

export function getAllPayments() {
    return http.get("/admin/payment/list").then(({ data }) => data.data);
  }
  
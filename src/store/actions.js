import axios from 'axios';

export function searchOffersByStatus({ commit }, status) {
    axios.get(`/offers/public/?status=${status}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then(({ data }) => {
            commit('setOffersByStatus', data.offers)
        })
}
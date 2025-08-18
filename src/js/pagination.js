class Pagination {
    constructor({ currentPage = 1, totalPages = 1, containerSelector = 'body' }) {
        this.currentPage = currentPage
        this.totalPages = totalPages
        this container = document.querySelector(containerSelector)

    }
}

export default Pagination

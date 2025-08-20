class Pagination {
    constructor({ 
        currentPage = 1, 
        totalPages = 1,
        containerSelector = 'body' 
        })  {
        this.currentPage = currentPage
        this.totalPages = totalPages
        this container = document.querySelector(containerSelector)

    }

    render() {
        let itemsTemplate
        for(let i = 1; i <= this.totalPages; i += 1)
            const template = `
        <li class="page-item ${i === this.currentPage ? 'active' : ''}">
            <a class="page-link" href="#">${i}</a>
        </li>
        `
        itemsTemplate += template
    }
    console.log(itemsTemplate);
}

export default Pagination

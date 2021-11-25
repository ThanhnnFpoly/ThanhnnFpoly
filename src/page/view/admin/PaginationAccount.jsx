/* eslint-disable jsx-a11y/anchor-is-valid */
function PaginationAccount(props) {
    const { totalUsers, userPerPage, paginate, currentPage } = props;
    const pageNumber = [];


    for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
        pageNumber.push(i);
    }

    const isLastPage = currentPage === pageNumber[pageNumber.length - 1];
    const isFirtPage = currentPage === pageNumber[0];

    const firstPage = pageNumber[0];
    const lastPage = pageNumber[pageNumber.length - 1]

    return (
        <nav aria-label="Page navigation" className="text-center">
            <ul className="pagination">
                <li className={isFirtPage ? "disabled" : ""}>
                    <a style={!isFirtPage ? { cursor: "pointer" } : { cursor: "" }} onClick={() => paginate(firstPage)} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {pageNumber.map((number) => (
                    <li className={number === currentPage ? "active" : ""} key={number}>

                        <a href="javascript:void(0);" style={{ cursor: "pointer" }}
                            onClick={() => paginate(number)}
                            className="page-link mr-2"
                        >
                            {number}
                        </a>
                    </li>

                ))}
                <li className={isLastPage ? "disabled" : ""}>
                    <a onClick={() => paginate(lastPage)} style={!isLastPage ? { cursor: "pointer" } : { cursor: "" }} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>


    );
}

export default PaginationAccount;
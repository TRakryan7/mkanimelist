const Pagination = ({page, lastPage, setPage, setDataAnime}) => {

    const scrollTop = () => {
        scrollTo({
            behavior:'smooth',
            top:0
        })
    }

    const handlerNextPage =() => {
        if(page < lastPage){
            setPage((pervState) => pervState + 1)
            // setDataAnime(null)
            scrollTop()
            
        }
    }

    const handlerPrevPage =() => {
        if(page !== 1){
            setPage((pervState) => pervState - 1)
            scrollTop()
        }
    }

    return ( 
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-primary text-2xl">
            { page <=1 ? null :
                <button onClick={handlerPrevPage} className="transition-all hover:text-accent">PREV</button>
            }
            
            <p>{page} of {lastPage}</p>

            {page >= lastPage ? null :
                <button onClick={handlerNextPage} className="transition-all hover:text-accent">NEXT</button>
            }
        </div>
     );
}
 
export default Pagination;
import { useState } from "react";
import { Pagination } from "../components/styledComponents/Pagination/Pagination.element";
import { FlexDir } from "../components/styledComponents/FlexDir";


export const usePageNumbering = (num) => {
  const [galleryItems, setGalleryItems] = useState([]);
  const itemsPerPage = num || 6;
  const [currentPage, setCurrentPage] = useState(1);


  const currentItems = galleryItems?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil((galleryItems?.length || 0) / itemsPerPage);

  let totalPagesArr = [];

  if (totalPages <= 4) {
    for (let i = 0; i < totalPages; i++) {
      totalPagesArr.push(i);
    }
  } else {
    for (let i = 0; i < 4; i++) {
      totalPagesArr.push(i);
    }
  }


  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const setPage = (pageNum) => {
    if (currentPage != pageNum) {
      setCurrentPage(pageNum);
    }
  };


  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {

    MiniPageNumbering: () => (
      <>
      
          <Pagination
            variant= { currentPage === 1 ? "disabled": "normal"}
            onClick={() => {
              prevPage();
            }}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </Pagination>
          <Pagination
            variant= { currentPage === totalPages ? "disabled": "normal"}
            onClick={() => {
              nextPage();
            }}
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </Pagination>
  
      </>
    ),

    ComponentPageNumbering: () => (
      <>
        <FlexDir width={"100vw"} gap={"2px"} margin={"4px"} height={"40px"}>
          <Pagination
            variant="normal"
            onClick={() => {
              prevPage();
            }}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </Pagination>
          {totalPagesArr.map((page) => (
            <Pagination
            key={page}
              onClick={() => setPage(page + 1)}
              variant={currentPage === page + 1 ? "clicked" : "normal"}
            >
              {page + 1}
            </Pagination>
          ))}
          <Pagination variant="disabled">...</Pagination>
          <Pagination
            onClick={() => setPage(totalPages)}
            variant={currentPage === totalPages ? "clicked" : "normal"}
          >
            {totalPages}
          </Pagination>

          <Pagination
            variant="normal"
            onClick={() => {
              nextPage();
            }}
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </Pagination>
        </FlexDir>
      </>
    ),
    dataPag: currentItems,
    setGalleryItems,
    itemsPerPage,
  };
};
